function buyButton() {
    var answer = confirm("Want to go to the bot in Telegram, for Premium purchases?")
    if (answer){
        window.location = "https://t.me/aboutsound_bot";
    }
    else{
        alert("Ok! You can close the window.");
}
}

function redirectButton() {
    var answer = confirm("Want to go to about:sound_bot?")
    if (answer){
        window.location = "https://t.me/aboutsound_bot";
    }
    else{
        alert("Ok! You can close the window.");
}
}

function buyButtonRu() {
    var answer = confirm("Хотите перейти к боту в Telegram, для покупки Premium?")
    if (answer){
        window.location = "https://t.me/aboutsound_bot";
    }
    else{
        alert("Хорошо! Можете закрыть окно.");
}
}

function redirectButtonRu() {
    var answer = confirm("Вы хотите перейти к about:sound_bot?")
    if (answer){
        window.location = "https://t.me/aboutsound_bot";
    }
    else{
        alert("Хорошо! Можете закрыть окно.");
}
}