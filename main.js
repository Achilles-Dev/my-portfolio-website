/* menu-icon modal  */

const menuIcon = document.querySelector('#menu-icon');

const modal = document.querySelector('.modal');

const modalCloseButton = document.querySelector('.close');

const isVisible = 'is-visible';

const menuItems = document.querySelectorAll('#menu > li');

menuIcon.addEventListener('click', () => {
  modal.classList.add(isVisible);
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove(isVisible);
});

menuItems.forEach((menuItem) => menuItem.addEventListener('click', () => {
  modal.classList.remove(isVisible);
}));

/* project details modal */
const projectDetails = [
  {
    1: {
      name: 'Keeping track of hundreds of components',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: {
        'desktop-image': './assets/images/Desktop-Snapshoot-Portfolio.png',
        'mobile-image': './assets/images/5g-security-in-an-iot-architec.png',
      },
      technologies: {
        'desktop-list': ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
        'mobile-list': ['Ruby on rails', 'css', 'Javacript'],
      },
      'live-version-link': {
        'link-text': 'See Live',
        'link-icon': './assets/icons/See-Live.svg',
      },
      'source-link': {
        'link-text': 'See Source',
        'link-icon': './assets/icons/Icon-GitHub.svg',
      },
    },
    2: {
      name: 'Project 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: {
        'desktop-image': './assets/images/Desktop-Snapshoot-Portfolio.png',
        'mobile-image': './assets/images/5g-security-in-an-iot-architec.png',
      },
      technologies: {
        'desktop-list': ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
        'mobile-list': ['Ruby on rails', 'css', 'Javacript'],
      },
      'live-version-link': {
        'link-text': 'See Live',
        'link-icon': './assets/icons/See-Live.svg',
      },
      'source-link': {
        'link-text': 'See Source',
        'link-icon': './assets/icons/Icon-GitHub.svg',
      },
    },
    3: {
      name: 'Project Three',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: {
        'desktop-image': './assets/images/Desktop-Snapshoot-Portfolio.png',
        'mobile-image': './assets/images/5g-security-in-an-iot-architec.png',
      },
      technologies: {
        'desktop-list': ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
        'mobile-list': ['Ruby on rails', 'css', 'Javacript'],
      },
      'live-version-link': {
        'link-text': 'See Live',
        'link-icon': './assets/icons/See-Live.svg',
      },
      'source-link': {
        'link-text': 'See Source',
        'link-icon': './assets/icons/Icon-GitHub.svg',
      },
    },
    4: {
      name: 'Project Four',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: {
        'desktop-image': './assets/images/Desktop-Snapshoot-Portfolio.png',
        'mobile-image': './assets/images/5g-security-in-an-iot-architec.png',
      },
      technologies: {
        'desktop-list': ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
        'mobile-list': ['Ruby on rails', 'css', 'Javacript'],
      },
      'live-version-link': {
        'link-text': 'See Live',
        'link-icon': './assets/icons/See-Live.svg',
      },
      'source-link': {
        'link-text': 'See Source',
        'link-icon': './assets/icons/Icon-GitHub.svg',
      },
    },
    5: {
      name: 'Project Five',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: {
        'desktop-image': './assets/images/Desktop-Snapshoot-Portfolio.png',
        'mobile-image': './assets/images/5g-security-in-an-iot-architec.png',
      },
      technologies: {
        'desktop-list': ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
        'mobile-list': ['Ruby on rails', 'css', 'Javacript'],
      },
      'live-version-link': {
        'link-text': 'See Live',
        'link-icon': './assets/icons/See-Live.svg',
      },
      'source-link': {
        'link-text': 'See Source',
        'link-icon': './assets/icons/Icon-GitHub.svg',
      },
    },
    6: {
      name: 'Project Six',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    + 'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem'
                    + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
                    + "the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
                    + 'galley of type and scrambled it 1960s with the relea',
      image: {
        'desktop-image': './assets/images/Desktop-Snapshoot-Portfolio.png',
        'mobile-image': './assets/images/5g-security-in-an-iot-architec.png',
      },
      technologies: {
        'desktop-list': ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
        'mobile-list': ['Ruby on rails', 'css', 'Javacript'],
      },
      'live-version-link': {
        'link-text': 'See Live',
        'link-icon': './assets/icons/See-Live.svg',
      },
      'source-link': {
        'link-text': 'See Source',
        'link-icon': './assets/icons/Icon-GitHub.svg',
      },
    },
  },
];

const aboutSection = document.querySelector('.about');

const section = document.createElement('section');
section.className = 'project-details';
const div = document.createElement('div');
div.className = 'card';
const h2 = document.createElement('h2');
const ul = document.createElement('ul');
ul.className = 'list-items';
const buttonUl = document.createElement('ul');
buttonUl.className = 'button-list';
const liveLi = document.createElement('li');
const sourceLi = document.createElement('li');
const liveLink = document.createElement('a');
liveLink.href = 'https://achilles-dev.github.io/my-portfolio-website/';
const sourceLink = document.createElement('a');
sourceLink.href = 'https://github.com/Achilles-Dev/my-portfolio-website';
const liveIcon = document.createElement('img');
const sourceIcon = document.createElement('img');
const para = document.createElement('p');
const coverImage = document.createElement('img');
const detailCloseButton = document.createElement('span');
detailCloseButton.textContent = 'X';
const isClosed = 'is-closed';
const titleButtonsContainer = document.createElement('div');
titleButtonsContainer.className = 'title-buttons';

let projectWorkId = 0;

const addSectionDetails = (buttonIndex) => {
  const ScreenWidth = window.matchMedia('(min-width: 992px)');
  coverImage.alt = 'Portfolio Detail image';
  projectWorkId = buttonIndex;
  projectDetails.forEach((project) => {
    h2.textContent = project[buttonIndex].name;
    liveIcon.src = project[buttonIndex]['live-version-link']['link-icon'];
    sourceIcon.src = project[buttonIndex]['source-link']['link-icon'];
    liveLink.textContent = project[buttonIndex]['live-version-link']['link-text'];
    sourceLink.textContent = project[buttonIndex]['source-link']['link-text'];
    liveLink.append(liveIcon);
    sourceLink.append(sourceIcon);
    liveLi.appendChild(liveLink);
    sourceLi.appendChild(sourceLink);
    buttonUl.appendChild(liveLi);
    buttonUl.appendChild(sourceLi);
    para.textContent = project[buttonIndex].description;
    let listLength = project[buttonIndex].technologies['desktop-list'].length;
    if (ScreenWidth.matches) {
      coverImage.src = project[buttonIndex].image['desktop-image'];
      project[buttonIndex].technologies['desktop-list'].forEach((listItem) => {
        if (ul.children.length !== 0 && ul.firstChild.textContent !== 'Codekit') {
          while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
        }
        if (ul.children.length < listLength) {
          const li = document.createElement('li');
          li.textContent = listItem;
          ul.appendChild(li);
        }
      });
      div.appendChild(detailCloseButton);
      div.appendChild(coverImage);
      titleButtonsContainer.appendChild(h2);
      titleButtonsContainer.appendChild(buttonUl);
      div.appendChild(titleButtonsContainer);
      div.appendChild(ul);
      div.appendChild(para);
    } else {
      listLength = project[buttonIndex].technologies['mobile-list'].length;
      coverImage.src = project[buttonIndex].image['mobile-image'];
      project[buttonIndex].technologies['mobile-list'].forEach((listItem) => {
        if (ul.children.length > listLength) {
          while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
        }
        if (ul.children.length === 0 || ul.children.length < listLength) {
          const li = document.createElement('li');
          li.textContent = listItem;
          ul.appendChild(li);
        }
      });
      div.appendChild(coverImage);
      div.appendChild(detailCloseButton);
      div.appendChild(h2);
      div.appendChild(ul);
      div.appendChild(para);
      div.append(buttonUl);
    }
    section.appendChild(div);
    document.body.insertBefore(section, aboutSection);
  });
};

const seeProjectButtonsNodeList = document.querySelectorAll('.project-button');

const seeProjectButtons = Array.from(seeProjectButtonsNodeList);

seeProjectButtons.forEach((seeProjectButton) => {
  const buttonId = seeProjectButton.id;
  seeProjectButton.addEventListener('click', () => {
    addSectionDetails(buttonId);
    document.body.style.overflow = 'hidden';
  });
});

const removeSectionDetails = () => {
  section.classList.remove(isClosed);
  document.body.removeChild(section);
};

detailCloseButton.addEventListener('click', () => {
  section.classList.add(isClosed);
  document.body.style.overflow = 'auto';
  removeSectionDetails();
});

const onWindowResize = (e) => {
  const width = e.target.outerWidth;
  if (width < '992' || width >= '992') {
    if (section){
      document.body.removeChild(section);
      addSectionDetails(projectWorkId);
    } 
  }
};

window.addEventListener('resize', (e) => {
  onWindowResize(e);
});


/* Contact form email validation */

const submitButton = contactForm.querySelector('.get-in-touch');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValue > 0 && inputValue.toLowerCase() !== inputValue){
    //  emailError.textContent = 'Email should be in lower case';
    //  contactForm.insertBefore(emailError, submitButton);
    //console.log("error")
  } else {
    //
  }
})
