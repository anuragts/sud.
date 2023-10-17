import Link from "next/link"
import Image from "next/image"
export default function Header() {
    return (
        <div className="mb-10 py-10 text-2xl flex items-center justify-between ">
            <Link className="flex items-center" href={'/'} >
                <Image src="/star.png" alt="star" width={64} height={64} className=""
                />
            </Link>
            <div className="text-end">
                <Link className="px-3" href="/">home</Link>
                <Link className="px-3" href="#about">about</Link>
                <Link className="px-3" href="/">projects</Link>
            </div>
        </div>
    )
}
