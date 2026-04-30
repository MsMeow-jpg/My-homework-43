import { useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import potionsImage from "./assets/dreamland-potions.png";
import demonImage from "./assets/little-demon.png";
import dreamlandTheme from "./assets/audio/dreamland-theme.mp3";

const navItems = [
  { path: "/", label: "Main Gate" },
  { path: "/about", label: "Kingdom Gossip" },
  { path: "/contact", label: "Send a Raven" },
];

function App() {
  const audioRef = useRef(null);

  const handleDemonClick = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 1;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <audio ref={audioRef} src={dreamlandTheme} loop />

        <button
          className="corner-demon-button"
          type="button"
          onClick={handleDemonClick}
          aria-label="Toggle demon music"
        >
          <img
            className="corner-demon"
            src={demonImage}
            alt="Little sarcastic demon"
          />
        </button>

        <header className="hero">
          <p className="eyebrow">Official. Almost.</p>

          <img
            className="potions-image"
            src={potionsImage}
            alt="Funny magic bottles from Dreamland"
          />

          <h1>Dreamland: Kingdom of Bad Decisions</h1>

          <p className="hero-text">
            Kings yell, taverns burn, wizards hide suspicious things, and the
            citizens stopped asking why demonic laughter keeps coming from the
            basement.
          </p>

          <nav className="nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="page-card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;