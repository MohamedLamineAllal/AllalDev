import LayoutRoute from './index'
import React, { PureComponent } from 'react'

export default function (Layout) {
    return class LayoutRoute_ extends PureComponent { // if needed to be stateless then do it [ may be some rendering problems]
        render() {
            return <LayoutRoute layout={Layout} {...this.props} />;
        }
    }     
}
