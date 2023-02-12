setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    Hrotation = 30 * htime + (mtime / 2);
    Mrotation = 6 * mtime;
    Srotation = 6 * stime;

    hour.style.transform = `rotate(${Hrotation}deg)`;
    min.style.transform = `rotate(${Mrotation}deg)`;
    sec.style.transform = `rotate(${Srotation}deg)`;
}, 1000);

