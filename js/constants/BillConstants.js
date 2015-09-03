/**
 * Created by idams on 8/31/15.
 */

let BillConstants = BillConstants || {};

/******** SECTION TYPES ********/

BillConstants.SECTION_TYPE = {
    PACKAGE: {
        prop_name: 'package',
        section_title: 'Package',
        sub_sections: [
            {prop_name: 'subscriptions', title:'Subscriptions',item_prop: ['type','name']}
        ]
    },
    CALL_CHARGES: {
        prop_name: 'callCharges',
        section_title: 'Call Charges',
        sub_sections: [
            {prop_name: 'calls', title: 'Calls',item_prop: ['called', 'duration']}
        ]
    },
    SKY_STORE: {
        prop_name: 'skyStore',
        section_title: 'Sky Store',
        sub_sections: [
            {prop_name: 'rentals', title: 'Rentals',item_prop: ['title']},
            {prop_name: 'buyAndKeep', title: 'Buy And Keep',item_prop: ['title']}
        ]
    }
}

BillConstants.PROP_COST_NAME = 'cost';

export default BillConstants;