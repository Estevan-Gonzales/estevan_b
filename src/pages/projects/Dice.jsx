import '../../assets/css/dice.css'

function Dice() {

    function appendDot(target) {
        var dotDiv = document.createElement("div")
        dotDiv.classList.add('dice-dot')
        target.appendChild(dotDiv);
    }

    function appendClear(target) {
        var clearDiv = document.createElement("div")
        target.appendChild(clearDiv)
    }

    function returnDice() {

        let clearToStart = document.getElementById("content-master")

        let rollTotal = 0;

        //roll instance contains text information about a single roll
        let rollInstance = document.createElement("div")
        rollInstance.classList.add("roll-instance")
        rollInstance.textContent = "ROLL"
    
        let targets = document.getElementsByClassName("dice")
        for (let i=0; i<targets.length; i++) {

            let target = targets[i]


            if (target.classList.contains("dice-6")) {

                console.log("d6 match")

                target.innerHTML = ""
                let randomValue = Math.floor(Math.random() * 6) + 1
    
                rollTotal += randomValue
        
                switch (randomValue) {
                    case 1:
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendDot(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        break;
                    case 2:
                        appendDot(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendDot(target)
                        break;
                    case 3:
                        appendDot(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendDot(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendDot(target)
                        break;
                    case 4:
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        appendClear(target)
                        appendClear(target)
                        appendClear(target)
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        break
                    case 5:
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        break
                    case 6:
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        appendDot(target)
                        appendClear(target)
                        appendDot(target)
                        break
                }
    
                let rollLine = document.createElement("div")
                rollLine.classList.add("roll-line")
                rollLine.textContent = "Dice " + (i+1).toString() + " (D6): " + randomValue.toString();
                rollInstance.append(rollLine)


            }

            //If dice is a d10
            if (target.classList.contains("dice-10")) {
                console.log("d10 match")

                target.innerHTML = ""
                let randomValue = Math.floor(Math.random() * 10) + 1
    
                rollTotal += randomValue
                target.innerHTML = "D10"
                let targetValue = document.createElement("p")
                targetValue.classList.add("dice-text")
                targetValue.textContent = randomValue;
                target.append(targetValue)

                    
                let rollLine = document.createElement("div")
                rollLine.classList.add("roll-line")
                rollLine.textContent = "Dice " + (i+1).toString() + " (D10): " + randomValue.toString();
                rollInstance.append(rollLine)
            }


        }

        let diceCountTotal = document.createElement("div")
        diceCountTotal.classList.add("roll-total")
        diceCountTotal.textContent = rollTotal

        rollInstance.append(diceCountTotal)

        let diceCount = document.getElementById("dice-counts")
        diceCount.prepend(rollInstance)


    }

    function addD6() {

        var target = document.getElementById("dice-collection")

        var newDice = document.createElement("div")
        newDice.classList.add("dice-6")
        newDice.classList.add("dice")
        target.appendChild(newDice) 
    }

    function addD10() {
        var target = document.getElementById("dice-collection")

        var newDice = document.createElement("div")
        newDice.classList.add("dice-10")
        newDice.classList.add("dice")
        target.appendChild(newDice);

    }

    return (
        <div>

        <div id="button-master">
            <button type="button" className="btn btn-secondary" onClick={returnDice}>Roll Dice</button>
            <button id="btn-add-d6" type="button" className="btn btn-secondary" onClick={addD6}>Add D6</button>
            <button id="btn-add-d10" type="button" className="btn btn-secondary" onClick={addD10}>Add D10</button>

        </div>


        <div id="content-master">

        
            <div id="dice-counts">
                <p className="dice-count"></p>
            </div>


            <div id="dice-collection">

            </div>



        </div>
        </div>

    )
}

export default Dice;