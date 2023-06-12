import Header from './components/Header';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 duration-700">
      <Header />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
