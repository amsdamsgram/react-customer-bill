/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';
import BaseComponent from '../../BaseComponent.jsx';

class BillStatement extends BaseComponent{
    
    constructor(props){
        super(props);
    }

    render(){
        let data = this.props.data || {},
            period = data.period || {};

        return (
            <div className="panel panel-default pull-right bill_info">
                <div className="panel-heading">
                    Sky bill from {period.from} to {period.to}
                </div>
                <div className="panel-body">
                    <div>Generated on {data.generated}</div>
                    <div className="bill_due_date">Due to {data.due}</div>
                </div>
            </div>
        );
    }
}

export default BillStatement;