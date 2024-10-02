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
            1: "pink",
            2: "white",
            3: "white",
            4: "white",
            5: "white",
            6: "white",
            7: "purple",
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

    function swapEdges(toChange, targetColors) {

        var count = toChange.length;
        for (var i=0; i<count; i++) {
            document.getElementById(toChange[i]).style.backgroundColor = targetColors[i]
            let face = toChange[i].split("-")[1]
            let position = toChange[i].split("-")[2]
            colorDict[face][position] = targetColors[i]
        }

    }

    function swapFace(face) {

        var toChange = ['face-front-1', 'face-front-2', 'face-front-3', 'face-front-6','face-front-9', 'face-front-8', 'face-front-7', 'face-front-4']
        var targetColors = [
            colorDict.front[7],
            colorDict.front[4],
            colorDict.front[1],
            colorDict.front[2],
            colorDict.front[3],
            colorDict.front[6],
            colorDict.front[9],
            colorDict.front[8]]

        var count = toChange.length;
        for (var i=0; i<count; i++) {
            document.getElementById(toChange[i]).style.backgroundColor = targetColors[i]
            let face = toChange[i].split("-")[1]
            let position = toChange[i].split("-")[2]
            colorDict[face][position] = targetColors[i]
        }


    }

    function shiftCenter() {

        let targetColors = [
            colorDict.top[7],
            colorDict.top[8],
            colorDict.top[9],
            colorDict.right[1],
            colorDict.right[4],
            colorDict.right[7],
            colorDict.bottom[1],
            colorDict.bottom[2],
            colorDict.bottom[3],
            colorDict.left[9],
            colorDict.left[6],
            colorDict.left[3]
        ]

        let toChange = [
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

        swapEdges(toChange, targetColors, "front")
        swapFace("front")
    }

    window.onload=function() {

        const btn = document.getElementById('test-button')
        btn.addEventListener('click', shiftCenter)

        setStartColors()
    }

    function setStartColors() {
        for(var i = 1; i < 10; i++) {
            document.getElementById('face-front-' + i).style.backgroundColor = colorDict["front"][i]
        }
    }


    return (
        <div className="master-container">
            <button id="test-button" type="button" className="btn btn-primary">Click to Spin</button>

            <div className="grid">
                <div className="cube-face"></div>
                <div className="cube-face">
                    <div id="face-top-1" className="cube-square square-color-blue"></div>
                    <div id="face-top-2" className="cube-square square-color-blue"></div>
                    <div id="face-top-3" className="cube-square square-color-blue"></div>
                    <div id="face-top-4" className="cube-square square-color-blue"></div>
                    <div id="face-top-5" className="face-center square-color-blue"></div>
                    <div id="face-top-6" className="cube-square square-color-blue"></div>
                    <div id="face-top-7" className="cube-square square-color-blue"></div>
                    <div id="face-top-8" className="cube-square square-color-blue"></div>
                    <div id="face-top-9" className="cube-square square-color-blue"></div>
                </div>
                <div className="cube-face"></div>
                <div className="cube-face">
                    <div id="face-left-1" className="cube-square square-color-orange"></div>
                    <div id="face-left-2" className="cube-square square-color-orange"></div>
                    <div id="face-left-3" className="cube-square square-color-orange"></div>
                    <div id="face-left-4" className="cube-square square-color-orange"></div>
                    <div id="face-left-5" className="face-center square-color-orange"></div>
                    <div id="face-left-6" className="cube-square square-color-orange"></div>
                    <div id="face-left-7" className="cube-square square-color-orange"></div>
                    <div id="face-left-8" className="cube-square square-color-orange"></div>
                    <div id="face-left-9" className="cube-square square-color-orange"></div>
                </div>

                <div className="cube-face">
                    <div id="face-front-1" className="cube-square "></div>
                    <div id="face-front-2" className="cube-square "></div>
                    <div id="face-front-3" className="cube-square "></div>
                    <div id="face-front-4" className="cube-square "></div>
                    <div id="face-front-5" className="face-center "></div>
                    <div id="face-front-6" className="cube-square"></div>
                    <div id="face-front-7" className="cube-square "></div>
                    <div id="face-front-8" className="cube-square "></div>
                    <div id="face-front-9" className="cube-square"></div>
                </div>

                <div className="cube-face">
                    <div id="face-right-1" className="cube-square square-color-red"></div>
                    <div id="face-right-2" className="cube-square square-color-red"></div>
                    <div id="face-right-3" className="cube-square square-color-red"></div>
                    <div id="face-right-4" className="cube-square square-color-red"></div>
                    <div id="face-right-5" className="face-center square-color-red"></div>
                    <div id="face-right-6" className="cube-square square-color-red"></div>
                    <div id="face-right-7" className="cube-square square-color-red"></div>
                    <div id="face-right-8" className="cube-square square-color-red"></div>
                    <div id="face-right-9" className="cube-square square-color-red"></div>
                </div>
                <div className="cube-face"></div>
                <div className="cube-face">
                    <div id="face-bottom-1" className="cube-square square-color-green"></div>
                    <div id="face-bottom-2"  className="cube-square square-color-green"></div>
                    <div id="face-bottom-3"  className="cube-square square-color-green"></div>
                    <div id="face-bottom-4"  className="cube-square square-color-green"></div>
                    <div id="face-bottom-5"  className="face-center square-color-green"></div>
                    <div id="face-bottom-6"  className="cube-square square-color-green"></div>
                    <div id="face-bottom-7"  className="cube-square square-color-green"></div>
                    <div id="face-bottom-8"  className="cube-square square-color-green"></div>
                    <div id="face-bottom-9"  className="cube-square square-color-green"></div>
                </div>
                <div className="cube-face"></div>

            </div>
        </div>
    );
}

export default Cube;