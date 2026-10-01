import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-label="SEALS hero">
        <div className="hero-copy">
          <p className="eyebrow">Tactical FPS · Single Player Campaign</p>
          <h1 className="hero-title">
            SEA<span>LS</span>
          </h1>
          <p className="hero-tag">Tactical. Infiltrate. Recover.</p>
          <p className="lede">
            Four bases. One operator. Stolen nuclear components moving through a private army that
            answers to nobody. Philip Holmes goes in alone — and comes out with the cores, or not at all.
          </p>
          <div className="hero-actions">
            <a className="btn btn-accent" href="#wishlist">
              Wishlist Now
            </a>
            <a className="btn" href="#levels">
              See the Bases
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <b>4</b>
              <small>Bases</small>
            </div>
            <div>
              <b>4</b>
              <small>Boss Encounters</small>
            </div>
            <div>
              <b>1</b>
              <small>Operator</small>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <img
            src="/hero-seals-holmes-tactical.png"
            alt="Philip Holmes in tactical gear in front of an ARCH base compound"
          />
          <span className="hero-media-tag">Philip Holmes · Operator</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Base Delta <em>//</em> Houston</span>
          <span>Base Charlie <em>//</em> Colorado</span>
          <span>Base Bravo <em>//</em> Philadelphia</span>
          <span>Base Alpha <em>//</em> Aberville</span>
          <span>Recover the cores <em>//</em> Leave no trace</span>
          <span>Base Delta <em>//</em> Houston</span>
          <span>Base Charlie <em>//</em> Colorado</span>
          <span>Base Bravo <em>//</em> Philadelphia</span>
          <span>Base Alpha <em>//</em> Aberville</span>
          <span>Recover the cores <em>//</em> Leave no trace</span>
        </div>
      </div>
    </>
  );
}
