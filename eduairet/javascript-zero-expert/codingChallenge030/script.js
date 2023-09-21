const imageWrapper = document.getElementById('image-wrapper');

const wait = seconds => {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = src => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = src;
        img.addEventListener('load', () => {
            imageWrapper.append(img);
            resolve(img);
        });
        img.addEventListener('error', () => {
            reject(new Error('Image not found'));
        });
    });
};

const loadPause = async i => {
    try {
        await createImage(`./img/img-${i}.jpg`);
        await wait(4);
        imageWrapper.lastChild.remove();
    } catch (err) {
        alert(err);
    }
};

const loadAll = async () => {
    try {
        for (const i of [1, 2, 3]) await loadPause(i);
    } catch (err) {
        alert(err);
    }
};

loadAll();
