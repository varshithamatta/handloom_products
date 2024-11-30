import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import AddressForm from './AddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);

  const stepFromQuery = parseInt(querySearch.get("step")) || 2;
  const [activeStep, setActiveStep] = React.useState(stepFromQuery);

  React.useEffect(() => {
    if (!querySearch.has("step") && activeStep === 2) {
      navigate("?step=1", { replace: true });
    }
  }, [navigate, querySearch, activeStep]);

  React.useEffect(() => {
    if (stepFromQuery < 0 || stepFromQuery >= steps.length) {
      navigate("?step=1", { replace: true });
    } else {
      setActiveStep(stepFromQuery);
    }
  }, [stepFromQuery, navigate]);


  const handleBack = () => {
    const prevStep = activeStep - 1;
    if (prevStep >= 0) {
      setActiveStep(prevStep);
      navigate(`?step=${prevStep}`);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <AddressForm />;
      case 2:
        return <OrderSummary />;
      case 3:
        return <div>Payment Component</div>;
      default:
        return <div>Login Component</div>;
    }
  };

  return (
    <div className="px-10 lg:px-20 mt-10">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={index < activeStep}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed – you're finished
          </Typography>
        ) : (
          <>
           
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>
            <div className='mt-10'>{renderStepContent(activeStep)}</div>
          </>
        )}
      </Box>
    </div>
  );
}
