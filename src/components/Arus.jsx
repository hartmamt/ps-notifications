import React from 'react';

import PSConnector from '../arus-ps-connector';

/* Flux stuff */
import Reflux from 'reflux';
import BlackLion from '../utils/BlackLion.js';
import { NotificationStore, NotificationActions, EventStore, EventActions } from '../utils/BlackLion.js';

//SET SIS CONNECTOR!!!!!!
BlackLion.SetSISConnector(PSConnector);
/* End Flux stuff */

import ArusNotification from './ArusNotification.jsx';

var ArusNotificationContainer = React.createClass({

	mixins: [
		Reflux.connect(NotificationStore, 'notifications'),
		Reflux.connect(EventStore, 'events')
	],

	getInitialState() {
		return {
			notifications: [],
			events: []
		};
	},

	componentDidMount(){
		NotificationActions.load();
		EventActions.load();
	},

	render() {

		return (
			<ArusNotification notifications={this.state.notifications} events={this.state.events} changeReadStatus={this.changeReadStatus} />
		);
	}

});

React.render(<ArusNotificationContainer/>, document.getElementById('arus'));

module.exports = Arus;
