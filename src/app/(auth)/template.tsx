// we learn about active links in this file
// alert rename Layout file to template file. there is minner different .. layout.tsx vs template.tsx search on chat gpt

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "reginster", href: "/register" },
  { name: "login", href: "/login" },
  { name: "Forgot Password", href: "/forgot" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setinput] = useState("");

  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
          className="bg-slate-500"
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-600 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
