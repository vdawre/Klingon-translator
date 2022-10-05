
document.getElementById('btn').addEventListener("click", translateText);

var inputText = document.getElementById('inputText');
var outputText = document.getElementById('output');
var serverUrl = "https://api.funtranslations.com/translate/klingon.json";
var translatedText = "";


function generateURL(inputText) {
    return serverUrl + "?" + "text=" + inputText.value;
}


function translateText() {
    fetch(generateURL(inputText)).then(response => response.json()).then(json => {
        translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    }).catch((error) => {
        alert("Sorry! Server busy, try again.");
    });
}
