var buttonTranslate = document.querySelector("#btn-translate")
var buttonSampleText = document.querySelector("#btn-sampleText")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

buttonTranslate.addEventListener("click",clickHandler)
buttonSampleText.addEventListener("click",sampleText)

function getTranslationUrl(input){
    return("https://api.funtranslations.com/translate/dothraki.json" + "?text=" + input)
}

function errorHandler(error){
    alert("something went wrong with server \nTRY AGAIN LATER !!")
    console.log(error.message)
}
//when click happens
function clickHandler(){
    let inputText= txtInput.value       //getting input text
    //getting server request
    fetch(getTranslationUrl(inputText))        //inputText is sent as an argument to getTranslationUrl
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated       //assigning only the translated part of the response
        outputDiv.innerText= translatedText         //output
    })
    .catch(errorHandler)
}
function sampleText(){
    var paste="I will take my wife west to where the world ends"
    txtInput.innerText=paste
}
