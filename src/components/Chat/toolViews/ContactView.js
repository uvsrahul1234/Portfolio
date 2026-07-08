import React from "react";
import { motion } from "framer-motion";
import { HiEnvelope } from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  "X/Twitter": FaXTwitter,
  Instagram: FaInstagramSquare,
};

function ContactView({ data }) {
  const email = data?.email;
  const socials = data?.socials ?? [];

  return (
    <div className="tool-view tool-contact">
      {email && (
        <motion.a
          href={`mailto:${email}`}
          className="tool-contact-email"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <HiEnvelope />
          <span>{email}</span>
        </motion.a>
      )}
      {socials.length > 0 && (
        <div className="tool-contact-socials">
          {socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.name] ?? FaGlobe;
            return (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-contact-social"
                aria-label={s.name}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ContactView;
