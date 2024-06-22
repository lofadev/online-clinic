import { FC, ReactNode } from 'react';

import { AppointmentStyle, ImageStyle, MainContentApp, PictureApp, Step, StepTitle, TitleAppointment } from './style';

export type PropsAppointment = {
  id: number;
  picture: string;
  step: number;
  title: string;
  children: ReactNode;
};

const Appointment: FC<PropsAppointment> = (props) => {
  const { id, picture, step, title, children } = props;
  return (
    <AppointmentStyle key={id}>
      <PictureApp>
        <ImageStyle src={picture} alt="picture" />
      </PictureApp>

      <MainContentApp>
        <StepTitle>
          <Step>STEP {step}</Step>

          <TitleAppointment>{title}</TitleAppointment>
        </StepTitle>

        {children}
      </MainContentApp>
    </AppointmentStyle>
  );
};

export default Appointment;
