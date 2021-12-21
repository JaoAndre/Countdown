var countDate = new Date("Jan 1, 2022 00:00:00").getTime();

function countDown() {
    var now = new Date().getTime();
    var distance = countDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

if (countDate > new Date().getTime()) {
    setInterval(countDown, 1000);
}