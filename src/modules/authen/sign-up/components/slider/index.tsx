import React from 'react';
import { MainStyled, TitleStyled, TitleSlider, SliderStyled, ActiveSlider, Circle } from './styled';

interface IStep {
  title: string;
  key: number;
  widthActive: string;
}

interface ISliderRegisterProps {
  currentStep: number;
}

const steps: IStep[] = [
  { title: '1.登録', key: 1, widthActive: '17%' },
  { title: '2.認証コード入力', key: 2, widthActive: '53%' },
  { title: '3.完了', key: 3, widthActive: '88%' },
];

const SliderRegister: React.FC<ISliderRegisterProps> = ({ currentStep }) => {
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
