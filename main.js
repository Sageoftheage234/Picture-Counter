//declare the variable characterImageArray  and assign the its values as an empty array which will hold all of the image objects
let characterImageArray = [];

//use getElementById to find our image tags in HTML
// let  imageOne = document.getElementById('image1');
// let  imageTwo = document.getElementById('image2');
// let  imageThree = document.getElementById('image3')

//find our image container using document.getElementById
let elImageContainer = document.getElementById('image-container');
console.log(elImageContainer);

//create an object constructor that will take in parameters and store properties of an image
let CharacterImage  = function(name, show, filePath, id){
    this.name = name;
    this.show = show;
    this.filePath = filePath
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
   
};


//instantiate our counstructor to create multiple instances/objects of our character images
//let [variable] = newCharacterImage('Name','Show','filePath');
let Naruto = new CharacterImage('Naruto','Naruto','./Naruto-Naruto.jpg', 'naruto');
let Sasuke = new CharacterImage('Sasuke','Naruto','./Sasuke-Naruto.jpg', 'sasuke');
let Sakura = new CharacterImage('Sakura','Naruto','./Sakura-Naruto.jpg', 'sakura');
let Itachi = new CharacterImage('Itachi','Naruto','./Itachi-Naruto.jpg', 'itachi');
let Madara = new CharacterImage('Madara','Naruto','./Madara-Naruto.jpg', 'madara');
let Goku = new CharacterImage('Goku','DragonBall-Z','./Goku-DragonBallZ.jpeg', 'goku');
let Jiren = new CharacterImage('Jiren','DragonBall-Z','./Jiren-DragonBallZ.jpg','jiren');
let Vegeta = new CharacterImage('Vegeta','DragonBall-Z','./Vegeta-DragonBallZ.jpg','vegeta');
let Gohan = new CharacterImage('Gohan','DragonBall-Z','./Gohan-DragonBallZ.jpg','gohan');
let Piccolo = new CharacterImage('Piccolo','DragonBall-Z','./Piccolo-DragonBallZ.jpg', 'piccolo');
let Bart = new CharacterImage('Bart','The Simpsons','./Bart-Simpsons.png', 'bart');
let Lisa = new CharacterImage('Lisa','The Simpsons','./Lisa-Simpsons.png','lisa');
let Homer = new CharacterImage('Homer','The Simpsons','./Homer-Simpsons.png', 'homer');
let Marge = new CharacterImage('Marge','The Simpsons','./Marge-Simpsons.png','marge');
let Maggie = new CharacterImage('Maggie','The Simpsons','./Maggie-Simpsons.png','maggie');
let Lana = new CharacterImage('Lana','Archer','./Lana-Archer.jpg', 'lana');
let Cheryl = new CharacterImage('Cheryl','Archer','./Cheryl-Archer.jpg', 'cheryl');
let Archer = new CharacterImage('Archer','Archer','./Archer-Archer.jpg', 'archer');
let Cyrril = new CharacterImage('Cyrril','Archer','./Cyrril-Archer.jpg', 'cyrril');
let Pam = new CharacterImage('Pam','Archer','./Pam-Archer.jpg', 'pam');
let Armin = new CharacterImage('Armin','Attack On Titan','./Armin-AttackOnTitan.jpg','armin');
let Eren = new CharacterImage('Eren','Attack On Titan','./Eren-AttackOnTitan.png', 'eren');
let Mikasa= new CharacterImage('Mikasa','Attack On Titan','./Mikasa-AttackOnTitan.jpg', 'mikasa');
let Levi = new CharacterImage('Cpt Levi','Attack On Titan','./CptLevi-AttackOnTitan.png', 'levi');
let Hange = new CharacterImage('Cmdr Hange','Attack On Titan','./CmdrHange-AttackOnTitan.jpg','hange');


//push our new instances/objects into our imageArray
characterImageArray.push(Naruto,Sasuke,Sakura,Itachi,Madara,Goku,Vegeta,Jiren,Piccolo,Gohan,Bart,Lisa,Homer,Marge,Maggie,Cyrril,Cheryl,Pam,Archer,Lana, Armin,Mikasa,Levi,Hange,Eren); 
//define random image function that will select a random image object from our characterimageArray
function randomImage(){
    //declare a variable that will calculate a random whole number betwen 0 and the length off the characterImageArray
   let randomNumber = Math.floor(Math.random() * characterImageArray.length);
   //declare a variable that will store the image object at the index of our random number
   let imageIndex = characterImageArray[randomNumber];
   // incremeent the shown property of our random image object by 1
   imageIndex.shown += 1;
   //return our random image object
   return imageIndex;
};

let firstImage;
let secondImage;
let thirdImage;


// define a function that will display the Random images
function displayImages(){
    for(let i = 0; i < 3; i++){
        let elImage = document.createElement('img');
        let imageObject = randomImage();
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('id', imageObject.name);
        elImage.src = imageObject.filePath;
        elImage.addEventListener('click', imageClicked);
        imageObject.shown += 1;
        if (i === 0){
            firstImage = imageObject;//elImage
        } else if (i === 1){
            secondImage = imageObject;//elImage;
        } else {
            thirdImage = imageObject; //elImage;
        }
    }
}

displayImages();
console.log(elImageContainer);
console.log('images', firstImage, secondImage, thirdImage);

// define even handler function that will increment thetimes clicked for the firstImage
function imageClicked(event){
    firstImage.clicked += 1;
    secondImage.clicked += 1;
    thirdImage.clicked += 1;
    console.log('event', event.target.id);
}; 
