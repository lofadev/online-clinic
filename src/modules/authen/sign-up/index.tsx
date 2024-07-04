import { useState } from 'react';
import { Authentication, Register } from './components';

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
        return <Authentication />;
      default:
        return <Register nextStep={nextStep} />;
    }
  };

  return <>{renderStep()}</>;
};

export { SignUp };
