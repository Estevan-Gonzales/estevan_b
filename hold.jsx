let grid = document.getElementById('clock-grid')
let hourBox = document.createElement('div')
hourBox.className = "hour-block";
for (let i = 0; i < 60; i++) {
    let minuteBox = document.createElement('div');
    minuteBox.className = "minute-block";
    hourBox.append(minuteBox)
}

grid.append(hourBox);
