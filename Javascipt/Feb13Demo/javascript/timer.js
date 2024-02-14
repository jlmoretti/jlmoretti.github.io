function showTime() {

    // Date Object
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format Our String
    const time = hours + ":" + minutes + ":" + seconds;

    // Display Our String
    document.getElementById("timer").innerText = time;

    setTimeout(showTime, 1000);

}

showTime();