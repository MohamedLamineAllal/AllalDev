import React, { PureComponent } from 'react'
import NavBar from './NavBar';

import './styles.scss';

export default class componentName extends PureComponent {
  render() {
    return (
        <header className=".mainHeader" style={
            {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 2,
                width: '100%'
            }
        }> 
        <NavBar />
      </header>
    )
  }
}
