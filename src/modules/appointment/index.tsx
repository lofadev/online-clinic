import BannerReprescription from 'assets/svgs/appointment/bnr_prompt_represcription.svg';
import { FieldRadio, FieldSelect, Text, Title } from 'components';
import { useSearchParams } from 'hooks/useQuery';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAppointment } from 'slices/appointment';
import { TAction, TTypeAppointment } from 'slices/appointment/types';
import AppointmentArticle from './components/appointment-article';
import AppointmentBlock from './components/appointment-block';
import Booking from './components/booking';
import BookingTop from './components/booking-top/BookingTop';
import LoadingAppointment from './components/loading';
import { examMenu } from './data';
import { transformDataSelect } from './hook';
import {
  AppoinmentStyled,
  BannerStyled,
  ExamItemStyled,
  ExamMenuStyled,
  ImgStyled,
  NoteStyled,
  TextWrapperStyled,
  TitleHeadStyled,
} from './styled';

interface IFormValues {
  serviceId: number;
  examMethod: TTypeAppointment;
}

const Appointment: React.FC = () => {
  const {
    getSuccess,
    getReservationTimeables,
    params,
    fetchServices,
    services,
    resetTimetables,
    findService,
    getAppointment,
    detail,
    loading,
    setType,
    setAction,
  } = useAppointment();
  const { id } = useParams<{ id: string }>();
  const { action }: { action: TAction } = useSearchParams();
  const options = transformDataSelect(services);
  const methodsServices = useForm<IFormValues>({
    defaultValues: {
      serviceId: 0,
      examMethod: 'FIRST',
    },
  });
  const { t } = useTranslation();
  const { appointment } = translations;

  const { serviceId } = methodsServices.watch();
  const { examMethod } = methodsServices.watch();

  useEffect(() => {
    if (detail && id) {
      methodsServices.setValue('serviceId', detail.service.id);
      methodsServices.setValue('examMethod', detail.appointment_type);
    }
  }, [detail, id]);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (action && action === 'update') {
      setAction(action);
    } else {
      setAction('create');
    }
  }, [action]);

  useEffect(() => {
    if (id) {
      getAppointment(id);
    }
  }, [id]);

  useEffect(() => {
    if (serviceId) {
      findService(serviceId);
      getReservationTimeables({ ...params, serviceId });
    } else {
      resetTimetables();
    }
  }, [serviceId]);

  useEffect(() => {
    setType(examMethod);
  }, [examMethod]);

  return (
    <AppoinmentStyled>
      <AppointmentArticle>
        <AppointmentBlock>
          <TitleHeadStyled fontSize="SIZE_16"> {t(appointment.main.select_item)}</TitleHeadStyled>
          <TextWrapperStyled>
            <Text.Primary fontSize="SIZE_12">{t(appointment.main.multi_note)}</Text.Primary>
            <Text.Primary fontSize="SIZE_12">{t(appointment.main.report_note)}</Text.Primary>
          </TextWrapperStyled>
          <FormProvider {...methodsServices}>
            <FieldSelect name="serviceId" options={options} />

            <NoteStyled level={3} fontSize="SIZE_14">
              {t(appointment.main.menu_note)}
            </NoteStyled>

            <ExamMenuStyled>
              {examMenu.map((item) => (
                <ExamItemStyled key={item.label}>
                  <Text.Primary fontWeight="FW_700">{t(appointment.exam_menu[item.label])} : </Text.Primary>
                  <Text.Primary>{t(appointment.exam_menu[item.detail])}</Text.Primary>
                </ExamItemStyled>
              ))}
            </ExamMenuStyled>

            <FieldRadio
              name="examMethod"
              options={[
                { label: t(appointment.main.first_visit), value: 'FIRST' },
                { label: t(appointment.main.revisit), value: 'RETURN' },
              ]}
            />
            {examMethod === 'RETURN' ? (
              <BannerStyled>
                <ImgStyled src={BannerReprescription} />
              </BannerStyled>
            ) : null}
          </FormProvider>
        </AppointmentBlock>
        <AppointmentBlock className="block-2">
          <Title.Primary fontSize="SIZE_16">{t(appointment.main.select_time)}</Title.Primary>
          {getSuccess ? (
            <>
              <BookingTop />
              <Booking />
            </>
          ) : null}
          {loading ? <LoadingAppointment /> : null}
        </AppointmentBlock>
      </AppointmentArticle>
    </AppoinmentStyled>
  );
};

export default Appointment;
