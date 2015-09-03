/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';
import classNames from 'classnames';
import BaseComponent from '../../BaseComponent.jsx';
import BillSubSectionItem from './BillSubSectionItem.jsx';

class BillSubSection extends BaseComponent{
    
    constructor(props){
        super(props);

        this._bind('_renderItems');
    }

    /*
        Render items of sub sections
        Return html
     */
    _renderItems(){
        let items = [];

        this.props.data.forEach( (item,index) => {
            items.push(<BillSubSectionItem itemProps={this.props.subProps.item_prop} data={item} key={index} />)
        });

        return items;
    }

    render(){
        let items = this._renderItems(),
            subSectionClass = classNames({
                'panel panel-default':true,
                'hidden': !this.props.open
            });

        return (
            <div className={subSectionClass}>
                <div className="panel-heading">
                    <h4>{this.props.subProps.title}</h4>
                </div>
                <div className="panel-body">
                    {items}
                </div>
            </div>
        )
    }
}

export default BillSubSection;