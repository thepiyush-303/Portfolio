

import { Background } from "@/components/Background";
import Navbar from "@/components/Navbar";
import { TechStack } from "@/components/TechStack";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Interests } from "@/components/Interests";
import { QuotesLinks } from "@/components/QuotesLinks";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="space-y-12 overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <Background />
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Interests />
      </div>
      <div>
        <QuotesLinks />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
