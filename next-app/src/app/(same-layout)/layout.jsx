export default function Layout ({ children }) {
    return (
        <div>
            <marquee style={{color: 'purple', background: 'white'}} behavior="" direction="">Los animalitos más tiernos :3</marquee>
            {children}
        </div>
    )
}