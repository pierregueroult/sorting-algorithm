import React from "react";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import SorterContainer from "./components/SorterContainer";

function App() {
  return (
    <>
      <header>
        <nav>
          <h1>Sorting Algorithm Visualizer with React</h1>
          <a
            href="https://pierregueroult.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            pierregueroult.dev
          </a>
        </nav>
      </header>
      <main>
        <SorterContainer />
      </main>
      <footer>
        <ul>
          <li>
            <a
              href="https://github.com/pierregueroult"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/pierregueroult"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/pierre.gueroult"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
        <p>Coded with heart by Pierre Guéroult</p>
        <WebsiteCarbonBadge url={window.location.href} />
      </footer>
    </>
  );
}

export default App;
