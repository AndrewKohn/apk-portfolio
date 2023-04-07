import HtmlIcon from '../assets/svg/languages/HtmlIcon';
import CssIcon from '../assets/svg/languages/CssIcon';
import JavaScriptIcon from '../assets/svg/languages/JavaScriptIcon';
import TypeScriptIcon from '../assets/svg/languages/TypeScriptIcon';
import ReactIcon from '../assets/svg/languages/ReactIcon';
import JavaIcon from '../assets/svg/languages/JavaIcon';
import PythonIcon from '../assets/svg/languages/PythonIcon';
import NodeJSIcon from '../assets/svg/languages/NodeJSIcon';
import SassIcon from '../assets/svg/languages/SassIcon';
import GitIcon from '../assets/svg/languages/GitIcon';
import MySQLIcon from '../assets/svg/languages/MySQLIcon';
import TailwindIcon from '../assets/svg/languages/TailwindIcon';

// Project Images
import projectImage1 from '../assets/img/payroll-sorter-image.webp';
import projectImage2 from '../assets/img/pdf-word-converter-image.webp';
import projectImage3 from '../assets/img/mh-weakener-bot-image.webp';
import projectImage4 from '../assets/img/mgh-menu-image.webp';
import projectImage5 from '../assets/img/my-coding-tracker-image.webp';
// import projectImage6 from '../assets/img/';
import projectImagePlaceholder from '../assets/img/ex-img.png';

// EXAMPLE DATA
// {
//   id: 5,
//   image: projectImagePlaceholder,
//   altText: 'title',
//   title: 'title',
//   description: '',
//   tags: [],
//   gitHubPath: '',
//   liveSitePath: '',
// },

const PROJECTS_DATA = [
  {
    id: 0,
    image: projectImagePlaceholder,
    altText: 'MGH Daily Schedule',
    title: 'MGH Daily Schedule',
    description:
      'Shows night/day shift daily schedules as well as the monthly schedule.  Information is gathered through a MySQL DB and allowed users can post and/or update both daily and monthly schedules.',
    tags: [
      JavaScriptIcon,
      TypeScriptIcon,
      ReactIcon,
      SassIcon,
      NodeJSIcon,
      MySQLIcon,
    ],
    gitHubPath: 'https://github.com/AndrewKohn/mgh-daily-schedule',
    liveSitePath: '',
  },
  {
    id: 1,
    image: projectImage1,
    altText: 'Payroll Report Sorter App',
    title: 'Payroll Report Sorter',
    description:
      "A personal program to sort staff's time-clocks in payroll reports between multiple facilities.",
    tags: [JavaIcon],
    gitHubPath: 'https://github.com/AndrewKohn/PayrollReportSorter',
    liveSitePath: '',
  },

  {
    id: 2,
    image: projectImage3,
    altText: 'Monster Hunter Discord Bot',
    title: 'MH Weakener Bot',
    description:
      "A discord bot that shows a brief overview of a monster's location, resistances, and weaknesses and any special conditions, if any.  Allows user and friends to be on the same page and to quickly optimize for a fight.",
    tags: [JavaScriptIcon, NodeJSIcon],
    gitHubPath: 'https://github.com/AndrewKohn/mh-weakener-discord-bot',
    liveSitePath: 'https://discord.com/invite/S5kHXjZfjJ',
  },
  {
    id: 3,
    image: projectImage2,
    altText: 'PDF to Word Converter App',
    title: 'PDF/Word Converter',
    description:
      'Simple program that converts pdf <-> docx while maintaining proper formatting.  Used to help with my work involving editing .pdf files from time-to-time.',
    tags: [JavaIcon],
    gitHubPath: 'https://github.com/AndrewKohn/PDFWordConverter',
    liveSitePath: '',
  },
  {
    id: 4,
    image: projectImage4,
    altText: 'Morning Glory Homes menu site',
    title: 'MGH Menu',
    description: 'This project allows the user to view/submit weekly menus.',
    tags: [HtmlIcon, CssIcon, JavaScriptIcon],
    gitHubPath: 'https://github.com/AndrewKohn/MGH-menu',
    liveSitePath: 'https://mghmenu.netlify.app/',
  },
  {
    id: 5,
    image: projectImage5,
    altText: 'My Coding Tracker App',
    title: 'My Coding Tracker',
    description:
      "Simple timer to count the amount of time spent actively coding. This timer should not be spent on solely browsing videos, podcasts, books, & etc even if they're related.",
    tags: [JavaIcon],
    gitHubPath: 'https://github.com/AndrewKohn/MyCodingTracker',
    liveSitePath: '',
  },
];

export default PROJECTS_DATA;
