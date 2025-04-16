import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import SearchWordForm from "./searchWordForm";

export function NavigationBar() {
    const navbarBrand = "find your word";

    return (
        <Navbar fluid className="navigation-bar">
            <NavbarBrand as={Link} href="/">
                <span className="navbar-brand" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(navbarBrand) }} />
            </NavbarBrand>
            <NavbarToggle className="burger-button" />
            <NavbarCollapse>
                <SearchWordForm />
            </NavbarCollapse>
        </Navbar>
    );
}
