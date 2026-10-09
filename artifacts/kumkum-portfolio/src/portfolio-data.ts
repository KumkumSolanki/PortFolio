export const portfolio = {
  name: 'Kumkum Solanki',
  title: 'AI/ML Engineer Aspirant | Software Developer | Data Science Enthusiast',
  location: 'Khurja, Uttar Pradesh, India',
  email: 'kumkumsolanki0111@gmail.com',
  phone: '+91-9058465295',
  phoneHref: 'tel:+919058465295',
  portraitPath: '/assets/kumkum-solanki-portrait.png',
  resumePath: '/assets/kumkum-solanki-resume.pdf',
  links: {
    linkedin: null as string | null,
    github: null as string | null,
    leetcode: null as string | null,
  },
  intro:
    "I'm Kumkum Solanki, a Computer Science graduate specializing in Artificial Intelligence and Machine Learning. I enjoy building practical applications, exploring machine learning techniques, analyzing data, and developing software that solves real-world problems. My projects include ResuMatch, an AI-powered resume analysis and enhancement platform, a plant disease detection system using deep learning, a stock price prediction system, and a computer vision-based traffic detection project. I am interested in AI/ML engineering, data science, data analytics, and software development opportunities where I can apply my technical knowledge, contribute to meaningful projects, and continue growing as an engineer.",
  about: [
    "I'm a Computer Science graduate specializing in Artificial Intelligence and Machine Learning. My interests span machine learning, computer vision, data analysis, and full-stack application development.",
    'I enjoy building projects that combine analytical thinking with practical implementation. From developing ResuMatch with React and FastAPI to experimenting with deep learning and forecasting models, I continuously work on strengthening my technical skills.',
    "I believe the best way to learn technology is by building, testing, and improving real applications. I'm looking forward to contributing to a professional engineering team and growing through meaningful technical work.",
  ],
  heroHeadline: 'Building Intelligent Solutions, One Idea at a Time.',
  heroDescription:
    'AI/ML graduate passionate about machine learning, data science, and software development. I turn ideas into practical applications through code, experimentation, and problem-solving.',
  specialties: [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Software Development',
    'Computer Vision',
  ],
  quickTags: ['Python', 'Machine Learning', 'SQL', 'Deep Learning', 'React', 'FastAPI', 'Data Science'],
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  accent: string;
  category: string;
  mockup: 'resume' | 'plant' | 'stock' | 'traffic' | 'intent' | 'lifestyle';
  problem: string;
  solution: string;
  implementation: string[];
  learning: string;
  features: string[];
  demoUrl: string | null;
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    id: 'resumatch',
    name: 'ResuMatch',
    subtitle: 'AI Resume Analysis and Enhancement System',
    description:
      'An AI-powered resume analysis and enhancement platform designed to help job seekers understand how well their resumes align with job descriptions and identify opportunities to improve their applications.',
    technologies: ['React', 'FastAPI', 'Python', 'NLP'],
    accent: 'lavender',
    category: 'Featured project',
    mockup: 'resume',
    problem: 'Job seekers need a practical way to compare resume content with a job description and identify areas to improve.',
    solution:
      'A React frontend and FastAPI backend bring resume and job-description analysis into one application. The preview shown here is an illustrative mockup, not a screenshot of the deployed product.',
    implementation: [
      'React frontend connected to a FastAPI backend.',
      'Resume PDF upload and text extraction.',
      'Job-description analysis and resume-to-requirement matching.',
      'NLP-related text processing and actionable improvement suggestions.',
    ],
    learning:
      'The project explores full-stack integration, document text processing, API communication, and how to present analysis in a usable interface.',
    features: [
      'Upload and analyze resume PDFs',
      'Extract resume text for analysis',
      'Analyze job descriptions',
      'ATS-style resume scoring',
      'Compare matching and missing skills',
      'Recommend relevant skills and keywords',
      'Suggest projects, courses, and learning resources',
      'Rewrite bullet points and provide improvement recommendations',
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'plant-disease',
    name: 'Plant Disease Detection with Grad-CAM',
    subtitle: 'Interpretable image classification',
    description:
      'A deep learning pipeline to classify plant diseases from leaf images using CNN and transfer learning, with Grad-CAM visualizations to highlight image regions influencing predictions.',
    technologies: ['Python', 'CNN', 'Transfer Learning', 'OpenCV', 'Grad-CAM'],
    accent: 'mint',
    category: 'Computer vision',
    mockup: 'plant',
    problem: 'Leaf image classification can be difficult to interpret when a model gives a prediction without showing what influenced it.',
    solution: 'An image classification workflow pairs CNN and transfer-learning approaches with Grad-CAM visualizations for model interpretability.',
    implementation: [
      'Image preprocessing and augmentation.',
      'Deep learning-based leaf image classification.',
      'Grad-CAM visualizations to explore influential image regions.',
      'An end-to-end prediction workflow.',
    ],
    learning: 'The project combines image preparation, model experimentation, and explainability techniques in a computer-vision workflow.',
    features: ['Image preprocessing and augmentation', 'Leaf image classification', 'Grad-CAM visualization', 'End-to-end prediction workflow'],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'stock-forecast',
    name: 'AI Stock Price Prediction System',
    subtitle: 'Time-series forecasting exploration',
    description:
      'A time-series forecasting system combining LSTM, GRU, and ARIMA approaches to study historical stock trends and compare predicted and actual values.',
    technologies: ['Python', 'Pandas', 'LSTM', 'GRU', 'ARIMA', 'Streamlit'],
    accent: 'sky',
    category: 'Data science',
    mockup: 'stock',
    problem: 'Comparing forecasting approaches requires a clear way to inspect historical trends alongside model predictions.',
    solution: 'A forecasting project studies historical stock data with multiple time-series approaches and visualization of predicted versus actual values.',
    implementation: [
      'Historical data cleaning, preprocessing, and normalization.',
      'Feature engineering and technical indicators.',
      'LSTM, GRU, and ARIMA forecasting approaches.',
      'Predicted-versus-actual trend visualization.',
      'Monte Carlo Dropout exploration where implemented.',
    ],
    learning:
      'The work explores time-series preparation and model comparison. Visuals use illustrative data only and do not represent real predictions or investment advice.',
    features: ['Data cleaning and normalization', 'Feature engineering', 'Approach comparison', 'Trend visualization'],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'traffic-detection',
    name: 'AI Traffic Density Detection',
    subtitle: 'YOLO-based vehicle detection',
    description:
      'A computer vision project using YOLO-based object detection to identify vehicles in traffic footage and support traffic-density analysis.',
    technologies: ['Python', 'YOLOv8', 'Ultralytics', 'Computer Vision', 'Streamlit'],
    accent: 'sun',
    category: 'Computer vision',
    mockup: 'traffic',
    problem: 'Traffic footage contains many moving objects that can be difficult to inspect manually.',
    solution: 'A YOLO-based computer-vision project detects supported vehicle classes in image or video input and explores traffic analysis.',
    implementation: [
      'Vehicle detection using supported vehicle classes.',
      'Image or video processing.',
      'Traffic analysis and visualization where implemented.',
      'Streamlit-based application interface.',
    ],
    learning: 'The project explores applying object detection to visual input and presenting results through an application interface.',
    features: ['YOLO-based vehicle detection', 'Image or video processing', 'Traffic analysis where implemented', 'Streamlit interface'],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'intent-os',
    name: 'Intent-OS',
    subtitle: 'Voice-controlled desktop automation',
    description: 'An automation-focused project exploring voice commands to simplify desktop interactions and computer workflows.',
    technologies: ['Python', 'Voice Interfaces', 'Automation'],
    accent: 'lavender',
    category: 'Software project',
    mockup: 'intent',
    problem: 'Desktop workflows can involve repetitive interactions that invite experimentation with voice-led interfaces.',
    solution: 'Intent-OS explores voice commands as an interaction model for desktop automation.',
    implementation: ['An automation-focused project exploring voice commands and desktop interaction.'],
    learning: 'Further implementation specifics can be added here as the project scope is confirmed.',
    features: ['Voice-command interaction exploration', 'Desktop workflow automation concept'],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 'lifestyle-tracker',
    name: 'Lifestyle Tracker',
    subtitle: 'Daily habits and routines',
    description: 'A lifestyle tracking application concept focused on organizing daily habits and routines through a user-friendly interface.',
    technologies: ['Application UI', 'Habit Tracking'],
    accent: 'peach',
    category: 'Application concept',
    mockup: 'lifestyle',
    problem: 'People benefit from a simple place to organize routines and reflect on daily habits.',
    solution: 'A user-friendly application concept for tracking daily habits and routines.',
    implementation: ['An application concept focused on daily habits and routines.'],
    learning: 'Add confirmed implementation details and technologies as they become available.',
    features: ['Habit and routine organization concept'],
    demoUrl: null,
    githubUrl: null,
  },
];

export const skillGroups = [
  { title: 'Programming languages', skills: ['Python', 'Java', 'SQL', 'C', 'C++', 'HTML'] },
  { title: 'AI & machine learning', skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'CNN', 'LSTM', 'GRU', 'ARIMA', 'Computer Vision', 'NLP fundamentals'] },
  { title: 'Data science & analysis', skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis', 'Data Visualization', 'Excel', 'Power BI (basic)', 'Tableau'] },
  { title: 'Frameworks & libraries', skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Ultralytics / YOLO'] },
  { title: 'Web development', skills: ['React', 'FastAPI', 'REST APIs', 'Streamlit'] },
  { title: 'Databases & tools', skills: ['MySQL', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
  { title: 'Computer science', skills: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Core Java'] },
];

export const education = [
  {
    title: 'B.Tech — Computer Science Engineering (AI & ML)',
    institution: 'KCC Institute of Technology and Management',
    location: 'Greater Noida, Uttar Pradesh',
    date: 'September 2022 – June 2026',
    result: 'CGPA 7.55 / 10',
  },
  {
    title: 'Class XII',
    institution: 'Maharaja Agrasen Public School',
    location: 'Khurja, Uttar Pradesh',
    date: 'Senior secondary education',
    result: '95%',
  },
];

export const achievements = [
  {
    title: 'Smart India Hackathon',
    kind: 'Hackathon · Teamwork',
    description: 'Led a team that developed a virtual herbal garden solution and qualified for the second round.',
  },
  {
    title: 'HCL Technologies — Java with AI Training',
    kind: 'Training',
    description: 'Completed training covering Java fundamentals, AI concepts, and machine learning model integration.',
  },
  {
    title: 'Deloitte Australia Data Analytics Job Simulation',
    kind: 'Forage · Job simulation',
    description: 'Completed a data analytics simulation involving data analysis, forensic technology use cases, Excel-based analysis, and Tableau dashboards.',
  },
];
