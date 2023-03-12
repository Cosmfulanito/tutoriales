import Link from "next/link"

const fethSinglePost = (id) => {                                                               
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-store'})   
        .then(res => res.json())
}

export default async function Post ({children, params }) {                 // Esto es una ruta dinamica, basicamente chupa el valor que hay despues del slash por medio del {params} (ya que este valor representa a la ruta de la carpeta [id]) Ej: http://localhost:3000/posts/123. En este caso obtiene el numero "123" para luego convertirlo en el numero de id
    const { id } = params
    const post = await fethSinglePost(id)

    return (
        <article>
            <h1>Esto es un post {id} </h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/post/${id}/comments`} as={`/posts/${post.id}/comments`} style={{color:'red'}}>Ver comentarios</Link>
            {children}
        </article>
    )
}