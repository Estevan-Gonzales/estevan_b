import '../../assets/css/clock.css'
import { useEffect } from 'react';

function Clock() {
    useEffect(() => {

    function renderMinutes() {
        let grid = document.getElementById('clock-grid')

        for (let h = 0; h < 24; h++) {

            let hourBox = document.createElement('div')
            hourBox.className = "hour-block";

            for (let i = 0; i < 60; i++) {
                let minuteBox = document.createElement('div');
                minuteBox.className = "minute-block";
                minuteBox.id = h.toString() + "-" + i.toString()
                hourBox.append(minuteBox)
            
            }
            
            grid.append(hourBox);
        }
    }

    function setCurrentMinute() {
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let dateAttribute = hour.toString() + "-" + minute.toString()        
        let targetMinute = document.getElementById(dateAttribute);

        targetMinute.style.backgroundColor = "black"
        console.log(targetMinute);
    }


    renderMinutes();
    setCurrentMinute();

    }, []);




    return (
        <div id="clock-grid">
            
        </div>

    )
}
export default Clock;