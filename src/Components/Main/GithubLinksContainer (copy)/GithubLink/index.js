import React, { PureComponent } from 'react'

import MicrolinkCard from 'react-microlink'

export default class GithubLink extends PureComponent {
  render() {
    const { className, flexClassName, ...rest } = this.props;
    return (
      <div className={className}>
        <MicrolinkCard className={flexClassName}
          { ...rest }
        />
      </div>
    )
  }
}
