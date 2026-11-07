import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import profileImage1 from "../assets/thumbnails/profile/profile-1.webp";
import profileImage2 from "../assets/thumbnails/profile/profile-2.webp";
import profileImage3 from "../assets/thumbnails/profile/profile-3.webp";
import profileImage4 from "../assets/thumbnails/profile/profile-4.webp";
import profileImage from "../assets/thumbnails/profile/profile.webp";
import type { ProfileImage } from "../types";
import {
  pickNextImageIndex,
  pickRandomImageIndex,
} from "../utils/profile-image";

const profileImages: ProfileImage[] = [
  { src: profileImage, alt: "Portrait of Nikhil Raj, software engineer" },
  { src: profileImage1, alt: "Portrait of Nikhil Raj, software engineer" },
  { src: profileImage2, alt: "Portrait of Nikhil Raj, software engineer" },
  { src: profileImage3, alt: "Portrait of Nikhil Raj, software engineer" },
  { src: profileImage4, alt: "Portrait of Nikhil Raj, software engineer" },
  ...Object.values(
    import.meta.glob<string>("../assets/thumbnails/profile/cats/*.webp", {
      eager: true,
      import: "default",
      query: "?url",
    }),
  ).map((src) => ({ src, alt: "Cat avatar" })),
];

interface AvatarState {
  currentIndex: number;
  previousIndex: number | null;
  transitionKey: number;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatar, setAvatar] = useState<AvatarState>({
    currentIndex: 0,
    previousIndex: null,
    transitionKey: 0,
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    setAvatar((current) => ({
      ...current,
      currentIndex: pickRandomImageIndex(profileImages.length),
    }));

    const intervalId = window.setInterval(() => {
      setAvatar(({ currentIndex, transitionKey }) => ({
        currentIndex: pickNextImageIndex(currentIndex, profileImages.length),
        previousIndex: currentIndex,
        transitionKey: transitionKey + 1,
      }));
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="site-container flex items-start justify-between pt-10 pb-8">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-textGray/40">
            {avatar.previousIndex !== null && (
              <img
                key={`previous-${avatar.transitionKey}`}
                src={profileImages[avatar.previousIndex].src}
                alt=""
                width="64"
                height="64"
                aria-hidden="true"
                className="avatar-image-exit absolute inset-0 h-full w-full object-cover"
              />
            )}
            <img
              key={`current-${avatar.transitionKey}`}
              src={profileImages[avatar.currentIndex].src}
              alt={profileImages[avatar.currentIndex].alt}
              width="64"
              height="64"
              className="avatar-image-enter absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <Link to="/" className="no-underline">
            <span className="block text-lg font-medium text-textWhite">
              Nikhil Raj
            </span>
            <span className="block text-sm text-textGray">engineer.</span>
          </Link>
        </div>
        <a
          href="https://drive.google.com/file/d/1n8a-sUyBwAh-VsHwbkLBssWAjQkNOTES/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm"
        >
          Resume
          <FiArrowUpRight aria-hidden="true" focusable="false" />
        </a>
      </div>

      <div ref={menuRef} className="relative">
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-md border border-textGray/40 p-2 text-xl text-textWhite transition hover:border-textPrimary hover:text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-textPrimary"
        >
          {menuOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </button>
        {menuOpen && (
          <nav
            id="site-navigation"
            aria-label="Primary navigation"
            className="absolute right-0 z-20 mt-2 min-w-40 rounded-md border border-textGray/30 bg-backfroundColor p-2 shadow-2xl"
          >
            {[
              ["Home", "/"],
              ["Experience", "/experience"],
              ["Projects", "/projects"],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="block rounded px-3 py-2 text-sm text-textWhite no-underline transition hover:bg-textPrimary/15 hover:text-textPrimary"
              >
                <span className="mr-2 text-textPrimary">/</span>
                {label.toLowerCase()}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
