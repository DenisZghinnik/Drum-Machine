import { createAudio } from "../../createAudio";


const presetA = [
{
	name: 'instrument',
	sound: createAudio(require('./sounds/01.wav')),
	key: '1',
	color: 'blue'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/02.wav')),
	key: '2',
	color: 'blue'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/03.wav')),
	key: '3',
	color: 'blue'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/04.wav')),
	key: 'q',
	color: 'red'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/05.wav')),
	key: 'w',
	color: 'purple'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/06.wav')),
	key: 'e',
	color: 'blue'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/07.wav')),
	key: 'a',
	color: 'red'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/08.wav')),
	key: 's',
	color: 'purple'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/09.wav')),
	key: 'd',
	color: 'purple'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/10.wav')),
	key: 'z',
	color: 'yellow'
},
{
	name: 'cymbals',
	sound: createAudio(require('./sounds/11.wav')),
	key: 'x',
	color: 'green'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/12.wav')),
	key: 'c',
	color: 'yellow'
},
];
export default presetA;
