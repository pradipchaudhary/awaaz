import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky z-30 top-0 bg-black">
            <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-8">
                <Link href="/" className="text-3xl">
                    Awaaz
                </Link>
                <nav>
                    <nav>
                        <ul>
                            <li>home</li>
                        </ul>
                    </nav>
                </nav>
            </div>
        </header>
    );
};

export default Header;
