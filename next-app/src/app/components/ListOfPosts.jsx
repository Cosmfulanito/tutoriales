import Link from "next/link"
import { LikeButton } from "./LikeButton"

const fethPosts = () => {                                                                // Así es como se hace el fech de una API en Next
    return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})     // Este es sumamente necesario {cache: 'no-store'} es sumamente necesario porque sino tenemos problemas. Next al renderizar del lado del servidor, lo que hace es obtener los datos de la API y luego pasarlos como si fuera HTML estatico, esto hace que se haga una unica peticion a la API. Obviamente nosotros querenos que el usuario haga multiples peticiones a la API cuando el desee para renobar la información, esto se soluciona con {cache: 'no-store'}.   // Recordar que hay otras alternativas las cuales hacen que se hagan peticiones cada un determinado tiempo, por ejemplo {next: {revalidate: 60}}, en este caso se va a hacer un apeticion cada 60 segundos 
        .then(res => res.json())
}

export async function ListOfPosts() {                                                   // Obviamente tengo que poner que esta funcion es asincrona
    const posts = await fethPosts()                                                       // Esta variable espera los valores de la funcion de feching

    return (
        <section>
            {posts.slice(0, 5).map(post => (
                <article key={post.id}>
                    <Link href='/posts/[id]' as={`/posts/${post.id}`}>                {  /* Esto va a obtener el numero del post y va a crear la ruta dinamica ej: http://localhost:3000/posts/3 */}
                        <h2 style={{ color:'#09f' }}>{post.id} - {post.title}</h2>
                        <p>{post.body}</p>
                    </Link>
                    <LikeButton/>
                </article>
            ))}
        </section>
    )
}