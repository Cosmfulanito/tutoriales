const fethComments = (id) => {  
    // throw new Error('Error al cargar los omentarios')              // Esto ejecuta el un cartel de error. Dicho cartel proviene de la carpeta Error.jsx                                        
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {cache: 'no-store'})   
        .then(res => res.json())
}

export default async function Comments ({ params }) {                 // Esto es una ruta dinamica, basicamente chupa el valor que hay despues del slash  Ej: http://localhost:3000/posts/123. En este caso obtiene el numero "123" para luego convertirlo en el numero de id
    const { id } = params
    const comments = await fethComments(id)

    return (
        <div>
            <h1>Estos son los comentarios del post Nº {id}</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}