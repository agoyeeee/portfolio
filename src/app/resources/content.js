
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

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting Digital Experiences with Purpose and Passion</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
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
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, gallery };
