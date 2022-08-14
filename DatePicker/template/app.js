import datePicker from './date-picker/index.js';

const dateInputs = document.querySelectorAll('.date-input');

dateInputs.forEach(($input) => {
	datePicker($input);
});