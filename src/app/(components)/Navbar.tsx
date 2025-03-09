"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbarRef.current?.classList.add(styles.navbarWhite);
        } else {
          navbarRef.current?.classList.remove(styles.navbarWhite);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-3% 0px -94% 0px", // Adjust this value as needed
      threshold: 0,
    });
    const targets = document.querySelectorAll(".dark-image");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 w-auto z-50 top-5 flex justify-center items-center`}
      ref={navbarRef}
    >
        <Link
          href="/"
          className={`font-shadows-into-light text-4xl ${styles.navbarText} dark:text-white`}
        >
          Saksham.
        </Link>
    </div>
  );
};

export default Navbar;
