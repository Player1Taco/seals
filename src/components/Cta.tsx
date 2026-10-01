import React, { useState } from 'react';

export default function Cta() {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState('pc');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError('Enter a valid email address so we can send your access key.');
      setDone(false);
      return;
    }
    setError('');
    setDone(true);
    setEmail('');
  }

  return (
    <section className="cta" id="wishlist" aria-labelledby="cta-h">
      <div className="wrap">
        <p className="eyebrow reveal">Deploy</p>
        <h2 id="cta-h" className="reveal">
          Wishlist <em>SEALS</em>
          <br />
          before it ships
        </h2>
        <p className="reveal" style={{ marginTop: 24 }}>
          Wishlisting puts you on the closed technical test list and gets you the mission briefing
          pack — base maps, the RIO spec sheet and the full TOM dossier — the day it goes out.
        </p>

        <div className="cta-actions reveal">
          <a
            className="btn btn-accent"
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wishlist on Steam
          </a>
          <a className="btn" href="#levels">
            Review the Bases
          </a>
        </div>

        <form className="cta-form reveal" onSubmit={submit} noValidate>
          <label htmlFor="cta-email">Email — for the briefing pack</label>
          <input
            id="cta-email"
            type="email"
            name="email"
            placeholder="operator@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!error}
            aria-describedby="cta-status"
          />

          <label htmlFor="cta-platform">Platform</label>
          <select
            id="cta-platform"
            name="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 15,
              padding: 12,
              background: 'transparent',
              border: '2px solid var(--bg)',
              color: 'var(--bg)',
              minHeight: 44,
            }}
          >
            <option value="pc" style={{ color: '#000' }}>PC</option>
            <option value="ps5" style={{ color: '#000' }}>PlayStation 5</option>
            <option value="xbox" style={{ color: '#000' }}>Xbox Series X|S</option>
          </select>

          <button className="btn btn-accent" type="submit" style={{ justifySelf: 'start' }}>
            Request Briefing Pack
          </button>

          <p id="cta-status" role="status" style={{ margin: 0 }}>
            {error && <span className="err">{error}</span>}
            {done && (
              <span className="ok">
                Locked in. Briefing pack queued for {platform.toUpperCase()} — check your inbox.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
