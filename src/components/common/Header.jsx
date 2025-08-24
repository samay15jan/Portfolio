"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const navItems = ["About", "Project", "Gallery", "Blog", "Timeline"];

  return (
    <header className="w-full top-0 left-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <Image
              className=""
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <Link href={`${item.toLowerCase()}`} className="hover:text-gray-900">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
