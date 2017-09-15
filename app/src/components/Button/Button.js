import React from 'react';

type Props = {
	isLoading?:boolean,
	className?:string,
	children?:Object,
}

const Button = (props:Props) => {
	const newProps = { ...props };
	newProps.className = props.className || 'button button-default';
	if (props.isLoading) {
		newProps.className += ' is-loading';
		newProps.disabled = true;
	}
	delete newProps.isLoading;
	return <button {...newProps} >{props.children}</button>;
};

export default Button;
