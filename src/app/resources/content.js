const person = {
  firstName: "Prayoga",
  lastName: "Putra",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer and IT Student",
  avatar: "/images/avatar.jpg",
  email: "prayogaputra70@gmail.com",
  labelLocation: "Asia/Surakarta",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/agoyeeee/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhamad-prayoga-putra-setyawandana-30b237297/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://twitter.com/agoyeeee",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const seo = {
  title: `${person.name} - ${person.role}`,
  description: `Portfolio of ${person.name}, a ${person.role} from Surakarta, Indonesia. Specializing in web development, Laravel, Vue.js, and digital solutions.`,
  keywords: [
    "Prayoga Putra",
    "Software Engineer",
    "Web Developer",
    "Laravel Developer",
    "Vue.js Developer",
    "Full Stack Developer",
    "IT Student",
    "Surakarta",
    "Indonesia",
    "Portfolio",
    "WordPress Developer",
    "Next.js",
    "MySQL",
    "Data Analyst"
  ],
  author: person.name,
  siteUrl: "https://agoyeeee-portfolio.vercel.app/", // Replace with your actual domain
  image: "/images/og/home.jpg",
  twitterHandle: "@agoyeeee",
  locale: "en_US",
  type: "website"
};

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  seo: {
    title: `${person.name} - ${person.role} | Portfolio`,
    description: `Discover the portfolio of ${person.name}, a ${person.role} from Surakarta, Indonesia. Explore projects in web development, data analysis, and digital solutions using Laravel, Vue.js, Next.js, and more.`,
    keywords: ["portfolio", "web developer", "software engineer", "Laravel", "Vue.js", "Next.js", "Surakarta"],
    openGraph: {
      title: `${person.name} - ${person.role}`,
      description: `Portfolio showcasing innovative web development and software engineering projects`,
      image: "/images/og/home.jpg",
      url: seo.siteUrl,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${person.name} - ${person.role}`,
      description: `Portfolio showcasing innovative web development projects`,
      image: "/images/og/home.jpg",
      creator: seo.twitterHandle
    }
  },
  headline: <>Crafting Digital Experiences with Purpose and Passion</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">D3MA</strong></>,
    href: "https://manajemenadministrasi.vokasi.uns.ac.id/",
  },
  subline: (
    <>
I'm Prayoga, a web developer and computer science student who loves building clean, responsive websites and learning new technologies.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  seo: {
    title: `About ${person.name} - ${person.role}`,
    description: `Learn about ${person.name}, an IT student and ${person.role} from Surakarta. Discover my journey in web development, data analysis, and digital innovation.`,
    keywords: ["about", "biography", "software engineer", "IT student", "web developer", "Surakarta", "Indonesia"],
    openGraph: {
      title: `About ${person.name}`,
      description: `IT student and Software Engineer passionate about web development and digital innovation`,
      image: person.avatar,
      url: `${seo.siteUrl}/about`,
      type: "profile"
    },
    twitter: {
      card: "summary",
      title: `About ${person.name}`,
      description: `IT student and Software Engineer from Surakarta, Indonesia`,
      image: person.avatar,
      creator: seo.twitterHandle
    }
  },
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
I'm Muhamad Prayoga Putra Setyawandana, an IT student based in Surakarta with a passion for turning complex challenges into simple, elegant digital solutions. I focus on web development, interactive experiences, and bridging the gap between technology and creativity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Fintech UNS",
        timeframe: "2024 - 2025",
        role: "Data Analyst",
        achievements: [
          <>
          Built a web-based platform to analyze employee satisfaction surveys from OJK, focusing on efficient data handling and usability.
          </>,
          <>
          Designed intuitive visualizations to present staff sentiment and engagement trends in a clear, actionable format.
          </>,
          <>
          Collaborated with researchers and developers to ensure the analysis output met organizational standards and supported decision-making.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/OJK.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PKKMB UNS",
        timeframe: "2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Designed and developed an information portal for new students, providing essential guidance,
            schedules, and academic resources.
          </>,
          <>
            Integrated features for task submissions and announcements, streamlining communication between
            organizers and hundreds of incoming students.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/PKKMB.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "YANMA Sekolah Vokasi UNS",
        timeframe: "2025",
        role: "Full Stack Developer",
        achievements: [
          <>
            Currently developing core features for the YANMA administrative platform, aimed at managing various internal processes within the vocational school.
          </>,
          <>
            Implementing modules to streamline administrative tasks such as document handling, service requests, and internal communication.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/YANMA.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "D3 Manajemen Administrasi UNS",
        timeframe: "2025",
        role: "Wordpress Developer",
        achievements: [
          <>
            Built and managed the official website for the D3 Manajemen Administrasi program using WordPress, showcasing academic information and student activities.
          </>,
          <>
            Customized themes and structured content to effectively present the program’s vision, curriculum, and achievements to prospective students.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/D3MA.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Vocational School of Universitas Sebelas Maret",
        timeframe: "2025",
        role: "WordPress Developer",
        achievements: [
          <>
            Developed and maintained the official website of the Vocational School using WordPress, serving as the main information hub for students, faculty, and the public.
          </>,
          <>
            Structured and customized content to highlight the school’s profile and its various study programs, services, and news updates.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/VOKASI.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Sebelas Maret",
        description: <>Studied Software Engineering with a focus on web development, databases, system architecture, and web design principles to create user-friendly and visually engaging interfaces.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Experienced in Figma, capable of crafting high-fidelity prototypes with speed and precision.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/TechnicalSkills/FIGMA.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/TechnicalSkills/FIGMA2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI</>,
      },
      {
        title: "Laravel",
        description: <>Building robust backend systems and APIs using Laravel and MySQL.</>,
      },
      {
        title: "Vue.js",
        description: <>Developing interactive frontends with Vue, Pinia, and Inertia.js.</>,
      },
      {
        title: "WordPress",
        description: <>Creating and managing websites using WordPress, including custom themes and plugins.</>,
      },
      {
        title: "HTML, CSS, JavaScript",
        description: <>Crafting responsive and accessible web pages with HTML, CSS, and JavaScript.</>,
      },
      {
        title: "Git",
        description: <>Version control and collaboration using Git and GitHub.</>,
      },
      {
        title: "MySQL",
        description: <>Managing databases and data relationships with MySQL.</>,
      },
      {
        title: "Streamlit",
        description: <>Building interactive data dashboards and machine learning tools with Streamlit and Python.</>,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  seo: {
    title: `Blog - ${person.name}`,
    description: `Read insights about web development, technology, and design from ${person.name}. Articles covering Laravel, Vue.js, Next.js, and modern web development practices.`,
    keywords: ["blog", "web development", "technology", "programming", "Laravel", "Vue.js", "design"],
    openGraph: {
      title: `${person.name}'s Blog`,
      description: `Insights about web development, technology, and design`,
      image: "/images/og/blog.jpg",
      url: `${seo.siteUrl}/blog`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${person.name}'s Blog`,
      description: `Tech insights and web development articles`,
      image: "/images/og/blog.jpg",
      creator: seo.twitterHandle
    }
  },
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  seo: {
    title: `Projects & Work - ${person.name}`,
    description: `Explore the portfolio of projects by ${person.name}, including web development, data analysis, and digital solutions using modern technologies like Laravel, Vue.js, and Next.js.`,
    keywords: ["projects", "portfolio", "web development", "Laravel projects", "Vue.js", "data analysis", "WordPress"],
    openGraph: {
      title: `Projects by ${person.name}`,
      description: `Professional projects showcasing web development and software engineering expertise`,
      image: "/images/og/work.jpg",
      url: `${seo.siteUrl}/work`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `Projects by ${person.name}`,
      description: `Web development and software engineering projects`,
      image: "/images/og/work.jpg",
      creator: seo.twitterHandle
    }
  },
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  seo: {
    title: `Photo Gallery - ${person.name}`,
    description: `Browse through a curated photo collection by ${person.name}, showcasing moments and experiences.`,
    keywords: ["gallery", "photos", "portfolio", "personal"],
    openGraph: {
      title: `${person.name}'s Photo Gallery`,
      description: `A curated collection of photos and moments`,
      image: "/images/og/gallery.jpg",
      url: `${seo.siteUrl}/gallery`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${person.name}'s Gallery`,
      description: `Photo collection and visual moments`,
      image: "/images/og/gallery.jpg",
      creator: seo.twitterHandle
    }
  },
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.role,
  "email": person.email,
  "url": seo.siteUrl,
  "image": `${seo.siteUrl}${person.avatar}`,
  "sameAs": [
    social.find(s => s.name === "GitHub")?.link,
    social.find(s => s.name === "LinkedIn")?.link,
    social.find(s => s.name === "X")?.link,
  ].filter(Boolean),
  "alumniOf": {
    "@type": "Organization",
    "name": "University of Sebelas Maret"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surakarta",
    "addressCountry": "Indonesia"
  },
  "knowsAbout": [
    "Web Development",
    "Software Engineering",
    "Laravel",
    "Vue.js",
    "Next.js",
    "WordPress",
    "Data Analysis",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS"
  ]
};

export { person, social, newsletter, home, about, blog, work, gallery, seo, structuredData };
