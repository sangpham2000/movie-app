const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '21c48d484e2c1ee3488477d90ff00fb9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
