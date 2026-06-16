import { Hero } from './components/Hero';
import { InvitationMessage } from './components/InvitationMessage';
import { EventDetails } from './components/EventDetails';
import { HeroArtwork } from './components/HeroArtwork';
import { GalleryCarousel } from './components/GalleryCarousel';
import { GiftGuide } from './components/GiftGuide';
import { DressCode } from './components/DressCode';
import { Reminders } from './components/Reminders';
import { Countdown } from './components/Countdown';
import { CrewSection } from './components/CrewSection';
import { RSVP } from './components/RSVP';
import { ClosingSection } from './components/ClosingSection';
import { FloatingNav } from './components/FloatingNav';
import { AudioToggle } from './components/AudioToggle';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <FloatingNav />
      <AudioToggle />
      <main>
        <Hero />
        <InvitationMessage />
        <EventDetails />
        <HeroArtwork />
        <GalleryCarousel />
        <GiftGuide />
        <DressCode />
        <Reminders />
        <Countdown />
        <CrewSection />
        <RSVP />
        <ClosingSection />
      </main>
    </>
  );
}
