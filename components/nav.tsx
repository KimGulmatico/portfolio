const Nav = () => {
    return (
        <span className="fixed z-50 right-5 top-5 lg:right-16 lg:top-10 3xl:right-24 3xl:top-16 ">
            <ul className="flex flex-col gap-2 text-right uppercase font-semibold text-xs md:text-sm">
                <li><a>About</a></li>
                <li><a>Skills</a></li>
                <li><a>Experience</a></li>
                <li><a>Contact</a></li>
            </ul>
        </span>
    )
}

export default Nav