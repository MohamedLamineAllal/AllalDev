import React, { PureComponent } from 'react'
import TopProfileContainer from './TopProfileContainer'
import TitleContainer from './TitleContainer'
import './Home.scss'
import GithubLinkContainer from './GithubLinksContainer/GithubLinksContainer.container';

import {StickyContainer, Sticky} from 'react-sticky'

import MicrolinkCard from "react-microlink";

export default class Home extends PureComponent {
  render() {
    return <div className="mainHome">
    <StickyContainer>
        <TopProfileContainer />
        <TitleContainer />
        <GithubLinkContainer />
      {/* <MicrolinkCard url="https://popmotion.io/pose/" 
        size='small'
        /> */}
    </StickyContainer>
      </div>;
  }
}
