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
        let target = document.getElementsByClassName("dice")[0]
        target.innerHTML = ""
        console.log(target)
        let randomValue = Math.floor(Math.random() * 6) + 1

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


    }

    return (
        <div id="dice-master">
            <div className="dice">
            </div>

            <button type="button" className="btn btn-secondary" onClick={returnDice}>Roll Dice</button>

        </div>


    )
}

export default Dice;