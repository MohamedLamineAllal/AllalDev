import React, { PureComponent } from 'react'


export default class CenteredTextJamberton extends PureComponent {
    constructor() {
        super();
        this.style = {
            container : {
                width: '100%',
                height: this.props.height,
                background: this.props.background
            },
            text: 
        }
    }
  render() {
    return (
      <div className={`CenteredTextJamberton${this.props.className? ' ' + this.props.className : ''}`} style={this.style.container}>
        <div className='text'>{this.props.text}</div>
      </div>
    )
  }
}
