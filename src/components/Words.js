const words = ['BIKE','APPLE','ORANGE','IT']

const getRandomWords = ( ) => 
     {
    return words[Math.floor(Math.random() * words.length)]
};

export default getRandomWords;