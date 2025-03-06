import Link from "next/link"

export default function Header() {
    return(
        <div className="z-50 fixed flex justify-center w-full">
            <ul className="flex justify-center items-center gap-4 border border-white/10 bg-white/10 rounded-full mt-6 backdrop-blur-3xl px-2 py-1">
                <Link href="#home" className="nav-item">Home</Link>
                <Link href="#about" className="nav-item">About</Link>
                <Link href="#experience" className="nav-item">Experience</Link>
                <Link href="#projects" className="nav-item">Projects</Link>
                <Link href="#contact" className="nav-item">Contact</Link>
            </ul>
        </div>
    )
}