// gitprofile.config.js

const config = {
  github: {
    username: 'daniellendvai', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['portfolio'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    email: 'lendvai.daniel92@gmail.com',
    linkedin: 'dániel-lendvai-48bba5146',
    facebook: 'lendvai.daniel',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    github: 'https://daniellendvai.github.io',
    phone: '',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'C#',
    'CSS/SCSS',
    'Bootstrap',
    'Tailwind',
    ],
  experiences: [
    {
      company: 'Docler Holding',
      position: 'Support Associate',
      from: 'September 2020',
      to: 'Present',
    },
  ],
  education: [
    {
      institution: 'Szent Istvan University',
      degree: 'Economics & Social Sciences',
      to: 'Class of 2016',
    },
    {
      institution: 'Soter-Line Education Center',
      degree: 'Software Engineering Bootcamp',
      to: 'Class of 2021',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'lendvai.daniel92',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'lofi',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#cc1150',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
