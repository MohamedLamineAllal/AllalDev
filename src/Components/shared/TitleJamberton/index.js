import React, { PureComponent } from "react";

import { center } from "./../Styles/styledElements";

export default class index extends PureComponent {
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...this.props.containerStyle
        }}
      > 
        <div
          style={{
            //default and can be overided
            background: "#ededed none repeat scroll 0% 0%",
            width: "70%",
            height: "80px",
            // border: '1px solid #d8d8d8',
            color: "gray",
            // marginBottom: "30px",
            borderTop: "1px solid #e1e2ff",
            borderBottom: "1px solid #e1e2ff",
            ...(this.props.style ? this.props.style.container : null),
            position: "relative" // can't be overided
          }}
        >
          {center(
            "div",
            {
              ...this.props.textDivProps
            },
            this.props.children
          )}
        </div>
      </div>
    );
  }
}
