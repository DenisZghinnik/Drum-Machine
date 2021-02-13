import { createAudio } from "../../createAudio";

const presetB = [
{
	name: 'instrument',
	sound: createAudio(require('./sounds/01.wav')),
	key: '4',
	color: 'red'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/02.wav')),
	key: '5',
	color: 'red'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/03.wav')),
	key: '6',
	color: 'red'
},
{
	name: 'voice1',
	sound: createAudio(require('./sounds/04.wav')),
	key: 'Q',
	color: 'yellow'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/05.wav')),
	key: 'W',
	color: 'yellow'
},
{
	name: 'instrument',
	sound: createAudio(require('./sounds/06.wav')),
	key: 'E',
	color: 'red'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/07.wav')),
	key: 'A',
	color: 'yellow'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/08.wav')),
	key: 'S',
	color: 'yellow'
},
{
	name: 'voice2',
	sound: createAudio(require('./sounds/09.wav')),
	key: 'D',
	color: 'green'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/10.wav')),
	key: 'Z',
	color: 'green'
},
{
	name: 'cymbals',
	sound: createAudio(require('./sounds/11.wav')),
	key: 'X',
	color: 'blue'
},
{
	name: 'drum',
	sound: createAudio(require('./sounds/12.wav')),
	key: 'C',
	color: 'purple'
},
];
export default presetB;
