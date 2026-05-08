// ---------- TYPING EFFECT ----------
const typingSpan = document.querySelector(".typing-text span");
const words = ["Medical Laboratory Technologist", "IT & Computer Science Expert", "Software Enthusiast"];
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
  if(charIndex < words[wordIndex].length){
    typingSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWord,100);
  } else {
    setTimeout(eraseWord,1500);
  }
}

function eraseWord(){
  if(charIndex > 0){
    typingSpan.textContent = words[wordIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseWord,50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord,800);
  }
}

document.addEventListener("DOMContentLoaded", typeWord);

// ---------- SKILLS ANIMATION ----------
const skillBars = [
  { selector:"Microbiology", level:"90%" },
  { selector:"Hematology", level:"85%" },
  { selector:"IT & Coding", level:"95%" },
  { selector:"Data Analysis", level:"80%" }
];

const skillsContainer = document.createElement("div");
skillsContainer.className = "skills";

skillBars.forEach(skill=>{
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";

  const skillName = document.createElement("p");
  skillName.textContent = skill.selector;

  const skillBar = document.createElement("div");
  skillBar.className = "skill-bar";

  const span = document.createElement("span");
  span.style.setProperty("--skill-level", skill.level);

  skillBar.appendChild(span);
  skillDiv.appendChild(skillName);
  skillDiv.appendChild(skillBar);
  skillsContainer.appendChild(skillDiv);
});

document.querySelector(".home-content").appendChild(skillsContainer);
