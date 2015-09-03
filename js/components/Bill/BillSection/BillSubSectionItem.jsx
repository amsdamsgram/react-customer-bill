/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';
import BaseComponent from '../../BaseComponent.jsx';
import BillSubSectionItemRow from './BillSubSectionItemRow.jsx';

import BillConstants from '../../../constants/BillConstants.js';

class BillSubSectionItem extends BaseComponent{
    
    constructor(props){
        super(props);

        this._bind('_renderRows');
    }

    /*
        Render rows of an item
        Return html
     */
    _renderRows(){
        let rows = [],
            itemProps = this.props.itemProps,
            data = this.props.data;

        itemProps.forEach( (prop,index) => {
            rows.push(<BillSubSectionItemRow data={data[prop]} key={index} />);
        });

        rows.push(<BillSubSectionItemRow data={data[BillConstants.PROP_COST_NAME].toFixed(2)}
            costRow={true} key={itemProps.length} />);

        return rows;
    }

    render(){
        let rows = this._renderRows();

        return (
            <div>
                {rows}
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default BillSubSectionItem;