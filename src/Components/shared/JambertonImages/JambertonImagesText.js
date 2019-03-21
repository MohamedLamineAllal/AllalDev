import React, { PureComponent } from 'react'

export default class JambertonImagesText extends PureComponent {
    constructor() {
        super();

        this.class = 'JambertonImagesText'
    }
    render() {
        const Tag = this.props.tag ? this.props.tag : 'p';
        return <Tag className={`JambertonImagesText${this.props.className ? ` ${this.props.className}` : ""}`} style={{ zIndex: 3 }}>
            {this.props.children}
          </Tag>;
    }
}
