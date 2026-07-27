/* ============================================================
   INVITATION CONFIG — the single place to edit ALL content.
   ============================================================ */

/** Prefixes public/ asset paths with the deploy base path
 *  so they work on Vercel ('/') and GitHub Pages ('/matteo-invitation/'). */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

/* ── Crew / gallery photos (bundled via Vite) ─────────────── */
import papaJmImg      from '../../assets/crew/Papa JM New.jpg';
import ateMarlImg     from '../../assets/crew/Ate Marel New.jpg';
import mamaMárnaImg   from '../../assets/crew/Mama Marna New.png';
import lolaAnaImg     from '../../assets/crew/lola ana 2.jpg';
import loloMarvinImg  from '../../assets/crew/Lolo Marvin New.jpg';
import lolaPacisImg   from '../../assets/crew/Lola pacis new.jpg';
import loloPacisImg   from '../../assets/crew/Lolo Pacis New.jpg';

import matmat0  from '../../assets/crew/Matmat 0.jpg';
import matmat1  from '../../assets/crew/Matmat 1.jpg';
import matmat2  from '../../assets/crew/Matmat 2.jpg';
import matmat3  from '../../assets/crew/Matmat 3.jpg';
import matmat4  from '../../assets/crew/Matmat 4.jpg';
import matmat5  from '../../assets/crew/Matmat 5.jpg';
import matmat6  from '../../assets/crew/Matmat 6.jpg';
import matmat7  from '../../assets/crew/Matmat 7.jpg';
import matmat8  from '../../assets/crew/Matmat 8.jpg';
import matmat9  from '../../assets/crew/Matmat 9.jpg';
import matmat10 from '../../assets/crew/Matmat 10.jpg';
import matmat11 from '../../assets/crew/Matmat 11.jpg';

export interface CrewMember {
  name: string;
  role: string;
  /** Playful "wanted for" line shown on the bounty poster. */
  wantedFor: string;
  /** Playful, clearly decorative bounty line. */
  bounty: string;
  /** Optional portrait photo; falls back to SVG icon when absent. */
  imageSrc?: string;
}

export const invitationConfig = {
  baby: {
    name: 'Matteo',
    fullName: 'Matteo Pacis',
  },

  event: {
    dateISO: '2026-08-01',
    dateDisplay: 'August 1, 2026',
    /** 2:00 PM Asia/Manila (UTC+8) = 06:00 UTC */
    countdownTargetUTC: '2026-08-01T06:00:00Z',
  },

  hero: {
    kicker: 'A Pirate Adventure Invitation',
    headline: 'You are invited to the Baptism of Baby Matteo',
    subheadline: "Set sail with us for Matteo's Baptism & 1st Birthday",
    tagline: 'Join our little captain as he begins his first grand adventure.',
    ctaPrimary: { label: 'View Details', targetId: 'details' },
    ctaSecondary: { label: 'RSVP Here', targetId: 'rsvp' },
    imageSrc: asset('images/hero-luffy-baby-placeholder.png'),
    imageAlt:
      'Anime pirate captain artwork featuring baby Matteo as a little pirate',
  },

  invitationMessage: {
    title: 'A Message in a Bottle',
    body:
      'Ahoy, family and friends! Our little captain, Matteo, is turning one ' +
      'and receiving the blessing of baptism. We would be honored to have you ' +
      'join us for this special day filled with love, faith, laughter, and adventure.',
  },

  ceremony: {
    title: 'Baptism Ceremony',
    venue: 'Nuestra Señora de Salvacion Parish',
    address: 'Anonas St. cor. Hipodromo St., NDC Compound, Sta. Mesa, Manila',
    time: '2:00 PM',
    dateDisplay: 'August 1, 2026',
    mapUrl: 'https://maps.google.com/?q=Nuestra+Senora+de+Salvacion+Parish,+Anonas+St,+Sta.+Mesa,+Manila',
    mapButtonLabel: 'View Church Map',
  },

  reception: {
    title: 'Birthday Reception',
    venue: 'Jollibee Acacia Lane',
    address: '326 Shaw Blvd. cor. Acacia Lane Hagdang Bato, Libis, Mandaluyong',
    time: '4:00 PM',
    dateDisplay: 'August 1, 2026',
    mapUrl: 'https://maps.google.com/?q=Jollibee+Acacia+Lane,+326+Shaw+Blvd,+Hagdang+Bato,+Libis,+Mandaluyong',
    mapButtonLabel: 'View Reception Map',
  },

  artwork: {
    title: 'Our Little Captain',
    caption:
      "Every great adventure begins with a single voyage — here's the captain of ours.",
    imageSrc: asset('images/hero-luffy-baby-placeholder.png'),
    imageAlt: 'Portrait of baby Matteo in pirate adventure style',
  },

  gallery: {
    title: "Captain's Log",
    subtitle: "Snapshots from Matteo's first year at sea",
    items: [
      { src: matmat0,  alt: 'Baby Matteo – month 0',  caption: 'The little captain sets sail' },
      { src: matmat1,  alt: 'Baby Matteo – month 1',  caption: 'One month of adventure' },
      { src: matmat2,  alt: 'Baby Matteo – month 2',  caption: 'Two months on the high seas' },
      { src: matmat3,  alt: 'Baby Matteo – month 3',  caption: 'Third month milestones' },
      { src: matmat4,  alt: 'Baby Matteo – month 4',  caption: 'Sailing strong at four months' },
      { src: matmat5,  alt: 'Baby Matteo – month 5',  caption: 'Five months of joy and wonder' },
      { src: matmat6,  alt: 'Baby Matteo – month 6',  caption: 'Halfway to one — six months!' },
      { src: matmat7,  alt: 'Baby Matteo – month 7',  caption: 'Seven months of discovery' },
      { src: matmat8,  alt: 'Baby Matteo – month 8',  caption: 'Eight months, endless smiles' },
      { src: matmat9,  alt: 'Baby Matteo – month 9',  caption: 'Nine months of treasure' },
      { src: matmat10, alt: 'Baby Matteo – month 10', caption: 'Ten months — so much to explore' },
      { src: matmat11, alt: 'Baby Matteo – month 11', caption: 'Eleven months — almost one!' },
    ],
  },

  giftGuide: {
    title: 'Treasure Chest',
    message:
      'Your presence is the greatest treasure. But if you wish to give Matteo ' +
      'a gift, we would truly appreciate baby essentials or a small token for ' +
      'his future adventures.',
    gcash: {
      name: 'Parent Name Placeholder',
      number: '09XX XXX XXXX',
      qrImageSrc: asset('images/gcash-qr-placeholder.png'),
      qrImageAlt: 'GCash QR code for gifts',
    },
    landbank: {
      qrImageSrc: asset('images/landbank-qr-placeholder.png'),
      qrImageAlt: 'Landbank QR code for gifts',
    },
  },

  dressCode: {
    subtitle: 'Dress the part, matey',
    title: 'Dress Code',
    prompt: 'Touch the deck to reveal the dress code',
    items: [
      { icon: '\u{1F451}', title: 'Smart Casual',      body: 'Come dressed neatly in smart casual attire - comfortable, stylish, and adventure-ready.' },
      { icon: '\u{1F31E}', title: 'Sail the Colors',   body: 'Feel free to wear outfits with a touch of blue, white, beige or black.' },
      { icon: '\u{1F45E}', title: 'Comfortable Shoes', body: "We'll be sailing between venues — wear shoes you can adventure in." },
      { icon: '⚐',    title: 'No strict uniform', body: 'Most importantly — come in good spirits and ready to celebrate!' },
    ],
  },

  reminders: {
    title: "Doctor's Orders",
    subtitle: "Chopper's rules for a smooth voyage",
    items: [
      { title: 'All hands on deck early',    body: 'Please arrive at the church before the ceremony starts.' },
      { title: 'Quiet seas',                 body: 'Kindly keep phones on silent during the baptism ceremony.' },
      { title: 'Clean hands, happy captain', body: 'Please sanitize before holding or greeting the baby.' },
      { title: 'No smoke on this ship',      body: 'No smoking near the event area.' },
      { title: 'Count your crew',            body: 'Kindly RSVP so we can prepare enough seats and food.' },
      { title: 'Dress for adventure',        body: 'Wear comfortable and family-friendly attire.' },
      { title: 'No kisses on the captain',   body: 'Please refrain from kissing the celebrant.' },
      { title: 'Stay well, sail safe',       body: "If you're feeling under the weather, please celebrate with us from home." },
    ],
  },

  countdown: {
    title: 'Countdown to the Grand Adventure',
    completedMessage: 'The grand adventure has begun!',
  },

  crew: {
    title: "Matteo's Crew",
    subtitle: 'The legendary pirates behind our little captain',
    parents: [
      {
        name: 'Papa JM',
        role: 'Captain Papa',
        wantedFor: 'Loving Matteo',
        bounty: 'Endless piggyback rides',
        imageSrc: papaJmImg,
      },
      {
        name: 'Ate Marel',
        role: 'First Mate',
        wantedFor: 'Spoiling Baby Matteo',
        bounty: 'Unlimited playtime & adventures',
        imageSrc: ateMarlImg,
      },
      {
        name: 'Mama Marna',
        role: 'Captain Mama',
        wantedFor: 'Loving Matteo',
        bounty: 'Infinite hugs and kisses',
        imageSrc: mamaMárnaImg,
      },
    ] as CrewMember[],
    grandparents: [
      {
        name: 'Lola Ana',
        role: 'Lola',
        wantedFor: 'Spoiling Matteo',
        bounty: 'Unlimited merienda',
        imageSrc: lolaAnaImg,
      },
      {
        name: 'Lolo Marvin',
        role: 'Lolo',
        wantedFor: 'Spoiling Matteo',
        bounty: 'Endless adventures in the park',
        imageSrc: loloMarvinImg,
      },
      {
        name: 'Lola Prescilla',
        role: 'Lola',
        wantedFor: 'Spoiling Matteo',
        bounty: 'Warmest baby blankets',
        imageSrc: lolaPacisImg,
      },
      {
        name: 'Lolo Marionito',
        role: 'Lolo',
        wantedFor: 'Spoiling Matteo',
        bounty: 'A thousand bedtime stories',
        imageSrc: loloPacisImg,
      },
    ] as CrewMember[],
    ninongs: [] as CrewMember[],
    ninangs: [] as CrewMember[],
  },

  rsvp: {
    title: 'Join the Crew',
    message: "Ready to join Matteo's crew? Let us know if you can celebrate with us.",
    confirmationNote: 'Kindly confirm your attendance at least two weeks before the event. No plus one, please. Kindly inform the Captain if ever.',
    buttonLabel: 'RSVP Here',
    formUrl: 'https://forms.gle/REPLACE_WITH_ACTUAL_FORM',
  },

  closing: {
    message:
      "Thank you for being part of Matteo's first grand adventure. " +
      'See you on his special day!',
    footer: 'Made with love for Marjohn Matteo',
  },

  audio: {
    src: asset('audio/adventure-theme.mp3'),
    buttonLabel: 'Play Adventure Music',
    enabled: true,
  },

  nav: [
    { label: 'Home', targetId: 'home' },
    { label: 'Details', targetId: 'details' },
    { label: 'Map', targetId: 'map' },
    { label: 'Gallery', targetId: 'gallery' },
    { label: 'Gift Guide', targetId: 'gifts' },
    { label: 'Reminders', targetId: 'reminders' },
    { label: 'Countdown', targetId: 'countdown' },
    { label: 'Crew', targetId: 'crew' },
    { label: 'RSVP', targetId: 'rsvp' },
  ],
};

export type InvitationConfig = typeof invitationConfig;
