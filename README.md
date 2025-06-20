# Digital Cameroon 2025 
The leading think tank and innovation laboratory dedicated to the digital transformation of Cameroon.

![Digital Cameroon Website](<screenshots/digitalcameroon.org.png>)

## Problem & Solution

### Problem
The needed for an outstanding web plateform with interactive animations on scroll and on navigation.

### Solution
The site is built using Vue 3 and integrate GSAP to render outstanding animations expected.

## Technologies & Theme

  **Technologies:**
  - Vue 3 / Nuxt 3 (Choose based on project) <br>
  - GSAP animation (scrolltiger, scrolltoplugin, splittext, smoothscroll, scrollmagic, tilt)  <br>
  
  **Theme:**
  - //
  Source: 

## Deployment & Dev Tools
  - VPS (CONTABO)
  - Nginx (for reverse proxy)
  - PM2 (process manager for Node.js)
  - VS Code (development environment)

## Depoyment on VPS

1. Connect to VPS via SSH:
   ssh root@your_server_ip
   
2. Install Dependencies:
  sudo apt update && sudo apt upgrade -y
  sudo apt install -y git nodejs npm nginx
.
.
.
.
.
.
.
## Project structure
├── src/  
│   ├── assets/          # Static assets (images, fonts)  
│   ├── components/      # Reusable Vue components  
│   ├── composables/     # Vue 3 composables (if used)  
│   ├── layouts/         # Layout files (Nuxt only)  
│   ├── pages/           # Page components (Nuxt) / views (Vue Router)    
│   ├── utils/           # Helper functions  
│   └── app.vue          # Entry point  
├── public/              # Static files (Vue)  
├── nuxt.config.js       # Nuxt config (if Nuxt)  
├── tailwind.config.js   # Tailwind config  
└── package.json         # Dependencies & scripts  


## Starting services

## Run locally

**Cloning project**
git clone project_url

**Installing dependencies**
npm install 
yarn install

**Starting project**
npm run dev
nuxt start

Open http://localhost:3000






















