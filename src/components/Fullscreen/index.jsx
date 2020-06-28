import React from 'react';
import { Compress, Expand } from 'icons';
import IconButton from 'components/IconButton';
import { useFullscreen } from 'rooks';
import { Props } from './props';

const Fullscreen = () => {
  const { isFullscreen, toggle } = useFullscreen();
  const onClick = () => toggle();

  return (
    <IconButton onClick={onClick} icon={isFullscreen ? Compress : Expand} />
  );
};

Fullscreen.propTypes = Props;

export default Fullscreen;
