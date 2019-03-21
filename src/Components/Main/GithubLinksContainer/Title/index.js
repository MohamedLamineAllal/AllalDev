import React, { PureComponent } from 'react'

import Waypoint from 'react-waypoint'

import Typist from 'react-typist'

import TitleJamberton from '../../../shared/TitleJamberton'
import './styles.scss'


const TitleTypist = props => (
  <h2
    style={{
      display: "inline-block"
    }}
  >
    <Typist {...props}>
      <span>Here are</span>
      <Typist.Delay ms={300} />
      <Typist.Backspace count={8} />
      <Typist.Delay ms={500} />
      <span>All my Github Projects</span>
      <Typist.Delay ms={300} />
      <span> &hearts;</span>
      <Typist.Delay ms={1000} />
      <Typist.Backspace count={1} />
    </Typist>
  </h2>
);


export default class index extends PureComponent {
  constructor(props) {
    super(props);

    this.state  = {render: false}
  }
  renderTypistTitle() {
    return ;
  }

  render() {
    return (
      <TitleJamberton>
            <Waypoint onEnter={() => {if (!this.state.render)this.setState({render: true})}}/>
            {
              this.state.render && 
              <TitleTypist startDelay={1000} avgTypingDelay={40} stdTypingDelay={20} cursor={{
                  show: true,
                  blink: true,
                  element: '|',
                  // hideWhenDone: true,
                  // hideWhenDoneDelay: 0
              }}/>
            }
      </TitleJamberton>
    )
  }
}
