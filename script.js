const slides = [
  {img:"https://picsum.photos/1200/600?1", title:"Kobci Ganacsigaaga", text:"Ku gaadh macaamiil cusub"},
  {img:"https://picsum.photos/1200/600?2", title:"Xayeysiin Casri ah", text:"Website kuu shaqeeya 24/7"},
  {img:"https://picsum.photos/1200/600?3", title:"Iib Kordhin", text:"Kor u qaad dakhligaaga"},
  {img:"https://picsum.photos/1200/600?4", title:"Brand Adag", text:"Samee sumcad lagu kalsoon yahay"},
  {img:"https://picsum.photos/1200/600?5", title:"Muuqaal Qurux badan", text:"Naqshad soo jiidasho leh"},
  {img:"https://picsum.photos/1200/600?6", title:"Mobile Ready", text:"Si fiican uga shaqeeya taleefanada"},
  {img:"https://picsum.photos/1200/600?7", title:"Fudud & Degdeg ah", text:"Website degdeg u shaqeeya"},
  {img:"https://picsum.photos/1200/600?8", title:"Kalsooni", text:"Macmiil kalsooni leh"},
  {img:"https://picsum.photos/1200/600?9", title:"Guul Ganacsi", text:"U diyaarsan koritaan"},
  {img:"https://picsum.photos/1200/600?10", title:"Bilow Hadda", text:"Ha sugin fursada"}
];

let i = 0;
setInterval(() => {
  heroImage.src = slides[i].img;
  heroTitle.textContent = slides[i].title;
  heroText.textContent = slides[i].text;
  i = (i + 1) % slides.length;
}, 5000);
