let lasttime;

/*
const ball = {
    id: "ball1",
    color: "blue",
    position_v: 0,
    position_h: 0,
    size: 10
}
*/

function Ball(id, color) {
    this.id = id;
    this.color = color;
    this.position_h = 0;
    this.position_v = 0;
    // this.size = 10;
}

let ball = new Ball("ball1", "blue");
ball.size = 12;

Ball.prototype.size = 10;
let ball2 = new Ball("ball2", "red");

alert(ball2.size);

// Ball.prototype.associated_class = "ballClass";

function moveBall(time) {
    let myBall = document.getElementById("ball1");
    myBall.backgroundColor = ball.color;

    if(lasttime != null) {
        const delta = time - lasttime;
        ball.position_h += delta * .01;
        ball.position_v += delta * .01;
        myBall.style.left = ball.position_h + "%";
        myBall.style.top = ball.position_v + "%";

        if(ball.position_h > 100)
            ball.position_h = 0;
        if(ball.position_v > 100)
            ball.position_v = 0;

        let mySizeAdjustment = Math.floor(Math.random() * 4) - 2;
        ball.size += mySizeAdjustment;
        if(ball.size < 0)
            ball.size = 1;
        if(ball.size > 10)
            ball.size = 10;
        myBall.style.height = ball.size + "%";
        myBall.style.width = ball.size + "%";
    }

    lasttime = time;
    window.requestAnimationFrame(moveBall);
}

window.requestAnimationFrame(moveBall);