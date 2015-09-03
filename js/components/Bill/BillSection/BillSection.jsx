/**
 * Created by idams on 8/31/15.
 */

'use strict'

import React from 'react';
import classNames from 'classnames';
import BaseComponent from '../../BaseComponent.jsx';
import BillSubSection from './BillSubSection.jsx';

class BillSection extends BaseComponent{
    
    constructor(props){
        super(props);

        this.state = {open:true};

        this._bind('_onHeaderClick','_renderSubSections');
    }

    /*
        Click handler
        When click on the section title, the section opens/closes
     */
    _onHeaderClick(){
        this.setState({open:!this.state.open});
    }
    /*
        Render sub sections of the bill
        Return html
     */
    _renderSubSections(){
        if( !this.props.data ) return;

        let subs = [];

        this.props.type.sub_sections.forEach( (subProp,index) => {
            subs.push(<BillSubSection subProps={subProp} data={this.props.data[subProp.prop_name]}
                open={this.state.open} key={index} />);
        });

        return subs;
    }

    render(){
        let sub_sections = this._renderSubSections(),
            total = !this.props.data ? 0 : this.props.data.total,
            arrowClass = classNames({
                'bill_section_arrow glyphicon':true,
                'glyphicon-menu-up':this.state.open,
                'glyphicon-menu-down': !this.state.open
            });

        return (
            <section className="row">
                <div className="bill_section_header clearfix h3" onClick={this._onHeaderClick}>
                    <div className="col-xs-8 col-md-10">{this.props.type.section_title}</div>
                    <div className="col-xs-4 col-md-2 text-right bill_currency">
                        {total.toFixed(2)}
                        <i className={arrowClass}></i>
                    </div>
                </div>

                {sub_sections}
            </section>
        )
    }
}

export default BillSection;