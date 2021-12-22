const countDate = new Date('Jan 1, 2022 00:00:00').getTime();

function countDown() {
    const now = new Date().getTime();
    const distance = countDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(countDown, 1000);