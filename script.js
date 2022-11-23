const ham = document.getElementById('ham');
const menu = document.getElementById('menu');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const cross = document.getElementById('cross');

ham.addEventListener('click', () => {
  menu.style.display = 'flex';
  main.style.display = 'none';
  footer.style.display = 'none';

  cross.addEventListener('click', () => {
    menu.style.display = 'none';
    main.style.display = 'block';
    footer.style.display = 'flex';
  });
});

// Speaker Data

const speakers = {
  speakerData: [
    {
      img: './Assets/speakers/modiji.jpg',
      name: 'Narendra Modi',
      work: 'Traveller & Politician',
      desc: 'Has been into travelling for the past few decades and loves to travel extreme locations.',
    },
    {
      img: './Assets/speakers/jre.jpg',
      name: 'Joe Rogan',
      work: 'Hiker & Podcaster',
      desc: 'He loves to go hunting and discover forests. Also hosts worlds biggest podcast.',
    },
    {
      img: './Assets/speakers/jc.jpg',
      name: 'Jackie Chan',
      work: 'Actor & Producer',
      desc: 'Loves to shoot movies in extreme locations around the world for his films.',
    },
    {
      img: './Assets/speakers/jw.jpeg',
      name: 'John Wick',
      work: 'World Trotter',
      desc: 'Currently on a mission to find people who killed his dog.',
    },
    {
      img: './Assets/speakers/Nomadic-Indian.jpg',
      name: 'Nomadic Indian',
      work: 'Hitchhiker & Youtuber',
      desc: 'Hitchhiking his way through countries while producing content for over a million people on youtube india.',
    },
    {
      img: './Assets/speakers/dg.jpg',
      name: 'David Goggins',
      work: 'Navy Seal & Author',
      desc: 'A established author and world reknowned navy seal commando from america.',
    },
  ],
};

// Speaker Elements & Styles

let speakerDiv = '';

speakers.speakerData.forEach((speaker) => {
  speakerDiv += `<div class="flex gap-2 speaker">
    <div class="w-[40%] relative img-before"><img class="p-4 h-[178px] w-[202px]" src=${speaker.img} alt=${speaker.name}></div>
    <div class="w-[60%] flex flex-col gap-2">
        <h4 class="text-xl font-bold">${speaker.name}</h4>
        <h6 class="font-semibold text-[#f28f10]">${speaker.work}</h6>
        <div class="mp-underline-2"></div>
        <p class="text-[14px]">${speaker.desc}</p>
    </div>
    </div> `;
});

speakerDiv += '</div></div>';

document.querySelector('#speaker-section').innerHTML = speakerDiv;

const more = document.querySelector('#more');
const close = document.querySelector('#close');
const spClass3 = document.querySelector('.speaker:nth-child(3)');
const spClass4 = document.querySelector('.speaker:nth-child(4)');
const spClass5 = document.querySelector('.speaker:nth-child(5)');
const spClass6 = document.querySelector('.speaker:nth-child(6)');

more.addEventListener('click', () => {
  spClass3.style.display = 'flex';
  spClass4.style.display = 'flex';
  spClass5.style.display = 'flex';
  spClass6.style.display = 'flex';

  more.style.display = 'none';
  close.style.display = 'flex';
});

close.addEventListener('click', () => {
  spClass3.style.display = 'none';
  spClass4.style.display = 'none';
  spClass5.style.display = 'none';
  spClass6.style.display = 'none';

  more.style.display = 'flex';
  close.style.display = 'none';
});