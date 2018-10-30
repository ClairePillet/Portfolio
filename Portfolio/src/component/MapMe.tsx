
import { applyParams } from "../actions";
import { connect } from "react-redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ol from 'ol';
import {
    interaction, layer, custom, control, //name spaces
    Interactions, Overlays, Controls,     //group
    Map, Layers, Overlay, Util    //objects
} from "react-openlayers";
console.log(ol);
let point = new ol.Geolocation([0, 0]);
var iconFeature = new ol.Feature(point);
var source = new ol.source.Vector({ features: [iconFeature] });
var marker = new custom.style.MarkerStyle(
    'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
);

class MapMe extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <div>
                <Map>
                    <Layers>
                        <layer.Tile />
                        <layer.Vector
                            style={marker.style}
                            source={source}/>
                    </Layers>
                </Map>
                <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/custom/marker-style.tsx">source</a>
           
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
