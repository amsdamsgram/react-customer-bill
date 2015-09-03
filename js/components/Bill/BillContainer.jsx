/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';
import BaseComponent from '../BaseComponent.jsx';
import BillHeader from './BillHeader/BillHeader.jsx';
import BillSection from './BillSection/BillSection.jsx';

import BillConstants from '../../constants/BillConstants.js';

class BillContainer extends BaseComponent{
    
    constructor(props){
        super(props);

        this.state = {};

        this._bind('_renderBillSections');
    }

    componentDidMount() {
        $(document).ajaxError(function(event,request,settings) {
            throw new Error('AJAX ERROR: '+request.responseText);
        });

        $.getJSON(this.props.source, (bill) => {
            this.setState(bill);
        });
    }

    /*
        Render all the sections of the bill
        Return html
     */
    _renderBillSections(){
        let billTypes = BillConstants.SECTION_TYPE;
        let sections = [];
        let i = 0;

        for(let type in billTypes){
            if( !billTypes.hasOwnProperty(type) ) break;

            let sectionType = billTypes[type];
            sections.push(<BillSection type={sectionType} data={this.state[sectionType.prop_name]} key={i} />);
            i++;
        }

        return sections;
    }

    render(){
        let sections = this._renderBillSections(),
            total = this.state.total || 0;

        return (
            <div className="container bill_container">
                <BillHeader statement={this.state.statement} />
                <main>
                    {sections}
                    <div className="h2 pull-right">
                        Total:  <span className="bill_currency">{total.toFixed(2)}</span>
                    </div>
                </main>
            </div>
        )
    }
}

export default BillContainer;