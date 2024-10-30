import React,{useState} from 'react'
import {StepsController} from 'multistep-react-form';
import Account from './signupSteps/Account';
import Payment from './signupSteps/Payment';
import Complete from './signupSteps/Complete';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
    const handleChange = (e) => {
        
    }
    const manageNextStep = (currentStep) => {
        if (currentStep === 0) {
            console.log(`here you are ${currentStep}`);
            
        }else if (currentStep === 1) {
            console.log(`here you are ${currentStep}`);
                    
        }else if (currentStep === 2) {
            console.log(`here you are ${currentStep}`);
            
        }else if (currentStep === 3) {
            console.log(`here you are ${currentStep}. and your data was send ${formData}`);
        }
        return true;
    }
    const steps = [
        <Account formData={formData} handleChange={handleChange}/>,
        <Payment formData={formData} handleChange={handleChange}/>,
        <Complete formData={formData} handleChange={handleChange}/>
    ]
  return (
    <section className='pt-28 min-h-screen w-full'>
    <div className='flex justify-center md:block'>
    <StepsController
        title="Register yourself for joining us" 
        breakpoint={768}
        manageNextStep={manageNextStep}
        steps={steps}
    />
    </div>
  </section>
  )
}
