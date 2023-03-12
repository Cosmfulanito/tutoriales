'use client'                                                    // Este string hace que que este componente se renderice el lado del cliente. Asi de simple y loco funciona eso  // Recordar que Next renderiza todo del lado del servidor, por ende todo lo que devuelve es un HTML estatico. Nosotros como front-end muchas veces necesitamos poner codigo javascript para que se hagan animaciones y esto solamente es posible hacerlo del lado del cliente. Esta accion de darle javascript al cliente se llama "hidratar" // Es desable hacer esto con los componentes más pequeños y que el resto de informacion se obtenga del lado del servidor

import { useState } from "react"

export function LikeButton({id}) {                              // Esto seria como un "promp"                  
    const [liked, setLiked] = useState(false)

    return (
        <button onClick={() => setLiked(!liked)}>
            {liked ? '❤️' : '♡'}
        </button>
    )
}