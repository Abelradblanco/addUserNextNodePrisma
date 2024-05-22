import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
   <div className="container mx-auto px-4 text-2xl z-10">
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit text-3xl">Abel Blanco</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem isActive>
          <Link href="https://github.com/Abelradblanco/addUserNextNodePrisma" aria-current="page">
            Github
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="ghost">
            Create User
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  );
}
