import React, {PureComponent} from 'react'

import TextTransition from 'react-text-transition'

export default class Transi extends PureComponent {
    constructor(props) {
      super(props)
      this.state = { active: 0 };

      this.interval = 3000;
      if (this.props.interval) {
        this.interval = this.props.interval;
      }
    }

  componentDidMount() {
    setInterval(() => {
      this.setState({ active: this.state.active + 1 });
    }, this.interval);
  }

  render() {
    return (
      <h1>
        <TextTransition
          text={this.props.texts[this.state.active % this.props.texts.length]}
          spring={this.props.presets}
        />
      </h1>
    );
  }
}