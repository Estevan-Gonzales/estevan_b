import '../../assets/css/piclock.css'
import { useEffect } from 'react';

function PiClock() {

    useEffect(() => {
        function returnNumbers() {
            let numbers = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"
            let numbersList = [...numbers]
            return numbers;
        }

        let piClockContainer = document.getElementById("pi-clock-container");

        let numbersList = returnNumbers();

        for (let i = 0; i < numbersList.length; i++) {
            console.log(numbersList[i]);
            let newBlock = document.createElement('div');
            newBlock.className = "number-block";
            newBlock.innerText = numbersList[i];
            piClockContainer.append(newBlock);
        }




    }, []);


    return(
        <div id="pi-clock-container">
        </div>
    )


}

export default PiClock