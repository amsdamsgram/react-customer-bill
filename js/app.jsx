/**
 * Created by idams on 8/31/15.
 */

'use strict';

import React from 'react';
import BillContainer from './components/Bill/BillContainer.jsx'

React.render(<BillContainer source="https://still-scrubland-9880.herokuapp.com/bill.json" />, document.body);
