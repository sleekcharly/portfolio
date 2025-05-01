import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/sleekcharly' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/ukasoanya-charles/',
  },
  { icon: <FaXTwitter />, path: 'https://x.com/sleekcharly' },
];

type SocialType = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialType) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
