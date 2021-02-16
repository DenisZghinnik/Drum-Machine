import { createAudio } from "../../createAudio";


const presetA = [
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
	color: 'blue',
	id: 'sideA2'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/03.wav')),
	key: '3',
	color: 'blue',
	id: 'sideA3'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/04.wav')),
	key: 'q',
	color: 'red',
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
	color: 'blue',
	id: 'sideA6'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/07.wav')),
	key: 'a',
	color: 'red',
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
	color: 'purple',
	id: 'sideA9'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/10.wav')),
	key: 'z',
	color: 'yellow',
	id: 'sideA10'
},
{
	name: 'cymbals',
	sound: createAudio(require('./sounds/11.wav')),
	key: 'x',
	color: 'green',
	id: 'sideA11'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/12.wav')),
	key: 'c',
	color: 'yellow',
	id: 'sideA12'
},
];
export default presetA;
