'use client';
import { useState } from 'react';
import Wrapper from '@/Components/Shared/Wrapper';
import Image from 'next/image';
import InputField from './InputFiled';
import ContactInfoBox from './ContactInfoBox';
import BASEURL from '@/utils/BASEURL';
import LogError from '@/utils/LogError';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdFax, MdLocationOn } from 'react-icons/md';
import { TiMail } from 'react-icons/ti';
import { IoIosContact } from 'react-icons/io';
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from '@/Components/Shared/Notification';
import Spinner from '@/utils/Spinner';

interface ContactInputs {
  email: string;
  name: string;
  address: string;
  message: string;
}
interface ContactProps {
  fetchedContactData: any;
}

function ContactUs({ fetchedContactData }: any) {
  // console.log(fetchedContactData);
  const { address, phoneNumber, fax, email } = fetchedContactData;
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ContactInputs>({
    email: '',
    name: '',
    address: '',
    message: '',
  });
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      ToastWarning('Invalid email format');
      return;
    }
    setLoading(true);
    const body: ContactInputs = { ...inputs };
    try {
      const response = await fetch(`${BASEURL}api/contactus/contact`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      });
      console.log(response);
      let jsonData = await response.json();
      setLoading(false);
      if (response.status === 200) {
        setInputs({ email: '', name: '', address: '', message: '' });
        ToastSuccess(jsonData.message);
      }
      if (response.status === 400) {
        ToastError(jsonData.message);
      }
      if (response.status === 500) {
        ToastError(jsonData.message);
      }
    } catch (error) {
      setLoading(false);
      LogError('[ContactUS]', error);
      ToastError('Unable to Contact Us Now, try again later!');
    }
  };
  return (
    <Wrapper id="contactus" style="w-full h-full p-5 overflow-hidden">
      <div className="grid md:grid-cols-2 mx-6 lg:mx-0">
        <div className="w-full h-full p-6">
          <div className="w-full h-full relative">
            <Image src="/Hero.png" alt="" fill className="object-contain" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 p-5 py-7 sm:p-6 md:p-8 lg:p-12 shadow-black shadow-md rounded-lg"
        >
          <h1 className="text-center text-3xl font-bold">Contact Us</h1>
          <div className="w-full h-full flex flex-col md:flex-row gap-4">
            <InputField
              type="text"
              name="email"
              id="email"
              title="Email"
              placeholder="Email"
              state={inputs.email}
              setState={handleInputs}
              compulsory={true}
              disabled={false}
              icon={TiMail}
            />
            <InputField
              type="text"
              name="name"
              id="name"
              title="Name"
              placeholder="Name"
              state={inputs.name}
              setState={handleInputs}
              compulsory={true}
              disabled={false}
              icon={IoIosContact}
            />
          </div>
          <InputField
            type="text"
            name="address"
            id="address"
            title="Address"
            placeholder="Address"
            state={inputs.address}
            setState={handleInputs}
            compulsory={true}
            disabled={false}
            icon={MdLocationOn}
          />
          <div className="w-full flex flex-col gap-2 justify-start">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter your message"
              name="message"
              id="message"
              className="font-[500] text-[16px] border bg-gray-50 px-2.5 h-28 rounded-lg"
              required={true}
              value={inputs.message}
              onChange={handleTextArea}
            />
          </div>

          <button
            type={loading ? 'button' : 'submit'}
            className="bg-blue-main text-white font-bold text-[16px] rounded-lg px-4 py-3  focus:outline-none"
          >
            {loading ? <Spinner size={15} /> : 'Submit'}
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-4 mt-10 justify-center">
        {/* {contactInfo.map(({ id, icon, title, about }: any) => {
          return (
            <> */}
        <ContactInfoBox
          icon={MdLocationOn}
          title={'OUR MAIN OFFICE'}
          about={address}
        />
        <ContactInfoBox
          icon={BsFillTelephoneFill}
          title={'PHONE NUMBER'}
          about={phoneNumber}
        />
        <ContactInfoBox icon={MdFax} title={'FAX'} about={fax} />
        <ContactInfoBox icon={GrMail} title={'EMAIL'} about={email} />
        {/* </> */}
        {/* // <ContactInfoBox */}
        {/* //   key={id}
            //   icon={icon}
            //   title={title}
            //   about={about}
            //   id={id}
            // /> */}
        {/* );
        })} */}
      </div>
    </Wrapper>
  );
}

export default ContactUs;
