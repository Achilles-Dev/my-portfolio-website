/* menu-icon modal  */

const menuIcon = document.querySelector('#menu-icon');

const modal = document.querySelector('.modal');

const closeButton = document.querySelector('.close');

const isVisible = 'is-visible';

const menuItems = document.querySelectorAll('#menu > li');

menuIcon.addEventListener('click', () => {
  modal.classList.add(isVisible);
});

closeButton.addEventListener('click', () => {
  modal.classList.remove(isVisible);
});

menuItems.forEach((menuItem) => menuItem.addEventListener('click', () => {
  modal.classList.remove(isVisible);
}));

/* project details modal */
const projectDetails = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
                  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
                  'when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem' +
                  'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
                  "the industry's standard dummy text ever since the 1500s, when an unknown printer took a" +
                  'galley of type and scrambled it 1960s with the relea',
    image: {
      'desktop-image': './assets/images/Desktop-Snapshoot-Portfolio.png',
      'mobile-image': './assets/images/Mobile-Snapshoot-Portfolio.png',
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
      'link-icon': './assets/icons/github.svg',
    }


  }
];

const section = document.createElement('section');
section.className = 'project-details';
const div = document.createElement('div');
div.className = 'card';
const h2 = document.createElement('h2');
const ul = document.createElement('ul');
const buttonUl = document.createElement('ul');
const liveLi = document.createElement('li');
const sourceLi = document.createElement('li');
const liveLink = document.createElement('a');
const sourceLink = document.createElement('a');
const liveIcon = document.createElement('img');
const sourceIcon = document.createElement('img');
const para = document.createElement('p');
const coverImage = document.createElement('img');

const desktopVersionDetail = () => {
  coverImage.src = projectDetails[0].image['desktop-image'];
  coverImage.alt = 'Portfolio Detail image';
  h2.textContent = projectDetails[0].name;
  projectDetails[0].technologies['desktop-list'].forEach((listItem) => {
    let li = document.createElement('li');
    li.textContent = listItem;
    ul.appendChild(li);
  });
  liveIcon.src = projectDetails[0]['live-version-link']['link-icon'];
  sourceIcon.src = projectDetails[0]['source-link']['link-icon'];
  liveLink.textContent = projectDetails[0]['live-version-link']['link-text'];
  sourceLink.textContent = projectDetails[0]['source-link']['link-text'];
  liveLink.append(liveIcon);
  sourceLink.append(sourceIcon)
  liveLi.appendChild(liveLink);
  sourceLi.appendChild(sourceLink);
  buttonUl.appendChild(liveLi);
  buttonUl.appendChild(sourceLi);
  para.textContent = projectDetails[0].description;
  div.appendChild(coverImage);
  div.appendChild(h2);
  div.appendChild(ul);
  div.appendChild(para);
  div.append(buttonUl);
  section.appendChild(div);
  document.body.appendChild(section);

}


