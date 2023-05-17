import Blocks from './Components/hero/Blocks';
import Header from './Components/Header';
import Hero from './Components/hero/Hero';
import About from './Components/About';
import Analytics from './Components/Analytics';
import ProjectBlock from './Components/projects/ProjectBlock';
import TextBlock from './Components/TextBlock';
import Reviews from './Components/reviews/Reviews';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Analytics />
      <Blocks />
      <ProjectBlock />
      <TextBlock />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
