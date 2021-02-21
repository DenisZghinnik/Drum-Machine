import { createAudio } from "../../createAudio";

const sideA = [
{
	name: 'instrument',
	sound: createAudio(require('./sounds/01.wav')),
	key: '1',
	color: 'blue',
	id: 'sideA1'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/02.wav')),
	key: '2',
	color: 'green',
	id: 'sideA2'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/03.wav')),
	key: '3',
	color: 'red',
	id: 'sideA3'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/04.wav')),
	key: 'q',
	color: 'purple',
	id: 'sideA4'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/05.wav')),
	key: 'w',
	color: 'purple',
	id: 'sideA5'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/06.wav')),
	key: 'e',
	color: 'yellow',
	id: 'sideA6'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/07.wav')),
	key: 'a',
	color: 'purple',
	id: 'sideA7'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/08.wav')),
	key: 's',
	color: 'purple',
	id: 'sideA8'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/09.wav')),
	key: 'd',
	color: 'yellow',
	id: 'sideA9'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/10.wav')),
	key: 'z',
	color: 'red',
	id: 'sideA10'
},
{
	name: 'cymbals',
	sound: createAudio(require('./sounds/11.wav')),
	key: 'x',
	color: 'yellow',
	id: 'sideA11'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/12.wav')),
	key: 'c',
	color: 'green',
	id: 'sideA12'
},
];
export default sideA;
