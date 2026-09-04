import { ProgramInfo, MathCategory } from '../types';

export const FACULTY_DATA = {
  name: "Mr. Niranjan Naik",
  designation: "JEE Mathematics Faculty",
  qualification: "IIT Delhi Alumni",
  teachingExperience: "15+ Years",
  independentTeaching: "3+ Years",
  institutes: ["FIITJEE", "Sri Chaitanya"],
  coreSubjects: ["Class 11 Mathematics", "Class 12 Mathematics", "Dropper Batch", "JEE Main", "JEE Advanced"],
  phone: "8920705957",
  phoneDisplay: "+91 89207 05957",
  whatsapp: "8920705957",
  whatsappUrl: "https://wa.me/918920705957?text=Hello%20Sir%2C%20I%20am%20enquiring%20about%20JEE%20Mathematics%20classes.",
  email: "enquiry@niranjannaik-maths.com",
  offlineAddress: {
    line1: "305, Metroview Apartments",
    line2: "Pocket B, Sector 13, Dwarka",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110078",
    full: "305 Metroview Apartments Dwarka, Sector 13, B, New Delhi, Delhi 110078",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Metroview+Apartments+Sector+13+Dwarka+New+Delhi+110078"
  },
  learningModes: [
    {
      mode: "Offline Classroom Batches",
      location: "Dwarka Sector 13, New Delhi",
      details: "In-person small batches at 305 Metroview Apartments with live board problem solving and personal doubt clearance."
    },
    {
      mode: "Interactive Live Online",
      location: "Pan-India / Hybrid",
      details: "High-definition interactive live classes with digital tablet derivations, session recordings, and regular test analysis."
    }
  ],
  quote: "Mathematics is not about memorising formulas. It is about understanding the logic behind them.",
  bio: [
    "Mr. Niranjan Naik is an IIT Delhi alumnus and an experienced JEE Mathematics educator with more than 15 years of teaching experience.",
    "Over his teaching career, he has taught at reputed premier institutes including FIITJEE and Sri Chaitanya, gaining extensive experience in preparing students for competitive examinations.",
    "For the past three years, he has been teaching independently both Online and Offline (Dwarka, Sector 13, New Delhi), enabling a more focused approach toward conceptual clarity, mathematical thinking, problem solving and individual student development.",
    "His approach focuses on helping students understand Mathematics deeply rather than simply memorising formulas."
  ]
};

export const CREDENTIALS_DATA = [
  {
    value: "15+",
    label: "Years of Teaching",
    detail: "Dedicated to JEE Main & Advanced"
  },
  {
    value: "IIT Delhi",
    label: "Alumni",
    detail: "Premier Institution Academic Pedigree"
  },
  {
    value: "3+",
    label: "Years Teaching Independently",
    detail: "Focused conceptual mentorship"
  },
  {
    value: "JEE",
    label: "Main + Advanced",
    detail: "Comprehensive curriculum coverage"
  },
  {
    value: "IITians",
    label: "Mentored & Produced",
    detail: "Across top Indian Institutes of Technology"
  }
];

export const TIMELINE_DATA = [
  {
    stage: "01",
    title: "Teaching Journey",
    subtitle: "Foundations in Advanced Mathematics",
    description: "Building a career dedicated around Mathematics education, conceptual pedagogy, and deep preparation for the Joint Entrance Examination.",
    tag: "Foundation"
  },
  {
    stage: "02",
    title: "Sri Chaitanya",
    subtitle: "High-Caliber JEE Faculty",
    description: "Extensive JEE Mathematics teaching experience, guiding cohorts through rigorous problem sets, mock analysis, and competitive exam strategies.",
    tag: "Institutional Excellence"
  },
  {
    stage: "03",
    title: "FIITJEE",
    subtitle: "Structured Advanced Preparation",
    description: "Experience in structured JEE preparation, Olympiad-level mathematical reasoning, and training top batches for rank-defining JEE Advanced questions.",
    tag: "Advanced Problem Solving"
  },
  {
    stage: "04",
    title: "Independent Teaching",
    subtitle: "Focused Mentorship & Direct Guidance",
    description: "For the past 3+ years, focused entirely on independent teaching—enabling bespoke attention, true conceptual mastery, and personalized student growth.",
    tag: "Current Focus • 3+ Years"
  }
];

export const WHY_LEARN_CARDS = [
  {
    id: "iit-delhi",
    title: "IIT Delhi Alumni",
    description: "An academic background from one of India's premier engineering institutions, imparting the rigorous analytical mindset essential for JEE Advanced.",
    icon: "GraduationCap"
  },
  {
    id: "experience",
    title: "15+ Years of Experience",
    description: "Extensive experience teaching JEE Mathematics across shifting examination patterns, question formats, and difficulty benchmarks.",
    icon: "Clock"
  },
  {
    id: "concept-first",
    title: "Concept First",
    description: "Understand the reasoning behind every mathematical concept and theorem rather than relying on brittle pattern memorization.",
    icon: "Lightbulb"
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description: "Develop the ability to dissect and approach unfamiliar, multi-concept problems with structured mathematical intuition.",
    icon: "Cpu"
  },
  {
    id: "jee-focused",
    title: "JEE Focused",
    description: "Laser-focused preparation meticulously calibrated for the speed demands of JEE Main and the intellectual depth of JEE Advanced.",
    icon: "Target"
  },
  {
    id: "independent-teaching",
    title: "Independent Teaching",
    description: "Focused teaching, smaller mentor-guided environments, and closer student interaction for authentic individual academic development.",
    icon: "UserCheck"
  }
];

export const PROGRAMS_DATA: ProgramInfo[] = [
  {
    id: "class-11",
    title: "CLASS 11",
    subtitle: "Build the Foundation",
    targetAudience: "For students beginning their JEE journey",
    description: "A comprehensive program designed to transition students from school-level arithmetic to the abstract, rigorous thinking required for JEE Mathematics.",
    badge: "Foundation Program",
    ctaText: "Explore Class 11",
    keyHighlights: [
      "2 Demo classes are given before enrollment",
      "Rigorous concept building from first principles",
      "Transition from Class 10 rote learning to analytical proof",
      "Regular diagnostic quizzes & graded problem sheets",
      "Strong emphasis on Algebra and Coordinate Geometry basics"
    ],
    topics: [
      "Sets & Relations",
      "Functions",
      "Trigonometry",
      "Quadratic Equations",
      "Sequence & Series",
      "Permutation & Combination",
      "Binomial Theorem",
      "Straight Lines",
      "Circles",
      "Conic Sections",
      "Limits",
      "Derivatives",
      "Probability"
    ]
  },
  {
    id: "class-12",
    title: "CLASS 12",
    subtitle: "Master the Concepts",
    targetAudience: "For students preparing for Class 12 and JEE",
    description: "A high-intensity program covering advanced Calculus, Vectors, and 3D Geometry alongside strategic revision of Class 11 foundational topics.",
    badge: "Comprehensive Program",
    ctaText: "Explore Class 12",
    keyHighlights: [
      "2 Demo classes are given before enrollment",
      "Complete mastery over Differential and Integral Calculus",
      "Integration of Board syllabus requirements with JEE Advanced rigor",
      "Full-length exam simulations with time-pressure management",
      "Multi-concept problem solving linking 11th and 12th syllabi"
    ],
    topics: [
      "Relations & Functions",
      "Inverse Trigonometric Functions",
      "Matrices",
      "Determinants",
      "Continuity & Differentiability",
      "Application of Derivatives",
      "Integration",
      "Differential Equations",
      "Vector Algebra",
      "Three-Dimensional Geometry",
      "Probability"
    ]
  },
  {
    id: "droppers",
    title: "DROPPERS",
    subtitle: "One Year. One Focus.",
    targetAudience: "For students dedicating a full year to JEE preparation",
    description: "An intensive, dedicated program aimed at eliminating conceptual gaps, boosting question velocity, and securing top ranks in JEE Main & Advanced.",
    badge: "Intensive 1-Year Rank Booster",
    ctaText: "Explore Dropper Program",
    keyHighlights: [
      "2 Demo classes are given before enrollment",
      "Complete Mathematics syllabus mapped across a dedicated schedule",
      "In-depth concept revision & deconstruction of previous year mistakes",
      "Intensive advanced problem-solving sessions",
      "Regular dedicated doubt clearance & personalized strategy reviews"
    ],
    topics: [
      "Complete Mathematics syllabus coverage",
      "Concept revision with first-principle derivations",
      "Intensive problem solving with multi-layered twists",
      "JEE Main velocity & accuracy drills",
      "JEE Advanced multi-concept problem mastery",
      "Regular timed practice & paper temperament training",
      "Dedicated doubt solving & student-specific tracking",
      "Test-oriented preparation & rank diagnostics"
    ]
  }
];

export const MATH_TOPICS_DATA: MathCategory[] = [
  {
    id: "algebra",
    name: "ALGEBRA",
    subtitle: "Structure, Polynomials & Discrete Systems",
    iconName: "Binary",
    keyFormula: "ax² + bx + c = 0, |A - λI| = 0",
    description: "Mastering the structural framework of mathematics: roots, progressions, combinations, matrices, and complex plane transformations.",
    conceptHighlight: "Focus on transformation of roots, binomial expansions, and matrix algebra under non-trivial constraints.",
    topics: [
      "Quadratic Equations",
      "Complex Numbers",
      "Sequence & Series",
      "Binomial Theorem",
      "Permutation & Combination",
      "Matrices & Determinants"
    ]
  },
  {
    id: "calculus",
    name: "CALCULUS",
    subtitle: "Change, Limits, Integrals & Differential Modeling",
    iconName: "Activity",
    keyFormula: "∫ f(x)dx, lim(x→a) [f(x)-f(a)]/(x-a)",
    description: "The core engine of JEE Advanced. Understanding continuity, derivative graphs, tangents, definite integral area evaluations, and differential equations.",
    conceptHighlight: "Developing geometric intuition for Mean Value Theorems, Leibniz rule, and area bounding techniques.",
    topics: [
      "Limits",
      "Continuity",
      "Differentiation",
      "Application of Derivatives",
      "Integration",
      "Differential Equations"
    ]
  },
  {
    id: "coordinate",
    name: "COORDINATE GEOMETRY",
    subtitle: "Analytic Geometry & Conic Sections",
    iconName: "Compass",
    keyFormula: "x²/a² ± y²/b² = 1, y² = 4ax",
    description: "Synthesizing algebraic equations with geometric loci. Mastering tangents, normals, chords, focal properties, and intersections.",
    conceptHighlight: "Parametric coordinates, director circles, and pole-polar relations for rapid question cracking.",
    topics: [
      "Straight Lines",
      "Circles",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ]
  },
  {
    id: "trigonometry",
    name: "TRIGONOMETRY",
    subtitle: "Periodic Functions, Identities & Inverses",
    iconName: "Waves",
    keyFormula: "sin(A ± B), tan⁻¹x + tan⁻¹y",
    description: "Building fluidity across compound angles, multiple angles, solutions of trigonometric equations, and restricted inverse function domains.",
    conceptHighlight: "Eliminating algebraic overhead by transforming complicated expressions using telescopic trigonometric summations.",
    topics: [
      "Trigonometric Functions",
      "Identities",
      "Equations",
      "Inverse Trigonometry"
    ]
  },
  {
    id: "vector-3d",
    name: "VECTOR & 3D",
    subtitle: "Spatial Geometry & Linear Combinations",
    iconName: "Boxes",
    keyFormula: "a · (b × c), (x-x₁)/a = (y-y₁)/b = (z-z₁)/c",
    description: "Visualizing three-dimensional space with vector algebra, scalar and vector triple products, planes, coplanarity, and shortest distance.",
    conceptHighlight: "Translating complex geometric statements into vector equations for high-scoring direct solutions in JEE.",
    topics: [
      "Vector Algebra",
      "Three-Dimensional Geometry"
    ]
  },
  {
    id: "probability",
    name: "PROBABILITY",
    subtitle: "Bayes Theorem, Distributions & Combinatorics",
    iconName: "Dice5",
    keyFormula: "P(A|B) = [P(B|A)P(A)] / P(B)",
    description: "Rigorous logical analysis of events, conditional probability, independent trials, total probability theorem, and binomial distribution.",
    conceptHighlight: "Bridging Permutation & Combination with conditional probability trees to solve confusing JEE Advanced word problems.",
    topics: [
      "Probability",
      "Conditional Probability",
      "Advanced Problems"
    ]
  }
];

export const PHILOSOPHY_STAGES = [
  {
    step: "01",
    name: "Understand",
    sub: "Build conceptual clarity",
    desc: "Every theorem and formula is derived from first principles. Students learn the 'why' before the 'how'."
  },
  {
    step: "02",
    name: "Connect",
    sub: "Understand relationships",
    desc: "Discover how Algebra intersects with Coordinate Geometry, and how Calculus powers geometric analysis."
  },
  {
    step: "03",
    name: "Practice",
    sub: "Progressive difficulty",
    desc: "Solve carefully curated problem sets moving systematically from basic illustration to challenging multi-concept problems."
  },
  {
    step: "04",
    name: "Think",
    sub: "Independent problem solving",
    desc: "Train mathematical intuition to crack novel, unseen questions under examination conditions without panic."
  },
  {
    step: "05",
    name: "Master",
    sub: "Apply under JEE conditions",
    desc: "Build speed, accuracy, question selection temper, and confidence to perform at peak level on exam day."
  }
];
