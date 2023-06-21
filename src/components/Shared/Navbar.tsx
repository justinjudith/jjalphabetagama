'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
// import component 👇
import Drawer from 'react-modern-drawer';
//import styles 👇
import 'react-modern-drawer/dist/index.css';
import Wrapper from './Wrapper';
import {
  NavLogoData,
  NavButtonData,
  DrawerLinks,
} from '@/Constants/Navigation';
import NavLogo from '../Navbar/NavigationLogo';
import NavButton from '../Navbar/NavButton';
import NavLinks from '../Navbar/NavLinks';
import DrawerLink from '../Navbar/DrawerLink';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';

function Navbar() {
  const { data: session } = useSession();
  //For Side Drawer
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [Show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  });
  return (
    <Fragment>
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        pauseOnHover={false}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
      />
      <Wrapper
        style={`w-full md:h-[80px] h-[70px] md:sticky top-0 z-[500] transition-all duration-1000 ${
          Show && 'md:-top-[100px] overflow-hidden'
        }`}
      >
        <div className="w-full h-full flex justify-between items-center bg-white px-6 py-12 sm:px-4 sm:py-8 md:px-2 md:py-2">
          <div className="flex flex-col justify-center items-center py-6">
            <Image src={'/logo.png'} alt="logo" height={80} width={80} />
            <h1 className="font-bold text-sm">BEGGAR MIDDLE BIGGER</h1>
          </div>
          <div className="md:flex items-center justify-center gap-3 hidden">
            {/* NavLogos */}
            <div className="flex items-center justify-center gap-4">
              {NavLogoData.map(({ image, text, id }: any) => {
                return <NavLogo image={image} text={text} key={id} />;
              })}
            </div>
            {/* NavButtons */}
            <div className="flex items-center justify-center gap-3">
              {/* {NavButtonData.map(({ link, text, id }: any) => {
                return <NavButton link={link} text={text} key={id} style="" />;
              })} */}
              <NavButton link='#team' text={'About Us'} />
              {session ? (
                <button
                  className={`w-full h-full px-5 py-[8px] rounded-[3rem] border font-bold uppercase hover:bg-blue-main hover:text-white`}
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <NavButton link={'/signup'} text={'Sign Up'} />
                  <NavButton link={'/login'} text={'Log In'} />
                </>
              )}
            </div>
          </div>
          <div
            onClick={toggleDrawer}
            className={`text-3xl ${
              isOpen ? 'hidden' : 'flex'
            } flex-end md:hidden`}
          >
            <FaBars />
          </div>
        </div>
        {/* Navbar Links */}
        <NavLinks />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="w-full h-full flex flex-col justify-center items-center gap-4 relative"
        >
          <div className="absolute -top-4 left-0 flex flex-col justify-center items-center py-6">
            <Image src={'/logo.png'} alt="logo" height={80} width={80} />
          </div>
          <div
            className="absolute top-4 right-4 text-3xl text-blue-main"
            onClick={toggleDrawer}
          >
            <ImCross />
          </div>
          {DrawerLinks.map(({ link, text }: any) => {
            return <DrawerLink key={text} link={link} text={text} />;
          })}
        </Drawer>
      </Wrapper>
    </Fragment>
  );
}

export default Navbar;
