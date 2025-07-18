// backend/data.js
const educationHistory = [ 
    { id: 1,
     period: '2023 - Sekarang',
     institution: 'Universitas AMIKOM Yogyakarta',
     major: 'S1 - Teknik Informatika' 
    },
    { id: 2,
     period: '2020 - 2023',
     institution: 'SMK INFORMATIKA',
     major: 'Teknik Multimedia' 
    }
];
const skills = [ 
    { name: 'Vue.js', level: 'Pemula' }, { name: 'JavaScript', level: 'Pemula' },
    { name: 'Tailwind CSS', level: 'Pemula' }, { name: 'Node.js', level: 'Pemula' },
    { name: 'Express.js', level: 'Pemula' }, { name: 'PostgreSQL', level: 'Pemula' },
    { name: 'Git & GitHub', level: 'Pemula' }, { name: 'HTML5 & CSS3', level: 'Pemula' },
];
const projects = [ 
    { title: 'MENDAKI', image: '/interactiv-cv/frontend/src/assets/img/mendaki.jpeg',
    description: 'Final Project Kelompok Pemrograman Web', tech: ['Css# Js# HTML#'
], link: '#' },
    { title: 'MOBA PLAYER', image: '/interactiv-cv/frontend/src/assets/img/ml.jpeg',
    description: 'ALL Role', tech: ['mage', 'tank'], link: '#' }
];
module.exports = { educationHistory, skills, projects };