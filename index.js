// const refs = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   secs: document.querySelector('[data-value="secs"]'),
//   timeId: document.getElementById('timer-1'),
// };

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector(
        `${this.selector} span[data-value="days"]`
      ),
      hours: document.querySelector(
        `${this.selector} span[data-value="hours"]`
      ),
      mins: document.querySelector(
        `${this.selector} span[data-value="mins"]`
      ),
      secs: document.querySelector(
        `${this.selector} span[data-value="secs"]`
      ),
    };
  };
  intervalId = setInterval(() => {
    const time = this.targetDate - Date.now();
    
    this.updateClockface(time);
    this.cleanTime(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  };

  pad(value) {
    return String(value).padStart(2, "0");
  }

  cleanTime(time) {
    if (time < 0) {
      clearInterval(this.intervalId);
    }
  }
};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});