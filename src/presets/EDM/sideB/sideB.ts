import { createAudio } from "../../createAudio";


const presetB = [
{
	name: 'instrument',
	sound: createAudio(require('./sounds/01.wav')),
	key: '1',
	color: 'purple'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/02.wav')),
	key: '2',
	color: 'purple'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/03.wav')),
	key: '3',
	color: 'purple'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/04.wav')),
	key: 'q',
	color: 'green'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/05.wav')),
	key: 'w',
	color: 'yellow'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/06.wav')),
	key: 'e',
	color: 'purple'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/07.wav')),
	key: 'a',
	color: 'yellow'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/08.wav')),
	key: 's',
	color: 'yellow'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/09.wav')),
	key: 'd',
	color: 'yellow'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/10.wav')),
	key: 'z',
	color: 'blue'
},
{
	name: 'cymbals',
	sound: createAudio(require('./sounds/11.wav')),
	key: 'x',
	color: 'red'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/12.wav')),
	key: 'c',
	color: 'blue'
},
];

export default presetB;
