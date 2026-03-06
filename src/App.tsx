import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Suspense fallback={null}>
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </Suspense>
  </main>
);

export default App;
