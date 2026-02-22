import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Experience } from './sections/experience';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};
