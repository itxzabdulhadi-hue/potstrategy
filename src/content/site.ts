/**
 * All copy on the page, kept in one place.
 * Every claim here is taken from Pot Strategy's own published material.
 */

export const nav = [
  { label: 'The problem', href: '#the-problem' },
  { label: 'The proof', href: '#the-proof' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'The standard', href: '#the-standard' },
  {
    label: 'Insights',
    href: 'https://potstrategy.com/insights/global-retail-media-measurement-standards',
    external: true,
  },
  { label: 'Contact', href: 'mailto:hello@potstrategy.com' },
] as const;

export const hero = {
  eyebrow: 'Independent retail-media measurement · Johannesburg, South Africa',
  headline: ['Proof,', 'not impressions.'],
  lede: ['Independent Retail Media', 'Measurement, South Africa'],
  body: 'Retail media in South Africa is scored by the people who sell it. We keep the score independently.',
  facts: [
    { title: 'No media sold', body: 'No placements sold. No score to inflate.' },
    { title: 'No margin taken', body: 'Our only product is the number.' },
    { title: 'One ruler', body: 'Every retailer, one standard.' },
  ],
  tagline: 'Rooted in Culture. Built for Commerce.',
};

export const problem = {
  index: '01',
  label: 'The problem',
  headline: ['Every retailer marks', 'its own homework.'],
  paragraphs: [
    'The retailer sells the media, runs the campaign, and reports the result on its own platform. The agency that placed it writes the report. Nobody without a stake in the answer ever checks the number.',
    'And each network sets its own rules, so nothing is comparable. Different windows, different timing, different match logic, and nobody deduplicates a sale two networks both claim.',
  ],
  panel: {
    rows: [
      { label: 'Retailer A reports', value: 'ROAS, attributed 30-day click' },
      { label: 'Retailer B reports', value: 'ROAS, attributed 7-day view' },
      { label: 'Retailer C reports', value: '"Sales uplift," undefined' },
    ],
    ask: { label: 'Your board asks', value: 'Which one is true?' },
    note: 'The numbers above are made up. If the table still looks familiar,',
    noteAccent: 'that is the problem.',
  },
  diagram: {
    cards: [
      { value: '"3.1× ROAS"', caption: '30-day click attribution' },
      { value: '"3.0× ROAS"', caption: '7-day view attribution' },
      { value: '"Strong uplift"', caption: 'Definition unavailable' },
    ],
    ticks: ['0', 'baseline', 'lift', 'scale'],
    unit: 'One unit: incremental sales, verified at the till.',
    note: 'Restated on one standard, the same campaigns land where they actually belong.',
    noteAccent: 'Positions withheld. The method is not.',
  },
};

export const proof = {
  index: '02',
  label: 'How the proof is built',
  headline: ['The party that marks the result', 'sells none of the media.'],
  body: "Retailers can't grade the media they sell. Agencies can't grade the media they trade. We do neither, so we can grade both.",
  cards: [
    {
      label: 'Sold and run by retailers and agencies',
      title: 'The media',
      body: 'Placements, screens, and slots. We hold no inventory and take no margin on any of it.',
      tone: 'light' as const,
    },
    {
      label: 'Provided by the client',
      title: 'The data',
      body: 'Sell-out, media, promo and availability, from your systems. Never from the retailer being graded.',
      tone: 'light' as const,
    },
    {
      label: 'Marked by Pot Strategy',
      title: 'The result',
      body: 'We run the model on our own platform and mark the result ourselves. Verified at the till.',
      tone: 'dark' as const,
    },
  ],
  footnote: {
    strong: 'The value is the wall between us and the media.',
    rest: 'The scorekeeper holds no stake in the score.',
  },
};

export const metrics = {
  index: '03',
  label: 'The metrics that matter',
  headline: ['Three numbers', 'your board will ask for.'],
  lede: 'Three incrementality metrics, read on one standard.',
  cards: [
    {
      abbr: 'iROAS',
      label: 'Efficiency',
      body: 'Did the media pay for itself? Only sales that would not have happened without it count.',
    },
    {
      abbr: 'ISS',
      label: 'Budget defence',
      body: "The media's share of total sales. The number a CMO defends the budget with.",
    },
    {
      abbr: 'ISS-A',
      label: 'Headroom',
      body: 'How much growth is still on the table. The case for the next brief.',
    },
  ],
  benchmark: {
    caption: 'Read in session',
    title: 'What a benchmark read looks like',
    columns: ['iROAS', 'ISS', 'How it’s read'],
    rows: [
      { label: 'Campaign format A', read: 'Efficient; modest share of sales created' },
      { label: 'Campaign format B', read: 'Higher return per rand; more headroom to scale' },
    ],
    stamp: 'Read in session',
    note: 'The benchmark exists, by format and by category. We walk you through it in a session, against your own data. It does not live on a webpage.',
    cta: { label: 'Book a working session', href: 'mailto:hello@potstrategy.com?subject=Working%20session' },
  },
};

export const verdict = {
  index: '04',
  label: 'What you walk away with',
  headline: ['The read ends in a decision,', 'not a dashboard.'],
  lede: 'No data dump. Each retailer gets a verdict and the evidence under it.',
  scorecard: {
    title: 'Scorecard · Household cleaning: dishwashing',
    badge: 'Illustrative',
    rows: [
      {
        retailer: 'Retailer A',
        product: 'Dishwashing liquid',
        tag: 'Shift',
        action: 'Move promo budget to sponsored search.',
        body: 'Promo returned R1.10 per rand, mostly discounting sales that were happening anyway. Search returned R3.40 on new-to-brand baskets.',
      },
      {
        retailer: 'Retailer B',
        product: 'Surface cleaner',
        tag: 'Double down',
        action: 'Extend the promo cycle.',
        body: "Units moved 3× during promo weeks and repeat purchase doubled against non-promo months. Headroom says the ceiling isn't reached.",
      },
    ],
    note: 'Fictional brand, made-up numbers, real format. Your read is built from your own till data.',
  },
};

export const audience = {
  index: '05',
  label: 'Who we work for',
  headline: ['One standard,', 'three seats at the table.'],
  cards: [
    {
      label: 'Brands',
      title: 'Own the number.',
      body: 'One comparable answer across every retailer, before the budget round asks for it.',
      foot: 'The number in your pack, not theirs.',
    },
    {
      label: 'Agencies',
      title: 'Make the PCA defensible.',
      body: "We don't buy, plan, or trade, so we never compete with you. We mark the result, and your PCA becomes evidence instead of a claim.",
      foot: 'Your strategy, independently verified.',
    },
    {
      label: 'Retail media networks',
      title: 'Let a third party say it.',
      body: "Bigger budgets follow numbers advertisers don't have to take on faith. That's how every mature market grew.",
      foot: 'Trust is the growth lever.',
    },
  ],
};

export const method = {
  index: '06',
  label: 'How it works',
  headline: ['Four steps from raw data', 'to a marked result.'],
  steps: [
    {
      n: '01',
      title: 'Connect the data',
      body: 'Sell-out, media, promo and availability, by product code. From you, never the retailer being graded.',
    },
    {
      n: '02',
      title: 'Model organic sales',
      body: "What would have sold anyway, modelled before anyone sees the campaign's numbers.",
    },
    {
      n: '03',
      title: 'Isolate the lift',
      body: 'Actual sales minus baseline. What remains is what the media created. Nothing is claimed twice.',
    },
    {
      n: '04',
      title: 'Score and compare',
      body: 'iROAS, ISS, and ISS-A, marked on our platform, on the same ruler.',
    },
  ],
};

export const stance = {
  index: '07',
  label: 'Where we stand',
  headline: ['What we do, and what', "we deliberately don't."],
  do: {
    label: 'What we do',
    items: [
      'Measure incrementality, the sales the media actually created',
      'Set one standard across every retail partner',
      'Run every read on our own platform, on the same method',
      'Hold the transaction record, and only the transaction record',
    ],
  },
  dont: {
    label: "What we deliberately don't",
    items: ['Sell media', 'Take a margin on spend', 'Run the campaigns we grade', 'Compete with your agency'],
  },
};

export const marquee = [
  { text: 'Rooted in Culture.', accent: ' Built for Commerce.' },
  { text: 'We sell no media,', accent: ' so we have nothing to inflate.' },
  { text: 'You run the media.', accent: ' We mark the till.' },
];

export const standard = {
  index: '08',
  label: 'The standard',
  headline: ['How the number', 'stays honest.'],
  lede: 'Independence is a structure, not a promise. The read runs under these rules, every time.',
  rules: [
    {
      n: 'Rule 01',
      title: 'Baseline before results',
      body: 'The baseline is modelled before anyone sees the campaign’s numbers. The answer can’t be shaped by knowing what it “should” be.',
    },
    {
      n: 'Rule 02',
      title: 'Same method, every retailer',
      body: 'One model, one window, one set of definitions. If retailers land in different places, the media performed differently. The ruler didn’t change.',
    },
    {
      n: 'Rule 03',
      title: 'Privacy by design',
      body: 'Sell-out and transaction records, handled in line with POPIA. No personal shopper data required.',
    },
    {
      n: 'Rule 04',
      title: 'Definitions in the read',
      body: 'Every scorecard states what was counted, over what window, against what baseline. A number you can’t interrogate, you can’t defend.',
    },
  ],
  global: {
    strong: 'Held to the global standards.',
    body: 'Our method follows the IAB/MRC Retail Media Measurement Guidelines, the IAB Europe Commerce Media Measurement Standards, and the global Guidelines for Incremental Measurement in Commerce Media. Aligned, not certified, and the difference is stated.',
    link: {
      label: 'How the world measures retail media',
      href: 'https://potstrategy.com/insights/global-retail-media-measurement-standards',
    },
  },
};

export const faq = [
  {
    q: 'How is this different from traditional research houses?',
    a: 'Panels and surveys measure brand perception, refreshed quarterly. We measure retail media campaigns: SKU-level incrementality from till data, per campaign, per retailer, on one standard. Their model says what retail media deserves. Ours says where inside it the money worked.',
  },
  {
    q: 'What data do you need from us?',
    a: 'Sell-out, media, promo and availability data, by product code, from your own systems.',
  },
  {
    q: "Do we need the retailer's permission?",
    a: 'No. The read is built from your own data about your own products.',
  },
  {
    q: "Does this replace the retailer's or agency's reporting?",
    a: "It verifies it. Their reporting keeps doing its job; ours is the reference it can be checked against.",
  },
  {
    q: 'How does a pilot start?',
    a: 'Bring one campaign. We scope the data, the window, and the questions in a working session, then put it on the ruler.',
  },
  { q: 'Who owns the results?', a: 'You do. The scorecard is yours, with the method attached.' },
];

export const start = {
  index: '09',
  label: 'Start',
  headline: 'Put one campaign on the independent ruler.',
  body: 'Bring one campaign. We put it on the ruler and walk you through what it really returned. One number you can stand behind.',
  actions: [
    { label: 'Book a working session', href: 'mailto:hello@potstrategy.com?subject=Working%20session' },
    { label: 'Talk to us', href: 'mailto:hello@potstrategy.com' },
  ],
};

export const footer = {
  brand: 'Pot Strategy',
  tagline: 'Independent retail media measurement · Johannesburg, South Africa',
  links: [
    { label: 'The problem', href: '#the-problem' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'The standard', href: '#the-standard' },
    { label: 'FAQ', href: '#faq' },
  ],
  copyright: '© 2026 Pot Strategy (Pty) Ltd. All rights reserved.',
  popia: 'Data handled in line with POPIA.',
  privacy: {
    label: 'Privacy',
    href: 'https://potstrategy.com/privacy',
  },
  contact: { label: 'Contact', href: 'mailto:hello@potstrategy.com' },
  email: 'hello@potstrategy.com',
};
