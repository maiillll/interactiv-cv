// backend/data.js
const educationHistory = [ 
    { id: 1,
     period: '2023 - Sekarang',
     institution: 'Universitas AMIKOM Yogyakarta',
     major: 'S1 - Teknik Informatika' 
    },
    { id: 2,
     period: '2018 - 2021',
     institution: 'SMK INFORMATIKA',
     major: 'Teknik Komputer jaringan)' 
    }
];
const skills = [ 
    { name: 'Vue.js', level: 'Pemula' }, { name: 'JavaScript', level: 'Pemula' },
    { name: 'Tailwind CSS', level: 'Pemula' }, { name: 'Node.js', level: 'Pemula' },
    { name: 'Express.js', level: 'Pemula' }, { name: 'PostgreSQL', level: 'Pemula' },
    { name: 'Git & GitHub', level: 'Pemula' }, { name: 'HTML5 & CSS3', level: 'Pemula' }
];
const projects = [ 
    { title: 'mendaki', image: 'D:\porto\interactiv-cv\frontend\src\assets\mendaki.jpeg',
    description: 'ROBOX player', tech: ['C#'
], link: '#' },
    { title: 'Player MOBA', image: 'D:\porto\interactiv-cv\frontend\src\assets\ml.jpeg',
    description: 'all role gameplay ', tech: [], link: '#' }
];
module.exports = { educationHistory, skills, projects };