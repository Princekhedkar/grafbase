import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NavLinks } from "@/constants";
import { link } from "fs";
import AuthProviders from "./AuthProviders";

const NavBar = () => {
  const session = {};
  return (
    <nav className=" flexBetween navbar">
      <div className=" flexStart flex-1  gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <ul className=" xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className=" flex-center gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project"> Share </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
