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

// define even handler function that will increment thetimes clicked for the images
function imageClicked(event){
    // if the id associated with the event target is associatd with firstImage, then  add click event increment by 1
    if (event.target.id === firstImage.id){
        firstImage.clicked += 1;
    // if the id associated with event target the secondImage.id  is not the firstImage, but is the secondImage, add click event increment by 1
    } else if (event.target.id === secondImage.id){
        secondImage.clicked += 1;;
    // if the id associated with the event target is not firstImage, nor secondImage, but IS associated with thirdImage then add click event increment by 1
    } else if(event.target.id === thirdImage.id){
        thirdImage.clicked += 1;
    }
    //prints the event target as the id of the ImageObject
    console.log('event target', event.target.id)
    //prints the number of click events in accordance with the associated image
    console.log('images', firstImage.clicked, secondImage.clicked, thirdImage.clicked)
};

//declare unassigned global variables for images to use in an local assignment  
let firstImage 
let secondImage;
let thirdImage;


// define a function that will display the Random images
function displayImages(){
    //assign the elImageContainer to innerHTML each time the for loop runs
    elImageContainer.innerHTML = '';
    for(let i = 0; i < 3; i++){
        //declared local variable imageObject and assigned it the randomImage method  which invokes the global variable randomImage() method 
        let imageObject = randomImage();//declaration is moved up above the elImage, to prevent conflicts with DOM HTML 
        //declared local variable elImage an assigned it an img tag in HTML
        //assign the imageObject to one of the three images in the image container and validate the image
        //use a conditional statement to validate that current random imageObjects are chosen from the ImageIndex array  
        if (i === 0){//moved up to immediately validate that randomImages are populating properly
        //to populate the images the firstimage must be the imageObject with the index "0" or false
            firstImage = imageObject; 
        //if ImageObject is assign as index 1 then it can be the secondImage   
        }else if (i === 1){
            //run a while the conition is true generate a new random image if the shown  firstImage id is equal to the  secondImage id
            while(imageObject.id === firstImage.id){
                   imageObject = randomImage();
                   console.log('second while', imageObject.id)
            };
            secondImage = imageObject;
         //if imageObject is not index 0 or 1, then it can be used as the thirdImage
        }else {
            // run a while the conition is true generate a new random image if the shown thirdImage  is equal to first OR secondImage id
            while(imageObject.id === firstImage.id || imageObject.id === secondImage.id){
                    imageObject = randomImage();
                    console.log('third while', imageObject.id)
            }
            thirdImage = imageObject; 
        };

        let elImage = document.createElement('img');
        // append elImage to the elImageContainer in HTML via the DOM
        elImageContainer.appendChild(elImage);
        //set an id attribute to image element
        elImage.setAttribute('id', imageObject.id);
        //set the image HTML source tag as the images file path 
        elImage.src = imageObject.filePath;
        //added an eventlistener to each image and to store the event within the "click" property of the image variable
        elImage.addEventListener('click', imageClicked);
        //store the number of times the image is shown within the imageObject "shown" property shown events 
        imageObject.shown += 1;
    }
};
displayImages();
console.log(elImageContainer);
console.log('images', firstImage, secondImage, thirdImage);
