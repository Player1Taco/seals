import React from 'react';
import { MILESTONES } from '../data';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/seals-logo-mark.png" alt="SEALS logo mark" />
            <b>SEALS</b>
          </div>

          <div className="milestones">
            <h4>Development Milestones</h4>
            <ul>
              {MILESTONES.map((m) => (
                <li key={m.tag}>
                  <i>{m.tag}</i>
                  <span>{m.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h4>Sections</h4>
            <ul className="milestones" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 6, fontSize: 13 }}>
              <li><a href="#story">Story</a></li>
              <li><a href="#levels">Levels</a></li>
              <li><a href="#weapons">Weapons</a></li>
              <li><a href="#bosses">Bosses</a></li>
              <li><a href="#stealth">Stealth</a></li>
              <li><a href="#wishlist">Wishlist</a></li>
            </ul>
          </nav>
        </div>

        <p className="credits">
          3D credits: &ldquo;Damaged Helmet&rdquo; by DamagedHelmet © ctxwing,{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
            CC BY 4.0
          </a>{' '}
          (Khronos glTF-Sample-Assets) &middot; &ldquo;Materials Variants Shoe&rdquo; © Khronos,{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
            CC BY 4.0
          </a>{' '}
          (Khronos glTF-Sample-Assets). Models adapted (re-optimized) for the web.
        </p>

        <div className="foot-bottom">
          <span>SEALS — Tactical. Infiltrate. Recover.</span>
          <a href="https://dappit.io" target="_blank" rel="noopener noreferrer">
            Made by dappit.io
          </a>
        </div>
      </div>
    </footer>
  );
}
