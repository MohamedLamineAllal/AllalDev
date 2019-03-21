import React, { PureComponent } from 'react'
import Profile from './Profile'
import './styles.scss'

export default class TopProfileComponent extends PureComponent {
  render() {
    return (
      <div style={
        {
          width: '100%',
          height: '500px',
          // background: '#6b6bff',
          position: 'relative',
          // marginTop: '10px'
        }
      }
        className="mainProfileContainer"
      > 
        <Profile email="allalmohamedlamine@gmail.com"/>*
      </div>
    )
  }
}
