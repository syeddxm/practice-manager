import React, { Componenet } from 'react';
import { Modal, TouchableHighlight, Text, View } from 'react-native';
import { CardSection, Button } from './';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
	const { cardSectionStyle, containerStyle, textStyle } = styles;

	return (
		<Modal
			animationType="slide"
			transparent
			visible={visible}
			onRequestClose={() => {alert("Modal has been closed.")}}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>
				<CardSection style={cardSectionStyle}>
					<Button onPress={onAccept}>Yes</Button>
					<Button onPress={onDecline}>No</Button>
				</CardSection>
			</View>
		</Modal>

	);
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center',
		paddingTop: '10%',
		paddingBottom: '10%'

	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		paddingLeft: '5%',
		paddingRight: '5%',
		flex: 1,
		justifyContent: 'center'
	}
};

export { Confirm };