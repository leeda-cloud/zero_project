const AnalogClock = $container => {

	const secondSelector = $container.querySelector('.second');
	const minuteSelector = $container.querySelector('.minute');
	const hourSelector = $container.querySelector('.hour');

	function setDate() {
		const now = new Date();
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();

		const getSecondsDegrees = seconds * 6;
		const getMinutesDegrees = minutes * 6;
		const getHoursDegrees = 30 * hours + minutes / 2;


		hourSelector.style.setProperty("--deg", getHoursDegrees);
		minuteSelector.style.setProperty("--deg", getMinutesDegrees);
		secondSelector.style.setProperty("--deg", getSecondsDegrees);
	}

	setInterval(setDate, 1000);

};

export default AnalogClock;
