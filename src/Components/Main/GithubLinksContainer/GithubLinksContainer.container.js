import React, { PureComponent } from "react";
import GithubLink from "./GithubLink";
import { StickyContainer, Sticky } from "react-sticky";

import { connect } from "react-redux";
import Title from "./Title";

import { center } from "./../../shared/Styles/styledElements";
import { centerHoc } from "./../../shared/Styles/styledElements";

import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import Waypoint from "react-waypoint";

import {
  minimize,
  expand
} from "./../../../actions/Main/GithubLinks/githubMascot";

import posed from "react-pose";

import octoCatImg from './Octocat.png'

import "./styles.scss";

//here go the posed elements (one with animaiton [here the mascot, and ...])

const MascotTitleConatiner = posed.div({
  minimized: { height: "50px" },
  expanded: { height: "300px" }
});

const Mascot = posed.div({
  expanded: {
    left: "50%",
    height: "100%",
    transform: "translate(-50%, -50%)"
  },
  minimized: {
    left: "90%",
    height: "120%",
    transform: "translate(-80%, -50%)"
  }
});

const CenteredMascot = centerHoc(
  Mascot //,
  // {
  //   style: {
  //     height: "100%",
  //     width: "50%"
  //   }
  // },
  // <img
  //   src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
  //   alt="github logo"
  //   style={{
  //     objectFit: "contain",
  //     width: "100%",
  //     height: "100%"
  //   }}
  // />
);

const TitleAndMascotContainer = posed.div({
  minimized: {
    top: "50px",
    left: '8%',
    // left: "50%",
    width: '80%',
    height: '200px',
    // opacity: 0
  },
  expanded: {
    top: 0,
    height: 'auto',
    width: '100%',
    left: 0
    // left: 0,
    // opacity: 1
  }
});


function pushMulti(arr, el, times) {
  for (let i = 0; i < times; i++) {
    arr.push(el);
  }
  return arr;
}


class GithubLinkContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.onTitleOut = this.onTitleOut.bind(this);
    this.onTitleIn = this.onTitleIn.bind(this);
  }

  onTitleOut() {
    // console.log('>onTitleout')
    this.props.dispatch(minimize());
    setTimeout(() => {
      window.scrollBy(0, 20);
    }, 50);
  }

  onTitleIn() {
    // console.log(">onTitleIn");

    this.props.dispatch(expand());
    setTimeout(() => {
      window.scrollBy(0, 20);
    }, 50);
  }
  
  renderOneMediaCard(link, key) {
    console.log("link: ", link.repo);
    return (
      // <Flip>
      <GithubLink
        url={link.repo}
        media={link.media}
        title={link.title}
        description={link.description}
        //size='small'
        target="_blank"
        className="mainGithubLink"
        key={key}
        // height={125} // default 125px
        width="70%"
        style={{
          container: {
            marginBottom: "50px",
            background: "#ededed",
            width: "60%"
          },
          title: {
            color: "rgb(87, 92, 141)"
          },
          description: {}
        }}
        bottomBar={
          <a
            href={link.repo}
            style={{
              paddingLeft: "20px",
              fontSize: "12px",
              color: "#5d648c"
            }}
          >
            {link.repo}
          </a>
        }
      />
      // </Flip>
    );
  }

  renderLinkList() {
    return this.props.links.length > 0
      ? this.props.links.map(this.renderOneMediaCard)
      : pushMulti([], {}, 6).map(this.renderOneMediaCard);
  }

  render() {
    return (
      <div className="mainGithubLinksContainer">
        {/* <StickyContainer> */}
          {/* <Sticky>
            {({ style }) => { */}
              {/* // alert('state = ' + JSON.stringify(this.props.githubMascotMinimize)); */}

              {/* return ( */}
                
                <TitleAndMascotContainer
                  style={{
                    background: "#e0e0e0",
                    paddingTop: "100px",
                    zIndex: 5,
                    position: (this.props.githubMascotMinimize? 'fixed': 'relative'),
                    height: (this.props.githubMascotMinimize ? '250px' : '500px'),
                    // paddingBottom: '20px',
            left: (this.props.githubMascotMinimize ? '8.3333%' : '0'),
            top: (this.props.githubMascotMinimize ? '10px' : '0'),
            // height: (this.props.githubMascotMinimize ? '250px' : '500px'),

                    overflow: "hidden",
                    // ...style
                  }}
                  // pose={this.props.githubMascotMinimize? 'minimized': 'expanded'}
                >
                  <MascotTitleConatiner
                    style={{
                      width: "100%",
                      height: "300px",
                      position: "relative",
                      zInedx: 2
                      // overflow: 'hidden'
                    }}
                    pose={
                      this.props.githubMascotMinimize ? "minimized" : "expanded"
                    }
                  >
                    {/* <div
                  style={{
                    width: "100%",
                    height: "300px",
                    position: "relative",
                    zInedx: 2
                  }}
                > */}
                    <CenteredMascot
                      pose={
                        this.props.githubMascotMinimize
                          ? "minimized"
                          : "expanded"
                      }
                      style={{
                        height: "100%",
                        width: "50%"
                      }}
                    >
                      <img
                        src={octoCatImg}
                        alt="github logo"
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%"
                        }}
                      />
                    </CenteredMascot>

                    {/* </div> */}
                  </MascotTitleConatiner>

                  <Title
                    style={{
                      zIndex: 0
                    }}
                  />
                </TitleAndMascotContainer>
              {/* ); */}
            {/* }} */}
          {/* </Sticky> */}

          {/* <StickyContainer> */}
            <div
              style={{
                paddingTop: "50px",
                position: "relatlive",
                zIndex: 0
              }}
            >
              <Zoom
                style={{
                  zIndex: "0",
                  position: "relative"
                }}
              >
                {this.renderLinkList()}
              </Zoom>
              <div style={{
                height: '200px'
              }}></div>
            </div>
          {/* </StickyContainer> */}
        {/* </StickyContainer> */}
      </div>
    );
  }
}

function mapPropsToState(state) {
  return {
    links: state.mainGithubLinks,
    githubMascotMinimize: state.mainGithubMascotMinimize
  };
}

export default connect(mapPropsToState)(GithubLinkContainer);
