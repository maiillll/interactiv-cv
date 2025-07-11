<template>
  <div class="skills-container" id="pageskill">
    <h1 class="main-title">Keahlian & Teknologi</h1>
    <p class="subtitle">Teknologi yang saya gunakan untuk mengembangkan aplikasi web modern.</p>

    <div class="skill-categories">
      <div v-for="category in skillCategories" :key="category.name" class="skill-card">
        <h3 class="category-title">{{ category.name }}</h3>
        <ul class="skills-list">
          <li v-for="skill in category.skills" :key="skill.name">
            <i :class="skill.icon"></i> <span>{{ skill.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Gunakan ref untuk menyimpan data keahlian secara reaktif
const skillCategories = ref([
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'JavaScript (ES6+)', icon: 'fab fa-js-square' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3 & Sass', icon: 'fab fa-sass' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind' },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'Laravel', icon: 'fab fa-laravel' },
      { name: 'RESTful APIs
