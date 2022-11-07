module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Tristan Hafer',
    // Main Site Title
    title: `Tristan Hafer | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-stack web and embedded systems developer`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/thafer30`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/tristan-hafer-38304b16a`,
    // Content of the About Me section
    about: `I'm a highly motivated developer with a diverse set of skills across multiple platforms. I have experience with web, desktop, and embedded environments and love taking on new challenges. I am especially passionate about creating great experiences for both the user and developer.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Clip 2',
        description:
          'Cat M1 cellular network enabled ambulatory heart monitor',
        link: '/',
      },
      {
        name: 'React Customer Dashboard',
        description:
          'Web-based customer dashboard used to manage studies and monitors, built with React, Material-UI, and PHP backend.',
        link: 'https://app.acsdlab.net',
      },
      {
        name: 'Python Data Entry Tool',
        description:
          'Desktop appliaction used to simplify data entry/transfer built with Python and PyQt',
        link: '/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Applied Cardiac Systems & Diagnostics',
        description: 'Software Project Manager, September 2022 - Present',
        link: 'https://acsd4u.com',
      },
      {
        name: 'Applied Cardiac Systems & Diagnostics',
        description: 'Software Developer, September 2019 - 2022',
        link: 'https://acsd4u.com',
      },
      {
        name: 'Main Street Art',
        description: 'Web Developer, May 2018 - September 2019',
        link: 'https://www.msagallery.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C/C++, JavaScript (ES6+), React, Material-UI, PHP, Python, PyQt',
      },
      {
        name: 'Databases',
        description: 'MySQL/MariaDB',
      },
      {
        name: 'Other',
        description:
          'Docker, Google Cloud Platform (GCP), API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
