/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';

class BaseComponent extends React.Component{

    /*
        Bind methods to this (ES6 classes have no auto-binding)
        @param: methods Rest parameters
     */
    _bind(...methods){
        methods.forEach(
            (method) => this[method] = this[method].bind(this)
        );
    }

}

export default BaseComponent;