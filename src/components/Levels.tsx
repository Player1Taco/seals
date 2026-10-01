import React from 'react';
import { LEVELS } from '../data';

export default function Levels() {
  return (
    <section id="levels" aria-labelledby="levels-h">
      <div className="wrap">
        <p className="eyebrow reveal">The Campaign</p>
        <h2 id="levels-h" className="reveal" style={{ marginBottom: 16 }}>
          Four bases, <span style={{ color: 'var(--accent)' }}>in reverse</span>
        </h2>
        <p className="lede reveal" style={{ marginBottom: 48 }}>
          The campaign runs Delta to Alpha — each base harder, deeper and further from anything
          Holmes can walk away from.
        </p>

        <div className="levels">
          {LEVELS.map((lv) => (
            <article className="level reveal" key={lv.id} id={lv.id}>
              <div className="level-media">
                <span className="level-index">{lv.index}</span>
                <img src={lv.image} alt={`${lv.name} — ${lv.location}`} />
              </div>
              <div className="level-body">
                <h3>{lv.name}</h3>
                <p className="level-loc">{lv.location}</p>
                <p>{lv.brief}</p>

                <dl>
                  <dt>Boss</dt>
                  <dd>{lv.boss}</dd>
                  <dt>Enemies</dt>
                  <dd>{lv.enemies}</dd>
                </dl>

                <div className="mech">
                  <b>New Mechanic — {lv.mechanic}</b>
                  {lv.mechanicDetail}
                </div>
              </div>

              {lv.model && (
                <div className="model-slot">
                  <span className="model-hint">Drag to orbit</span>
                  <model-viewer
                    src={lv.model.src}
                    alt={lv.model.label}
                    camera-controls
                    auto-rotate
                    shadow-intensity="1"
                    exposure="1.05"
                    environment-image="neutral"
                  />
                  <div className="model-label">
                    <b>{lv.model.label}</b>
                    <span>{lv.model.note}</span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
