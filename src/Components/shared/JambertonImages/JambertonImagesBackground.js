import React, { PureComponent, cloneElement } from 'react'

export default class JambertonImagesBackground extends PureComponent {
    constructor() {
        super();

        this.containerClass = 'JambertonImages_background';
        this.imgBackClass = 'JambertonImages_background_img';
    }
  render() {
    let style = {};
    if (this.props.filter) {
        style.filter = this.props.filter;
    }

    return <div className={this.containerClass} style={style}>
        {
            this.props.backgroundImg &&
            cloneElement(this.props.backgroundImg, {
                className: this.imgBackClass
            })
        }
        {
            this.props.children
        }
      </div>;
  }
}
