
gsap.from(".div1", {
  x: "-800px",
  duration: 2,
  delay: 0.8,
});
gsap.from(".div2", {
  x: "700px",
  duration: 2,
  delay: 0.8,
});
gsap.from("#imglogo", {
  y: "400px",
  duration: 2,
  scale: 4,
  delay: 0.5,
});

gsap.to(".page1-div1 span",{
  x:"100px",
  opacity: 1,
    delay: 1,
    stagger:0.4,
    duration: 2,
    force3D:true
})


let thordiv=document.getElementById('image-div')
let btn1 = document.getElementById("btn1");
let thordetails = document.getElementById("thor-details");
let outer1 = document.getElementById("outer1");

var exp1 = new TimelineMax({ paused: true });

outer1.addEventListener("click", function () {
  thordetails.textContent ="Thor is a fictional character in the Marvel Comics universe. He was created by writer Stan Lee, scripter Larry Lieber, and artist Jack Kirby and first appeared in Journey into Mystery #83 in August 1962. Thor is based on the Norse mythological deity of the same name Thor is known for his iconic hammer, his Asgardian heritage, his powerful lightning-based attacks, and his battles against various villains, including Loki, Hela, and Thanos. His character has become one of the most popular and recognizable superheroes in the Marvel Universe."


  let thori=gsap.timeline()
  thori.to('.div-img1',{
    height:"130px",
    width:"180px",
    opacity: 1,
    delay: 1,
    stagger:0.3,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    force3D:true
  })
 

  let tl1 = gsap.timeline();
  tl1.to(" .thor", {
    x: "600px",
    height: "500px",
    width: "1000px",
  });

  let tl2 = gsap.timeline();
  tl2.to(".thorimg", {
    x: "680px",
    y:"-20px",
    scale: 1.5,
  });
  let tl3 = gsap.timeline();
  tl3.to(".div2", {
    x: "1000px",
    opacity: 0,
  });
  let tl8 = gsap.timeline();
  tl8.to(" .outer2, .outer3", {
    opacity: 0,
  });
  let tl4 = gsap.timeline();
  tl4.to("#thor-head", {
    y: "-20px",
    x: "-55px",
    paddingTop: "70px",
    opacity:1
  });
  let tl5 = gsap.timeline();
  tl5.to("#thor-details", {
    y: "-30px",
    opacity: 1,
    delay: 0.7,
    duration: 1,
  });
  let tl6 = gsap.timeline();
  tl6.to("#btn1", {
    y: "-260px",
    x: "900px",
    opacity: 1,
  });

  btn1.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    tl1.reverse();
    tl2.reverse();
    tl3.reverse();
    tl4.reverse();
    tl5.reverse();
    tl6.reverse();
    tl8.reverse();
    thori.reverse();
    thordetails.textContent = "";

  });
});

let btn2 = document.getElementById("btn2");
let captaindetails = document.getElementById("captain-details");
let outer2 = document.getElementById("outer2");
outer2.addEventListener("click", function () {
  captaindetails.textContent =
    "Captain America is another iconic superhero in the Marvel Comics universe. He was created by Joe Simon and Jack Kirby and made his first appearance in Captain America Comics #1 in March 1941. In the Marvel Comics, Captain America's real name is Steve Rogers. He was a frail young man who volunteered for a top-secret military experiment during World War II called the Super Soldier program. The experiment enhanced his physique and abilities, turning him into the peak of human perfection.";

  let tl11 = gsap.timeline();
  let tl12 = gsap.timeline();
  let tl13 = gsap.timeline();
  let tl14 = gsap.timeline();
  let tl15 = gsap.timeline();
  let tl16 = gsap.timeline();
  let tl17 = gsap.timeline();

  let capi=gsap.timeline()
  capi.to('.div-img2',{
    height:"130px",
    width:"180px",
    opacity: 1,
    delay: 1,
    stagger:0.3,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    force3D:true
  })
 
  tl11.to(" .captain", {
    x: "350px",
    height: "500px",
    width: "1000px",
  });
  tl12.to(".captionimg", {
    zIndex: 99,
    x: "400px",
    y:"-20px",
    scale: 1.5,
  });
  tl13.to(".div2", {
    x: "1000px",
    opacity: 0,
  });
  tl14.to(".outer1,.outer3", {
    opacity: 0,
  });
  tl15.to("#cap-head", {
    y: "-70px",
    x: "15px",
    opacity:1
  });
  tl16.to("#captain-details", {
    y: "-30px",
    opacity: 1,
    delay: 0.7,
    duration: 1,
  });
  tl17.to("#btn2", {
    y: "-255px",
    x: "900px",
    opacity: 1,
  });

  btn2.addEventListener("click", (e) => {
    e.stopPropagation();
    e.stopPropagation();
    tl16.reverse();
    tl11.reverse();
    tl12.reverse();
    tl13.reverse();
    tl14.reverse();
    tl15.reverse();
    tl17.reverse();
    capi.reverse();
    captaindetails.textContent = "";
  });
});

let btn3 = document.getElementById("btn3");
let hulkdetails = document.getElementById("hulk-details");
let outer3 = document.getElementById("outer3");
outer3.addEventListener("click", function () {
  hulkdetails.textContent =
    "In the Marvel Comics, Hulk's alter ego is Dr. Bruce Banner, a brilliant scientist who was exposed to gamma radiation during a laboratory accident. As a result, whenever Bruce Banner becomes angry or agitated, he transforms into the Hulk, a massive and incredibly strong green-skinned humanoid creature. The Hulk possesses superhuman strength, durability, and regenerative abilities. His strength increases proportionally with his level of anger, making him one of the most powerful characters in the Marvel Universe.";

  let htl1 = gsap.timeline();
  let htl2 = gsap.timeline();
  let htl3 = gsap.timeline();
  let htl4 = gsap.timeline();
  let htl5 = gsap.timeline();
  let htl6 = gsap.timeline();
  let htl7 = gsap.timeline();

  let hulki=gsap.timeline()
  hulki.to('.div-img3',{
    height:"130px",
    width:"180px",
    opacity: 1,
    delay: 1,
    stagger:0.3,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    force3D:true
  })
 

  htl1.to(" .hulk", {
    x: "100px",
    height: "500px",
    width: "1000px",
  });
  htl2.to(".hulkimg", {
    zIndex: 99,
    y:"-30px",
    x: "170px",
    scale: 1.6,
  });
  htl3.to(".div2", {
    x: "1000px",
    opacity: 0,
  });
  htl4.to(".outer1, .outer2", {
    opacity: 0,
  });

  htl5.to("#hulk-head", {
    y: "-20px",
    x: "-55px",
    paddingTop: "70px",
    opacity:1
  });
  htl6.to("#hulk-details", {
    y: "-30px",
    opacity: 1,
    delay: 0.7,
    duration: 1,
  });
  htl7.to("#btn3", {
    y: "-257px",
    x: "900px",
    opacity: 1,
  });

  btn3.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    htl1.reverse();
    htl2.reverse();
    htl3.reverse();
    htl4.reverse();
    htl5.reverse();
    htl6.reverse();
    htl7.reverse();
    hulki.reverse()
    hulkdetails.textContent = "";
  });
});

let btn4 = document.getElementById("btn4");
let irondetails = document.getElementById("iron-details");
let outer4 = document.getElementById("outer4");
outer4.addEventListener("click", function () {
  irondetails.textContent =
    "Iron Man is a prominent superhero in the Marvel Comics universe. He was created by writer and editor Stan Lee, scripter Larry Lieber, and artists Don Heck and Jack Kirby, and made his first appearance in Tales of Suspense #39 in March 1963. Iron Man's suit grants him superhuman strength, durability, flight capability, and a vast array of offensive and defensive weapons. Tony Stark's intellect and engineering prowess allow him to continually upgrade and improve his suit over time, making him one of the most technologically advanced heroes in the Marvel Universe.";

  let itl1 = gsap.timeline();
  let itl2 = gsap.timeline();
  let itl3 = gsap.timeline();
  let itl4 = gsap.timeline();
  let itl5 = gsap.timeline();
  let itl6 = gsap.timeline();
  let itl7 = gsap.timeline();

  let ironi=gsap.timeline()
  ironi.to('.div-img4',{
    height:"130px",
    width:"180px",
    opacity: 1,
    delay: 0.6,
    stagger:0.3,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    force3D:true
  })

  itl1.to(".ironman", {
    x: "-110px",
    height: "500px",
    width: "1000px",
  });
  itl2.to(".ironimg", {
    zIndex: 99,
    y:"-20px",
    x: "-70px",
    scale: 1.5,
  });
  itl3.to("#iron-head", {
    y: "-20px",
    x: "-23px",
    paddingTop: "70px",
    opacity:1
  });
  itl4.to("#iron-details", {
    y: "-30px",
    opacity: 1,
    delay: 0.7,
    duration: 1,
  });
  itl5.to(".div1", {
    x: "-1000px",
  });
  itl6.to(".outer5, .outer6", {
    opacity: 0,
  });
  itl7.to("#btn4", {
    y: "-252px",
    x: "900px",
    opacity: 1,
  });
  btn4.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    itl1.reverse();
    itl2.reverse();
    itl3.reverse();
    itl4.reverse();
    itl5.reverse();
    itl6.reverse();
    itl7.reverse();
    ironi.reverse()
    irondetails.textContent = "";
  });
});

let blackdetails = document.getElementById("black-details");
let outer5 = document.getElementById("outer5");
outer5.addEventListener("click", function () {
  blackdetails.textContent =
    "Black Widow is a superheroine in the Marvel Comics universe. She was created by writer Stan Lee, scripter Don Rico, and artist Don Heck, and made her first appearance in Tales of Suspense #52 in April 1964. Black Widow is known for her exceptional combat abilities, agility, and espionage skills. She is often depicted as a master of hand-to-hand combat and a proficient marksman. In addition to her physical prowess, Black Widow utilizes a variety of weapons and gadgets, including her iconic wrist gauntlets that fire Widow's Bite electrical charges.";

  let btl1 = gsap.timeline();
  let btl2 = gsap.timeline();
  let btl3 = gsap.timeline();
  let btl4 = gsap.timeline();
  let btl5 = gsap.timeline();
  let btl6 = gsap.timeline();
  let btl7 = gsap.timeline();

  
  let blacki=gsap.timeline()
  blacki.to('.div-img5',{
    height:"130px",
    width:"180px",
    opacity: 1,
    delay: 0.6,
    stagger:0.3,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    force3D:true
  })


  btl1.to(".black", {
    x: "-360px",
    height: "500px",
    width: "1000px",
  });
  btl2.to(".blackimg", {
    zIndex: 99,
    x: "-330px",
    scale: 1.7,
    y:"-30px",
  });
  btl3.to("#black-head", {
    y: "-20px",
    x: "-10px",
    paddingTop: "70px",
    opacity:1
  });
  btl4.to("#black-details", {
    y: "-30px",
    opacity: 1,
    delay: 0.7,
    duration: 1,
  });
  btl5.to(".div1", {
    x: "-1000px",
  });
  btl6.to(".outer6, .outer4", {
    opacity:0
  });
  btl7.to("#btn5", {
    y: "-250px",
    x: "900px",
    opacity: 1,
  });
  btn5.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    blacki.reverse()
    btl1.reverse();
    btl2.reverse();
    btl3.reverse();
    btl4.reverse();
    btl5.reverse();
    btl6.reverse();
    btl7.reverse();
    blackdetails.textContent = "";
  });
});


let btn6=document.getElementById('btn6')
let hawkdetails=document.getElementById('hawk-details')
let outer6 = document.getElementById("outer6");
outer6.addEventListener("click", function () {

  hawkdetails.textContent='Hawkeye is a superhero in the Marvel Comics universe. He was created by writer Stan Lee and artist Don Heck and first appeared in Tales of Suspense #57 in September 1964. In the Marvel Comics, Hawkeye real name is Clint Barton. He is a highly skilled marksman and master archer. Originally introduced as a villain, Hawkeye later became a reformed character and joined the Avengers, using his exceptional archery skills and agility to fight alongside other superheroes.'

  let ltl1=gsap.timeline()
  let ltl2=gsap.timeline()
  let ltl3=gsap.timeline()
  let ltl4=gsap.timeline()
  let ltl5=gsap.timeline()
  let ltl6=gsap.timeline()
  let ltl7=gsap.timeline()


  let hawki=gsap.timeline()
  hawki.to('.div-img6',{
    height:"130px",
    width:"180px",
    opacity: 1,
    delay: 0.6,
    stagger:0.3,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    force3D:true
  })


  ltl1.to(".hawkeye", {
    x: "-570px",
    height: "500px",
    width: "1000px",
  });
  ltl2.to(".hawkimg", {
    zIndex: 99,
    x: "-530px",
    y:"-40px",
    scale: 1.7,
  });
  ltl3.to("#hawk-head", {
    y: "-20px",
    x: "-45px",
    paddingTop: "70px",
    opacity:1
  });
  ltl4.to("#hawk-details", {
    y: "-30px",
    opacity: 1,
    delay: 0.7,
    duration: 1,
  });
  ltl5.to(".div1", {
    x: "-1000px",
  });
  ltl6.to(".outer4, .outer5", {
    opacity:0
  });
  ltl7.to("#btn6", {
    y: "-210px",
    x: "900px",
    opacity: 1,
  });

  btn6.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    ltl1.reverse();
    ltl2.reverse();
    ltl3.reverse();
    ltl4.reverse();
    ltl5.reverse();
    ltl6.reverse();
    ltl7.reverse();
    hawki.reverse()
    hawkdetails.textContent = "";
  });

});


