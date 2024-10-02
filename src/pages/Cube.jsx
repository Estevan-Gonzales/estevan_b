import '../assets/cube.css'

function Cube() {

    var button = document.getElementById("test-button")
    button.addEventListener("click", function() {
        var target = document.getElementById("face-top-1")
        target.innerText = "Hello!"
    })

    return (
        <div className="master-container">

            <button id="test-button" type="button" class="btn btn-primary">Click to Spin</button>

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
                    <div id="face-center-1" className="cube-square square-color-white"></div>
                    <div id="face-center-2" className="cube-square square-color-white"></div>
                    <div id="face-center-3" className="cube-square square-color-white"></div>
                    <div id="face-center-4" className="cube-square square-color-white"></div>
                    <div id="face-center-5" className="face-center square-color-white"></div>
                    <div id="face-center-6" className="cube-square square-color-white"></div>
                    <div id="face-center-7" className="cube-square square-color-white"></div>
                    <div id="face-center-8" className="cube-square square-color-white"></div>
                    <div id="face-center-9" className="cube-square square-color-white"></div>
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