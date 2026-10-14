import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
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
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const canShuffle = profileImages.length > 1;

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    setImageIndex(pickRandomImageIndex(profileImages.length));
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

  const portrait = (
    <img
      src={profileImages[imageIndex].src}
      alt={profileImages[imageIndex].alt}
      width="64"
      height="64"
      className="h-16 w-16 rounded-md border border-textGray/40 object-cover"
    />
  );

  return (
    <header className="site-container flex items-center justify-between pt-10 pb-8">
      <div className="flex items-center gap-3">
        {canShuffle ? (
          <button
            type="button"
            className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-textPrimary"
            aria-label="Show another profile photo"
            onClick={() =>
              setImageIndex((current) =>
                pickNextImageIndex(current, profileImages.length),
              )
            }
          >
            {portrait}
          </button>
        ) : (
          portrait
        )}
        <Link to="/" className="no-underline">
          <span className="block text-lg font-medium text-textWhite">
            Nikhil Raj
          </span>
          <span className="block text-sm text-textGray">engineer.</span>
        </Link>
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
