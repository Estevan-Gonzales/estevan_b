import '../assets/cube.css'

function Cube() {

    let colorDict = {
        "top": {
            1: "blue",
            2: "blue",
            3: "blue",
            4: "blue",
            5: "blue",
            6: "blue",
            7: "blue",
            8: "blue",
            9: "blue",
        },
        "right": {
            1: "red",
            2: "red",
            3: "red",
            4: "red",
            5: "red",
            6: "red",
            7: "red",
            8: "red",
            9: "red",
        },
        "bottom": {
            1: "green",
            2: "green",
            3: "green",
            4: "green",
            5: "green",
            6: "green",
            7: "green",
            8: "green",
            9: "green",
        },
        "left": {
            1: "orange",
            2: "orange",
            3: "orange",
            4: "orange",
            5: "orange",
            6: "orange",
            7: "orange",
            8: "orange",
            9: "orange",
        },
        "front": {
            1: "white",
            2: "white",
            3: "white",
            4: "white",
            5: "white",
            6: "white",
            7: "white",
            8: "white",
            9: "white",
        },
        "back": {
            1: "yellow",
            2: "yellow",
            3: "yellow",
            4: "yellow",
            5: "yellow",
            6: "yellow",
            7: "yellow",
            8: "yellow",
            9: "yellow",
        }
    }

    function setStartColors() {
        for(var face in colorDict) {
            console.log(face)
            for (var position in colorDict[face]) {
                console.log(position)
                var square = document.getElementById('face-' + face + "-" + position)
                square.style.backgroundColor = colorDict[face][position]
            }
        }
    }

    function swapEdges(recieverPositions, targetColors) {

        var count = recieverPositions.length;
        for (var i=0; i<count; i++) {
            document.getElementById(recieverPositions[i]).style.backgroundColor = targetColors[i]
            let face = recieverPositions[i].split("-")[1]
            let position = recieverPositions[i].split("-")[2]
            colorDict[face][position] = targetColors[i]
        }

    }

    function shiftFace(face) {

        var recieverSequence = [1,2,3,6,9,8,7,4]
        var colorSequence =    [7,4,1,2,3,6,9,8]

        var recieverPositions = []
        var donorColors = []


        for (var i = 0; i < recieverSequence.length; i++) {
            recieverPositions.push("face-" + face + "-" + recieverSequence[i]);
        }
        console.log(recieverPositions)
        for (var i = 0; i < colorSequence.length; i++) {
            donorColors.push(document.getElementById("face-" + face + "-" + colorSequence[i]).style.backgroundColor)
        }
        console.log(donorColors)
        for (var i = 0; i < recieverPositions.length; i++) {
            console.log(document.getElementById(recieverPositions[i]).style.backgroundColor)
            document.getElementById(recieverPositions[i]).style.backgroundColor = donorColors[i]
            console.log(document.getElementById(recieverPositions[i]).style.backgroundColor)
            console.log("above")

            colorDict[face][recieverPositions[i]] = donorColors[i]
        }
        console.log(recieverPositions)
        console.log(donorColors)


    }

    function shiftFront() {

        let targetColors = [
            colorDict.top[7],
            colorDict.top[8],
            colorDict.top[9],
            colorDict.right[1],
            colorDict.right[4],
            colorDict.right[7],
            colorDict.bottom[3],
            colorDict.bottom[2],
            colorDict.bottom[1],
            colorDict.left[9],
            colorDict.left[6],
            colorDict.left[3]
        ]

        let recieverPositions = [
            "face-right-1",
            "face-right-4",
            "face-right-7",
            "face-bottom-3",
            "face-bottom-2",
            "face-bottom-1",
            "face-left-9",
            "face-left-6",
            "face-left-3",
            "face-top-7",
            "face-top-8",
            "face-top-9"
        ]

        swapEdges(recieverPositions, targetColors)
        shiftFace("front")
    }

    function shiftRight() {
        let donorColors = [
            colorDict.front[9], colorDict.front[6], colorDict.front[3],
            colorDict.top[9], colorDict.top[6], colorDict.top[3],
            colorDict.back[9], colorDict.back[6], colorDict.back[3],
            colorDict.bottom[9], colorDict.bottom[6], colorDict.bottom[3],
        ]
        let recieverPositions = [
            "face-top-9", "face-top-6", "face-top-3",
            "face-back-9", "face-back-6", "face-back-3",
            "face-bottom-9", "face-bottom-6", "face-bottom-3",
            "face-front-9", "face-front-6", "face-front-3",
        ]
        swapEdges(recieverPositions, donorColors)
        shiftFace("right")

    }

    function shiftLeft() {
        let donorColors = [
            colorDict.front[1], colorDict.front[4], colorDict.front[7],
            colorDict.top[1], colorDict.top[4], colorDict.top[7],
            colorDict.back[1], colorDict.back[4], colorDict.back[7],
            colorDict.bottom[1], colorDict.bottom[4], colorDict.bottom[7],
        ]
        let recieverPositions = [
            "face-bottom-1", "face-bottom-4", "face-bottom-7",
            "face-front-1", "face-front-4", "face-front-7",
            "face-top-1", "face-top-4", "face-top-7",
            "face-back-1", "face-back-4", "face-back-7",
        ]
        swapEdges(recieverPositions, donorColors)
        shiftFace("left")

    }

    function shiftTop() {
        let donorColors = [
            colorDict.front[1], colorDict.front[2], colorDict.front[3],
            colorDict.left[1], colorDict.left[2], colorDict.left[3],
            colorDict.back[1], colorDict.back[2], colorDict.back[3],
            colorDict.right[1], colorDict.right[2], colorDict.right[3],

        ]
        let recieverPositions = [
            "face-left-1", "face-left-2", "face-left-3",
            "face-back-1", "face-back-2", "face-back-3",
            "face-right-1", "face-right-2", "face-right-3",
            "face-front-1", "face-front-2", "face-front-3",
        ]
        swapEdges(recieverPositions, donorColors)
        shiftFace("top")
    }

    function shiftBottom() {
        let donorColors = [
            colorDict.front[7], colorDict.front[8], colorDict.front[9],
            colorDict.right[7], colorDict.right[8], colorDict.right[9],
            colorDict.back[7], colorDict.back[8], colorDict.back[9],
            colorDict.left[7], colorDict.left[8], colorDict.left[9],

        ]
        let recieverPositions = [
            "face-right-7", "face-right-8", "face-right-9",
            "face-back-7", "face-back-8", "face-back-9",
            "face-left-7", "face-left-8", "face-left-9",
            "face-front-7", "face-front-8", "face-front-9",
        ]
        swapEdges(recieverPositions, donorColors)
        shiftFace("bottom")

    }







    window.onload=function() {

        setStartColors();

        const btnFrontClock = document.getElementById('btn-front-clock')
        btnFrontClock.addEventListener('click', shiftFront)

        const btnRightClock = document.getElementById('btn-right-clock')
        btnRightClock.addEventListener('click', shiftRight)

        const btnBottomClock = document.getElementById('btn-bottom-clock')
        btnBottomClock.addEventListener('click', shiftBottom)

        const btnLeftClock = document.getElementById('btn-left-clock')
        btnLeftClock.addEventListener('click', shiftLeft)

        const btnTopClock = document.getElementById('btn-top-clock')
        btnTopClock.addEventListener('click', shiftTop)


    }

    return (
        <div className="master-container">
            <button id="btn-front-clock" type="button" className="btn btn-primary">Shift Front</button>
            <button id="btn-right-clock" type="button" className="btn btn-primary">Shift Right</button>
            <button id="btn-bottom-clock" type="button" className="btn btn-primary">Shift Bottom</button>
            <button id="btn-left-clock" type="button" className="btn btn-primary">Shift Left</button>
            <button id="btn-top-clock" type="button" className="btn btn-primary">Shift Top</button>
            <button id="btn-back-clock" type="button" className="btn btn-primary">Shift Back</button>


            <div className="grid">
                <div className="cube-face"></div>
                <div className="cube-face">
                    <div id="face-top-1" className="cube-square"></div>
                    <div id="face-top-2" className="cube-square"></div>
                    <div id="face-top-3" className="cube-square"></div>
                    <div id="face-top-4" className="cube-square"></div>
                    <div id="face-top-5" className="face-center"></div>
                    <div id="face-top-6" className="cube-square"></div>
                    <div id="face-top-7" className="cube-square"></div>
                    <div id="face-top-8" className="cube-square"></div>
                    <div id="face-top-9" className="cube-square"></div>
                </div>
                <div className="cube-face"></div>
                <div className="cube-face">
                    <div id="face-left-1" className="cube-square"></div>
                    <div id="face-left-2" className="cube-square"></div>
                    <div id="face-left-3" className="cube-square"></div>
                    <div id="face-left-4" className="cube-square"></div>
                    <div id="face-left-5" className="face-center"></div>
                    <div id="face-left-6" className="cube-square"></div>
                    <div id="face-left-7" className="cube-square"></div>
                    <div id="face-left-8" className="cube-square"></div>
                    <div id="face-left-9" className="cube-square"></div>
                </div>

                <div className="cube-face">
                    <div id="face-front-1" className="cube-square"></div>
                    <div id="face-front-2" className="cube-square"></div>
                    <div id="face-front-3" className="cube-square"></div>
                    <div id="face-front-4" className="cube-square"></div>
                    <div id="face-front-5" className="face-center"></div>
                    <div id="face-front-6" className="cube-square"></div>
                    <div id="face-front-7" className="cube-square"></div>
                    <div id="face-front-8" className="cube-square"></div>
                    <div id="face-front-9" className="cube-square"></div>
                </div>

                <div className="cube-face">
                    <div id="face-right-1" className="cube-square"></div>
                    <div id="face-right-2" className="cube-square"></div>
                    <div id="face-right-3" className="cube-square"></div>
                    <div id="face-right-4" className="cube-square"></div>
                    <div id="face-right-5" className="face-center"></div>
                    <div id="face-right-6" className="cube-square"></div>
                    <div id="face-right-7" className="cube-square"></div>
                    <div id="face-right-8" className="cube-square"></div>
                    <div id="face-right-9" className="cube-square"></div>
                </div>
                <div className="cube-face"></div>
                <div className="cube-face">
                    <div id="face-bottom-1" className="cube-square green"></div>
                    <div id="face-bottom-2" className="cube-square green"></div>
                    <div id="face-bottom-3" className="cube-square green"></div>
                    <div id="face-bottom-4" className="cube-square green"></div>
                    <div id="face-bottom-5" className="face-center green"></div>
                    <div id="face-bottom-6" className="cube-square green"></div>
                    <div id="face-bottom-7" className="cube-square green"></div>
                    <div id="face-bottom-8" className="cube-square green"></div>
                    <div id="face-bottom-9" className="cube-square green"></div>
                </div>



                <div className="cube-face"></div>

                <div hidden={true}>
                    <div id="face-back-1" className="cube-square"></div>
                    <div id="face-back-2" className="cube-square"></div>
                    <div id="face-back-3" className="cube-square"></div>
                    <div id="face-back-4" className="cube-square"></div>
                    <div id="face-back-5" className="face-center"></div>
                    <div id="face-back-6" className="cube-square"></div>
                    <div id="face-back-7" className="cube-square"></div>
                    <div id="face-back-8" className="cube-square"></div>
                    <div id="face-back-9" className="cube-square"></div>
                </div>

            </div>
        </div>
    );
}

export default Cube;