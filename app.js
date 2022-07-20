const button = document.querySelector("input[type='submit']");
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const mins = document.querySelector('.min');
const Sec = document.querySelector('.sec');
button.addEventListener('click', function () {
	setInterval(() => {
		let date_input = document.querySelector("input[type='date']").value;
		let time_input = document.querySelector("input[type='time']").value;
		let start_time = new Date();
		let end_time = new Date(date_input + ' ' + time_input);
		let time_difference = Math.floor(
			Math.abs(end_time.getTime() - start_time.getTime())
		);

		let total_sec = Math.floor(time_difference / 1000);
		let total_min = Math.floor(total_sec / 60);
		let total_hour = Math.floor(total_min / 60);
		let total_day = Math.floor(total_hour / 24);

		let hours = total_hour - total_day * 24;
		let min = total_min - total_day * 24 * 60 - hours * 60;
		let sec = total_sec - total_day * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
		day.innerHTML = total_day;
		hour.innerHTML = hours;
		mins.innerHTML = min;
		Sec.innerHTML = sec;
	}, 1000);
});
