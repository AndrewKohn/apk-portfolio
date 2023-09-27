// Not for display on the website

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
//   altText: 'exampleTitle',
//   title: 'exampleTitle',
//   description: 'exampleText',
//   tags: [],
//   gitHubPath: '',
//   liveSitePath: '',
//   moreInfo: {
//     purpose: ['purposeText'],
//     functionality: ['functionalityText'],
//     challenge: ['challengeText'],
//   },
// };

const ARCHIVED_PROJECTS_DATA = [
  {
    id: 5,
    image: projectImage5,
    altText: 'My Coding Tracker App',
    title: 'My Coding Tracker',
    description:
      'A timer to count the amount of time spent actively coding. It logs the time spent onto a .txt file in an easy-to-read format.',
    tags: [JavaIcon],
    gitHubPath: 'https://github.com/AndrewKohn/MyCodingTracker',
    liveSitePath: '',
    moreInfo: {
      purpose: [
        'This was one of my first projects that was to create a log that visually shows the amount time spent in each session of coding & programming.',
      ],
      functionality: [
        'Creates a new .txt file if one is not present.',
        'Shows the count of how many sessions happened and allows the user to make a note of what they worked on that session.',
      ],
      challenge: [
        'This was one of the first few projects where I wanted to build something on my own.',
        'I had to find a way to generate a UI frame with labels and inputs.',
        'I was introduced with the try/catch statements that helped with manipulating the strings and writing to the .txt file.',
        'I learned how to export to a .jar so the program can be used outside of an IDE.',
      ],
    },
  },
];

export default ARCHIVED_PROJECTS_DATA;
