/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';
import classNames from 'classnames';
import BaseComponent from '../../BaseComponent.jsx';

class BillSubSectionItemRow extends BaseComponent{
    
    constructor(props){
        super(props);
    }

    render(){
        let _class = classNames({
            'col-xs-4 col-md-3':true,
            'bill_currency': this.props.costRow
        });

        return (
            <div className={_class}>{this.props.data}</div>
        )
    }
}

export default BillSubSectionItemRow;