if (face == "top") {
    var toChange = ['face-top-1', 'face-top-2', 'face-top-3', 'face-top-6','face-top-9', 'face-top-8', 'face-top-7', 'face-top-4']
    var targetColors = [
        colorDict.top[7],
        colorDict.top[4],
        colorDict.top[1],
        colorDict.top[2],
        colorDict.top[3],
        colorDict.top[6],
        colorDict.top[9],
        colorDict.top[8]]

    var count = toChange.length;
    for (var i=0; i<count; i++) {
        document.getElementById(toChange[i]).style.backgroundColor = targetColors[i]
        let face = toChange[i].split("-")[1]
        let position = toChange[i].split("-")[2]
        colorDict[face][position] = targetColors[i]
    }
}