import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "3.96",
        description: "GPA / 4.00",
    },
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "2+",
        description: "National Awards",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "3",
        description: "Cisco Certifications",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "5+",
        description: "IoT Prototypes Built",
    },
];


export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'UX & Product Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Performance Optimization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'UX & Products Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export interface PortfolioItem {
    image: string;
    alt: string;
    title: string;
    slug: string;
    info: string;
    Class: string;
    challenge?: string;
    solution?: string;
    techStack?: string[];
    features?: string[];
    githubLink?: string;
    demoLink?: string;
    schematicImage?: string;
    hardwareImage?: string;
}

export const portfolioinfo: PortfolioItem[] = [
    {
        image: getImgPath('/images/portfolio/smart-dehumidifier.jpg'),
        alt: 'Smart Portable Dehumidifier Project',
        title: 'Smart Portable Dehumidifier',
        slug: 'smart-portable-dehumidifier',
        info: 'IoT & Gen-AI Integration (1st Winner)',
        Class: 'md:mt-0',
        techStack: ['ESP32', 'C++', 'Android (Java/Kotlin)', 'Gemini API', 'MQTT'],
        challenge: 'Traditional dehumidifiers lack intelligent control and adaptability, leading to inefficient energy usage and poor air quality management in portable environments.',
        solution: 'Engineered an IoT-based dehumidifier powered by ESP32 that integrates Google Gemini AI to analyze environmental data and provide personalized health recommendations via a native Android App.',
        features: [
            'Automated humidity regulation using DHT sensors',
            'Generative AI (Gemini) integration for health insights',
            'Native Android App for real-time monitoring',
            'Energy-efficient firmware design',
            'Winner of National Veteran IoT Competition 2025'
        ],
        githubLink: 'https://github.com/Peteraw203/Smart_Dehumidifier_V2_AI',
        demoLink: '#',
        schematicImage: getImgPath('/images/portfolio/smart-dehumidifier-schematic.png'),
        hardwareImage: getImgPath('/images/portfolio/smart-dehumidifier-hardware.jpg'),
    },
    {
        image: getImgPath('/images/portfolio/road-detection.jpg'),
        alt: 'Edge AI Road Detection Project',
        title: 'Real-Time Road Detection',
        slug: 'edge-ai-road-detection',
        info: 'Edge AI & Computer Vision (YOLOv12)',
        Class: 'md:mt-24',
        techStack: ['C++', 'YOLOv12', 'NCNN Framework', 'Android', 'OpenCV'],
        challenge: 'Running heavy deep learning object detection models on mobile devices with limited computational power and battery life without relying on cloud processing.',
        solution: 'Deployed a quantized YOLOv12 model optimized with the NCNN framework on Android, enabling real-time (<50ms latency) pothole and road defect detection entirely on the edge.',
        features: [
            'Real-time inference on mobile CPU/GPU',
            'NCNN Framework optimization for low latency',
            'High accuracy road defect detection',
            'No internet dependency (Edge Computing)'
        ],
        githubLink: 'https://github.com/Peteraw203/Yolo-V12-NCNN-Public',
        demoLink: '#'
    },
    {
        image: getImgPath('/images/portfolio/pantau-air.jpg'),
        alt: 'Pantau Air Secure IoT',
        title: 'Pantau Air: Secure Monitoring',
        slug: 'pantau-air-secure-iot',
        info: 'Encrypted IoT (ASCON & MQTT)',
        Class: 'md:mt-0',
        techStack: ['ESP32', 'MicroPython', 'ASCON Encryption', 'MQTT', 'Web Dashboard'],
        challenge: 'Critical infrastructure monitoring systems are vulnerable to Man-in-the-Middle (MITM) attacks and data interception during transmission.',
        solution: 'Implemented ASCON lightweight cryptography directly on ESP32 MicroPython firmware to encrypt sensor payloads before transmission via MQTT, ensuring end-to-end security.',
        features: [
            'Lightweight ASCON encryption on ESP32',
            'Secure MQTT communication',
            'Real-time water level visualization',
            'Tamper-proof data transmission'
        ],
        githubLink: 'https://github.com/Peteraw203/Proyek-ASCON-IoT',
        demoLink: 'thepantauair.web.app',
        schematicImage: getImgPath('/images/portfolio/pantau-air-schematic.png'),

    },
    {
        image: getImgPath('/images/portfolio/autonomus-rover.jpg'),
        alt: 'Autonomous GPS Rover',
        title: 'Autonomous GPS-Guided Rover',
        slug: 'autonomous-gps-rover',
        info: 'Robotics & Sensor Fusion',
        Class: 'md:mt-24',
        techStack: ['Arduino Uno', 'C++', 'GPS (NEO-6M)', 'Compass (HMC5883L)', 'Ultrasonic'],
        challenge: 'Achieving precise autonomous navigation to specific coordinates using low-cost hardware with limited processing memory (SRAM).',
        solution: 'Developed a navigation algorithm using the Haversine formula and Sensor (GPS + Compass) to calculate bearing and distance in real-time on an 8-bit microcontroller.',
        features: [
            'Waypoint navigation using Haversine algorithm',
            'Sensor Fusion (GPS & Compass)',
            'Obstacle avoidance logic',
            'Optimized C++ firmware for Arduino Uno'
        ],
        githubLink: '#',
        demoLink: '#',
        schematicImage: getImgPath('/images/portfolio/autonomus-rover-schematic.png'),
    },
    {
        image: getImgPath('/images/portfolio/control-shift-escape.jpg'),
        alt: 'Control Shift Escape Game',
        title: 'Control, Shift, Escape!',
        slug: 'control-shift-escape',
        info: 'Game Design (2nd Place National)',
        Class: 'md:mt-0',
        techStack: ['Unity', 'Game Design', 'Logic Mechanics'],
        challenge: 'Designing complex puzzle mechanics that require players to manage two characters simultaneously under time constraints.',
        solution: 'Created a unique "Shift" mechanic where players toggle control between characters to solve environmental puzzles, emphasizing logic and cooperation.',
        features: [
            '2nd Place Winner at 4C National Competition',
            'Dual-character control mechanics',
            'Complex level design & logic puzzles'
        ],
        githubLink: '#',
        demoLink: 'https://doodez.itch.io/control-shift-escape',
        schematicImage: getImgPath('/images/portfolio/ctrl1.jpg'),
        hardwareImage: getImgPath('/images/portfolio/ctrl2.jpg'),
    },
    {
        image: getImgPath('/images/portfolio/the-incursion.jpg'),
        alt: 'The Incursion Game',
        title: 'The Incursion',
        slug: 'the-incursion',
        info: 'Game Development (HackJam Winner)',
        Class: 'md:mt-24',
        techStack: ['Unity', 'Game Design'],
        challenge: 'Developing a fully polished, bug-free action game loop within a strict 48-hour hackathon deadline.',
        solution: 'Focused on "Juice" (game feel) and tight controls to create an addictive arcade shooter experience, resulting in a polished MVP.',
        features: [
            '1st Place Winner at HackJam 2024',
            'Fast-paced arcade gameplay',
            'Polished visual effects and feedback'
        ],
        githubLink: 'https://github.com/AbyanSyq/RAION_Hackjam_2024',
        demoLink: 'https://ohm195.itch.io/the-incursion',
        schematicImage: getImgPath('/images/portfolio/incursion1.jpg'),
    },
    {
        image: getImgPath('/images/portfolio/isekai-bookstore.png'),
        alt: 'Isekai Bookstore',
        title: 'Isekai Bookstore',
        slug: 'isekai-bookstore',
        info: 'Game Development (Top 40 Student Gameseed)',
        Class: 'md:mt-0',
        techStack: ['Unity', 'C#', 'Management Systems'],
        challenge: 'Making "old but new" game experience',
        solution: 'Developed an simulation game and blend it with visual novel elements.',
        features: [
            'Top 40 Student Gameseed Competition',
            'Interactive narrative system'
        ],
        githubLink: 'https://github.com/Doodesz/Gameseeded',
        demoLink: 'https://jeijesh.itch.io/isekaibookstore'
    },
]