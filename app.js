const inputText = document.querySelector('#input');
const btnTranslate = document.querySelector('.btn');
const output = document.querySelector('#output');

const url = "https://api.funtranslations.com/translate/navi.json"

function fetchTranslateApi(text) {
    return url + '?' + 'text=' + text
}

function errorHandler(error) {
    console.log('error occured', error);
    alert('There is a problem with the server! Please try again later');
}

function clickShow() {
    let inptxt = inputText.value;

    fetch(fetchTranslateApi)
    .then(response => response.json())
    .then(json => {

        let translatedOutput = json.contents.translated
        output.innerText = translatedOutput
    })
    
    .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickShow);