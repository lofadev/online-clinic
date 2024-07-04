import { Modal } from 'antd';
import { FieldCheckbox } from 'components';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useAppointment } from 'slices/appointment';
import { TAppointmentItem } from 'slices/appointment/types';
import { formatDateToJapanese } from 'utils/date';
import BookingItem from '../booking-item/BookingItem';
import BookingStatus from '../booking-status/BookingStatus';
import Timeline from '../timeline';
import { useTransformData } from './hook';
import {
  BookingRowStyled,
  ButtonStyled,
  DateTimeStyled,
  FormWrapperStyled,
  ModalNoteStyled,
  ModalNoteTitleStyled,
  ModalTitleStyled,
  ModalWrapperStyled,
  ServiceStyled,
  TextStyled,
} from './styled';

const Booking = () => {
  const { timetables, updateItem, item, service } = useAppointment();
  const dataTransform = useTransformData(timetables?.date_list);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const history = useHistory();

  const methodsCheckbox = useForm({
    defaultValues: {
      confirm: false,
    },
  });

  const handleCancel = () => setIsOpenModal(false);

  const handleOpenModal = (item: TAppointmentItem) => {
    if (item.status !== 'NONE' && item.status !== 'CLOSE') {
      updateItem(item);
      setIsOpenModal(true);
    }
  };

  return (
    <div>
      {!!dataTransform &&
        dataTransform.map((item) => {
          return (
            <BookingRowStyled key={item.timeline.time}>
              <BookingItem>
                <Timeline time={item.timeline.sessionOfTheDay} hasEvenTimeline={item.timeline.hasEvenTimeline}>
                  {item.timeline.time}
                </Timeline>
              </BookingItem>
              {item.values.map((value) => (
                <BookingItem key={value.id} onClick={() => handleOpenModal(value)}>
                  <BookingStatus status={value.status} />
                </BookingItem>
              ))}
            </BookingRowStyled>
          );
        })}
      {item && (
        <Modal open={isOpenModal} footer={null} onCancel={handleCancel}>
          <ModalWrapperStyled>
            <ModalTitleStyled level={2} fontSize="SIZE_20">
              診療項目・日時確認
            </ModalTitleStyled>
            <ServiceStyled>{service?.name}</ServiceStyled>
            <DateTimeStyled level={3} fontSize="SIZE_16">
              {formatDateToJapanese(item?.date, 'M月D日（ddd）')} {item?.timeStart} - {item?.timeEnd} 開始
            </DateTimeStyled>
            {service?.note && (
              <ModalNoteStyled>
                <ModalNoteTitleStyled>注意事項</ModalNoteTitleStyled>
                {service?.note.split('・').map((line) => line && <p key={line}>・{line}</p>)}
              </ModalNoteStyled>
            )}
            <FormWrapperStyled>
              <FormProvider {...methodsCheckbox}>
                <FieldCheckbox name="confirm" question="注意事項を確認しました" />
              </FormProvider>
            </FormWrapperStyled>

            <TextStyled>▼ DMM会員登録をしている方 ▼</TextStyled>
            <ButtonStyled
              type="primary"
              size="small"
              disabled={!methodsCheckbox.watch('confirm')}
              onClick={() => history.push('/appointment/confirm')}
            >
              ログインして日時確定する
            </ButtonStyled>
            <TextStyled>▼ DMM会員登録をしていない方 ▼</TextStyled>
            <ButtonStyled
              type="primary"
              size="small"
              disabled={!methodsCheckbox.watch('confirm')}
              onClick={() => history.push('/appointment/complete')}
            >
              会員登録して日時確定する
            </ButtonStyled>
          </ModalWrapperStyled>
        </Modal>
      )}
    </div>
  );
};

export default Booking;
