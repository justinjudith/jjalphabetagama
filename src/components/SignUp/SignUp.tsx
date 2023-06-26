'use client';
import React, { useState } from 'react';
import TextInput from '@/Components/Shared/Inputs/InputField';
import Button from '@/Components/Shared/Buttons/Button';
import Link from 'next/link';
import BaseURL from '@/utils/BASEURL';
import { ToastError, ToastSuccess, ToastWarning } from '../Shared/Notification';
import LogError from '@/utils/LogError';
import { useRouter } from 'next/navigation';
import Spinner from '@/utils/Spinner';
import { GrMail } from 'react-icons/gr';
import { IoIosContact } from 'react-icons/io';
import PasswordInputField from '../Shared/Inputs/PasswordField';
interface SignUpInputs {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility((visible) => !visible);
  };
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility((visible) => !visible);
  };
  const [inputs, setInputs] = useState<SignUpInputs>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputs.password.toLocaleLowerCase().trim() !==
      inputs?.confirmPassword?.toLocaleLowerCase().trim()
    ) {
      ToastWarning('Password not matched!');
      return;
    }
    setLoading(true);
    const body: SignUpInputs = { ...inputs };
    delete body?.confirmPassword;
    try {
      const response = await fetch(`${BaseURL}api/auth/register`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      });
      let jsonData = await response.json();
      setLoading(false);
      if (response.status === 201) {
        ToastSuccess('SignUp successfully,please LogIn...!');
        router.push('/login');
      }
      if (response.status === 500) {
        ToastError(jsonData.message);
      }
    } catch (error) {
      setLoading(false);
      LogError('Register', error);
      ToastError('Unable to register, try again later!');
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full lg:pt-[8rem] md:pt-[6rem] pt-[4rem] px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full md:max-w-3xl mx-auto h-full flex flex-col items-center justify-center gap-4 md:gap-12 md:px-0 px-4 "
        >
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <p className="font-bold font-catamaran text-2xl text-brand-main">
              Create Account
            </p>
            <p className="font-catamaran font-medium text-[14px] text-white-main">
              Please provide the required information
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="w-full flex flex-col md:flex-row gap-4 ">
              <TextInput
                id="fullName"
                name="fullName"
                type="text"
                title="Full Name:"
                state={inputs.fullName}
                setState={handleInputs}
                disabled={false}
                compulsory={true}
                icon={IoIosContact}
                IconStyle="bottom-[0.8rem]"
              />
              <TextInput
                id="email"
                name="email"
                type="email"
                title="Email Address:"
                state={inputs.email}
                setState={handleInputs}
                disabled={false}
                compulsory={true}
                icon={GrMail}
                IconStyle="bottom-[0.8rem]"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 ">
              <PasswordInputField
                id="password"
                name="password"
                title="Password:"
                state={inputs.password}
                setState={handleInputs}
                disabled={false}
                compulsory={true}
                password={passwordVisibility}
                togglePassword={togglePasswordVisibility}
              />
              <PasswordInputField
                id="confirmPassword"
                name="confirmPassword"
                title="Confirm Password:"
                state={inputs?.confirmPassword || ''}
                setState={handleInputs}
                disabled={false}
                compulsory={true}
                password={confirmPasswordVisibility}
                togglePassword={toggleConfirmPasswordVisibility}
              />
            </div>
          </div>

          <Button
            text={loading ? <Spinner size={25} /> : 'Create'}
            type={loading ? 'button' : 'submit'}
            onclick={() => {}}
          />
          <div className="w-full flex items-center justify-center gap-2">
            <p className="font-catamaran font-medium text-white-main text-[15px]">{`Already have an account?`}</p>
            <Link
              href={'/login'}
              className="font-catamaran font-semibold text-[15px] text-brand-main"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
