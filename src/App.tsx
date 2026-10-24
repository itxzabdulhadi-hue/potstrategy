import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProofSection } from './components/ProofSection';
import { MetricsSection } from './components/MetricsSection';
import { VerdictSection } from './components/VerdictSection';
import { AudienceSection } from './components/AudienceSection';
import { MethodSection } from './components/MethodSection';
import { StanceSection } from './components/StanceSection';
import { Marquee } from './components/Marquee';
import { StandardSection } from './components/StandardSection';
import { FaqSection } from './components/FaqSection';
import { StartSection } from './components/StartSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProblemSection />
        <ProofSection />
        <MetricsSection />
        <VerdictSection />
        <AudienceSection />
        <MethodSection />
        <StanceSection />
        <Marquee />
        <StandardSection>
          <FaqSection />
        </StandardSection>
        <StartSection />
      </main>
      <Footer />
    </>
  );
}
