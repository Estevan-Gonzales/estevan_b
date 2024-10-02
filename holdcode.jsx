if (face == "top") {
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