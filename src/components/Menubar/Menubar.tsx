import Image from "next/image";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { links } from "./links";
import Link from "next/link";
import { motion } from "framer-motion";

interface MenubarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menubar(props: MenubarProps) {
  const { open, setOpen } = props;

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className='justify-between gap-10'>
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          {<Logo showLogoText={open} url='#' />}
          <div className='mt-8 flex flex-col gap-2'>
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Aadarsh Srivastava",
              href: "#",
              icon: (
                <Image
                  src='/logo.svg'
                  className='h-7 w-7 flex-shrink-0 rounded-full'
                  width={50}
                  height={50}
                  alt='Avatar'
                />
              )
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

interface LogoProps {
  showLogoText?: boolean;
  url: string;
}

export const Logo = (props: LogoProps) => {
  const { showLogoText, url } = props;
  return (
    <Link
      href={url}
      className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'
    >
      <div className='h-5 w-6 bg-black dark:bg-[#D21312] rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
      {showLogoText && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='font-medium text-black dark:text-white whitespace-pre'
        >
          Acet Labs
        </motion.span>
      )}
    </Link>
  );
};
