import React, { memo } from 'react';
import Menu from 'components/Menu';
import { OverlayProps } from './props';

const Overlay = ({ onClick }) => {
  return (
    <Menu onClick={onClick}>
      <Menu.Item value='send'>Выполнить</Menu.Item>
      <Menu.Item value='copy'>Скопировать</Menu.Item>
      <Menu.Divider />
      <Menu.Item value='remove' isDanger>
        Удалить
      </Menu.Item>
    </Menu>
  );
};

Overlay.propTypes = OverlayProps;
export default memo(Overlay);
