import React from "react";
import Link from "next/link";
import Image from "next/image";

// Socials component to display social media links and a contact email
const Socials = () => {
  // Array of social media links with their respective labels
  const socialLinks = [
    { href: "https://github.com/Adnans-Design-Niche", label: "Github" },
    { href: "https://instagram.com/adn.memos", label: "Instagram" },
    { href: "https://www.behance.net/adn-memos", label: "Behance" },
    { href: "https://linkedin.com/in/adn-memos/", label: "LinkedIn" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-[2vh] space-y-[3.2vh]">
      {/* Social media links section */}
      <div className="h-full w-full flex justify-center text-[#E1E3FC] space-x-[1.2vw] text-[0.68vw] font-light">
        {socialLinks.map((link) => (
          <Link
            key={link.label}          // Unique key for each link
            href={link.href}          // Link URL
            target="_blank"           // Opens link in a new tab
            rel="noopener noreferrer" // Security best practice for external links
          >
            {link.label}              {/* Display label for the link */}
          </Link>
        ))}
      </div>

      {/* Decorative star image */}
      <div className="relative h-full w-full p-[4vh]">
        <Image
          src="/star-vector.svg"    // Path to the star vector image
          alt="Star Vector"         // Alternative text for accessibility
          layout="fill"             // Image covers the container
          objectFit="contain"       // Maintains image aspect ratio
        />
      </div>

      {/* Contact email link */}
      <Link
        href="mailto:adn.memos@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#E1E3FC] text-[0.65vw] font-light"
      >
        adn.memos@gmail.com
      </Link>
    </div>
  );
};

export default Socials;
