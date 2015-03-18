import React from 'react';
import { Col } from 'react-bootstrap';
import Card from './Card/Card.jsx';
import Loader from 'react-loader';

var ArusNotification = React.createClass({

	render() {
		let loader = null;

		if (this.props.notifications==undefined){
			loader = <Loader/>;
		}

		let notifications = this.props.notifications.map(notif => {
			return (
				<Card key={`Notif#${notif.id}`} className='Card-default' title={notif.subject} type="default">
					{notif.message}
				</Card>
			);
		});

		return (
			<Col>
			<h3>Notifications</h3>
				{loader}
				{notifications}
			</Col>
		);
	}
});

module.exports = ArusNotification;
