import React from 'react';
import { BOSSES } from '../data';

export default function Bosses() {
  return (
    <section id="bosses" aria-labelledby="bosses-h">
      <div className="wrap">
        <p className="eyebrow reveal">Encounters</p>
        <h2 id="bosses-h" className="reveal" style={{ marginBottom: 16 }}>
          Four people <span style={{ color: 'var(--accent)' }}>in the way</span>
        </h2>
        <p className="lede reveal" style={{ marginBottom: 48 }}>
          Every base ends with someone who has read Holmes&apos; file. Each fight has two phases and
          exactly one honest weakness.
        </p>

        <div className="bosses">
          {BOSSES.map((b) => (
            <article className="boss reveal" key={b.id}>
              <img src={b.image} alt={`${b.name} — ${b.role}`} />
              <div className="boss-body">
                <h3>{b.name}</h3>
                <p className="boss-role">{b.role}</p>
                <p>{b.desc}</p>
                <div className="boss-phase">
                  <b>Phases</b>
                  {b.phase}
                </div>
                <div className="boss-phase">
                  <b className="weak">Weakness</b>
                  {b.weakness}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
