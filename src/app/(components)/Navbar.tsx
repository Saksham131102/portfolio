"use client";
import { useEffect, useRef, useState } from "react";

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
      className={`text-4xl z-50 flex fixed w-full justify-center lg:gap-48 md:gap-36 gap-20 p-5`}
      ref={navbarRef}
    >
      <a
        href="#home"
        className={`font-shadows-into-light ${styles.navbarText}`}
      >
        Saksham.
      </a>
      {/* <a href="#project">project</a> */}
      {/* <a href="#about">about me</a> */}
    </div>
  );
};

export default Navbar;
