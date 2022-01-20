/*
 - Como sabemos, por convencion los hooks llevan la palabra "use" como prefijo. 
   El nombre que le pusimos al archivo es igual al que le vamos a poner a nuestro hook solamente para poder identificarlo más facimente

  
 - El objetivo de este archivo es crear un hook personalizado que obtiene como parametro la url de una API y devuelve su coontenido. De esta manera cuando lo usemos
   en algun archivo, podremos crear por medio de el, variables que guardan los datos de una API 
*/



import {useState, useEffect} from "react";								// Vamos a trabajar con los hooks "useState" y "useEffect" por ende debemos importarlos 



export const useHttp = (url) => {										// Un hook personalizado se crea exactamente igual que una función. El unico requisito es que tenga como prefijo la palabra "use" para que React lo pueda identificar como un hook   // Exportarlo desde esta misma linea de codigo y no más abajo nos permite "destructurar" el hook cuando lo importemos desde otro archivo 		

	const [data, setData] = useState([])

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(url)
			const data = await res.json()
			setData(data)
		}
		getData()
	}, [url])															// Esto hace que se modifique cuando la url cambie. Osea, que cuando cambio la url (ya sea porque aprete un boton, etc), que se vuelva aejecutar la funcion. Sin esto los botones no funcionarian

	return [data]														// El [] nos permite obtener la data como un array
}