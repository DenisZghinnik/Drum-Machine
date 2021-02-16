export const f = 1;
// export const slideHandler= (e: MouseEvent) =>{
// 	return new Promise(function(resolve, reject) {
// 		const start = e.clientX;
// 		var end, sum, bpm;
// 		const slider = document.getElementById('bpm-slider');
// 		const prevPos = +slider.style.left.replace(/[^\- 0-9]/gi, '');
// 		const left = Math.round(document.getElementById('selected-window').getBoundingClientRect().left);
// 		const right = Math.round(document.getElementById('selected-window').getBoundingClientRect().right);
// 		function addlistener(e){
// 			end = e.clientX;
// 			sum = prevPos+end-start;
// 			if(sum < 225 && sum > -1565){
// 				slider.style.left = `${sum}px`;
// 			};
// 		};
// 		function removeListener(e){
// 			document.body.removeEventListener('mousemove', addlistener);
// 			const selected = [...document.getElementsByClassName('bpm')]
// 			.filter(a=>a.getBoundingClientRect().x >(left-10) &&a.getBoundingClientRect().x<(right-10))[0];
// 			if(selected){
// 				const pos = Math.round(selected.getBoundingClientRect().x);
// 				const posa = +slider.style.left.replace(/[^\- 0-9]/gi, '');
// 				var dif = selected.id.length === 2 ? pos - (left+5) : pos - (left+2);
// 				slider.style.left = `${posa-dif}px`;
// 				bpm = selected.id;
// 				document.getElementById('repeat-sub').textContent=`${bpm} BPM`;
// 				resolve(bpm);
// 			};
// 		};
// 		document.body.addEventListener('mousemove', addlistener);
// 		document.body.addEventListener('mouseup', removeListener);
// 	});
// 	};
// 	export default slideHandler
