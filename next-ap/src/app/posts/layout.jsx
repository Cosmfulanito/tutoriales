import { Counter } from "../components/Counter"

export default function PostLayout ({ children }) {                 // Es necesario porner {children} en todos los layout o de lo contrario me dara un error. Esto se debe a que el layout es un componente que "envuelve" a todo el page.jsx y a sus "sub direcciones"
    return (
        <div>
            <h1>Este es el layout de Post</h1>
            <Counter/>
            {children}
        </div>
    )
}