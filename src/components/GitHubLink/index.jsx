import React, { useLayoutEffect, useState } from 'react';
import { Text } from 'components/Typography';
import { Props } from './props';
import './style.css';

const GitHubLink = () => {
  /* NON PRODUCTION CODE */
  const [isDarkTheme, setDarkTheme] = useState(false);
  const link = 'https://github.com/FlaritV/tstforsnds';
  const themeName = 'dark-theme';

  useLayoutEffect(() => {
    const node = document.querySelector('body');
    if (isDarkTheme) {
      node.classList.add(themeName);
    } else {
      node.classList.remove(themeName);
    }
  }, [isDarkTheme]);

  return (
    <a onMouseEnter={() => setDarkTheme(!isDarkTheme)} href={link}>
      <Text type='mute'>@FlaritV/tstforsnds</Text>
    </a>
  );
};

GitHubLink.propTypes = Props;

export default GitHubLink;
