import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Pass darkMode and setDarkMode as props */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} onNavClick={scrollToSection} />

      <MainContent darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
