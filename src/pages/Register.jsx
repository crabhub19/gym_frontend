import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  const [retypePassword, setRetypePassword] = useState(true);
  const [first_name, setFirstName] = useState(true);
  const [phone_number, setPhoneNumber] = useState(true);
  const [transaction_number, setTransactionNumber] = useState(true);
  const [transaction_id, setTransactionId] = useState(true);
  const [amount, setAmount] = useState(true);
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
        setEmail(false);
        toast.warning("You have to enter email.");
        return false;
      } else if (!formData.password) {
        setPassword(false);
        setEmail(true);
        toast.warning("You have to enter password.");
        return false;
      } else if (formData.password !== formData.retypePassword) {
        setRetypePassword(false);
        setEmail(true);
        setPassword(true);
        toast.warning("Passwords don't match.");
        return false;
      }
      setRetypePassword(true);
      setEmail(true);
      setPassword(true);
    } else if (currentStep === 2) {
      if (!formData.first_name) {
        setFirstName(false);
        toast.warning(
          "You have to enter first name. But you can skip Last Name"
        );
        return false;
      } else if (!formData.phone_number) {
        setPhoneNumber(false);
        setFirstName(true);
        toast.warning("You have to enter phone number.");
        return false;
      }
      setFirstName(true);
      setPhoneNumber(true);
    } else if (currentStep === 3) {
      if (!formData.transaction_number) {
        setTransactionNumber(false);
        toast.warning("You have to enter transaction number.");
        return false;
      } else if (!formData.transaction_id) {
        setTransactionId(false);
        setTransactionNumber(true);
        toast.warning("You have to enter transaction ID.");
        return false;
      } else if (!formData.amount) {
        setTransactionId(true);
        setAmount(false);
        toast.warning("You have to enter amount.");
        return false;
      }
      setAmount(true);
      setTransactionNumber(true)
      setTransactionId(true)
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
          toast.success("we have sent you a varification email");
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
          toast.error("something went wrong");
          return false
        }
      });
    }
    return true;
  };
  const steps = [
    <Account email={email} password={password} retypePassword={retypePassword} formData={formData} handleChange={handleChange} />,
    <Information first_name={first_name} phone_number={phone_number} formData={formData} handleChange={handleChange} />,
    <Payment transaction_number={transaction_number} transaction_id={transaction_id} amount={amount} formData={formData} handleChange={handleChange} />,
    <Complete formData={formData} handleChange={handleChange} />,
  ];
  return (
    <section className="pt-28 min-h-screen w-full pb-2">
      <div className="flex justify-center md:block font-chococooky items-center">
        <StepsController
          title="Register yourself for joining us"
          breakpoint={768}
          manageNextStep={manageNextStep}
          steps={steps}
        />
      </div>
      <div className="flex items-center justify-center group mt-4 md:mt-0">
                  <span className="border-b w-1/5 md:w-1/4 group-hover:border-theme"></span>
                  <Link to="/login" className="text-xs hover:text-theme uppercase">
                    If you already have an account
                  </Link>
                  <span className="border-b w-1/5 md:w-1/4 group-hover:border-theme"></span>
                </div>
    </section>
  );
}
