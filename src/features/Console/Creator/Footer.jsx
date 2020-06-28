import React, { memo } from 'react';
import Footer from 'components/Footer';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import GitHubLink from 'components/GitHubLink';
import { Format } from 'icons';

import { FooterProps } from './props';

const ConsoleFooter = ({ isFetching, isDisabled, onFormat }) => {
  return (
    <Footer>
      <Button type='submit' disabled={isDisabled} loading={isFetching}>
        Отправить
      </Button>
      <GitHubLink />
      <IconButton onClick={onFormat} icon={Format}>
        Форматировать
      </IconButton>
    </Footer>
  );
};

ConsoleFooter.propTypes = FooterProps;

export default memo(ConsoleFooter);
