


let porsentaje = 0;
const grados = () =>{
	return (porsentaje * 180) / 100; 
}

const charge = document.getElementById('charge');
const divisor = document.getElementById('divisor');
const donut = document.getElementById('donut');

charge.style.transform = `rotate(${grados()}deg)`;
divisor.style.transform = `rotate(-${grados()}deg)`;
donut.textContent = `${porsentaje}%`




const animacion =	setInterval(() => {
	porsentaje += 1;
	charge.style.transform = `rotate(${grados()}deg)`;
	divisor.style.transform = `rotate(-${grados()}deg)`;
	donut.textContent = `${porsentaje}%`

	if(porsentaje > 100){
		porsentaje = 100;
		charge.style.transform = `rotate(${grados()}deg)`;
		divisor.style.transform = `rotate(-${grados()}deg)`;
		donut.textContent = `${porsentaje}%`
		clearTimeout (animacion)
	}
}, 25) 

