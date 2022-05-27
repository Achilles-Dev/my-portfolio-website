const liveVersionLink = {
  'link-text': 'See Live',
  'link-icon': './assets/icons/See-Live.svg',
};

const sourceLink = {
  'link-text': 'See Source',
  'link-icon': './assets/icons/Icon-GitHub.svg',
};

const projectDetails = [
  {
    1: {
      name: 'To Do List',
      description: 'A website that keeps track of activities to perform during the'
                    + 'day and checks and deletes completed activities.',
      image: './assets/images/todo_with_editing.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://achilles-dev.github.io/todo-list/dist/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/todo-list/' },
    },
    2: {
      name: 'Covid19 Data App',
      description: `This is a mobile web application to check the data on the 
                    total covid19  confirmed cases and deaths, check data for all 
                    countries with recorded cases. It also has a details page to check 
                    for the statistics for each region/state if available.`,
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['React', 'Redux', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://admirable-capybara-a0122b.netlify.app/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/covid19-data-app' },

    },
    3: {
      name: 'Bookstore App',
      description: 'This apllication contains a list of books with their completion stages.',
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['React', 'Redux', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://precious-druid-b78dac.netlify.app/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/bookstore-app' },
    },
    4: {
      name: 'Leaderboard App',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['React', 'Redux', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://achilles-dev.github.io/Leaderboard-list-app/dist' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/bookstore-app' },
    },
    5: {
      name: 'Math Magicians App',
      description: `Math magicians" is a website for all fans of mathematics. 
                    It is a Single Page App (SPA) that allows users to: <br />
                    - make simple calculations and <br />
                    - read a random math-related quote.`,
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['React', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://joyful-dolphin-85efd9.netlify.app/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/math-magicians-app' },
    },
    6: {
      name: 'Project Six',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
      'live-version-link': liveVersionLink,
      'source-link': sourceLink,
    },
  },
];

export default projectDetails;