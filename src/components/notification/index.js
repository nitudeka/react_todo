import React from 'react';
import { connect } from 'react-redux';
import { removeNotification } from '../../store/actions';

const notification = (props) => {
	const msgArr = props.messages.map((msg, i) => {
		return <div className='notification' onClick={() => props.removeNotification(i)} key={i}>{msg}</div>
	});

	return (
		<div className='notification__container'>
			{ msgArr }
		</div>
	);
};

const mapStateToProps = (state) => ({
	messages: state.notification.messages
});

const mapDispatchToProps = (dispatch) => ({
	removeNotification: (index) => { dispatch(removeNotification(index)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(notification);
