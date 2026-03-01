"use client";

import { useEffect } from "react";
import LightboxLib from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export default function Lightbox({ isOpen, onClose, src, alt, title, description }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const slides = [
    {
      src,
      alt,
      title: title ?? undefined,
      description: description ?? undefined,
    },
  ];

  return (
    <LightboxLib
      open={isOpen}
      close={onClose}
      slides={slides}
      plugins={[Captions]}
      captions={{ descriptionTextAlign: "center", descriptionMaxLines: 3 }}
    />
  );
}
