'use client';

import { BiLogoTelegram } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { useTranslation } from '@/hooks/useTranslation';

import ContactButtons from '@/app/contacts/ContactButtons';
import LaptopScene from '@/app/contacts/LaptopSceneClient';
import LinkButton from '@/app/contacts/LinkButton';

const ContactsPage = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 left-1/3 hidden min-[997px]:block -z-10">
        <LaptopScene />
      </div>
      <div className="relative z-5 flex flex-col justify-center p-2 sm:p-8 w-full min-[997px]:w-2/5 min-h-screen">
        <div className="text-gray-900 font-bold text-[32px] sm:text-[48px] w-full text-left max-[996px]:text-center">
          {t.contacts.title}
        </div>
        <div className="text-muted-foreground text-[18px] sm:text-[24px] w-full text-left mt-[-10px] max-[996px]:text-center">
          {t.contacts.subtitle}
        </div>
        <ContactButtons>
          <LinkButton
            href={'https://t.me/kovdm1try'}
            text={t.contacts.telegram}
            icon={<BiLogoTelegram />}
            bgColor={'blue-500'}
          />
          <LinkButton
            href={'https://github.com/kovdm1try'}
            text={t.contacts.github}
            icon={<FaGithub />}
            bgColor={'gray-900'}
          />
          <LinkButton
            href={'mailto:kovd1mitry@yandex.ru'}
            text={'kovd1mitry@yandex.ru'}
            icon={<IoIosMail />}
            bgColor={'[#FC3F1D]'}
          />
          <LinkButton
            href={'https://www.linkedin.com/in/dmitry-kovtunov-9a3b11381/'}
            text={t.contacts.linkedin}
            icon={<FaLinkedin />}
            bgColor={'blue-600'}
          />
        </ContactButtons>
      </div>
    </div>
  );
};

export default ContactsPage;
