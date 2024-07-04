import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { MainStyled, TitleStyled, TitleSlider, SliderStyled, ActiveSlider, Circle } from './styled';

interface IStep {
  title: string;
  key: number;
  widthActive: string;
}

interface ISliderRegisterProps {
  currentStep: number;
}
const SliderRegister: React.FC<ISliderRegisterProps> = ({ currentStep }) => {
  const { t } = useTranslation();
  const { signUp } = translations;

  const steps: IStep[] = [
    { title: t(signUp.resgiter), key: 1, widthActive: '17%' },
    { title: t(signUp.authentication), key: 2, widthActive: '53%' },
    { title: t(signUp.complete), key: 3, widthActive: '88%' },
  ];

  const currentStepData = steps.find((step) => step.key === currentStep);

  return (
    <MainStyled>
      <TitleStyled>
        {steps.map((step) => (
          <TitleSlider key={step.key} active={step.key === currentStep}>
            {step.title}
          </TitleSlider>
        ))}
      </TitleStyled>
      <SliderStyled>
        <ActiveSlider widthActive={currentStepData?.widthActive || '17%'}>
          <Circle />
        </ActiveSlider>
      </SliderStyled>
    </MainStyled>
  );
};

export default SliderRegister;
