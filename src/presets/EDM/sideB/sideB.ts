import { createAudio } from "../../createAudio";


const presetB = [
{
	name: 'instrument',
	sound: createAudio(require('./sounds/01.wav')),
	key: '1',
	color: 'purple',
	id: 'sideB1'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/02.wav')),
	key: '2',
	color: 'purple',
	id: 'sideB2'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/03.wav')),
	key: '3',
	color: 'purple',
	id: 'sideB3'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/04.wav')),
	key: 'q',
	color: 'green',
	id: 'sideB4'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/05.wav')),
	key: 'w',
	color: 'yellow',
	id: 'sideB5'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/06.wav')),
	key: 'e',
	color: 'purple',
	id: 'sideB6'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/07.wav')),
	key: 'a',
	color: 'yellow',
	id: 'sideB7'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/08.wav')),
	key: 's',
	color: 'yellow',
	id: 'sideB8'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/09.wav')),
	key: 'd',
	color: 'yellow',
	id: 'sideB9'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/10.wav')),
	key: 'z',
	color: 'blue',
	id: 'sideB10'
},
{
	name: 'cymbals',
	sound: createAudio(require('./sounds/11.wav')),
	key: 'x',
	color: 'red',
	id: 'sideB11'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/12.wav')),
	key: 'c',
	color: 'blue',
	id: 'sideB12'
},
];

export default presetB;
