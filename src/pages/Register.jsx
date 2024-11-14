import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { StepsController } from "multistep-react-form";
import Account from "../components/signupSteps/Account";
import Payment from "../components/signupSteps/Payment";
import Complete from "../components/signupSteps/Complete";
import Information from "../components/signupSteps/Information";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/account/accountSlice";
export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    retypePassword: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    transaction_number: "",
    transaction_id: "",
    amount: "",
  });
  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  const manageNextStep = (currentStep) => {
    if (currentStep === 1) {
      if (!formData.email) {
        toast.warning("You have to enter email.");
        return false;
      } else if (!formData.password) {
        toast.warning("You have to enter password.");
        return false;
      } else if (formData.password !== formData.retypePassword) {
        toast.warning("Passwords don't match.");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.first_name) {
        toast.warning(
          "You have to enter first name. But you can skip Last Name"
        );
        return false;
      } else if (!formData.phone_number) {
        toast.warning("You have to enter phone number.");
        return false;
      } else if (!formData.phone_number) {
        toast.warning("You have to enter phone number.");
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.transaction_number) {
        toast.warning("You have to enter transaction number.");
        return false;
      } else if (!formData.transaction_id) {
        toast.warning("You have to enter transaction ID.");
        return false;
      } else if (!formData.amount) {
        toast.warning("You have to enter amount.");
        return false;
      }
    } else if (currentStep === 4) {
      const accountData = {
        user: {
          email: formData.email,
          password: formData.password,
          first_name: formData.first_name,
          last_name: formData.last_name,
        },
        phone_number: formData.phone_number,
      };
      dispatch(register(accountData)).then((resultAction) => {
        if (register.fulfilled.match(resultAction)) {
          toast.success("Account created successfully");
          navigate("/");
          setFormData({
            email: "",
            password: "",
            retypePassword: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            transaction_number: "",
            transaction_id: "",
            amount: "",
          })
          return true
        }else if (register.rejected.match(resultAction)) {
          toast.error(resultAction.payload);
          return false
        }
      });
    }
    return true;
  };
  const steps = [
    <Account formData={formData} handleChange={handleChange} />,
    <Information formData={formData} handleChange={handleChange} />,
    <Payment formData={formData} handleChange={handleChange} />,
    <Complete formData={formData} handleChange={handleChange} />,
  ];
  return (
    <section className="pt-28 min-h-screen w-full">
      <div className="flex justify-center md:block font-chococooky items-center">
        <StepsController
          title="Register yourself for joining us"
          breakpoint={768}
          manageNextStep={manageNextStep}
          steps={steps}
        />
      </div>
    </section>
  );
}
