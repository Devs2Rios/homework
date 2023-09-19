const title = str =>
    str
        .split(' ')
        .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');

const endpoint = (lat = 0, lng = 0) =>
    `https://geocode.xyz/${lat},${lng}?geoit=json`;

const whereAmI = async (lat, lng) => {
    try {
        const response = await fetch(endpoint(lat, lng));
        if (!response.ok) throw new Error('Problem with geocoding');
        const { city, state, country } = await response.json();
        console.log(`You are in ${title(city)}, ${state}, ${title(country)}`);
    } catch (error) {
        console.error(error);
    }
};

whereAmI(19.375882, -99.344221); // You are in Dos Ríos, MEX, Mexico
whereAmI(52.508, 13.381); // You are in Berlin, Berlin, Germany
whereAmI(19.037, 72.873); // You are in Mumbai, Maharashtra, India
whereAmI(-33.933, 18.474); // You are in Cape Town, Western Cape, South Africa
