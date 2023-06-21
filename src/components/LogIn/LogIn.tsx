'use client';
import React, { useState } from 'react';
import TextInput from '@/Components/Shared/InputField';
import Button from '@/Components/Shared/Buttons/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { ToastSuccess, ToastError } from '../Shared/Notification';
import Spinner from '@/utils/Spinner';
import md5 from 'md5';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const status = await signIn('credentials', {
      redirect: false,
      email: inputs.email,
      password: md5(inputs.password),
      callbackUrl: '/',
    });
    console.log(status);
    setLoading(false);
    if (status?.ok) {
      ToastSuccess;
      ('LogIn successfully...!');
      router.push('/');
    } else {
      ToastError(status?.error);
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-full lg:pt-[8rem] md:pt-[6rem] pt-[4rem] px-6 ">
        <form
          onSubmit={handleSubmit}
          className="w-full md:max-w-3xl mx-auto h-full flex flex-col items-center justify-center gap-4 md:gap-12 md:px-0 px-4 "
        >
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <p className="font-bold font-catamaran text-2xl text-brand-main">
              Login
            </p>
            <p className="font-catamaran font-medium text-[14px] text-white-main">
              Please Login To Continue
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 ">
            <TextInput
              id="email"
              name="email"
              type="email"
              title="Email:"
              state={inputs.email}
              setState={handleInputs}
              disabled={false}
              compulsory={true}
            />
            <TextInput
              id="password"
              name="password"
              type="password"
              title="Password:"
              state={inputs.password}
              setState={handleInputs}
              disabled={false}
              compulsory={true}
            />
          </div>
          <Button
            text={loading ? <Spinner size={25} /> : 'LogIn'}
            type={loading ? 'button' : 'submit'}
            onclick={() => {}}
          />
          <div className="w-full flex items-center justify-center gap-2">
            <p className="font-catamaran font-medium text-white-main text-[15px]">{`Don't have an account?`}</p>
            <Link
              href={'/signup'}
              className="font-catamaran font-semibold text-[15px] text-brand-main"
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
