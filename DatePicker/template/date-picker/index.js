const datePicker = $input => {

	let $this = $input;
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let selectedMonth = new Date().getMonth();
	let selectedYear = new Date().getFullYear();
	let calendar, calendarNav, calendarGrid;

	makeCalendar();

	function makeCalendar() {
		calendar = document.createElement("div");
		calendar.classList.add("calendar");
		$this.parentNode.insertBefore(calendar, this);

		calendarNav = document.createElement("div");
		calendarNav.classList.add("calendar-nav");
		calendarNav.innerHTML = `<p class="caleendar-month">${months[selectedMonth]}</p> <p class="caleendar-year">${selectedYear}</p> `;
		calendar.appendChild(calendarNav);

		createButtons();
		createGrid(selectedMonth, selectedYear);
	}

	function createButtons() {
		let prev = document.createElement("button");
		prev.classList.add("btn", "prev");
		let next = document.createElement("button");
		next.classList.add("btn", "next");

		calendarNav.appendChild(prev);
		calendarNav.appendChild(next);

		prev.addEventListener("click", e => {
			e.preventDefault();
			changeMonth(selectedMonth - 1);
		});

		next.addEventListener("click", e => {
			e.preventDefault();
			changeMonth(selectedMonth + 1);
		});

	};


	function createGrid(month, year) {
		calendarGrid = document.createElement("div");
		calendarGrid.classList.add("calendar-grid");
		calendar.appendChild(calendarGrid);

		let day = document.createElement("div");
		day.classList.add("day");
		calendarGrid.appendChild(day);

		dayWeek.forEach((name) => {
			let div = document.createElement("div");
			div.innerHTML = name;
			day.appendChild(div)
		});

		let grid = document.createElement("div");
		grid.classList.add("grid");
		calendarGrid.appendChild(grid);

		let preDate = new Date(year, month, 1);
		let firstMonthDay = preDate.getDay();

		let pastDate = new Date(year, month, 0);
		let nextDate = new Date(year, month + 1, 1);

		let daysInMonth = new Date(year, month + 1, 0).getDate()
		let j = daysInMonth + firstMonthDay - 1;
		let k = 7 - ((j + 2) % 7);
		k == 7 ? k = 0 : k;

		for (let i = firstMonthDay - 1; i >= 0; i--) {
			let dayBtn = document.createElement("button");
			dayBtn.classList.add("color-gray");
			//dayBtn.style.color = "#ddd"
			let dateTime = pastDate.getDate() - i;
			dayBtn.innerText = dateTime;

			dayBtn.addEventListener("click", e => {
				e.preventDefault();
				removeClass();
				e.target.classList.add("active");
				let selectedDay = e.target.innerHTML;
				fillInput(selectedDay, -1);
				closeCalendar();
			});

			grid.appendChild(dayBtn);
		}

		for (let i = firstMonthDay; i <= j; i++) {
			let dayBtn = document.createElement("button");
			let dateTime = i - firstMonthDay + 1;
			dayBtn.innerText = dateTime;

			if (selectedMonth == new Date().getMonth() && selectedYear == new Date().getFullYear() && dateTime == new Date().getDate()) {
				dayBtn.classList.add("on");
			}


			dayBtn.addEventListener("click", e => {
				e.preventDefault();
				removeClass();
				e.target.classList.add("active");
				let selectedDay = e.target.innerHTML;
				fillInput(selectedDay, 0);
				closeCalendar();
			});

			grid.appendChild(dayBtn);
		}

		if (k !== 6) {
			for (let i = 0; i < k + 1; i++) {
				let dayBtn = document.createElement("button");
				dayBtn.classList.add("color-gray");
				let dateTime = nextDate.getDate() + i;
				dayBtn.innerText = dateTime;

				dayBtn.addEventListener("click", e => {
					e.preventDefault();
					removeClass();
					e.target.classList.add("active");
					let selectedDay = e.target.innerHTML;
					fillInput(selectedDay, 1);
					closeCalendar();
				});

				grid.appendChild(dayBtn);
			}
		}

		function removeClass() {
			for (let i = 0; i < grid.childElementCount; i++) {
				let dayBtn = grid.querySelectorAll("button");
				dayBtn.forEach((item) => {
					item.classList.remove("active")
				});
			}
		}

	};

	function fillInput(day, n) {
		day = day < 10 ? "0" + day : day;
		let month = selectedMonth + n < 9 ? "0" + (selectedMonth + 1 + n) : selectedMonth + 1 + n;
		let year = selectedYear;
		if (month == 0) {
			month = 12;
			year--;
		} else if (month == 13) {
			month = 1;
			year++;
		}
		$this.value = `${year}-${month}-${day}`;
	}

	function changeMonth(month) {
		calendarGrid.remove();
		selectedMonth = month;
		if (selectedMonth < 0) {
			selectedYear--;
			selectedMonth = 11;
		} else if (selectedMonth > 11) {
			selectedYear++;
			selectedMonth = 0;
		}
		calendarNav.innerHTML = `<p p class="caleendar-month" > ${months[selectedMonth]}</p > <p class="caleendar-year">${selectedYear}</p> `;
		createButtons();
		createGrid(selectedMonth, selectedYear)
	}

	function closeCalendar() {
		calendar.classList.remove("open");
	};

	$input.addEventListener("click", e => {
		calendar.classList.toggle("open");
	})

};


export default datePicker;
