// Single source of truth for chamber details, counsel, practice areas and media.
// Edit text here; pages read from this file.

export const chamber = {
  name: 'Sarfaraz Hussain',
  title: 'Advocate',
  firm: 'Sarfaraz Hussain, Advocate & Associates',
  courts: 'Supreme Court of India and High Court of Delhi',
  qualifications: 'B.E. (Civil), LL.B., LL.M. (Criminal Law)',
  phone: '+91 92508 45823',
  phoneHref: 'tel:+919250845823',
  whatsapp: 'https://wa.me/919250845823',
  email: 'aa.affanhus@gmail.com',
  hours: [
    ['Monday to Friday', '4:00 pm to 8:30 pm'],
    ['Saturday', 'By appointment'],
  ],
  offices: [
    {
      name: 'High Court chamber',
      lines: ['Lawyers’ Chamber Block-I', 'Delhi High Court', 'New Delhi 110003'],
      note: 'Main litigation chamber',
    },
    {
      name: 'Batla House office',
      lines: ['G-74, 4th Floor, Muradi Road', 'Batla House, Jamia Nagar, Okhla', 'New Delhi 110025'],
      note: 'Evening consultations',
    },
  ],
};

export const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Practice areas', path: '/practice-areas' },
  { name: 'Media', path: '/media' },
  { name: 'Contact', path: '/contact' },
];

export const courts = [
  'Supreme Court of India',
  'High Court of Delhi',
  'District & Sessions Courts, Delhi',
  'Delhi Waqf Tribunal',
  'Motor Accident Claims Tribunals',
  'Consumer Commissions',
];

export const practiceAreas = [
  {
    id: 'criminal',
    title: 'Criminal litigation',
    forum: 'Supreme Court, High Court, Sessions',
    summary:
      'Defence at trial, bail, and appeals through to the Supreme Court. Most of the chamber’s work, and the area Sarfaraz Hussain is best known for.',
    items: [
      'Special Leave Petitions (Criminal) before the Supreme Court',
      'Regular, interim and anticipatory bail',
      'Criminal appeals and writs, including murder, POCSO and NDPS matters',
      'Quashing of FIRs under Section 482 Cr.P.C. / Section 528 BNSS',
      'Trial defence in Sessions Courts',
    ],
  },
  {
    id: 'civil',
    title: 'Civil litigation',
    forum: 'High Court, District Courts',
    summary:
      'Suits, appeals and writs on property, contracts and money claims across the Delhi courts.',
    items: [
      'Civil suits and temporary injunctions',
      'Regular First Appeals and civil revisions',
      'Specific performance and breach of contract',
      'Summary recovery suits under Order 37 CPC',
      'Writ petitions under Article 226',
      'Execution of decrees',
    ],
  },
  {
    id: 'family',
    title: 'Family and matrimonial',
    forum: 'Family Courts, High Court',
    summary:
      'Divorce, custody and maintenance, handled with discretion and with settlement explored wherever it is realistic.',
    items: [
      'Mutual consent and contested divorce',
      'Child custody and guardianship',
      'Maintenance under Section 125 Cr.P.C. / Section 144 BNSS',
      'Proceedings under the Domestic Violence Act',
      'Family settlements and partition',
    ],
  },
  {
    id: 'ni-act',
    title: 'Cheque dishonour (Section 138 NI Act)',
    forum: 'All District Courts, Delhi',
    summary:
      'Acting for complainants seeking recovery and for accused persons answering the statutory presumption.',
    items: [
      'Complaints and trials under Section 138',
      'Appeals and revisions',
      'Compounding and settlement',
    ],
  },
  {
    id: 'property',
    title: 'Property and Waqf matters',
    forum: 'Delhi Waqf Tribunal, civil courts',
    summary:
      'Title, possession and tenancy disputes, and proceedings concerning Waqf property and its administration.',
    items: [
      'Waqf Tribunal proceedings and writs against Waqf Board decisions',
      'Mutawalli and management disputes',
      'Partition, eviction and possession suits',
      'Landlord and tenant disputes',
      'Title verification',
    ],
  },
  {
    id: 'mact',
    title: 'Motor accident claims',
    forum: 'MACT, High Court',
    summary:
      'Claims for injury and death before the Motor Accident Claims Tribunals, and appeals for enhancement.',
    items: [
      'Filing and contesting claim petitions',
      'Disputes with insurers over liability',
      'Appeals for enhancement of awards',
    ],
  },
  {
    id: 'consumer',
    title: 'Consumer disputes',
    forum: 'District, State and National Commissions',
    summary: 'Complaints and appeals for deficiency in service, defective goods and medical negligence.',
    items: [
      'District Commission complaints',
      'Appeals before the Delhi State Commission',
      'Proceedings before the NCDRC',
    ],
  },
  {
    id: 'seniors',
    title: 'Senior citizens’ maintenance',
    forum: 'SDM and DM tribunals',
    summary:
      'Applications under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007.',
    items: ['Maintenance applications', 'Eviction from self-acquired property', 'Appeals before the District Magistrate'],
  },
];

export const matters = [
  {
    id: 'bhatnagar',
    title: 'Shivani Bhatnagar murder case',
    forum: 'Delhi High Court',
    role: 'Counsel for the accused, S.P. Sharma',
    body:
      'Appeared for S.P. Sharma alongside senior advocates including the late Ram Jethmalani, Sushil Kumar and Siddharth Luthra.',
    media: 'CNN-IBN coverage in the media archive',
  },
  {
    id: 'najeeb',
    title: 'Najeeb Ahmed disappearance',
    forum: 'Delhi High Court',
    role: 'Counsel at the first hearing',
    body:
      'Appeared at the first hearing of the habeas corpus proceedings concerning the JNU student, pressing for an independent investigation.',
    media: 'Press conference in the media archive',
  },
  {
    id: 'interfaith',
    title: 'Interfaith marriage and personal liberty',
    forum: 'Supreme Court of India',
    role: 'Counsel',
    body:
      'Appeared in matters widely reported as the “love jihad” cases, on the right of adults to marry by choice.',
    media: 'Television interview in the media archive',
  },
  {
    id: 'ayodhya',
    title: 'Ram Janmabhoomi – Babri Masjid title dispute',
    forum: 'Supreme Court of India',
    role: 'Appeared during the hearings',
    body: 'Present before the Constitution Bench during the hearings of the Ayodhya title suit appeals.',
    media: 'Photographs in the media archive',
  },
];

export const approach = [
  {
    title: 'Reading the record',
    body: 'Every matter starts with the FIR, the pleadings and the orders so far, read in full before any advice is given.',
  },
  {
    title: 'Research',
    body: 'Current Supreme Court and High Court authority on the precise point, not a general brief.',
  },
  {
    title: 'Strategy',
    body: 'A clear view of the right forum, the right remedy and the likely timeline, explained plainly.',
  },
  {
    title: 'Appearance',
    body: 'The advocate you briefed appears in court and keeps you informed after each date.',
  },
];

export const counsel = [
  {
    id: 'sarfaraz',
    name: 'Sarfaraz Hussain',
    role: 'Advocate, head of chambers',
    qualification: 'B.E. (Civil), LL.B., LL.M. (Criminal Law)',
    court: 'Supreme Court of India and Delhi High Court',
    standing: '25+ years at the Bar',
    img: '/sarfaraz_hussain.png',
    focus: 'Criminal appeals, SLPs, writs, bail, civil disputes',
    bio:
      'A civil engineer by training who moved to the law, Sarfaraz Hussain has practised in Delhi for over twenty-five years and leads a team of advocates appearing across the city’s courts. His work is mainly criminal: trials, bail and appeals up to the Supreme Court.',
  },
  {
    id: 'mf-khan',
    name: 'M. F. Khan',
    role: 'Senior counsel',
    qualification: 'LL.B., LL.M.; former Public Prosecutor',
    court: 'Supreme Court of India',
    standing: '30+ years at the Bar',
    img: '/mf_khan.png',
    focus: 'Criminal appeals, constitutional petitions, special statutes',
    bio:
      'A former Public Prosecutor at the Supreme Court, M. F. Khan advises on criminal appeals and questions of statutory interpretation.',
  },
  {
    id: 'affan',
    name: 'Affan Husain',
    role: 'Advocate',
    qualification: 'B.A. LL.B. (Hons.)',
    court: 'Delhi High Court and District Courts',
    img: '/images/team-06.jpg',
    focus: 'Criminal defence, High Court filings, SLP drafting',
    bio:
      'Appears in criminal trials and bail matters and assists on High Court revisions and Supreme Court filings.',
  },
  {
    id: 'sabahat',
    name: 'Sabahat Hussain',
    role: 'Associate',
    qualification: 'LL.B., B.Com.',
    court: 'Delhi High Court and Sessions Courts',
    img: '/sabahat.png',
    focus: 'Civil suits, injunctions, property and recovery',
    bio: 'Handles civil suits, Order 37 recovery proceedings, commercial contracts and title disputes.',
  },
  {
    id: 'zaki',
    name: 'Mohd. Zaki',
    role: 'Associate',
    qualification: 'B.A. LL.B.',
    court: 'Delhi High Court and District Courts',
    img: '/zaki.png',
    focus: 'Section 138 NI Act, consumer and Waqf matters',
    bio: 'Appears in cheque dishonour trials, consumer complaints and Waqf Tribunal proceedings.',
  },
  {
    id: 'ali',
    name: 'Ali',
    role: 'Associate',
    qualification: 'LL.B.',
    court: 'Delhi High Court and District Courts',
    img: '/ali.png',
    focus: 'Bail, remand and trial hearings',
    bio: 'Covers day-to-day trial court hearings, remand proceedings and urgent bail applications.',
  },
  {
    id: 'anita',
    name: 'Anita',
    role: 'Associate',
    qualification: 'B.A. LL.B.',
    court: 'District & Sessions Courts, Delhi',
    img: '/anita.png',
    focus: 'Family law and motor accident claims',
    bio: 'Works on divorce, maintenance and domestic violence proceedings, and MACT claims.',
  },
];

export const faqs = [
  {
    q: 'Which courts does the chamber appear in?',
    a: 'The Supreme Court of India, the Delhi High Court, all District and Sessions Courts in Delhi, the Delhi Waqf Tribunal, Motor Accident Claims Tribunals and the Consumer Commissions.',
  },
  {
    q: 'How do I arrange a meeting?',
    a: 'Call or WhatsApp the chamber on +91 92508 45823, or send the form on the contact page. Meetings are held at the High Court chamber or the Batla House office.',
  },
  {
    q: 'What should I bring to the first meeting?',
    a: 'Copies of everything you have: the FIR or complaint, notices, agreements, earlier orders and any correspondence. The more of the record we can read, the more precise the advice.',
  },
  {
    q: 'Can urgent matters be taken up quickly?',
    a: 'Yes. Where there is a threat of arrest, or an order that needs to be stayed, the chamber prepares the application and seeks urgent listing before the appropriate bench.',
  },
];

// Google Drive file IDs. Thumbnails come from Drive; the player opens on click.
export const videos = [
  {
    id: '1MDxD2qSKYdOg-3aQ90hku7g8EwItcvqn',
    title: 'Ex-top cop Sharma to walk free',
    source: 'CNN-IBN',
    note: 'Report on the verdict in the Shivani Bhatnagar murder case.',
  },
  {
    id: '1pMYQPDNY_US7twrxiiBHsF_VsAJhTyYa',
    title: '20 घंटे से JNU ‘बंधक’',
    source: 'India TV',
    note: 'Prime-time debate on the JNU detention.',
  },
  {
    id: '1UfM2no-OAPG-06BcJ-Hr8HXyCCdWb51G',
    title: 'Statement to the press after a High Court hearing',
    source: 'Press conference',
    note: 'Sarfaraz Hussain briefing reporters on the court’s order.',
  },
  {
    id: '1Bf1CQWacVxDXebft_hhK0JZV5jxxqlS_',
    title: 'Arriving at the Delhi High Court',
    source: 'TV9',
    note: 'News coverage on the day of a hearing.',
  },
  {
    id: '1Xt9dH14vWeI3-1Rd99iFRYstfAH8zISy',
    title: 'Outside court with clients',
    source: 'News footage',
    note: 'With clients and counsel after a hearing.',
  },
];

// Captions are deliberately neutral. Confirm the occasion of each photo with the client.
export const photos = [
  { src: '/images/4.jpg', caption: 'With counsel and parties on the court lawns', w: 1122, h: 531 },
  { src: '/images/1.jpg', caption: 'In conference with fellow counsel', w: 1122, h: 531 },
  { src: '/images/2.jpg', caption: 'With colleagues and visitors outside court', w: 1122, h: 531 },
];

export const memberships = [
  { name: 'Supreme Court Bar Association', role: 'Member' },
  { name: 'Delhi High Court Bar Association', role: 'Member' },
  { name: 'All India Bar Association', role: 'Life member' },
];

export const publicRoles = [
  { org: 'Jamia Nagar Welfare Society (Regd.)', role: 'President' },
  { org: 'Indian Society for Environment & Management', role: 'Former Vice-President' },
  { org: 'Batla House Welfare Society (Regd.)', role: 'Former President; now Legal Advisor' },
  { org: 'Batla House Shopkeepers Society', role: 'Legal Advisor' },
  { org: 'Jama Masjid, Batla House', role: 'Former Secretary General' },
  { org: 'Akhil Bhartiya Yuva Awam Dalit Mukti Morcha (Regd.)', role: 'Secretary General' },
  { org: 'Darul Qaza, Jamia Nagar', role: 'Founder member' },
  { org: 'Aman Committee, Okhla', role: 'Member' },
];
