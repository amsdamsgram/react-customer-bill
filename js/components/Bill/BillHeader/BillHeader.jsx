/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';
import BaseComponent from '../../BaseComponent.jsx';
import BillStatement from './BillStatement.jsx';

class BillHeader extends BaseComponent{
    
    constructor(props){
        super(props);
    }

    render(){

        return (
            <header className="clearfix">
                <div className="logo"></div>
                <BillStatement data={this.props.statement} />
            </header>
        )
    }
}

export default BillHeader;