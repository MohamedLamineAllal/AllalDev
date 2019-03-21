// Functionality to add
/*
size = large, small, extra small, medium, extra larg
orientation: vertical, horizontal (default)
*/

import React, { PureComponent, Fragment } from "react";
import { List } from "react-content-loader";

import LinesEllipsis from "react-lines-ellipsis";

import RectangleContentLoader from "./../ContentLoader/Rectangle";

import './styles.scss';

const ContentDataLoader = List;

export default class MediaCard extends PureComponent {
  constructor(props) {
    super(props);
    this.mediaWidth = 30; // percent
    this.mediaCommonStyle = {
      // this is for img and video and maybe other format tags
      width: "100%",
      height: "100%",
      objectFit: "cover"
    };
    
    this.height = 125; // default height and the media width by default will be the same
    
    if (this.props.style && this.props.style.container && this.props.style.container.height) {
        this.height = parseInt(this.props.style.container.height); // note you don't need to replace px , 'parseInt will take only the number. see the doc!'
    }
      
    if (this.props.height) {
          this.height = this.props.height; //
    }

    this.mediaWidth = this.height;

    if (this.props.mediaWidth) {
        this.mediaWidth = this.props.mediaWidth;
    }

    this.containerWidth = '80%';

    if (this.props.style && this.props.style.container && this.props.style.container.width) {
        this.containerWidth = this.props.style.container.width;
    }
    
    if (this.props.width) {
        this.containerWidth = this.props.width;
    }


    this.titleTag = 'h2';
    if (this.props.titleTag) {
      this.titleTag = this.props.titleTag;
    }



    this.sizing = {
      // a refacotring is awaiting (all sizing and styling things go here [the default, then they can be overiding by direct styling through props or css])
      extraSmall: {},
      small: {},
      medium: {},
      large: {},
      extraLarge: {}
    };
  }
  renderMedia() {
    switch (this.props.media.type) {
      case "img":
        return (
          <img
            src={this.props.media.src}
            alt={this.props.media.alt}
            style={{
              ...this.mediaCommonStyle
              // you can overide here
            }}
          />
        );
      case "video":
        return (
          <video
            src={this.props.media.src}
            alt={this.props.media.alt}
            style={{
              ...this.mediaCommonStyle
            }}
          />
        );
      default:
        break;
    }
  }

  renderMediaWithLoader() {
    if (!this.props.media) {
      return <RectangleContentLoader width={this.mediaWidth} height={this.height} />;
    } else {
      return this.renderMedia();
    }
  }

  renderContentDataLoader() {
    console.dir(<ContentDataLoader />);
    return <div style={
      {
        padding: '20px',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }
    }>
        <ContentDataLoader style={{
          width: '100%',
          hieght: '100%',
          overflow: 'hidden'
        }} width={'100%'} height={this.height - 30} speed={0.7} />;
    </div>
  }

  render() {
    const TitleTag = this.titleTag;

    return (
      <div
        style={{
          display: "flex",
          height: `${this.height}px`,
          width: this.containerWidth,
          textDecoration: "none",
          background: "white",
          border: "solid 1px #ccc",
          overflow: 'hidden',
          cursor: 'pointer',
          ...(this.props.style ? this.props.style.container : null)
        }}
        href={this.props.url}
        target={this.props.target}
        className={`mediaCard`}
      >
        {/* Media */}
        <div 
          style={{
            height: `${this.height}px`,
            width: `${this.mediaWidth}px`,
            minWidth: `${this.mediaWidth}px`,
            background: "#e7e7e7",
            ...(this.props.style ? this.props.style.imgContainer : null)
          }}
          className='mediaContainer'
        >
          {this.renderMediaWithLoader()}
        </div>

        {/* Text and data */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          className="dataContainer"
        >
          {!this.props.title && this.renderContentDataLoader()}
          {this.props.title && (
            <Fragment>
              {/* title */}
              <TitleTag
                className="title"
                style={
                  { 
                    display: 'flex',
                    paddingTop: '20px',
                    paddingBottom: '5px',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    color: '#321',
                    // fontFamily: 'Ralway',
                    fontWeight: 'bold',
                    // background: '#f2f2f2',
                    // paddingBottom: '15px',
                    paddingLeft: '20px',
                    // borderBottom: '1px solid #dadde0',
                    textDecoration: 'none',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    fontSize: '16px',
                    ...(this.props.style ? this.props.style.title : null)
                  }
                }
              >
                {this.props.title}
              </TitleTag>
              {/* Description */}
              <div
                className="description"
                style={{
                  // height: '50px',
                  overflow: 'hidden',
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "14px",
                  color: 'black',
                  ...(this.props.style && this.props.style.descriptionContainer
                    ? this.props.style.descriptionContainer
                    : null)
                }}
              >
                <LinesEllipsis 
                  text={this.props.description}
                  maxLine='2'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
              </div>
              {/* Bottom Bar */}
              {this.props.bottomBar && (
                <div
                  className="bottomBar"
                  style={{
                    height: '50px',
                    ...(this.props.style
                      ? this.props.style.bottomBar
                      : null)
                  }}
                >
                  {this.props.bottomBar}
                </div>
              )}
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
