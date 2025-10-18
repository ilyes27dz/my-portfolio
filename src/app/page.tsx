import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HorizontalMarquee from '@/components/HorizontalMarquee';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop'; // جديد!

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <HorizontalMarquee />
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </main>
      
      <ScrollToTop /> {/* زر الصعود للأعلى */}
    </>
  );
}
