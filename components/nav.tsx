const Nav = () => {
    return (
        <span className="!fixed z-[99999] right-5 top-5 lg:right-16 lg:top-10 3xl:right-24 3xl:top-16 ">
            <ul className="flex flex-col gap-2 text-right uppercase font-semibold text-xs md:text-sm xl:text-xs 2xl:text-sm">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#certifications">Cerifications</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </span>
    )
}

export default Nav