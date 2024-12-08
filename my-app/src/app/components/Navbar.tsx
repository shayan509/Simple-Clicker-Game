import Link from "next/link"

export default function Navbar() {
    return (
    <nav className="h-16 flex flex-row items-center justify-center gap-10 font-bold bg-amber-900 text-[#DDE6D5] text-3xl">
        <Link href="/">Home</Link>
        <Link href="/aboutme">About Me</Link>
        <Link href="/details">Details</Link>
    </nav>
    )
}