const BooleanEditor = (props) => {
	return R.input({onChange:(ev) => {
		props.onChange(ev);
		editor.tryToSaveHistory();
	}, disabled:props.disabled, className: 'checkbox', type: 'checkbox', checked: props.value || false});
};

export default BooleanEditor;