
import { applyParams } from "../actions";
import { connect } from "react-redux";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MapMe extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
  
    render() {
     let   position:any = [45.750000, 4.850000];
        return (
            <div id="map">

                <Map center={position}  zoom={13} >
                    <Marker position={position}/>
                    </Map  >
            </div>
        );
    }
}

export default connect(
    (store: any) => {
        const { isLoading, error } = store.ui;

        return {
            isLoading,
            error
        } as any
    },
    { applyParams }
)(MapMe as any);
   //    <Map>
            //        <Layers>
            //            <layer.Tile />
            //            <layer.Vector
            //                style={marker.style}
            //                source={source}/>
            //        </Layers>
            //    </Map>
            //    <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/custom/marker-style.tsx">source</a>
