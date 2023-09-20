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

createImage('./img/img-1.jpg')
    .then(() => {
        return wait(4);
    })
    .then(() => {
        imageWrapper.lastChild.remove();
        createImage('./img/img-2.jpg');

        return wait(4);
    })
    .then(() => {
        imageWrapper.lastChild.remove();
        createImage('./img/img-3.jpg');

        return wait(4);
    })
    .then(() => {
        imageWrapper.lastChild.remove();
    })
    .catch(err => {
        alert(err);
    });
