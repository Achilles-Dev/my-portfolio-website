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
      name: 'Money Manager',
      description: `The Money Manager is a mobile web application
                    where you can manage your budget: you have a list 
                    of transactions associated with a category, so that 
                    you can see how much money you spent for that category and on what.`,
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['React', 'Redux', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://money-manager-achilles.herokuapp.com/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/budget-app' },

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
      name: 'Motorcycle-booking-service',
      description: `Book-an-appointment is based on an app
                    to book an appointment to try a motorcycle.
                    Front-end: https://github.com/AyoubMs/book-an-appointment-front-end`,
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['React', 'Redux', 'CSS', 'Bootstrap'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://preeminent-vacherin-1e2f8e.netlify.app/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/book-an-appointment-front-end' },
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
      name: 'PraisyDram Concert',
      description: `The website is based on a yearly concert of Praises and Drama aimed at
                    Evangelizing to the people of God. It is organised by Catholic students in KNUST and
                    it's popularly known as PRAISYDRAM`,
      image: './assets/images/Desktop-Snapshoot-Portfolio.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      'live-version-link': { ...liveVersionLink, 'link-href': 'https://achilles-dev.github.io/HTML-CSS-JavaScript-capstone-project/' },
      'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/HTML-CSS-JavaScript-capstone-project' },
    },
  },
];

export default projectDetails;