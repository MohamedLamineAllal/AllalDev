// that not a hoc, that's create the el, not return a component.
//work both with tags name as Components classes [tag name should be string]
import React, { PureComponent } from "react";
import { register } from "../../../serviceWorker";


//next step add multiple method for centering [each one and it's function]
//make sur the parent is relative
export function center(Component, props, children) {
  let style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0
  };

  if (props && props.style) {
    style = { ...props.style, ...style };
  }

  if (children) {
    return <Component style={style}>{children}</Component>;
  }

  return <Component style={style} {...props} />;
}


export function centerHoc(Component ) {
  let style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0
  };

  return class CentredComonent extends PureComponent {
    render() {
      const {style: propsStyle, ...restProps} = this.props;
      if (this.props.style) {
        style = { ...propsStyle, ...style };
      }
  
      if (this.props.children) {
        return <Component style={style} {...restProps}>{this.props.children}</Component>;
      }
  
      return <Component style={style} {...restProps} />;
    }
  }
}