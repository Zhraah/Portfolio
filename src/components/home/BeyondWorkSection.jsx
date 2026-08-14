import { moviePlaylist } from "../../data/media.js";

import beyondPhoto from "../../assets/beyond-work/beyond-photo.jpg";
import imdbLogo from "../../assets/media/imdb-logo.png";
import spotify505Cover from "../../assets/media/spotify-505.jpg";
import spotifyLogo from "../../assets/media/spotify-logo.png";

function SpotifyMark() {
  return (
    <span className="spotify-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function BeyondCanvas() {
  return (
    <section className="beyond-stage" aria-label="Beyond Work">
      <p className="section-label" data-scroll-reveal="up">[ Beyond Work ]</p>
      <div className="beyond-heading" data-scroll-reveal="up" style={{ "--reveal-delay": "60ms" }}>
        <h2>Ideas don’t stop at the desk.</h2>
        <p>A little window into the sounds and stories that keep my creative mind moving.</p>
      </div>

      <div
        className="beyond-photo-card"
        data-scroll-reveal="left"
        style={{ backgroundImage: `url(${beyondPhoto})`, "--reveal-delay": "100ms" }}
        aria-label="Zhra working"
      />

      <a
        className="beyond-playlist-card spotify-playlist-card"
        href="https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp?si=iSnkzmfaQCS8mA-mIakKbw&utm_source=copy-link&rowId=f44b7b3e908fe7e4"
        target="_blank"
        rel="noreferrer"
        aria-label="Open 505 by Arctic Monkeys on Spotify"
        data-scroll-reveal="right"
        style={{ "--reveal-delay": "160ms" }}
      >
        <div className="spotify-album-disc" aria-hidden="true">
          <img src={spotify505Cover} alt="" />
          <span />
        </div>
        <span className="spotify-player-tab" aria-hidden="true"><i /></span>
        <div className="spotify-corner-mark">
          <img className="spotify-brand-logo" src={spotifyLogo} alt="" aria-hidden="true" />
          <span>Spotify</span>
        </div>
        <div className="spotify-player-copy">
          <span className="spotify-mini-wave" aria-hidden="true"><i /><i /><i /><i /></span>
          <small>Arctic Monkeys</small>
          <strong>505</strong>
          <div className="spotify-time"><span>2:31</span><i>/</i><span>4:13</span></div>
        </div>
      </a>

      <section
        className="beyond-playlist-card movie-playlist-card"
        aria-label="Zhra's IMDb watchlist"
        data-scroll-reveal="right"
        style={{ "--reveal-delay": "230ms" }}
      >
        <div className="movie-card-topline">
          <img className="imdb-brand-logo" src={imdbLogo} alt="IMDb" />
          <a
            className="imdb-list-link"
            href="https://www.imdb.com/list/ls4176514652/?ref_=ext_shr_lnk"
            target="_blank"
            rel="noreferrer"
          >
            MY LIST ↗
          </a>
        </div>
        <div className="movie-poster-grid" aria-label="IMDb title links">
          {moviePlaylist.map((movie) => (
            <a
              href={movie.href}
              target="_blank"
              rel="noreferrer"
              className="movie-poster-card"
              key={movie.title}
            >
              <img src={movie.poster} alt={`${movie.title} poster`} />
              <span className="movie-poster-copy">
                <strong>{movie.title}</strong>
                <small><i>★</i> {movie.rating}<em>{movie.year}</em></small>
              </span>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

export default BeyondCanvas;
