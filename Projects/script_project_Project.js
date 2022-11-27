// Tribute Page //
const tributeButton = document.getElementById('tributeBtn');

const toggleTribute_Button = ()=>{
  const initialText = 'Show more';
  
   if(tributeBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     tributeBtn.textContent = 'Show less';
     const change = document.querySelector('.tributeCard');
     change.style.height = '440px';
   } else {
     tributeBtn.textContent = initialText;
     const change = document.querySelector('.tributeCard');
     change.style.height = '312px';
   }

};


tributeButton.addEventListener('click', toggleTribute_Button);


// Comment Box Project
const commentButton = document.getElementById('commentBtn');
const toggleComment_Button = ()=>{
  const initialText = 'Show more';
  
   if(commentBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     commentBtn.textContent = 'Show less';
     const change = document.querySelector('.commentCard');
     change.style.height = '440px';
   } else {
     commentBtn.textContent = initialText;
     const change = document.querySelector('.commentCard');
     change.style.height = '312px';
   }

};

commentButton.addEventListener('click', toggleComment_Button);



// Project Page //
const projectButton = document.getElementById('projectBtn');

const toggleProject_Button = ()=>{
  const initialText = 'Show more';
  
   if(projectBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     projectBtn.textContent = 'Show less';
     const change = document.querySelector('.projectCard');
     change.style.height = '440px';
   } else {
     projectBtn.textContent = initialText;
     const change = document.querySelector('.projectCard');
     change.style.height = '312px';
   }

};

projectButton.addEventListener('click', toggleProject_Button);


// Movie Data Project//
const movieButton = document.getElementById('movieBtn');

const toggleMovie_Button = ()=>{
  const initialText = 'Show more';
  
   if(movieBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     movieBtn.textContent = 'Show less';
     const change = document.querySelector('.movieCard');
     change.style.height = '440px';
   } else {
     movieBtn.textContent = initialText;
     const change = document.querySelector('.movieCard');
     change.style.height = '312px';
   }

};

movieButton.addEventListener('click', toggleMovie_Button);

// Website//
const websiteButton = document.getElementById('websiteBtn');

const toggleWebsite_Button = ()=>{
  const initialText = 'Show more';
  
   if(websiteBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     websiteBtn.textContent = 'Show less';
     const change = document.querySelector('.websiteCard');
     change.style.height = '440px';
   } else {
     websiteBtn.textContent = initialText;
     const change = document.querySelector('.websiteCard');
     change.style.height = '312px';
   }

};

websiteButton.addEventListener('click', toggleWebsite_Button);


// Feature Project//
const featureButton = document.getElementById('featureBtn');

const toggleFeature_Button = ()=>{
  const initialText = 'Show more';
  
   if(featureBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     featureBtn.textContent = 'Show less';
     const change = document.querySelector('.featureCard');
     change.style.height = '440px';
   } else {
     featureBtn.textContent = initialText;
     const change = document.querySelector('.featureCard');
     change.style.height = '312px';
   }

};

featureButton.addEventListener('click', toggleFeature_Button);