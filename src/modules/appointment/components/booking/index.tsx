import { FieldCheckbox } from 'components';
import ButtonPrimaryWhite from 'components/button/button-white/ButtonPrimaryWhite';
import Modal from 'components/modal';
import history from 'configs/history';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAuth } from 'slices';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { useAppointment } from 'slices/appointment';
import { TAppointmentItem } from 'slices/appointment/types';
import { formatDateToJapanese } from 'utils/date';
import BookingItem from '../booking-item/BookingItem';
import BookingStatus from '../booking-status/BookingStatus';
import Timeline from '../timeline';
import { useTransformData } from './hook';
import {
  BookingRowStyled,
  ButtonHasAuthStyled,
  ButtonStyled,
  ButtonWithoutAuthStyled,
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
  const { authenticated } = useAuth();
  const { timetables, updateItem, item, service } = useAppointment();
  const dataTransform = useTransformData(timetables?.date_list);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();
  const { appointment } = translations;

  const methodsCheckbox = useForm({
    defaultValues: {
      confirm: false,
    },
  });

  const { confirm } = methodsCheckbox.watch();

  const handleCancel = () => setIsOpenModal(false);

  const handleOpenModal = (item: TAppointmentItem) => {
    if (item.status !== 'NONE' && item.status !== 'CLOSE') {
      updateItem(item);
      setIsOpenModal(true);
    }
  };

  const handleRedirectToConfirm = () => {
    history.push('/appointment/confirm');
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
              {t(appointment.booking.medical_confirmation)}
            </ModalTitleStyled>
            <ServiceStyled>{service?.name}</ServiceStyled>
            <DateTimeStyled level={3} fontSize="SIZE_16">
              {formatDateToJapanese(item?.date, 'M月D日（ddd）')} {item?.timeStart} - {item?.timeEnd}
              {t(appointment.booking.start_action)}
            </DateTimeStyled>
            {service?.note && (
              <ModalNoteStyled>
                <ModalNoteTitleStyled> {t(appointment.booking.caution_notice)}</ModalNoteTitleStyled>
                {service?.note.split('・').map((line) => line && <p key={line}>・{line}</p>)}
              </ModalNoteStyled>
            )}
            <FormWrapperStyled>
              <FormProvider {...methodsCheckbox}>
                <FieldCheckbox name="confirm" question="注意事項を確認しました" />
              </FormProvider>
            </FormWrapperStyled>

            {!authenticated ? (
              <ButtonWithoutAuthStyled>
                <TextStyled>{t(appointment.booking.member_prompt1)}</TextStyled>
                <ButtonStyled
                  type="primary"
                  size="small"
                  disabled={!confirm}
                  onClick={() => history.push({ pathname: '/login', state: { pathName: '/appointment' } })}
                >
                  {t(appointment.booking.login_confirm1)}
                </ButtonStyled>
                <TextStyled>{t(appointment.booking.nonmember_prompt2)}</TextStyled>
                <ButtonStyled
                  type="primary"
                  size="small"
                  disabled={!confirm}
                  onClick={() => history.push('/appointment/complete')}
                >
                  {t(appointment.booking.register_confirm)}
                </ButtonStyled>
              </ButtonWithoutAuthStyled>
            ) : (
              <ButtonHasAuthStyled>
                <ButtonPrimaryWhite onClick={handleCancel}>{t(appointment.booking.cancel)}</ButtonPrimaryWhite>
                <ButtonStyled type="primary" size="small" disabled={!confirm} onClick={handleRedirectToConfirm}>
                  {t(appointment.booking.button)}
                </ButtonStyled>
              </ButtonHasAuthStyled>
            )}
          </ModalWrapperStyled>
        </Modal>
      )}
    </div>
  );
};

export default Booking;
