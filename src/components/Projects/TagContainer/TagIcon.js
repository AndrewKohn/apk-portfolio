import HtmlIcon from '../../../assets/svg/languages/HtmlIcon';
import CssIcon from '../../../assets/svg/languages/CssIcon';
import JavaScriptIcon from '../../../assets/svg/languages/JavaScriptIcon';
import ReactIcon from '../../../assets/svg/languages/ReactIcon';
import NodeJSIcon from '../../../assets/svg/languages/NodeJSIcon';
import MySQLIcon from '../../../assets/svg/languages/MySQLIcon';
import JavaIcon from '../../../assets/svg/languages/JavaIcon';
import PythonIcon from '../../../assets/svg/languages/PythonIcon';
import SassIcon from '../../../assets/svg/languages/SassIcon';
import NpmIcon from '../../../assets/svg/languages/NpmIcon';
import GitIcon from '../../../assets/svg/languages/GitIcon';

import classes from './TagIcon.module.css';
import { Fragment } from 'react';

const TagIcon = props => {
  // if(props.tag.toString() === )
  let TagIcon = '';
  let hasTag = false;

  for (const icon of iconArray) {
    if (props.tag.toString() === icon.name) TagIcon = icon;
  }

  if (TagIcon !== '') hasTag = true;
  else TagIcon = HtmlIcon;

  return (
    <Fragment>
      {hasTag ? (
        <TagIcon class={classes.icon} />
      ) : (
        <TagIcon class={classes.hidden} />
      )}
    </Fragment>
  );
};

const iconArray = [
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  NodeJSIcon,
  MySQLIcon,
  JavaIcon,
  PythonIcon,
  SassIcon,
  NpmIcon,
  GitIcon,
];

export default TagIcon;
