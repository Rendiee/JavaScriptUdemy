let btn = document.getElementById('button-timer');
let container = document.getElementById('container');
let count = 10;

let interTimer;

btn.addEventListener('click', () => {
    start();
});

function start()
{
    interTimer = setInterval(decompte, 1000);
}

function decompte()
{
    if(count != 0)
    {
        let p = document.createElement("p");
        p.textContent = count;
        container.append(p)
        count -= 1;
    }else{
        stop();
    }
}

function stop()
{
    clearInterval(interTimer);
    let stop = document.createElement("p");
    stop.textContent = "Stop !";
    container.append(stop);

}