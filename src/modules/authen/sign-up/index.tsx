import { useState } from 'react';
import { Authentication, Complete, Register } from './components';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Register nextStep={nextStep} />;
      case 2:
        return <Authentication nextStep={nextStep} />;
      case 3:
        return <Complete />;
      default:
        return <Register nextStep={nextStep} />;
    }
  };

  return <>{renderStep()}</>;
};

export { SignUp };
