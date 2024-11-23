const pokemonImages = {
    Pikachu: require('./img/Pikachu.png'),
    Voltorb: require('./img/Voltorb.png'),
    Charmander: require('./img/Charmander.png'),
    Growlithe: require('./img/Growlithe.png'),
    Bulbasaur: require('./img/Bulbasaur.png'),
    Oddish: require('./img/Oddish.png'),
    Squirtle: require('./img/Squirtle.png'),
    Psyduck: require('./img/Psyduck.png'),
};

const initialData = [
    {
        title: 'Electric',
        bgColor: '#FFD700',
        data: [
            { name: 'Pikachu' },
            { name: 'Voltorb' },
        ],
    },
    {
        title: 'Fire',
        bgColor: '#FFA500',
        data: [
            { name: 'Charmander' },
            { name: 'Growlithe' },
        ],
    },
    {
        title: 'Grass',
        bgColor: '#32CD32',
        data: [
            { name: 'Bulbasaur' },
            { name: 'Oddish' },
        ],
    },
    {
        title: 'Water',
        bgColor: '#1E90FF',
        data: [
            { name: 'Squirtle' },
            { name: 'Psyduck' },
        ],
    },
];

export { pokemonImages, initialData };
