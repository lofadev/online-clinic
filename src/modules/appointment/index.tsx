import BannerReprescription from 'assets/svgs/appointment/bnr_prompt_represcription.svg';
import { FieldRadio, FieldSelect, Text, Title } from 'components';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAppointment } from 'slices/appointment';
import AppointmentArticle from './components/appointment-article';
import AppointmentBlock from './components/appointment-block';
import Booking from './components/booking';
import BookingTop from './components/booking-top/BookingTop';
import { examMenu } from './data';
import { transformDataSelect } from './hook';
import {
  AppoinmentStyled,
  BannerStyled,
  ExamItemStyled,
  ExamMenuStyled,
  ImgStyled,
  LoadingStyled,
  NoteStyled,
  TextWrapperStyled,
  TitleHeadStyled,
} from './styled';

interface IFormValues {
  serviceId: number;
  examMethod: number;
}

const Appointment: React.FC = () => {
  const {
    getSuccess,
    getReservationTimeables,
    params,
    fetchServices,
    services,
    resetTimetables,
    loading,
    timetables,
    findService,
  } = useAppointment();
  const options = transformDataSelect(services);
  const methodsServices = useForm<IFormValues>({
    defaultValues: {
      serviceId: 0,
      examMethod: 1,
    },
  });

  const { serviceId } = methodsServices.watch();

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (serviceId) {
      findService(serviceId);
      getReservationTimeables({ ...params, serviceId });
    } else {
      resetTimetables();
    }
  }, [serviceId]);

  const { examMethod } = methodsServices.watch();

  return (
    <AppointmentArticle>
      <AppoinmentStyled>
        <AppointmentBlock>
          <TitleHeadStyled fontSize="SIZE_16">1.診療科目を選択</TitleHeadStyled>
          <TextWrapperStyled>
            <Text.Primary fontSize="SIZE_12">
              ※複数の科目の診療をご希望される場合は、1科目のみ選択しご予約ください。
            </Text.Primary>
            <Text.Primary fontSize="SIZE_12">
              問診票および診察時に、一緒に受診したい診療科目名の申告をお願いいたします。
            </Text.Primary>
          </TextWrapperStyled>
          <FormProvider {...methodsServices}>
            <FieldSelect name="serviceId" options={options} />

            <NoteStyled level={3} fontSize="SIZE_14">
              選択した診療科目にて受診するメニューを選択ください
            </NoteStyled>

            <ExamMenuStyled>
              {examMenu.map((item) => (
                <ExamItemStyled key={item.label}>
                  <Text.Primary fontWeight="FW_700">{item.label} :</Text.Primary>
                  <Text.Primary>{item.detail}</Text.Primary>
                </ExamItemStyled>
              ))}
            </ExamMenuStyled>

            <FieldRadio
              name="examMethod"
              options={[
                { label: '初診', value: 1 },
                { label: '再診', value: 2 },
              ]}
            />
            {examMethod === 2 && (
              <BannerStyled>
                <ImgStyled src={BannerReprescription} />
              </BannerStyled>
            )}
          </FormProvider>
        </AppointmentBlock>
        <AppointmentBlock className="block-2">
          <Title.Primary fontSize="SIZE_16">2.診療開始日時を選択</Title.Primary>
          {getSuccess && (
            <>
              <BookingTop />
              <Booking />
            </>
          )}
          {loading && !timetables && <LoadingStyled>Loading...</LoadingStyled>}
        </AppointmentBlock>
      </AppoinmentStyled>
    </AppointmentArticle>
  );
};

export default Appointment;
