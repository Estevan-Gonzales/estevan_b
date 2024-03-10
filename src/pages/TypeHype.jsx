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

    let keyLettersCap = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
    for (let i=0; i<keyLettersCap.length; i++) {
      if (event.key === keyLettersCap[i]) {
        let selectedElement = document.getElementById(keyLettersCap[i]);
        selectedElement.className = "key-pressed-cap";
      }
    }


    let keyNumbers = "1234567890`-=[];',./".split('');
    for (let i=0; i<keyNumbers.length; i++) {
      if (event.key === keyNumbers[i]) {
        let selectedElement = document.getElementById("key" + keyNumbers[i]);
        selectedElement.className = "key-pressed";
      }
    }

    let specials = '~!@#$%^&*()_+{}|:"<>?'.split('');
    for (let i=0; i<specials.length; i++) {
      if (event.key === specials[i]) {
        let selectedElement = document.getElementById("key" + specials[i]);
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

      let toShowLetters = document.getElementsByClassName("key-letter-alt");
      for (let i=0; i<toShowLetters.length; i++) {
        toShowLetters[i].hidden = false;
      }

      let toHideLetters = document.getElementsByClassName("key-letter");
      for (let i=0; i<toHideLetters.length; i++) {
        toHideLetters[i].hidden = true;
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

      let toShowLetters = document.getElementsByClassName("key-letter-alt");
      for (let i=0; i<toShowLetters.length; i++) {
        toShowLetters[i].hidden = false;
      }

      let toHideLetters = document.getElementsByClassName("key-letter");
      for (let i=0; i<toHideLetters.length; i++) {
        toHideLetters[i].hidden = true;
      }

      let selectedElement = document.getElementById("keyShiftLeft");
      selectedElement.className = "key-pressed";
    }

    if (event.code === "CapsLock") {
      let toShowCaps = document.getElementsByClassName("key-letter-alt");
      for (let i=0; i<toShowCaps.length; i++) {
        toShowCaps[i].hidden = false;
      }

      let toHideCaps = document.getElementsByClassName("key-letter");
      for (let i=0; i<toHideCaps.length; i++) {
        toHideCaps[i].hidden = true;
      }
    }



    let keySingles = ["ControlLeft", "AltLeft", "MetaLeft", "Space", "Backspace", "Enter", "MetaRight", "AltRight", "CapsLock"];
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
        selectedElement.className = "key key-letter";
      }
    }

    let keyLettersCap = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
    for (let i=0; i<keyLettersCap.length; i++) {
      if (event.key === keyLettersCap[i]) {
        let selectedElement = document.getElementById(keyLettersCap[i]);
        selectedElement.className = "key key-letter-alt";
      }
    }
    
    let keyNumbers = "1234567890`-=[];',./".split('');
    for (let i=0; i<keyNumbers.length; i++) {
      if (event.key === keyNumbers[i]) {
        let selectedElement = document.getElementById("key" + keyNumbers[i]);
        selectedElement.className = "key key-double";
      }
    }

    let specials = '~!@#$%^&*()_+{}|:"<>?'.split('');
    for (let i=0; i<specials.length; i++) {
      if (event.key === specials[i]) {
        let selectedElement = document.getElementById("key" + specials[i]);
        selectedElement.className = "key key-double-alt";
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

      let toShowLetters = document.getElementsByClassName("key-letter-alt");
      for (let i=0; i<toShowLetters.length; i++) {
        toShowLetters[i].hidden = true;
      }

      let toHideLetters = document.getElementsByClassName("key-letter");
      for (let i=0; i<toHideLetters.length; i++) {
        toHideLetters[i].hidden = false;
      }

      let selectedElement = document.getElementById("keyShiftRight");
      selectedElement.className = "key key-single";
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

  
      let toShowLetters = document.getElementsByClassName("key-letter-alt");
      for (let i=0; i<toShowLetters.length; i++) {
        toShowLetters[i].hidden = true;
      }

      let toHideLetters = document.getElementsByClassName("key-letter");
      for (let i=0; i<toHideLetters.length; i++) {
        toHideLetters[i].hidden = false;
      }

      let selectedElement = document.getElementById("keyShiftLeft");
      selectedElement.className = "key key-single";
    }

    if (event.code === "CapsLock") {
      let toShowCaps = document.getElementsByClassName("key-letter-alt");
      for (let i=0; i<toShowCaps.length; i++) {
        toShowCaps[i].hidden = true;
      }

      let toHideCaps = document.getElementsByClassName("key-letter");
      for (let i=0; i<toHideCaps.length; i++) {
        toHideCaps[i].hidden = false;
      }
    }

    let keySingles = ["ControlLeft", "AltLeft", "MetaLeft", "Space", "Backspace", "Enter", "MetaRight", "AltRight", "CapsLock"];
    for (let i=0; i<keySingles.length; i++) {
      if (event.code === keySingles[i]) {
        let selectedElement = document.getElementById(keySingles[i]);
        selectedElement.className = "key key-single";
      }
    }
  })

//------------------------------------------------------------

  let textOpenBrackets = "["
  let textCloseBrackets = "]"
  let textOpenCurlyBrackets = "{"
  let textCloseCurlyBrackets = "}"

return (
  <div className="grid-typehype">
    
    <div className="row-1">
      <div className="key key-double" id="key`">`</div>
      <div className="key key-double-alt" id="key~" hidden={true}>~</div>
      <div className="key key-double" id="key1">1</div>
      <div className="key key-double-alt" id="key!" hidden={true}>!</div>
      <div className="key key-double" id="key2">2</div>
      <div className="key key-double-alt" id="key@" hidden={true}>@</div>
      <div className="key key-double" id="key3">3</div>
      <div className="key key-double-alt" id="key#" hidden={true}>#</div>
      <div className="key key-double" id="key4">4</div>
      <div className="key key-double-alt" id="key$" hidden={true}>$</div>
      <div className="key key-double" id="key5">5</div>
      <div className="key key-double-alt" id="key%" hidden={true}>%</div>
      <div className="key key-double" id="key6">6</div>
      <div className="key key-double-alt" id="key^" hidden={true}>^</div>
      <div className="key key-double" id="key7">7</div>
      <div className="key key-double-alt" id="key&" hidden={true}>&</div>
      <div className="key key-double" id="key8">8</div>
      <div className="key key-double-alt" id="key*" hidden={true}>*</div>
      <div className="key key-double" id="key9">9</div>
      <div className="key key-double-alt" id="key(" hidden={true}>(</div>
      <div className="key key-double" id="key0">0</div>
      <div className="key key-double-alt" id="key)" hidden={true}>)</div>
      <div className="key key-double" id="key-">-</div>
      <div className="key key-double-alt" id="key_" hidden={true}>_</div>
      <div className="key key-double" id="key=">=</div>
      <div className="key key-double-alt" id="key+" hidden={true}>+</div>
      <div className="key key-single" id="Backspace">DELETE</div>
    </div>

    <div className="row-2">
      <div className="key key-single" id="TabNoUse">TAB</div>
      <div className="key key-letter" id="q">Q</div>
      <div className="key key-letter-alt" id="Q" hidden={true}>Q</div>
      <div className="key key-letter" id="w">W</div>
      <div className="key key-letter-alt" id="W" hidden={true}>W</div>
      <div className="key key-letter" id="e">E</div>
      <div className="key key-letter-alt" id="E" hidden={true}>E</div>
      <div className="key key-letter" id="r">R</div>
      <div className="key key-letter-alt" id="R" hidden={true}>R</div>
      <div className="key key-letter" id="t">T</div>
      <div className="key key-letter-alt" id="T" hidden={true}>T</div>
      <div className="key key-letter" id="y">Y</div>
      <div className="key key-letter-alt" id="Y" hidden={true}>Y</div>
      <div className="key key-letter" id="u">U</div>
      <div className="key key-letter-alt" id="U" hidden={true}>U</div>
      <div className="key key-letter" id="i">I</div>
      <div className="key key-letter-alt" id="I" hidden={true}>I</div>
      <div className="key key-letter" id="o">O</div>
      <div className="key key-letter-alt" id="O" hidden={true}>O</div>
      <div className="key key-letter" id="p">P</div>
      <div className="key key-letter-alt" id="P" hidden={true}>P</div>


      <div className="key key-double" id="key[">{textOpenBrackets}</div>
      <div className="key key-double-alt" id="key{" hidden={true}>{textOpenCurlyBrackets}</div>
      <div className="key key-double" id="key]">{textCloseBrackets}</div>
      <div className="key key-double-alt" id="key}" hidden={true}>{textCloseCurlyBrackets}</div>
      <div className="key key-double" id="key\">\</div>
      <div className="key key-double-alt" id="key|" hidden={true}>|</div>
    </div>
    <div className="row-3">
      <div className="key key-single" id="CapsLock">CAPS</div>
      <div className="key key-letter" id="a">A</div>
      <div className="key key-letter-alt" id="A" hidden={true}>A</div>
      <div className="key key-letter" id="s">S</div>
      <div className="key key-letter-alt" id="S" hidden={true}>S</div>
      <div className="key key-letter" id="d">D</div>
      <div className="key key-letter-alt" id="D" hidden={true}>D</div>
      <div className="key key-letter" id="f">F</div>
      <div className="key key-letter-alt" id="F" hidden={true}>F</div>
      <div className="key key-letter" id="g">G</div>
      <div className="key key-letter-alt" id="G" hidden={true}>G</div>
      <div className="key key-letter" id="h">H</div>
      <div className="key key-letter-alt" id="H" hidden={true}>H</div>
      <div className="key key-letter" id="j">J</div>
      <div className="key key-letter-alt" id="J" hidden={true}>J</div>
      <div className="key key-letter" id="k">K</div>
      <div className="key key-letter-alt" id="K" hidden={true}>K</div>
      <div className="key key-letter" id="l">L</div>
      <div className="key key-letter-alt" id="L" hidden={true}>L</div>



      <div className="key key-double" id="key;">;</div>
      <div className="key key-double-alt" id="key:" hidden={true}>:</div>
      <div className="key key-double" id="key'">'</div>
      <div className="key key-double-alt" id='key"' hidden={true}>"</div>
      <div className="key key-single" id="Enter">RETURN</div>
    </div>
    <div className="row-4">
      <div className="key key-single" id="keyShiftLeft">SHIFT</div>
      <div className="key key-letter" id="z">Z</div>
      <div className="key key-letter-alt" id="Z" hidden={true}>Z</div>
      <div className="key key-letter" id="x">X</div>
      <div className="key key-letter-alt" id="X" hidden={true}>X</div>
      <div className="key key-letter" id="c">C</div>
      <div className="key key-letter-alt" id="C" hidden={true}>C</div>
      <div className="key key-letter" id="v">V</div>
      <div className="key key-letter-alt" id="V" hidden={true}>V</div>
      <div className="key key-letter" id="b">B</div>
      <div className="key key-letter-alt" id="B" hidden={true}>B</div>
      <div className="key key-letter" id="n">N</div>
      <div className="key key-letter-alt" id="N" hidden={true}>N</div>
      <div className="key key-letter" id="m">M</div>
      <div className="key key-letter-alt" id="M" hidden={true}>M</div>
      <div className="key key-double" id="key,">,</div>
      <div className="key key-double-alt" id="key<" hidden={true}>&#60;</div>
      <div className="key key-double" id="key.">.</div>
      <div className="key key-double-alt" id="key>" hidden={true}>&#62;</div>
      <div className="key key-double" id="key/">/</div>
      <div className="key key-double-alt" id="key?" hidden={true}>?</div>
      <div className="key key-single" id="keyShiftRight">SHIFT</div>
    </div>
    <div className="row-5">
      <div className="key key-single" id="ControlLeft">CTRL</div>
      <div className="key key-single" id="AltLeft">OPT</div>
      <div className="key key-single" id="MetaLeft">CMD</div>
      <div className="key key-single" id="Space">SPACE</div>
      <div className="key key-single" id="MetaRight">CMD</div>
      <div className="key key-single" id="AltRight">OPT</div>
      <div className="key filler"></div>
      <div className="key filler"></div>
    </div>

  </div>
);
}

export default TypeHype;
