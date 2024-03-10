const daysElement = document.querySelector('.days');
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

  function differenceDate(today, finalDay){
    const finalMili = new Date(finalDay).getTime();

    const difference = finalMili - today;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {days, hours, minutes, seconds};
  }

  setInterval(() => {
    const todayDate = new Date().getTime();
    const {
      days,
      hours,
      minutes,
      seconds
    } = differenceDate(todayDate, '2024-08-24');
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }, 1000);