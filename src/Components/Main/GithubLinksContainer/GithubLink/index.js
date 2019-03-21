import React, { PureComponent } from 'react'

// import MicrolinkCard from 'react-microlink'

import MediaCard from '../../../shared/MediaCard'

export default class GithubLink extends PureComponent {
  render() {
    const { className, cardClassName, ...rest } = this.props;
    return (
      <div className={className} onClick={() => { window.location.href=rest.url; }}>
        <MediaCard
            className={cardClassName}
            {
              ...rest
            }
        />
      </div>
    )
  }
}

// export default class GithubLink extends PureComponent {
//   render() {
//     const { className, flexClassName, ...rest } = this.props;
//     return (
//       <div className={className}>
//         <MicrolinkCard className={flexClassName}
//           { ...rest }
//         />
//       </div>
//     )
//   }
// }
