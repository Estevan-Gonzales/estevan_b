import '../assets/typehype.css';

function TypeHype() {

  document.addEventListener('keydown', function(event) {
    event.stopImmediatePropagation();

    let keyLetters = "qwertyuiopasdfghjklzxcvbnm".split('');
    for (let i=0; i<keyLetters.length; i++) {
      if (event.key === keyLetters[i]) {
        let selectedElement = document.getElementById(keyLetters[i]);
        selectedElement.className = "key-pressed";
      }
    }

    let keyNumbers = "1234567890".split('');
    for (let i=0; i<keyNumbers.length; i++) {
      if (event.key === keyNumbers[i]) {
        let selectedElement = document.getElementById("key" + keyNumbers[i]);
        selectedElement.className = "key-pressed";
      }
    }

    if (event.code === "ShiftRight") {
      let toShow = document.getElementsByClassName("key-double-alt");
      for (let i=0; i<toShow.length; i++) {
        toShow[i].hidden = false;
      }

      let toHide = document.getElementsByClassName("key-double");
      for (let i=0; i<toHide.length; i++) {
        toHide[i].hidden = true;
      }

      let selectedElement = document.getElementById("keyShiftRight");
      selectedElement.className = "key-pressed";
    }

    if (event.code === "ShiftLeft") {
      let toShow = document.getElementsByClassName("key-double-alt");
      for (let i=0; i<toShow.length; i++) {
        toShow[i].hidden = false;
      }

      let toHide = document.getElementsByClassName("key-double");
      for (let i=0; i<toHide.length; i++) {
        toHide[i].hidden = true;
      }

      let selectedElement = document.getElementById("keyShiftLeft");
      selectedElement.className = "key-pressed";
    }

    let keySingles = ["ControlLeft", "AltLeft", "MetaLeft", "Space", "Backspace", "Enter", "MetaRight", "AltRight"];
    for (let i=0; i<keySingles.length; i++) {
      if (event.code === keySingles[i]) {
        let selectedElement = document.getElementById(keySingles[i]);
        selectedElement.className = "key-pressed";
      }
    }
  });

//------------------------------------------------------------

  document.addEventListener('keyup', function(event) {
    event.stopImmediatePropagation();
    let keyLetters = "qwertyuiopasdfghjklzxcvbnm".split('');
    for (let i=0; i<keyLetters.length; i++) {
      if (event.key === keyLetters[i]) {
        let selectedElement = document.getElementById(keyLetters[i]);
        selectedElement.className = "key-letter";
      }
    }

    let keyNumbers = "1234567890".split('');
    for (let i=0; i<keyNumbers.length; i++) {
      if (event.key === keyNumbers[i]) {
        let selectedElement = document.getElementById("key" + keyNumbers[i]);
        selectedElement.className = "key-double";
      }
    }

    if (event.code === "ShiftRight") {
      let toShow = document.getElementsByClassName("key-double-alt");
      for (let i=0; i<toShow.length; i++) {
        toShow[i].hidden = true;
      }

      let toHide = document.getElementsByClassName("key-double");
      for (let i=0; i<toHide.length; i++) {
        toHide[i].hidden = false;
      }

      let selectedElement = document.getElementById("keyShiftRight");
      selectedElement.className = "key-single";
    }


    if (event.code === "ShiftLeft") {
      let toShow = document.getElementsByClassName("key-double-alt");
      for (let i=0; i<toShow.length; i++) {
        toShow[i].hidden = true;
      }

      let toHide = document.getElementsByClassName("key-double");
      for (let i=0; i<toHide.length; i++) {
        toHide[i].hidden = false;
      }

      let selectedElement = document.getElementById("keyShiftLeft");
      selectedElement.className = "key-single";
    }

    let keySingles = ["ControlLeft", "AltLeft", "MetaLeft", "Space", "Backspace", "Enter", "MetaRight", "AltRight"];
    for (let i=0; i<keySingles.length; i++) {
      if (event.code === keySingles[i]) {
        let selectedElement = document.getElementById(keySingles[i]);
        selectedElement.className = "key-single";
      }
    }
  })

//------------------------------------------------------------

  return (
    <div className="grid-typehype">
      <div className="row-1">
        <div className="key-double" id="keyBacktick">`</div>
        <div className="key-double-alt" id="keyTilde" hidden={true}>~</div>
        <div className="key-double" id="key1">1</div>
        <div className="key-double-alt" id="keyExclamation" hidden={true}>!</div>
        <div className="key-double" id="key2">2</div>
        <div className="key-double-alt" id="keyAt" hidden={true}>@</div>
        <div className="key-double" id="key3">3</div>
        <div className="key-double-alt" id="keyPound" hidden={true}>#</div>
        <div className="key-double" id="key4">4</div>
        <div className="key-double-alt" id="keyDollar" hidden={true}>$</div>
        <div className="key-double" id="key5">5</div>
        <div className="key-double-alt" id="keyPercent" hidden={true}>%</div>
        <div className="key-double" id="key6">6</div>
        <div className="key-double-alt" id="keyCarrot" hidden={true}>^</div>
        <div className="key-double" id="key7">7</div>
        <div className="key-double-alt" id="keyAnd" hidden={true}>&</div>
        <div className="key-double" id="key8">8</div>
        <div className="key-double-alt" id="keyAsterisk" hidden={true}>*</div>
        <div className="key-double" id="key9">9</div>
        <div className="key-double-alt" id="keyOpenParens" hidden={true}>(</div>
        <div className="key-double" id="key0">0</div>
        <div className="key-double-alt" id="keyCloseParens" hidden={true}>)</div>
        <div className="key-double" id="keyMinus">-</div>
        <div className="key-double-alt" id="keyUnderscore" hidden={true}>_</div>
        <div className="key-double" id="keyEqual">=</div>
        <div className="key-double-alt" id="keyPlus" hidden={true}>+</div>
        <div className="key-single" id="Backspace">DELETE</div>
      </div>

      <div className="row-2">
        <div className="key-single" id="TabNoUse">TAB</div>
        <div className="key-letter" id="q">Q</div>
        <div className="key-letter" id="w">W</div>
        <div className="key-letter" id="e">E</div>
        <div className="key-letter" id="r">R</div>
        <div className="key-letter" id="t">T</div>
        <div className="key-letter" id="y">Y</div>
        <div className="key-letter" id="u">U</div>
        <div className="key-letter" id="i">I</div>
        <div className="key-letter" id="o">O</div>
        <div className="key-letter" id="p">P</div>
        <div className="key-double" id="keyOpenBracket">[</div>
        <div className="key-double-alt" id="keyObenCurlyBrackets" hidden={true}></div>
        <div className="key-double" id="keyCloseBrackets">]</div>
        <div className="key-double-alt" id="keyCloseCurlyBrackets" hidden={true}></div>
        <div className="key-double" id="keyBackslash">\</div>
        <div className="key-double-alt" id="keyPipe" hidden={true}>|</div>
      </div>
      <div className="row-3">
        <div className="key-single" id="CapsLocks">CAPS</div>
        <div className="key-letter" id="a">A</div>
        <div className="key-letter" id="s">S</div>
        <div className="key-letter" id="d">D</div>
        <div className="key-letter" id="f">F</div>
        <div className="key-letter" id="g">G</div>
        <div className="key-letter" id="h">H</div>
        <div className="key-letter" id="j">J</div>
        <div className="key-letter" id="k">K</div>
        <div className="key-letter" id="l">L</div>
        <div className="key-double" id="keySemicolon">;</div>
        <div className="key-double-alt" id="keyColon" hidden={true}>:</div>
        <div className="key-double" id="keySingleParenthesis">'</div>
        <div className="key-double-alt" id="keyDoubleParenthesis" hidden={true}>"</div>
        <div className="key-single" id="Enter">RETURN</div>
      </div>
      <div className="row-4">
        <div className="key-single" id="keyShiftLeft">SHIFT</div>
        <div className="key-letter" id="z">Z</div>
        <div className="key-letter" id="x">X</div>
        <div className="key-letter" id="c">C</div>
        <div className="key-letter" id="v">V</div>
        <div className="key-letter" id="b">B</div>
        <div className="key-letter" id="n">N</div>
        <div className="key-letter" id="m">M</div>
        <div className="key-double" id="keyComma">,</div>
        <div className="key-double-alt" id="keyLessThan" hidden={true}></div>
        <div className="key-double" id="KeyPeriod">.</div>
        <div className="key-double-alt" id="keyLessThan" hidden={true}></div>
        <div className="key-double" id="keySlash">/</div>
        <div className="key-double-alt" id="keyLessThan" hidden={true}>?</div>
        <div className="key-single" id="keyShiftRight">SHIFT</div>
      </div>
      <div className="row-5">
        <div className="key-single" id="ControlLeft">CTRL</div>
        <div className="key-single" id="AltLeft">OPT</div>
        <div className="key-single" id="MetaLeft">CMD</div>
        <div className="key-single" id="Space">SPACE</div>
        <div className="key-single" id="MetaRight">CMD</div>
        <div className="key-single" id="AltRight">OPT</div>
        <div className="filler"></div>
        <div className="filler"></div>
      </div>
    </div>
  );
}

export default TypeHype;
