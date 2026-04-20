import pesticideLogo from '/icon_128.png';
import screenshot from '/screenshot.png';

import './App.css';

function App() {
  return (
    <>
      {/* Thumbfeed logo */}
      <a
        href="https://thumbfeed.com"
        className="site-logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="desktop-logo"
          className="site-logo-img"
          src="thumbfeed-logo-inline.svg"
          alt="Thumbfeed logo"
        />
        <img
          id="mobile-logo"
          className="site-logo-img"
          src="thumbfeed-logo.svg"
          alt="Thumbfeed logo"
        />
      </a>
      <div>
        <img src={pesticideLogo} className="logo" alt="Pesticide logo" />
      </div>
      <h1>Pesticide (without hover bar)</h1>
      <a
        href="https://chromewebstore.google.com/detail/pesticide-without-hover-b/ibaidbcedfbojihflojeekadmebnlbpb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="store-icon" src="/chrome-store-s.png" alt="" />
      </a>
      <h2>
        📢 Now updated for Manifest V3! <span className="flipped">📢</span>
      </h2>

      <img className="screenshot" src={screenshot} alt="" />

      <section className="intro-section">
        <p>
          Pesticide is a Chrome extension designed to help you visualize the
          layout and structure of any webpage by outlining every HTML element.
          It’s a powerful tool for debugging CSS and understanding how elements
          are nested on the page.
        </p>
        <p>
          When activated, Pesticide injects custom CSS into the current tab,
          applying colored outlines to all elements based on their type. This
          makes it easy to identify spacing, nesting, and potential layout
          issues at a glance.
        </p>
      </section>

      <h3>Features</h3>
      <section className="features">
        <div className="feature">
          ✅ One-click toggle to enable or disable visual outlines without
          needing page reload.
        </div>
        <div className="feature">
          🎨 Faithfully reflects the original website's CSS — no hover effects,
          no color changes, no shadows.
        </div>
        <div className="feature">🌍 Works on any website.</div>
        <div className="feature">
          🚫 No interference with site functionality or user interactions.
        </div>
      </section>

      <footer>
        <p>
          Source code available on{' '}
          <a
            href="https://github.com/michaelkolesidis/pesticide-without-hover-bar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
