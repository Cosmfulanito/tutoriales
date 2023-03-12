export default function Loading () {                                // Loading es un componente que se renderiza cuando el archivo page.jsx del cual es hermano, se esta cargando. Es muy util a la hora de haceer peticiones a una API
    return(
        <p style={{color: 'red'}}>Cargando comentarios...</p>
    )
}