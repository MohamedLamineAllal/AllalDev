import React, { PureComponent } from 'react'
import GithubLink from './GithubLink'

import { connect } from 'react-redux'
import Title from './Title'

import './styles.scss'

class GithubLinkContainer extends PureComponent {
  renderLinkList() {
      return (
        this.props.links.map(function (link, index) {
          console.log('link: ', link.repo);
          return <GithubLink 
            url={link.repo}
            size='small'
            target='_blank'
            className='mainGithubLink'
            key={index}
          />
        })
      )
  }

  render() {
    return (
      <div className="mainGithubLinksContainer">
        <Title />

        {
          this.renderLinkList()
        }
      </div>
    )
  }
}

function mapPropsToState(state) {
  return {
    links: state.mainGithubLinks
  }
}

export default connect(mapPropsToState)(GithubLinkContainer);
