import CodeIcon from '@/public/icons/code-icon.png';
import CodeIconDark from '@/public/icons/code-icon-dark.png';
import EduIcon from '@/public/icons/edu-icon.png';
import EduIconDark from '@/public/icons/edu-icon-dark.png';
import ProjectIcon from '@/public/icons/project-icon.png';
import ProjectIconDark from '@/public/icons/project-icon-dark.png';
import VsCodeIcon from '@/public/icons/vscode.png';
import GitIcon from '@/public/icons/git.png';
import FirebaseIcon from '@/public/icons/firebase.png';
import MongoDbIcon from '@/public/icons/mongodb.png';
import IoTIcon from '@/public/icons/iot_icon.png';
import WebIcon from '@/public/icons/web-icon.png';
import TechIcon from '@/public/icons/tech_consult_icon.png';
import TechIconDark from '@/public/icons/tech_consult_icon_dark.png';
import CustomProjectIcon from '@/public/icons/custom_project_icon.png';
import AwosImage from '../public/images/awos_image.jpg';
import CatalystXprexImage from '../public/images/catalystxprex.png';
import PingImage from '../public/images/pingtel.png';
import FrStanleyFDNImage from '../public/images/frstanleydfn.png';

export const workData = [
  {
    title: 'Chevron ',
    description: 'AWOS',
    bgImage: AwosImage,
  },
  {
    title: 'Catalyst Xprex',
    description: 'Fullstack ',
    bgImage: CatalystXprexImage,
  },
  {
    title: 'frstanleyfdn.org',
    description: 'Front-end ',
    bgImage: FrStanleyFDNImage,
  },
  {
    title: 'Ping Telecoms',
    description: 'Front-end ',
    bgImage: PingImage,
  },
];

export const infoList = [
  {
    icon: CodeIcon,
    iconDark: CodeIconDark,
    title: 'Languages',
    description: 'TypeScript, React, Next Js, Node Js, Python, Java',
  },
  {
    icon: EduIcon,
    iconDark: EduIconDark,
    title: 'Education',
    description: 'Msc. Information & Communication Technology',
  },
  {
    icon: ProjectIcon,
    iconDark: ProjectIconDark,
    title: 'Projects',
    description: 'Built over 20 projects',
  },
];

export const toolsData = [VsCodeIcon, FirebaseIcon, GitIcon, MongoDbIcon];

export const serviceData = [
  {
    icon: IoTIcon,
    iconDark: '',
    title: 'IoT & Real-Time Data Solutions',
    description:
      'Designing and deploying systems that capture, process, and visualize real-time data for critical operations.',
    link: '',
  },
  {
    icon: WebIcon,
    iconDark: '',
    title: 'Software Development & Web Solutions',
    description:
      'Building modern, user-focused applications that solve industry challenges.',
    link: '',
  },
  {
    icon: TechIcon,
    iconDark: TechIconDark,
    title: 'Technology Consulting & Digital Transformation',
    description:
      'Helping organizations bridge traditional systems with modern software and IoT solutions.',
    link: '',
  },
  {
    icon: CustomProjectIcon,
    iconDark: '',
    title: 'Custom Projects & Innovation',
    description:
      'Partnering to create tailored solutions for unique industrial challenges.',
    link: '',
  },
];
