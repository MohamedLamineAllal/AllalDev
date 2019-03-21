import React, { PureComponent } from 'react'
import JambertonImagesText from './JambertonImagesText';
import './JambertonImages.css';

export default class JambertonImages extends PureComponent {
    constructor(props) {
        super(props);
        this.containerClassName = "JambertonImages";
        this.backgroundClass = 'JambertonImages_Background'
        this.blackBackClassName = 'JambertonImages_blackBack';
        this.rightLeftContainerClass = "JambertonImagesRightLeft";
        this.style = {};
        if (this.props.height) this.style.height = this.props.height;
    }

    renderChildren() {
        return React.Children.map(this.props.children, function (child) {
            if (child.type === JambertonImagesText) {
                alert("child.type = " + child.type);
                //animation code go here
                // return <Annimate>
                //     child
                // </Annimate>
            }
            return child;
        });
    }


    renderLeft() {
        if (this.props.left) {
            return <div className={`JambertonImagesLeft${this.props.className && this.props.className.left ? ` ${this.props.className.left}` : ''}`} >
                {this.props.left}
            </div>
        }
        return null;
    }

    renderRight() {
        if (this.props.right) {
            return <div className={`JambertonImagesRight${this.props.className && this.props.className.right ? ` ${this.props.className.right}` : ''}`} >
                {this.props.right}
            </div>
        }
        return null;
    }

    renderRightLeft() {
        if (this.props.right || this.props.left) {
            return <div className={`${this.rightLeftContainerClass}${this.props.className && this.props.className.rightLeft ? ` ${this.props.className.rightLeft}` : ''}`}>
               {
                   this.renderLeft()
                }
                {
                   this.renderRight()
                }
           </div>;
        }
        return null;
    }

    render() {
        // this.props.background.props.className = this.backgroundClass;

        return <div className={`${this.containerClassName} ${this.props.className && this.props.className.container ? this.props.className.container : ""}`} style={this.style}>
            {// cloning just to change the props
            this.props.background && React.cloneElement(this.props.background, {
              className: this.backgroundClass
            })
            // this.props.background
            }
            {
                this.props.blackBack && 
                <div className={`${this.blackBackClassName}`} />
            }
            {
                this.renderRightLeft()
            }
            
            {
                this.props.children // here if i need to add anything annimation specific to type then it's better to do that in a separate function look at example renderChildren()
            }
            {/* {
                    this.renderChildren()
                } */}
          </div>;
    }
}
