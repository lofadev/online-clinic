import { FC, ReactNode } from 'react';

import { useTranslation } from 'react-i18next';
import { AppointmentStyle, ImageStyle, MainContentApp, PictureApp, Step, StepTitle, TitleAppointment } from './styled';

export type PropsAppointment = {
  id: number;
  picture: string;
  step: number;
  title: string;
  children: ReactNode;
};

const Appointment: FC<PropsAppointment> = (props) => {
  const { id, picture, step, title, children } = props;
  const { t } = useTranslation();

  return (
    <AppointmentStyle key={id}>
      <PictureApp>
        <ImageStyle src={picture} alt="picture" />
      </PictureApp>

      <MainContentApp>
        <StepTitle>
          <Step>STEP {step}</Step>

          <TitleAppointment>{t(title)}</TitleAppointment>
        </StepTitle>

        {children}
      </MainContentApp>
    </AppointmentStyle>
  );
};

export default Appointment;
