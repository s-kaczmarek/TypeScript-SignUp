var Clock = /** @class */ (function () {
    function Clock(element) {
        var _this = this;
        this.el = element;
        setInterval(function () { return _this.run(); }, 1000);
    }
    Clock.prototype.run = function () {
        var time = new Date();
        this.hours = time.getHours() + utcValue;
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
    };
    return Clock;
}());
var clock = new Clock(document.getElementById('tsClock'));
var utcButton = document.getElementById('button');
utcButton.addEventListener("click", utcChange);
var utcValue = 0;
function utcChange() {
    if (clock.hours < 23) {
        utcValue += 1;
    }
    else {
        utcValue -= 23;
    }
}
