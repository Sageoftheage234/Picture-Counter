let characterImageArray = [];


let  image = document.getElementById('image');


let CharacterImage  = function(name, show, filePath){
    this.name = name;
    this.show = show;
    this.filePath = filePath
    this.clicked = 0;
    this.shown = 0;
};
//let [variable] = newCharacterImage('Name','Show','filePath');
let naruto = newCharacterImage('Naruto','Naruto', './Code-Partners-Click-Pic-Project/Naruto/Naruto-Naruto.jpg');
let sasuke = newCharacterImage('Sasuke','Naruto','./Code-Partners-Click-Pic-Project/Naruto/Sasuke-Naruto.jpg');
let sakura = newCharacterImage('Sakura','Naruto','.Code-Partners-Click-Pic-Project/Naruto/Sakura-Naruto.jpg');
let itachi = newCharacterImage('Itachi','Naruto','./Code-Partners-Click-Pic-Project/Naruto/Itachi-Naruto.jpg');
let madara = newCharacterImage('Madara','Naruto','./Code-Partners-Click-Pic-Project/Naruto/Madara-Naruto.jpg');
let goku = newCharacterImage('Goku','DragonBall-Z','./Code-Partners-Click-Pic-Project/DragonBall-Z/Goku-DragonBallZ.jpeg');
let jiren = newCharacterImage('Jiren','DragonBall-Z','./Code-Partners-Click-Pic-Project/DragonBall-Z/Jiren-DragonBallZ.jpg');
let vegeta = newCharacterImage('Vegeta','DragonBall-Z','./Code-Partners-Click-Pic-Project/DragonBall-Z/Vegeta-DragonBallZ.jpg');
let gohan = newCharacterImage('Gohan','DragonBall-Z','./Code-Partners-Click-Pic-Project/Gohan-DragonBallZ.jpg');
let piccolo = newCharacterImage('Piccolo','DragonBall-Z','./Code-Partners-Click-Pic-Project/DragonBall-Z/Piccolo-DragonBallZ.jpg');
let bart = newCharacterImage('Bart','The Simpsons','./Code-Partners-Click-Pic-Project/The-Simpsons/Bart-Simpsons.png');
let lisa = newCharacterImage('Lisa','The Simpsons','./Code-Partners-Click-Pic-Project/The-Simpsons/Lisa-Simpsons.png');
let homer = newCharacterImage('Homer','The Simpsons','./Code-Partners-Click-Pic-Project/The-Simpsons/Homer-Simpsons.png');
let marge = newCharacterImage('Marge','The Simpsons','./Code-Partners-Click-Pic-Project/The-Simpsons/Marge-Simpsons.png');
let maggie = newCharacterImage('Maggie','The Simpsons','./Code-Partners-Click-Pic-Project/The-Simpsons/Maggie-Simpsons.png');
let lana = newCharacterImage('Lana','Archer','./Code-Partners-Click-Pic-Project/Archer/Lana-Archer.jpg');
let cheryl = newCharacterImage('Cheryl','Archer','./Code-Partners-Click-Pic-Project/Archer/Cheryl-Archer.jpg');
let archer = newCharacterImage('Archer','Archer','./Code-Partners-Click-Pic-Project/Archer/Archer-Archer.jpg');
let cyrril = newCharacterImage('Cyrril','Archer','./Code-Partners-Click-Pic-Project/Archer/Cyrril-Archer.jpg');
let pam = newCharacterImage('Pam','Archer','./Code-Partners-Click-Pic-Project/Archer/Pam-Archer.jpg');
let armin = newCharacterImage('Armin','Attack On Titan','./Code-Partners-Click-Pic-Project/AttackOnTitan/Armin-AttackOnTitan.jpg');
let eren = newCharacterImage('Eren','Attack On Titan','./Code-Partners-Click-Pic-Project/Eren-AttackOnTitan.png');
let mikasa= newCharacterImage('Mikasa','Attack On Titan','./Code-Partners-Click-Pic-Project/Mikasa-AttackOnTitan.jpg');
let levi = newCharacterImage('Cpt Levi','Attack On Titan','./Code-Partners-Click-Pic-Project/CptLevi-AttackOnTitan.png');
let hange = newCharacterImage('Cmdr Hange','Attack On Titan','./Code-Partners-Click-Pic-Project/CmdrHange-AttackOnTitan.jpg');


characterImageArray.push(naruto,sasuke,sakura,itachi,madara,goku,vegeta,jiren,piccolo,gohan,bart,lisa,homer,marge,maggie,cyrril, cheryl,pam,archer,lana, armin,mikasa,levi,hange,eren,); 


function randomImage(){
    let randomNumber = Math.floor(Math.random() * characterImageArray.length);
    let imageIndex = characterImageArray[randomNumber]
    imageIndex.shown += 1;
    return imageIndex;
};

function displayImages(){
    for(let i = 0; i < 3; i++){
    let elImage = document.createElement('img');
    let imageObject = randomImage();
    elImageContainer.appendChild(elImage);
    elImage.setAttribute('id', imageObject.name);
    elImage.src = imageObject.filePath
    }  
}

displayImages();

//declaring variables that will store the return valuefor our random image function 
//let numImage = randomImage();
firstImage = randomImage();
secondImage = randomImage();
thirdImage = randomImage();
fourthImage = randomImage();
fifthImage = randomImage();
sixthImage = randomImage();
seventhImage = randomImage();
eighthImage = randomImage();
ninthImage = randomImage();
tenthImage = randomImage();
eleventhImage = randomImage();
twelvthImage = randomImage();
thirteenthImage = randomImage();
fourteenthImage = randomImage();
fifteenthImage = randomImage();
sixteenthImage = randomImage();
seventeenthImage = randomImage();
eighteenthImage = randomImage();
nineteenthImage = randomImage();
twentiethImage = randomImage();
twentyfirstImage = randomImage();
twentysecondImage = randomImage();
twentythirdImage = randomImage();
twentyfourthImage = randomImage();
twentyfifthImage = randomImage();




//set the src attribute of the image tages to the filepath of the new images
//imageNum.src = numberOrderImage.filePath;
imageOne.src = firstImage.filePath
imageTwo.src = secondImage.filePath;
imageThree.src = thirdImage.filePath;
imageFour.src = fourthImage.filePath;
imageFive.src = fifthImage.filePath;
imageSix.src = sixthImage.filePath;
imageSeven.src = seventhImage.filePath;
imageEight.src = eighthImage.filePath;
imageNine.src = ninthImage.filePath;
imageTen.src = tenthImage.filePath;
imageEleven.src = eleventhImage.filePath;
imageTwelve.src = twelvthImage.filePath;
imageThirtheen.src = thirteenthImage.filePath;
imageFourteen.src = fourteenthImage.filePath;
imageFifteen.src = fifteenthImage.filePath;
imageSixteen.src = sixteenthImage.filePath;
imageSeventeen.src = seventeenthImage.filePath;
imageEighteen.src = eighteenthImage.filePath;
imageNineteen.src = nineteenthImage.filePath;
imageTwenty.src = twentiethImage.filePath;
imageTwentyOne.src = twentyfirstImage.filePath;
imageTwentyTwo.src = twentysecondImage.filePath;
imageTwentyThree.src = twentythirdImage.filePath;
imageTwentyFour.src = twentyfourthImage.filePath;
imageTwentyFive.src = twentyfifthImage.filePath;


function imageClicked(event){
    numberOrderImage.clicked += 1;
    console.log('event', event.target.id)
    console.log('number image clicked property', numberOrderImage.clicked)

}

//add an event listener to each displayed picture to capture click
imageNum.addEventListener('click', imageClicked);




console.log('numberOrder Image Shown', numberOrderImage.shown)