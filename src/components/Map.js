// import styled from 'styled-components'
import ReactMapGL from 'react-map-gl';
import React, { Component } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {

  state = {
    viewport: {
      width: this.props.width,
      height: this.props.height - 160,
      latitude: 55.32,
      longitude: 51.57,
      zoom: 5
    }
  }

  wrapper = React.createRef()

  render() {
    console.log(this.props);

    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...this.state.viewport}
        mapStyle="mapbox://styles/vinsent/cjik4wj7600qo2rqmn64pkphh"
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    )
  }
}

export default Map;