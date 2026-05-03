import { BiLogoTelegram } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import LaptopScene from '@/app/contacts/LaptopSceneClient';
import LinkButton from '@/app/contacts/LinkButton';

const ContactsPage = () => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="flex flex-col items-center justify-center p-8">
        <div className="text-gray-900 font-bold text-[32px] sm:text-[48px] w-full text-left">Связаться со мной</div>
        <div className="text-muted-foreground text-[18px] sm:text-[24px] w-full text-left mt-[-10px]">
          Открыт к сотрудничеству
        </div>
        <div className="w-full h-fit mt-10 flex flex-col gap-6">
          <LinkButton
            href={'https://t.me/kovdm1try'}
            text={'Написать в Telegram'}
            icon={<BiLogoTelegram />}
            bgColor={'blue-500'}
          />
          <LinkButton
            href={'https://github.com/kovdm1try'}
            text={'Перейти на GitHub'}
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
            text={'Перейти на LinkedIn'}
            icon={<FaLinkedin />}
            bgColor={'blue-600'}
          />
        </div>
      </div>
      <div className="flex-1 hidden md:flex">
        <LaptopScene />
      </div>
    </div>
  );
};

export default ContactsPage;
