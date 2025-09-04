"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Dock from "../reactBits/Dock/Dock";
import { FiUser, FiFolder, FiFileText, FiImage } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';

export default function Header() {
  const router = useRouter();

  const items = [
    { icon: <FiUser size={18} color="white" />, label: 'About', onClick: () => router.push('/about') },
    { icon: <FiFolder size={18} color="white" />, label: 'Project', onClick: () => router.push('/project') },
    { icon: <FiImage size={18} color="white" />, label: 'Gallery', onClick: () => router.push('/gallery') },
    { icon: <FiFileText size={18} color="white" />, label: 'Blog', onClick: () => router.push('/blog') },
    { icon: <AiOutlineCalendar size={18} color="white" />, label: 'Timeline', onClick: () => router.push('/timeline') },
  ];

  return (
    <header className="w-full top-0 left-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={60}
        />
      </div>
    </header>
  );
}
