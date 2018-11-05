
import { applyParams } from "../actions";
import { connect } from "react-redux";

import * as React from "react";
import * as ReactDOM from "react-dom";
import Gallery  from "react-photo-gallery";
//import * as fs from 'fs';
let PHOTO_SET: any = [
    {
        src: 'img/Galerie/1.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'img/Galerie/2.jpg',
        width: 3,
        height: 4
    }
];

class Galerie extends React.Component<any, any> {
    constructor(props) {
        super(props);
    
    }
 
    render() {

        return (
            <div>
                <Gallery  photos={PHOTO_SET} />
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
)(Galerie as any);
