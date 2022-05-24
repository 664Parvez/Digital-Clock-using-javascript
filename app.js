function time_of_digital_clock() {
    let hour = document.querySelector('.hr');
    let minute = document.querySelector('.mi');
    let secound = document.querySelector('.se');

    let time_and_date = new Date();

    let hrs = time_and_date.getHours();
    let min = time_and_date.getMinutes();
    let sec = time_and_date.getSeconds();

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs <= 9) {
        hrs = '0' + hrs;
    }
    if (min <= 9) {
        min = '0' + min;
    }
    if (sec <= 9) {
        sec = '0' + sec;
    }

    hour.innerHTML = hrs;
    minute.innerHTML = min;
    secound.innerHTML = sec;

    let just_date = new Date();
    let date = just_date.toDateString();
    let d = document.querySelector('.date').innerHTML = date;
}
setInterval(time_of_digital_clock, 1000);