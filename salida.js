var url1 = "https://icanhazdadjoke.com/slack";
var url2 = "http://api.icndb.com/jokes/random";
var url;
var rspons = document.getElementById("newC");
var t = document.getElementById("time_icon");
var voteJokeArray = [];
var vote = document.querySelector('#vote');
var vote1 = document.querySelector('#vote1');
var vote2 = document.querySelector('#vote2');
//api tiempo
var urlTiempo = "https://api.openweathermap.org/data/2.5/weather?q=Viladecans&appid=627aa969661baab827695cf16c308561";
fetch(urlTiempo)
    .then(function (response) { return response.json(); })
    .then(function (time) {
    console.log("src:'https://openweathermap.org/img/w/" + time.weather[0].icon + ".png'");
    t.setAttribute("src", "https://openweathermap.org/img/wn/" + time.weather[0].icon + "@2x.png");
});
//api tiempo end
function callApi() {
    var select = Math.floor(Math.random() * 2);
    console.log(select);
    switch (select) {
        case 0:
            url = url1;
            break;
        case 1:
            url = url2;
            break;
    }
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (joke) {
        if (url == url1) {
            rspons.innerHTML = joke.attachments[0].fallback;
        }
        else {
            rspons.innerHTML = joke.value.joke;
        }
        vote.setAttribute("style", "display:inline");
        vote1.setAttribute("style", "display:inline");
        vote2.setAttribute("style", "display:inline");
    });
}
function voteJoke(vote) {
    var d = new Date();
    voteJokeArray.push({ "joke": rspons.innerHTML, "score": vote, "date": d.toISOString() });
    console.log(voteJokeArray);
    callApi();
}
