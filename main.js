//declare the variable characterImageArray  and assign the its values as an empty array which will hold all of the image objects
let characterImageArray = [];

//find image container element using document.getElementById
let elImageContainer = document.getElementById('image-container');

//use getElementById to find our image tags in HTML
let  imageOne = document.getElementById('image1');
let  imageTwo = document.getElementById('image2');
let  imageThree = document.getElementById('image3')

//create an object constructor that will take in parameters and store properties of an image
let CharacterImage  = function(name, show, filePath){
    this.name = name;
    this.show = show;
    this.filePath = filePath
    this.clicked = 0;
    this.shown = 0;
    this.addClicks;
};


//instantiate our counstructor to create multiple instances/objects of our character images
//let [variable] = newCharacterImage('Name','Show','filePath');
let Naruto = new CharacterImage('Naruto','Naruto','./Naruto-Naruto.jpg');
let Sasuke = new CharacterImage('Sasuke','Naruto','./Sasuke-Naruto.jpg');
let Sakura = new CharacterImage('Sakura','Naruto','./Sakura-Naruto.jpg');
let Itachi = new CharacterImage('Itachi','Naruto','./Itachi-Naruto.jpg');
let Madara = new CharacterImage('Madara','Naruto','./Madara-Naruto.jpg');
let Goku = new CharacterImage('Goku','DragonBall-Z','./Goku-DragonBallZ.jpeg');
let Jiren = new CharacterImage('Jiren','DragonBall-Z','./Jiren-DragonBallZ.jpg');
let Vegeta = new CharacterImage('Vegeta','DragonBall-Z','./Vegeta-DragonBallZ.jpg');
let Gohan = new CharacterImage('Gohan','DragonBall-Z','./Gohan-DragonBallZ.jpg');
let Piccolo = new CharacterImage('Piccolo','DragonBall-Z','./Piccolo-DragonBallZ.jpg');
let Bart = new CharacterImage('Bart','The Simpsons','./Bart-Simpsons.png');
let Lisa = new CharacterImage('Lisa','The Simpsons','./Lisa-Simpsons.png');
let Homer = new CharacterImage('Homer','The Simpsons','./Homer-Simpsons.png');
let Marge = new CharacterImage('Marge','The Simpsons','./Marge-Simpsons.png');
let Maggie = new CharacterImage('Maggie','The Simpsons','./Maggie-Simpsons.png');
let Lana = new CharacterImage('Lana','Archer','./Lana-Archer.jpg');
let Cheryl = new CharacterImage('Cheryl','Archer','./Cheryl-Archer.jpg');
let Archer = new CharacterImage('Archer','Archer','./Archer-Archer.jpg');
let Cyrril = new CharacterImage('Cyrril','Archer','./Cyrril-Archer.jpg');
let Pam = new CharacterImage('Pam','Archer','./Pam-Archer.jpg');
let Armin = new CharacterImage('Armin','Attack On Titan','./Armin-AttackOnTitan.jpg');
let Eren = new CharacterImage('Eren','Attack On Titan','./Eren-AttackOnTitan.png');
let Mikasa= new CharacterImage('Mikasa','Attack On Titan','./Mikasa-AttackOnTitan.jpg');
let Levi = new CharacterImage('Cpt Levi','Attack On Titan','./CptLevi-AttackOnTitan.png');
let Hange = new CharacterImage('Cmdr Hange','Attack On Titan','./CmdrHange-AttackOnTitan.jpg');


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
//declaring variables that will store the return value for our random image function
let firstImage = randomImage();
let secondImage = randomImage();
let thirdImage = randomImage();

//let the src attribute of our image tages to the filePath of our new images
imageOne.src = firstImage.filePath;
imageTwo.src = secondImage.filePath;
imageThree.src = thirdImage.filePath;


// define even handler function that will increment thetimes clicked for the firstImage
function imageClicked(event){
    firstImage.clicked += 1; 
    console.log('first Image clicked property',firstImage.clicked);
    console.log('first image shown property', firstImage.shown);
}; 
//attach an event listener to the imageOne html tage and listen for a click eent that will invoke addEventListener method
imageOne.addEventListener('click', imageClicked)

console.log('first image shown property', firstImage.shown);
console.log('second image shown property', secondImage.shown);
console.log('third image shown property', thirdImage.shown);

    // if(event.target.id === firstImage.id){
        //         firstImage.clicked += 1;
        //     } else if(event.target.id === secondImage.id){
        //             secondImage.clicked += 1;
        //         } else if (event.target.id === thirdImage.id){
        //                 thirdImage.clicked += 1;
        //             }
        //         }
        //         displayImages();
                
        //         localStorage.setItem('storageHeroImgArr', JSON.stringify(characterImageArray));
                
                
        //         let firstImage;
        //         let secondImage;
        //         let thirdImage
                
                
                // function displayImages(){
                    //     elImageContainer.innerHTML = '';
                    //     for(let i = 0; i < 3; i++){
                        //         let elImage = document.createElement('img');
                        //         let imageObject = randomImage();
                        //         elImageContainer.appendChild(elImage);
                        //         elImage.setAttribute('id', imageObject.id);
                        //         elImage.src = imageObject.filePath;
                        //         elImage.addEventListener('click', imageClicked);
//         imageObject.shown += 1;

//         if(i===0){
//             firstimage = imageObject;
//         } else if (i === 1){
//             secondImage = imageObject;
//     }
// }  

//displayImages();

//console.log(elImageContainer);
//console.log('images', firstImage, secondImage, thirdImage)