function setTime() {
    let element = document.getElementById("time");
    let now = new Date();

    element.innerHTML = now.toLocaleTimeString();
    /*document.body.style.background = "#aaaaaa";*/
    setInterval(setTime, 1000);
}

window.onload = setTime;
