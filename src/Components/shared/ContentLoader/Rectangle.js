import React, { PureComponent } from 'react'

import ContentLoader from 'react-content-loader'

export default class RectangleLoader extends PureComponent {
  render() {
    return (
            <ContentLoader  height={this.props.height} width={this.props.width} speed={this.props.speed ? this.props.speed : 0.8} primaryColor={this.props.primaryColor ? this.props.primaryColor : '#ddd'} secondaryColor={this.props.secondaryColor ? this.props.secondaryColor : '#fff'}>
                {/* Pure SVG */}
                <rect x="0" y="0" width={this.props.width} height={this.props.height} />
            </ContentLoader>
    )
  }
}
