function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2,'0');
    const second = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('clock').textContent = `${hours}:${minute}:${second}`;

    const opsi = { weekday : 'long', year : 'numeric', month : 'long', day : 'numeric'};
    document.getElementById('date').textContent = now.toLocaleDateString('id-ID', opsi);
}
setInterval(updateClock, 1000);
updateClock();