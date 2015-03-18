var React = require('react');
var { Panel } = require('react-bootstrap');

var ArusNotification = React.createClass({

	render: function() {
		let notifications = this.props.notifications.map(notif => {
			return (
				<Panel key={`Notif#${notif.id}`} header={notif.subject}>
					{notif.message}
				</Panel>
			);
		});

		let events = this.props.events.map(evt => {
			return (
				<Panel key={`Event#${evt.id}`} onClick={this.props.changeReadStatus.bind(this, evt)}>
					{evt.status} - {evt.message}
				</Panel>
			);
		});

		return (
			<Panel header="Notifications and Events">
				<Panel header="Events">
					{events}
				</Panel>
				<Panel header="Notifications">
					{notifications}
				</Panel>
			</Panel>
		);
	}
});

module.exports = ArusNotification;
