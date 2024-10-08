import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
//import Success from "./pages/Success";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-pink-100 min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;
