import './app.css'
import App from './App.svelte'
import About from './About.svelte'

export const app = document.getElementById('app') ? new App({
  target: document.getElementById('app'),
}) : null 

export const about = document.getElementById('vite_about') ? new About({
  target: document.getElementById('vite_about'),
  props: {
      passdata: JSON.parse(atob(document.querySelector('#vite_about').getAttribute('passdata'))) 
  }
}) : null 

