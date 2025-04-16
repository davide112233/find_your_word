import { Navbar, NavbarBrand } from "flowbite-react";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

export function NavigationBar() {
    const navbarBrand = "find your word";

    return (
        <Navbar fluid className="navigation-bar">
            <NavbarBrand as={Link} href="/">
                <span className="navbar-brand" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(navbarBrand) }} />
            </NavbarBrand>
        </Navbar>
    );
}
