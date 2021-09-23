function encryption() {
    const morsecode = new Map([
        ["A", "._"],
        ["B", "_..."],
        ["C", "_._."],
        ["D", "_.."],
        ["E", "."],
        ["F", ".._."],
        ["G", "__."],
        ["H", "...."],
        ["I", ".."],
        ["J", ".___"],
        ["K", "_._"],
        ["L", "._.."],
        ["M", "__"],
        ["N", "_."],
        ["O", "___"],
        ["P", ".__."],
        ["Q", "__._"],
        ["R", "._."],
        ["S", "..."],
        ["T", "_"],
        ["U", ".._"],
        ["V", "..._"],
        ["W", ".__"],
        ["X", "_.._"],
        ["Y", "_.__"],
        ["Z", "__.."],
        ["1", "._____"],
        ["2", "..___"],
        ["3", "...__"],
        ["4", "...._"],
        ["5", "....."],
        ["6", "_...."],
        ["7", "__..."],
        ["8", "___.."],
        ["9", "____."],
        ["0", "._._._"],
        [" ", "$"]
    ]);
    var text = document.getElementById("message").value;
    var newtext = text.toUpperCase()
    var len = newtext.length;
    var result = "";
    for (let i = 0; i < len; i++) {
        result += morsecode.get(newtext[i]);
        result += " ";
    }
    document.getElementById("answer1").innerHTML = result;
}

function decryption() {
    const morsecode = new Map([
        ["A", "._"],
        ["B", "_..."],
        ["C", "_._."],
        ["D", "_.."],
        ["E", "."],
        ["F", ".._."],
        ["G", "__."],
        ["H", "...."],
        ["I", ".."],
        ["J", ".___"],
        ["K", "_._"],
        ["L", "._.."],
        ["M", "__"],
        ["N", "_."],
        ["O", "___"],
        ["P", ".__."],
        ["Q", "__._"],
        ["R", "._."],
        ["S", "..."],
        ["T", "_"],
        ["U", ".._"],
        ["V", "..._"],
        ["W", ".__"],
        ["X", "_.._"],
        ["Y", "_.__"],
        ["Z", "__.."],
        ["1", "._____"],
        ["2", "..___"],
        ["3", "...__"],
        ["4", "...._"],
        ["5", "....."],
        ["6", "_...."],
        ["7", "__..."],
        ["8", "___.."],
        ["9", "____."],
        ["0", "._._._"],
        [" ", "$"]
    ]);
    var text2 = document.getElementById("message2").value;
    var len2 = text2.length;
    var result2 = "";
    var ind = 0;

    function getKey(value) {
        return [...morsecode].find(([key, val]) => val == value)[0]
    }
    for (i = 0; i < len2; i++) {
        if (text2[i] == " " && text2[i - 1] != " ") {
            result2 += getKey(text2.substring(ind, i));
            ind = i + 1;
        } else if (i == len2 - 1) {
            result2 += getKey(text2.substring(ind, i + 1));
        } else if (text2[i] == " " && text2[i - 1] == " ") {
            result2 += " ";
            ind = i + 1;
        } else if (text2[i] == " ") {
            result2 += " ";
        } else {
            result2 += "";
        }
    }
    result2 = result2.toLowerCase();
    document.getElementById("answer2").innerHTML = result2;
}