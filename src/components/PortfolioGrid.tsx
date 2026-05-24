"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FadeIn from "./FadeIn";

type Wedding = {
  slug: string;
  couple: string;
  location: string;
  year: string;
  coverImage: string;
  description: string;
  images: string[];
};

type Film = {
  slug: string;
  couple: string;
  location: string;
  year: string;
  video: string;
};

export default function PortfolioGrid() {
  const t = useTranslations("portfolio");
  const [selectedWedding, setSelectedWedding] = useState<Wedding | null>(null);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const weddings = t.raw("weddings") as Wedding[];
  const films = t.raw("films") as Film[];

  return (
    <>
      {/* Photos Section */}
      <div className="mb-24">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12">
            {t("photosSection")}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddings.map((wedding, i) => (
            <FadeIn key={wedding.slug} delay={i * 100}>
              <button
                onClick={() => setSelectedWedding(wedding)}
                className="group text-left w-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={wedding.coverImage}
                    alt={wedding.couple}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl text-charcoal">
                    {wedding.couple}
                  </h3>
                  <p className="text-sm text-charcoal/50 mt-1">
                    {wedding.location} &middot; {wedding.year}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Films Section */}
      <div>
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12">
            {t("filmsSection")}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {films.map((film, i) => (
            <FadeIn key={film.slug} delay={i * 100}>
              <button
                onClick={() => setSelectedFilm(film)}
                className="group text-left w-full"
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-charcoal to-charcoal/80">
                  {/* Subtle film-grain texture */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] bg-[length:4px_4px]" />
                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-cream/40 flex items-center justify-center group-hover:border-cream/70 group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-cream/60 ml-0.5 group-hover:text-cream transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl text-charcoal">
                    {film.couple}
                  </h3>
                  <p className="text-sm text-charcoal/50 mt-1">
                    {film.location} &middot; {film.year}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Photo Gallery Modal */}
      {selectedWedding && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedWedding(null)}
        >
          <div
            className="min-h-screen py-12 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-5xl mx-auto bg-cream rounded-sm overflow-hidden">
              <div className="flex justify-between items-center px-8 py-6">
                <button
                  onClick={() => setSelectedWedding(null)}
                  className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  &larr; {t("backToPortfolio")}
                </button>
              </div>

              <div className="px-8 pb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                  {selectedWedding.couple}
                </h2>
                <p className="text-charcoal/50 mb-2">
                  {selectedWedding.location} &middot; {selectedWedding.year}
                </p>
                <p className="text-charcoal/70 mb-8 max-w-2xl">
                  {selectedWedding.description}
                </p>

                <h3 className="font-serif text-xl text-charcoal mb-4">
                  {t("photos")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedWedding.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[3/4] overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${selectedWedding.couple} photo ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Film Player Modal */}
      {selectedFilm && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedFilm(null)}
        >
          <div
            className="w-full max-w-5xl mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="font-serif text-2xl text-cream">
                  {selectedFilm.couple}
                </h2>
                <p className="text-cream/50 text-sm">
                  {selectedFilm.location} &middot; {selectedFilm.year}
                </p>
              </div>
              <button
                onClick={() => setSelectedFilm(null)}
                className="text-cream/60 hover:text-cream transition-colors p-2"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <video
              controls
              autoPlay
              className="w-full aspect-video bg-black"
              src={selectedFilm.video}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
