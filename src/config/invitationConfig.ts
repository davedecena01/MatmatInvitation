/* ============================================================
   INVITATION CONFIG — the single place to edit ALL content.
   Replace every "Placeholder" value and REPLACE_WITH_* link
   before sharing the site with guests. See README.md.
   ============================================================ */

/** Prefixes public/ asset paths with the deploy base path
 *  so they work on Vercel ('/') and GitHub Pages ('/matteo-invitation/'). */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export interface CrewMember {
  name: string;
  role: string;
  /** Playful "wanted for" line shown on the bounty poster. */
  wantedFor: string;
  /** Playful, clearly decorative bounty line. */
  bounty: string;
}

export const invitationConfig = {
  baby: {
    name: 'Matteo',
    fullName: 'Matteo Pacis',
  },

  event: {
    dateISO: '2026-08-11',
    dateDisplay: 'August 11, 2026',
    /** 10:00 AM Asia/Manila (UTC+8) expressed as a fixed UTC instant —
     *  keeps the countdown correct in every visitor's timezone. */
    countdownTargetUTC: '2026-08-11T02:00:00Z',
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
    venue: 'Sacred Heart Parish Church',
    address: 'Sta. Mesa, Manila',
    time: '10:00 AM',
    dateDisplay: 'August 11, 2026',
    mapUrl: 'https://maps.google.com/?q=Sacred+Heart+Parish+Church+Sta+Mesa+Manila', // REPLACE_WITH_EXACT_PIN
    mapButtonLabel: 'View Church Map',
  },

  reception: {
    title: 'Birthday Reception',
    venue: 'Reception Venue',
    address: 'Teresa Street, Sta. Mesa, Manila',
    time: '12:00 PM',
    dateDisplay: 'August 11, 2026',
    mapUrl: 'https://maps.google.com/?q=Teresa+Street+Sta+Mesa+Manila', // REPLACE_WITH_EXACT_PIN
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
      {
        src: asset('images/gallery/gallery-01.png'),
        alt: 'Baby Matteo pirate adventure portrait',
        caption: 'The little captain reporting for duty',
      },
      {
        src: asset('images/gallery/gallery-02.png'),
        alt: 'Baby Matteo on a treasure island scene',
        caption: 'X marks the spot',
      },
      {
        src: asset('images/gallery/gallery-03.png'),
        alt: 'Baby Matteo on a ship deck scene',
        caption: 'First mate of the family ship',
      },
      {
        src: asset('images/gallery/gallery-04.png'),
        alt: 'Baby Matteo birthday celebration scene',
        caption: 'One year of grand adventures',
      },
      {
        src: asset('images/gallery/gallery-05.png'),
        alt: 'Baby Matteo baptism blessing scene',
        caption: 'A blessing for the voyage ahead',
      },
    ],
  },

  giftGuide: {
    title: 'Treasure Chest',
    message:
      'Your presence is the greatest treasure. But if you wish to give Matteo ' +
      'a gift, we would truly appreciate baby essentials or a small token for ' +
      'his future adventures.',
    gcash: {
      name: 'Parent Name Placeholder', // REPLACE_WITH_GCASH_NAME
      number: '09XX XXX XXXX', // REPLACE_WITH_GCASH_NUMBER
      qrImageSrc: asset('images/gcash-qr-placeholder.png'),
      qrImageAlt: 'GCash QR code for gifts',
    },
  },

  dressCode: {
    subtitle: 'Dress the part, matey',
    title: 'Dress Code',
    prompt: 'Touch the deck to reveal the dress code',
    items: [
      { icon: '\u{1F451}', title: 'Smart Casual',      body: 'Come dressed neatly — think Sunday-best meets adventure-ready.' },
      { icon: '\u{1F31E}', title: 'Sail the Colors',   body: 'Feel free to wear One Piece-inspired or pirate-themed outfits!' },
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
        name: 'Father Name Placeholder',
        role: 'Captain Papa',
        wantedFor: 'Loving Matteo',
        bounty: 'Endless piggyback rides',
      },
      {
        name: 'Mother Name Placeholder',
        role: 'Captain Mama',
        wantedFor: 'Loving Matteo',
        bounty: 'Infinite hugs and kisses',
      },
    ] as CrewMember[],
    grandparents: [
      {
        name: 'Grandfather Placeholder',
        role: 'Lolo',
        wantedFor: 'Spoiling Matteo',
        bounty: 'A thousand bedtime stories',
      },
      {
        name: 'Grandmother Placeholder',
        role: 'Lola',
        wantedFor: 'Spoiling Matteo',
        bounty: 'Unlimited merienda',
      },
      {
        name: 'Grandfather Placeholder',
        role: 'Lolo',
        wantedFor: 'Spoiling Matteo',
        bounty: 'Endless adventures in the park',
      },
      {
        name: 'Grandmother Placeholder',
        role: 'Lola',
        wantedFor: 'Spoiling Matteo',
        bounty: 'Warmest baby blankets',
      },
    ] as CrewMember[],
    ninongs: [
      { name: 'Ninong Name 1', role: 'Ninong', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
      { name: 'Ninong Name 2', role: 'Ninong', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
      { name: 'Ninong Name 3', role: 'Ninong', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
      { name: 'Ninong Name 4', role: 'Ninong', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
    ] as CrewMember[],
    ninangs: [
      { name: 'Ninang Name 1', role: 'Ninang', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
      { name: 'Ninang Name 2', role: 'Ninang', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
      { name: 'Ninang Name 3', role: 'Ninang', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
      { name: 'Ninang Name 4', role: 'Ninang', wantedFor: 'Loving Matteo', bounty: 'Endless hugs' },
    ] as CrewMember[],
  },

  rsvp: {
    title: 'Join the Crew',
    message: "Ready to join Matteo's crew? Let us know if you can celebrate with us.",
    confirmationNote: 'Kindly confirm your attendance at least two weeks before the event. No plus one, please. Kindly inform the Captain if ever.',
    buttonLabel: 'RSVP Here',
    formUrl: 'https://forms.gle/REPLACE_WITH_ACTUAL_FORM', // REPLACE_WITH_GOOGLE_FORM
  },

  closing: {
    message:
      "Thank you for being part of Matteo's first grand adventure. " +
      'See you on his special day!',
    footer: 'Made with love for Matteo Pacis',
  },

  audio: {
    /** Drop your own legally-usable track at public/audio/adventure-theme.mp3.
     *  The play button hides itself automatically while the file is missing. */
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
