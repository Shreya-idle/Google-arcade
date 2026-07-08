export const SITE = {
  title: 'Google Cloud Arcade 2026',
  subtitle: 'Facilitator Program',
  tagline: 'Learn Cloud. Earn Badges. Win Swag.',
  description:
    'Join the Google Cloud Arcade 2026 Facilitator Program — a free, hands-on cloud learning journey with mentorship, milestones, and exciting rewards.',
  registrationDate: '2026-07-13T17:00:00+05:30',
  registrationCloseDate: '2026-07-20T23:59:00+05:30',
  programEndDate: '2026-09-14T23:59:00+05:30',
  lumaUrl: 'https://luma.com/5avnzhw7',
  referralCode: 'Coming Soon',
  whatsappChannel: '#',
  whatsappGroup: '#',
  arcadeDashboard: 'https://go.cloudskillsboost.google/arcade',
  facilitatorProgram: 'https://rsvp.withgoogle.com/events/arcade-facilitator/home',
  subscriptionForm: 'https://forms.gle/2h6xCvY3sW29pw4p7',
  profileSettings: 'https://www.skills.google/my_account/profile',
  supportEmail: 'arcade-facilitator@google.com',
}

export const FACILITATORS = [
  {
    name: 'Mayank Sharma',
    role: 'Arcade Facilitator',
    bio: 'Your primary guide for the 2026 cohort — helping you navigate milestones, labs, and community support throughout the programme.',
    initials: 'MS',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Shreya Agrawal',
    role: 'Arcade Facilitator',
    bio: 'Supports learners across milestones and community Q&A throughout the programme window with structured guidance.',
    initials: 'SA',
    color: 'from-green-500 to-teal-600',
  },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Setup', href: '#setup' },
  { label: 'Points', href: '#points' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Resources', href: '#resources' },
]

export const VALUE_PROPS = [
  {
    icon: 'cloud',
    title: 'Real Cloud Skills',
    description: 'Hands-on Google Cloud experience across AI, Data, and Infrastructure tracks.',
  },
  {
    icon: 'briefcase',
    title: 'Career Readiness',
    description: 'Build a verifiable public skills profile for your resume and interviews.',
  },
  {
    icon: 'badge',
    title: 'Digital Credentials',
    description: 'Earn Google Cloud-hosted digital badges to share on LinkedIn.',
  },
  {
    icon: 'gift',
    title: 'Zero-Cost Learning',
    description: 'All labs inside Arcade Games are 100% free — no credits required to start.',
  },
]

export const TIMELINE = [
  {
    date: 'Jan – Dec 2026',
    title: 'Google Skills Arcade Season',
    description: 'Complete monthly games consistently throughout the year.',
    status: 'ongoing',
  },
  {
    date: '13 Jul 2026, 5:00 PM IST',
    title: 'Facilitator Enrolment Opens',
    description: 'Register immediately — seats are limited. Use our Luma link to sign up.',
    status: 'upcoming',
  },
  {
    date: '20 Jul 2026, 11:59 PM IST',
    title: 'Enrolment Closes',
    description: 'No late entries accepted after this date or once all seats are filled.',
    status: 'upcoming',
  },
  {
    date: '13 Jul – 14 Sep 2026',
    title: 'Facilitator Programme Window',
    description: 'Complete milestones, skill badges, and bonus activities within this period.',
    status: 'upcoming',
  },
  {
    date: 'Mid Jul 2026',
    title: 'Community Orientation',
    description: 'Getting started session — meet facilitators and learn the roadmap.',
    status: 'upcoming',
  },
  {
    date: '14 Sep 2026',
    title: 'Cohort 1 Concludes',
    description: 'Facilitator programme window ends. Keep earning Arcade points year-round!',
    status: 'upcoming',
  },
]

export const SETUP_STEPS = [
  {
    step: 1,
    title: 'Subscribe to The Arcade',
    description:
      'Subscribe at least once during the programme cycle for your enrolment email to be delivered correctly.',
    items: [
      'Visit the official Google Skills Arcade Subscription Form',
      'Fill in your name and the same email registered on Google Skills',
      'Look for confirmation: "Thanks for filling out: Google Skills Arcade Program Subscription Form"',
      'If you receive monthly Arcade Insider emails, your subscription is active',
    ],
    link: SITE.subscriptionForm,
    linkLabel: 'Subscription Form',
  },
  {
    step: 2,
    title: 'Make Your Profile Public',
    description:
      'Without a public profile, you are invisible to the Arcade tracking system and ineligible for rewards.',
    items: [
      'Toggle "Make profile public" to ACTIVE in Google Skills profile settings',
      'Ensure "Send me occasional product updates, announcements, and offers" is checked',
      'Double-check this setting before every milestone deadline',
    ],
    link: SITE.profileSettings,
    linkLabel: 'Profile Settings',
  },
  {
    step: 3,
    title: 'Before You Enrol',
    description: 'Complete these checklist items before submitting your facilitator registration.',
    items: [
      'Add googlecloudedu-noreply@google.com to contacts',
      'Keep your Public Profile URL ready',
      'Have your Facilitator Referral Code on hand',
      'Sign in to the correct Google account',
      'Accept Terms & Conditions before submitting',
    ],
  },
  {
    step: 4,
    title: 'Enrolment Protocol',
    description: 'Four steps from sign-up to start line.',
    items: [
      'Access the registration link between 13 July and 14 September',
      'Submit basic details, Skills Boost email, and facilitator referral code',
      'Check inbox (and Spam) for confirmation from googlecloudedu-noreply@google.com',
      'Log into the Arcade dashboard and begin playing active monthly games',
    ],
    link: SITE.lumaUrl,
    linkLabel: 'Register on Luma',
  },
]

export const POINTS_SYSTEM = [
  {
    icon: 'gamepad',
    title: 'Arcade Games',
    formula: '1 Game = 1 Point',
    description: 'Every eligible game completed contributes exactly 1 Arcade Point.',
  },
  {
    icon: 'zap',
    title: 'Skill Badges',
    formula: '2 Badges = 1 Point',
    description: 'Complete structured labs and pass assessments to earn shareable digital badges.',
  },
  {
    icon: 'trophy',
    title: 'Bonus Milestone (NEW)',
    formula: '+10 Bonus Points',
    description:
      'Industry-ready skills milestone — awarded on top of your milestone bonus points.',
  },
]

export const GAME_TYPES = [
  {
    name: 'Arcade Adventure',
    description: 'Play. Explore. Learn. The flagship monthly game track for beginners.',
  },
  {
    name: 'Arcade Voyage',
    description: 'Guided, sequential cloud challenges that build on previous skills.',
  },
  {
    name: 'Arcade Trail',
    description: 'Hands-on labs across themed cloud journeys focused on real-world scenarios.',
  },
  {
    name: 'Base Camp',
    description: 'Essential Google Cloud skills. 12 labs = 1 Arcade Point.',
  },
]

export const MILESTONES = [
  {
    name: 'Milestone 1',
    level: 'Foundation',
    requirements: ['Complete 6 Arcade Games', 'Complete 18 Skill Badges', 'Complete Bonus Milestone'],
    arcadePoints: 15,
    bonusPoints: 5,
    totalPoints: 20,
    color: 'border-blue-400',
  },
  {
    name: 'Milestone 2',
    level: 'Intermediate',
    requirements: ['Complete 8 Arcade Games', 'Complete 34 Skill Badges', 'Complete Bonus Milestone'],
    arcadePoints: 25,
    bonusPoints: 15,
    totalPoints: 40,
    color: 'border-green-400',
  },
  {
    name: 'Milestone 3',
    level: 'Advanced',
    requirements: ['Complete 10 Arcade Games', 'Complete 50 Skill Badges', 'Complete Bonus Milestone'],
    arcadePoints: 35,
    bonusPoints: 25,
    totalPoints: 60,
    color: 'border-yellow-400',
  },
  {
    name: 'Ultimate Milestone',
    level: 'Master',
    requirements: ['Complete ALL 12 Arcade Games', 'Complete 66 Skill Badges', 'Complete Bonus Milestone'],
    arcadePoints: 45,
    bonusPoints: 35,
    totalPoints: 80,
    color: 'border-purple-400',
  },
]

export const PRIZE_TIERS = [
  { name: 'Trooper', stars: 1, spots: '6,000 spots' },
  { name: 'Ranger', stars: 2, spots: '4,000 spots' },
  { name: 'Champion', stars: 3, spots: '3,000 spots' },
  { name: 'Legend', stars: 4, spots: '2,500 spots' },
]

export const STRATEGY_TIPS = [
  {
    number: '01',
    title: 'Games First',
    description:
      'Complete Arcade games as soon as they open each month. Seats are limited and renew monthly.',
  },
  {
    number: '02',
    title: 'Badges Second',
    description:
      'Work on Skill Badges at a steady pace. Use them to fill gaps between monthly game drops.',
  },
  {
    number: '03',
    title: 'Consistency Over Speed',
    description:
      'Arcade is a 12-month journey. Check your dashboard weekly and maintain steady progression.',
  },
]

export const FAQ = [
  {
    q: 'How many points does 1 skill badge earn?',
    a: 'Zero on its own. You need a minimum of 2 Skill Badges to earn 1 Arcade Point from badges.',
  },
  {
    q: 'Can I gift my points to someone?',
    a: 'No. Points are tied to your individual learning record and cannot be transferred.',
  },
  {
    q: 'Do milestones guarantee a prize?',
    a: 'No. Milestones earn Bonus Points which combine with Arcade Points toward tier eligibility — not a direct prize.',
  },
  {
    q: 'What if a game seat is full?',
    a: 'Seats are first-come, first-served. Additional seats sometimes open — keep checking the dashboard.',
  },
  {
    q: 'Are participants from last year eligible?',
    a: 'Yes! If you participated in a previous cohort, you are fully eligible for the 2026 programme.',
  },
  {
    q: 'Who can join?',
    a: 'Anyone 18 or older with a laptop/desktop and willingness to learn. No prior cloud experience required.',
  },
  {
    q: 'Do Arcade games require credits?',
    a: 'Never. Make sure you launched the lab from the official Arcade portal only.',
  },
  {
    q: 'What is the referral code?',
    a: 'Our facilitator referral code will be shared soon. Register via our Luma link to stay updated.',
  },
]

export const RESOURCES = [
  { label: 'Google Skills Arcade', url: 'https://go.cloudskillsboost.google/arcade' },
  { label: 'Facilitator Programme', url: 'https://rsvp.withgoogle.com/events/arcade-facilitator/home' },
  { label: 'Register with Facilitator (Luma)', url: SITE.lumaUrl },
  { label: 'Arcade Subscription Form', url: 'https://forms.gle/2h6xCvY3sW29pw4p7' },
  { label: 'Profile Settings', url: 'https://www.skills.google/my_account/profile' },
  { label: 'Code of Conduct', url: 'https://rsvp.withgoogle.com/events/arcade-facilitator/code-of-conduct' },
]

export const EXPECTATIONS = [
  'Earn Google Cloud Skill Badges',
  'Learn Cloud through Arcade Games, Hands-on Labs, and Quizzes',
  'Win Official Google Swags — T-Shirts, Hoodies, Backpacks & more',
  'Get mentored by Google Cloud Arcade Facilitators',
  'Weekly Milestone Challenges & Surprise Rewards',
  'Live Sessions & Real-Time Doubt Solving',
  'Networking with Learners Across India',
]
