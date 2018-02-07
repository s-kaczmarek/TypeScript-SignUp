function submitFunction() {
    
    var number = 1;
    var name = document.getElementById("input-name").value;
    var pesel = document.getElementById("input-pesel").value;
    var date = document.getElementById("input-date").value;
    var place = document.getElementById("input-place").value;
    var time = document.getElementById("tsClock").value;
    
    var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(number);
    
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);    
    var cel6 = newRow.insertCell(5);    
    
    cel1.innerHTML = number;
    cel2.innerHTML = name;
    cel3.innerHTML = pesel;
    cel4.innerHTML = date;
    cel5.innerHTML = place;
    cel6.innerHTML = clockStr;
    
    var number = number + 1;    
    console.log(number);
    console.log(time);
        
}
