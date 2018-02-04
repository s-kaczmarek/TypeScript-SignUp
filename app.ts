class Clock {
  hours: number;
  el: Element;
  constructor(element) {
    this.el = element;
    setInterval(() => this.run(), 1000)
  }
  
  run() {
    var time = new Date();
    this.hours = time.getHours()+utcValue;
    var hoursChanged = this.hours.toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
  
    if (hoursChanged.length < 2) {
      hoursChanged = '0' + hoursChanged;
    }
  
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
  
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
  
    var clockStr = hoursChanged + ' : ' + minutes + ' : ' + seconds;
  
    this.el.textContent = clockStr;
  }
}

var clock = new Clock(document.getElementById('tsClock'));
var utcButton = document.getElementById('button');
utcButton.addEventListener("click", utcChange);
var utcValue = 0;

function utcChange(){
    
    if (clock.hours < 23) {
        utcValue += 1;
    } else {
        utcValue -= 23;
    }
}