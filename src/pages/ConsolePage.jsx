import React from 'react';
import Header from 'components/Header';
import Fullscreen from 'components/Fullscreen';
import { UserInfoContainer } from 'features/User';
import { CreatorContainer, HistoryContainer } from 'features/Console';
import './style.css';

const ConsolePage = () => {
  return (
    <div className='console-page'>
      <Header>
        <UserInfoContainer />
        <Fullscreen />
      </Header>
      <HistoryContainer />
      <CreatorContainer />
    </div>
  );
};

export default ConsolePage;
