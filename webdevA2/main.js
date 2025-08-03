//target all elements to save to constants
//these are for the main pages
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const homePageBtn=document.querySelector("#homePageBtn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages

//these are for the sub topics in each page
//region buttons
const regionBtn1=document.querySelector("#regionBtn1"); //select those with this id
const regionBtn2=document.querySelector("#regionBtn2");
const regionBtn3=document.querySelector("#regionBtn3");
const regionBtn4=document.querySelector("#regionBtn4");
const regionBtn5=document.querySelector("#regionBtn5");
const regionBtn6=document.querySelector("#regionBtn6");
const regionBtn7=document.querySelector("#regionBtn7");
const regionBtn8=document.querySelector("#regionBtn8");
const regionBtn9=document.querySelector("#regionBtn9");
const regionBtn10=document.querySelector("#regionBtn10");
const regionBtn11=document.querySelector("#regionBtn11");
const regionBtn12=document.querySelector("#regionBtn12");
var allRegions=document.querySelectorAll(".region");

//culture buttons
const cultureBtn1=document.querySelector("#cultureBtn1"); //select those with this id
const cultureBtn2=document.querySelector("#cultureBtn2");
const cultureBtn3=document.querySelector("#cultureBtn3");
const cultureBtn4=document.querySelector("#cultureBtn4");
const cultureBtn5=document.querySelector("#cultureBtn5");
const cultureBtn6=document.querySelector("#cultureBtn6");
const cultureBtn7=document.querySelector("#cultureBtn7");
const cultureBtn8=document.querySelector("#cultureBtn8");
const cultureBtn9=document.querySelector("#cultureBtn9");
const cultureBtn10=document.querySelector("#cultureBtn10");
const cultureBtn11=document.querySelector("#cultureBtn11");
const cultureBtn12=document.querySelector("#cultureBtn12");
const cultureBtn13=document.querySelector("#cultureBtn13");
const cultureBtn14=document.querySelector("#cultureBtn14");
const cultureBtn15=document.querySelector("#cultureBtn15");
const cultureBtn16=document.querySelector("#cultureBtn16");
var allCultures=document.querySelectorAll(".culture");

//history buttons
const TimeBtn1=document.querySelector("#TimeBtn1");
const TimeBtn2=document.querySelector("#TimeBtn2");
const TimeBtn3=document.querySelector("#TimeBtn3");
const TimeBtn4=document.querySelector("#TimeBtn4");
const TimeBtn5=document.querySelector("#TimeBtn5");
const TimeBtn6=document.querySelector("#TimeBtn6");
var allTimelines=document.querySelectorAll(".Timeline");

//this is for the audio
const clickAudio = new Audio("audio/click.wav");
const pickCard = new Audio("audio/Punch.ogg");
const correctCards = new Audio("audio/NextLevelOpening.ogg");

//this is to hide all the sections within a page
function hideallSect() 
{
    for(let oneRegion of allRegions)
        oneRegion.style.display = "none";
    for(let oneCulture of allCultures)
        oneCulture.style.display = "none";

    for(let oneTimeline of allTimelines)
        oneTimeline.style.display = "none";
}

//this is to show the specific section within a page
function showSect(sectNum, pgno)
{
    hideallSect();
    let oneRegion = document.querySelector("#region" + sectNum);
    let oneCulture = document.querySelector("#culture" + sectNum);
    let oneTimeline = document.querySelector("#Timeline" + sectNum);
    if (pgno == 3)
        oneRegion.style.display = "flex";
    else if (pgno == 2)
        oneCulture.style.display = "flex"; //change to flex later
    else if (pgno ==  1)
        oneTimeline.style.display = "flex";
}

function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
//pgno can be a string too
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
// make sure the parameter is the "page" + pgno.
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
//the numbers / string here are the pgno
page1btn.addEventListener("click", function () {
show(1);
clickAudio.play(); //play the audio!
});
page2btn.addEventListener("click", function () {
show(2);
clickAudio.play(); //play the audio!
});
page3btn.addEventListener("click", function () {
show(3);
clickAudio.play(); //play the audio!
});
homePageBtn.addEventListener("click", function () {
show("home");
clickAudio.play(); //play the audio!
});
hideall();

//this one is to show the regions in the page
regionBtn1.addEventListener("click", function() {
showSect(1, 3);
});
regionBtn2.addEventListener("click", function() {
showSect(2, 3);
});
regionBtn3.addEventListener("click", function() {
showSect(3, 3);
});
regionBtn4.addEventListener("click", function() {
showSect(4, 3);
});
regionBtn5.addEventListener("click", function() {
showSect(5, 3);
});
regionBtn6.addEventListener("click", function() {
showSect(6, 3);
});
regionBtn7.addEventListener("click", function() {
showSect(7, 3);
});
regionBtn8.addEventListener("click", function() {
showSect(8, 3);
});
regionBtn9.addEventListener("click", function() {
showSect(9, 3);
});
regionBtn10.addEventListener("click", function() {
showSect(10, 3);
});
regionBtn11.addEventListener("click", function() {
showSect(11, 3);
});
regionBtn12.addEventListener("click", function() {
showSect(12, 3);
});

//This one is to show the cultures in the page
cultureBtn1.addEventListener("click", function() {
showSect(1, 2);
});
cultureBtn2.addEventListener("click", function() {
showSect(2, 2);
});
cultureBtn3.addEventListener("click", function() {
showSect(3, 2);
});
cultureBtn4.addEventListener("click", function() {
showSect(4, 2);
});
cultureBtn5.addEventListener("click", function() {
showSect(5, 2);
});
cultureBtn6.addEventListener("click", function() {
showSect(6, 2);
});
cultureBtn7.addEventListener("click", function() {
showSect(7, 2);
});
cultureBtn8.addEventListener("click", function() {
showSect(8, 2);
});
cultureBtn9.addEventListener("click", function() {
showSect(9, 2);
});
cultureBtn10.addEventListener("click", function() {
showSect(10, 2);
});
cultureBtn11.addEventListener("click", function() {
showSect(11, 2);
});
cultureBtn12.addEventListener("click", function() {
showSect(12, 2);
});
cultureBtn13.addEventListener("click", function() {
showSect(13, 2);
});
cultureBtn14.addEventListener("click", function() {
showSect(14, 2);
});
cultureBtn15.addEventListener("click", function() {
showSect(15, 2);
});
cultureBtn16.addEventListener("click", function() {
showSect(16, 2);
});

//This one is to show the history events in one page
TimeBtn1.addEventListener("click", function() {
showSect(1, 1);
});
TimeBtn2.addEventListener("click", function() {
showSect(2, 1);
});
TimeBtn3.addEventListener("click", function() {
showSect(3, 1);
});
TimeBtn4.addEventListener("click", function() {
showSect(4, 1);
});
TimeBtn5.addEventListener("click", function() {
showSect(5, 1);
});
TimeBtn6.addEventListener("click", function() {
showSect(6, 1);
});

hideallSect();

//show home page by default
show("home");

//to set the interval for changing of pictures 
setInterval(function() {
}, 1000);


let num = 0;
//function to change the pictures of the homepage
function changePictures() {
    let homebgImg = document.getElementById("homebgImg");
    
    if (num == 0)
    {
        homebgImg.src = "images/Taiwan-1.jpg";
        num++;
    }
    else if (num == 1)
    {
        homebgImg.src = "images/nantou.jpg";
        num++;
        
    }
    else if (num == 2)
    {
        homebgImg.src = "images/Taiwan-8.jpg";
        num++;
    }
    else if (num == 3)
    {
        homebgImg.src = "images/Taiwan-7.jpg";
        num = 0;
    }
     
}

// call this 1 time  outside
setInterval(changePictures, 1500);

// chosenOption = [q1, q2, q3, q4, q5];
correctAnswers = ["Japanese", "2021", "23rd", "Hokkien", "17th"];
UserAns = []; //nothing inside at first
questionPrompt = ["1. Taiwanese culture is a fusion of Chinese, Austronesian, Western and which country's influence?",
                  "2. When did Kaohsiung Music Center opened its doors?",
                  "3. Which day of the 3rd month is Mazu's birthday?",
                  "4. Taiwanese Operas, Ke-Tse, are performed in which dialect?",
                  "5. In which century did the art of glove puppetry start appearing in Taiwan?"];
quizPics = ["images/taiwanQuiz-1.jpg",
            "images/PerformingArts.jpg",
            "images/Mazu.jpg",
            "images/TaiwaneseOpera.jpg",
            "images/GlovePuppetry.jpg"];
 
options = ["Russian", "Malaysian", "Korean", "Japanese", "2020", "2021", "2022", "2023", "23rd", "24th", "25th", "26th",
           "Hakka", "Mandarin", "Hokkien", "English", "16th", "17th", "19th", "20th"];

//This part is to show the dynamic content + event delegation thru the quiz
const QnBtn = document.querySelector("#QnBtn");
const dynamicArea = document.querySelector("#dynamicArea");
function ShowQuestions(qnNum) {
    // if the first qn and option appear then show
    dynamicArea.innerHTML = "";

    //create the div for the picture
    const newPic = document.createElement('img');
    newPic.src = quizPics[qnNum];
    newPic.className = "quiz_img";
    dynamicArea.appendChild(newPic);

    //create the div for the qn
    const newDiv = document.createElement('div');
    newDiv.textContent = questionPrompt[qnNum];
    dynamicArea.appendChild(newDiv);

    //create the radio buttons for the options
    for (let i = 4 * qnNum; i < (4 * qnNum) + 4; i++)
    {
        const newbutton = document.createElement('input');
        newbutton.type = 'radio';
            if (i >= 0 && i <= 3)
                newbutton.name = "q" + (qnNum + 1);
            else if (i >= 4 && i <= 7)
                newbutton.name = "q" + (qnNum + 1);
            else if (i >= 8 && i <= 11)
                newbutton.name = "q" + (qnNum + 1);
            else if (i >= 12 && i <= 15)
                newbutton.name = "q" + (qnNum + 1);
            else if (i >= 16 && i <= 20)
                newbutton.name = "q" + (qnNum + 1);

            //Set the value attribute
            newbutton.value = options[i];

            const label = document.createElement('label');
            label.textContent = options[i];
            label.htmlFor = "option" + i;

            label.className = 'flex_options'
            newbutton.id = "option" + i;
            console.log("prompts generated: " + newbutton.id + ", " + label.htmlFor);

            // Add to the end of the body
            dynamicArea.appendChild(newbutton);
            dynamicArea.appendChild(label);
            dynamicArea.appendChild(document.createElement("br")); // line break
    }
}

QnBtn.addEventListener("click", function() {
    qnNum++;
    if (qnNum < questionPrompt.length)
        ShowQuestions(qnNum);
    else
    {
        // dynamicArea.replaceChild(" ");
        dynamicArea.innerHTML = "";
        ShowScore();
        //QnBtn.disabled = true;
        QnBtn.style.display = "none";
    }
});

//This is to store the user's input for comparisions later
//The parent would have listener attach to it at first (event delegation)
//The change event fires immediately when the state of a checkbox or radio button changes (checked/unchecked).
dynamicArea.addEventListener("change", function(event) {
    if (event.target && event.target.type === 'radio') //=== is stringCompare
    {
        //let selectedOption = event.target.value; //may be redundant. the value here is the user's input
        let QnName = event.target.name; //this will get that name that the option has, like eg the q1 or q2
        let CurrentQn = parseInt(QnName.replace("q", "")); //this will extract that "q" out of the string name, then will only left the no. in the Qnname
        
        UserAns[CurrentQn - 1] = event.target.value;
        console.log(CurrentQn + "result has been recorded.");
    }
});

function ShowScore() {
    let quizScore = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (UserAns[i] == correctAnswers[i])
            quizScore++;
    }

    //create new Div to show the score
    const newDiv = document.createElement('div');
    newDiv.textContent = "You have scored: " + quizScore + " points! Great Job!";
    dynamicArea.appendChild(newDiv);
}

//showing the first picture by default
var qnNum = 0;
ShowQuestions(qnNum);

//The ids of the cards
ImageCardIDs = [1, 2, 3, 4, 5, 6];
TextCardIDs = [11, 12, 13, 14, 15, 16];
cardImage = ["images/Hsinchu.jpg", "images/Kaohsiung.jpg", "images/Keelung.jpg", 
             "images/nantou.jpg", "images/Taipei101.jpg", "images/taoyuan.jpg"];
ImagecardName = ["Hsinchu", "Kaohsiung", "Keelung", "Nantou", "Taipei","Taoyuan"];
TextCardName = ["Hsinchu", "Kaohsiung", "Keelung", "Nantou", "Taipei","Taoyuan"];
flippedImageCards = []; //put in array in case user picked 2 imageCards
flippedTextCards = [];
matched = [];
//This part is dynamic content for the memory card game
const board = document.querySelector("#flexItem_Board");
function generateCards() {
    board.innerHTML = "";

    let allCards = []; //create an empty array to store every cards's info here systemetically

    //combining all the info of each card and store them in the allCards array
    for (let i = 0; i < TextCardIDs.length; i++)
    {
        //This is for image card
        allCards.push(
            { id: i + 1,
            type: "image",
            name: ImagecardName[i],
            img: cardImage[i]});

        //This is for text card
        allCards.push(
            { id: i + 11,
            type: "text",
            name: TextCardName[i]});
    }

    // Shuffle the array randomly
    allCards.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 12; i++)
    {
        const newCard = document.createElement('div');
        newCard.className = "buttonSpace";
        newCard.id = allCards[i].id;

        if (allCards[i].type == "image")
        {
            newCard.innerHTML = `<div class="card">
                                 <div class="card_front">
                                    <img class="card_img" src=${allCards[i].img}>
                                    <div class="card_text">
                                        <h3 class="card_textInfo">
                                            ${allCards[i].name}
                                        </h3>
                                    </div>
                                 </div>
                                    <div class="card_back">
                                        <h3>Taiwanese Regions!</h3>
                                    </div>
                                 </div>`;
        }
        else if (allCards[i].type == "text")
        {
            newCard.innerHTML = `<div class=card>
                                    <div class="card_front">
                                        <div class="card_text">
                                            <h3 class="card_textInfo">
                                                ${allCards[i].name}
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="card_back">
                                        <h3>Taiwanese Regions!</h3>
                                    </div>
                                 </div>`;
        }

        board.appendChild(newCard);
    }

    board.addEventListener("click", function (event) {
        let selectedCard = event.target.closest(".card"); //same thing as the radio one above but this is for the div version
        pickCard.play();
        
        if (matched.includes(selectedCard))
        {
            console.log("GET OUT OF THIS FUNCTION!");
            return;
        }

        if ((flippedImageCards.length + flippedTextCards.length) >= 1) //if there is already 1 card in the array 
        {
            console.log("Went to 1");
            if (event.target && event.target.closest(".card")) //if the target exit and is type div
            {
                 const parentDiv = selectedCard.parentElement; // .buttonSpace div
                 const cardId = parseInt(parentDiv.id); //the id is with the buttonspace parent

                let CardID2;
                let CardID1 = cardId; //should return the id of that card
                selectedCard.classList.remove("anim2"); //flip open the selected card
                selectedCard.classList.add("anim1");
                if (flippedImageCards.length > 0) //if first card to compare with is from here
                {
                    CardID2 = parseInt(flippedImageCards[0].parentElement.id); //to get the id from the buttonspace parent of this array elemtn
                    setTimeout(function() { //place a delay here or else change too fast, can't see 
                        if ((CardID1 + CardID2) < 12) { //if card 1 is image, card 2 is image
                            //flip back the cards
                            flippedImageCards.push(selectedCard); //easier for removal later if not matching, since just need to clean the array
                            flippedImageCards[0].classList.remove("anim1"); //more recent card
                            flippedImageCards[1].classList.remove("anim1");
                            flippedImageCards[0].classList.add("anim2"); //prev card
                            flippedImageCards[1].classList.add("anim2");

                            flippedImageCards = []; //clean out all the stored elements in the array (to make bith cards clickable again)
                            console.log("Number of elements in the array PART 1: " + flippedImageCards.length);
                        }
                        else if ((CardID1 + CardID2) >= 12) { //1 image card + 1 text card
                            //cards remained opened if turns out to be a match
                            if ((CardID1 - CardID2) == 10) { //matching
                                correctCards.play();
                                //take note the first card here will always be the imageCards since the overall condition is to see if the first picked card is Image card or not
                                matched.push(flippedImageCards[0]); //push the 1st card into matched array, matched array don't bother, make those matched cards unclickable
                                matched.push(selectedCard);
                                flippedImageCards = []; // clean the array
                                selectedCard = ""; //no longer select that card
                            }
                            else if ((CardID1 - CardID2) < 10 || (CardID1 - CardID2) > 10) {
                                flippedImageCards[0].classList.remove("anim1");
                                flippedImageCards[0].classList.add("anim2");
                                selectedCard.classList.remove("anim1");
                                selectedCard.classList.add("anim2");
                                flippedImageCards = []; // clean the array
                                selectedCard = ""; //no longer select that card
                            }
                        }
                    }, 800); 
                }
                else if (flippedTextCards.length > 0) //if first card is from here
                {
                    CardID2 = parseInt(flippedTextCards[0].parentElement.id); //to get the id from the buttonspace parent of this array elemtn
                    setTimeout(function() { //place a delay here or else change too fast, can't see 
                        if ((CardID1 + CardID2) > 22) { //if card 1 is text, card 2 is text
                            //flip back the cards
                            flippedTextCards.push(selectedCard); //easier for removal later if not matching, since just need to clean the array
                            flippedTextCards[0].classList.remove("anim1"); //more recent card
                            flippedTextCards[1].classList.remove("anim1");
                            flippedTextCards[0].classList.add("anim2"); //prev card
                            flippedTextCards[1].classList.add("anim2");

                            flippedTextCards = []; //clean out all the stored elements in the array (to make bith cards clickable again)
                            console.log("Number of elements in the array PART 1: " + flippedImageCards.length);
                        }
                        else if ((CardID1 + CardID2) >= 12) { //1 image card + 1 text card
                            //cards remained opened if turns out to be a match
                            if ((CardID1 - CardID2) == -10) { //matching
                                correctCards.play();
                                //take note the first card here will always be the imageCards since the overall condition is to see if the first picked card is Image card or not
                                matched.push(flippedTextCards[0]); //push the 1st card into matched array, matched array don't bother, make those matched cards unclickable
                                matched.push(selectedCard);
                                flippedTextCards = []; // clean the array
                                selectedCard = ""; //no longer select that card
                            }
                            else if ((CardID1 - CardID2) < -10 || (CardID1 - CardID2) > -10) {
                                flippedTextCards[0].classList.remove("anim1");
                                flippedTextCards[0].classList.add("anim2");
                                selectedCard.classList.remove("anim1");
                                selectedCard.classList.add("anim2");
                                flippedTextCards = []; // clean the array
                                selectedCard = ""; //no longer select that card
                            }
                        }
                    }, 800); 
                }
            }
        }
        else if ((flippedImageCards.length + flippedTextCards.length) < 1) { //actually records both cards here first
            const selectedCard = event.target.closest(".card");
            console.log("Went to 2");
            if (event.target && event.target.closest(".card"))
            {
                const parentDiv = selectedCard.parentElement; // .buttonSpace div
                const cardId = parseInt(parentDiv.id);

                //let selectedCard = board.querySelector(".card");
                //to detect which arry to push card to
                if (cardId >= 1 && cardId <= 6)
                {
                    flippedImageCards.push(selectedCard);
                    console.log("FlippedImageCards");
                }
                else if (cardId >= 11 && cardId <= 16)
                {
                    flippedTextCards.push(selectedCard);
                    console.log("FlippedTEXTCards");
                }
                    
                selectedCard.classList.remove("anim2");
                selectedCard.classList.add("anim1"); //flip open

                let summy = flippedImageCards.length + flippedTextCards.length;

                console.log("Both arrays total value is: " + (flippedImageCards.length + flippedTextCards.length));
            }
        }
    });

}

function StartGame() {
    generateCards();
    // flipCards();
}

StartGame();

//This is for the mobile hanburg menu
//get the "open menu" button (meant for hamIcon)
const hamBtn=document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click",toggleMenus);
//get the menuItem list
const menuBar=document.querySelector(".flexItem1");
const menuItemsList=document.querySelector("nav ul"); //affect the first nav and ul only!!
const menuIconsList = document.querySelector(".flexItem1_2");

/*toggle, just like light switch, off becomes on, on becomes off*/
/*if menu is shown, hide it, if hidden, show it*/
function toggleMenus(){
//if menuItemsList dont have the class "menuShow", add the class, else remove class
    if (menuBar.classList.contains("menuShow")){
        hamBtn.innerHTML="Close Menu"; //change button text to chose menu
        menuBar.classList.remove("menuShow");
        menuItemsList.classList.remove("menuShow");
        // menuIconsList.classList.remove("menuShow");
    }
    else { //if menu NOT showing
        hamBtn.innerHTML="Open Menu"; //change button text open menu
        menuBar.classList.add("menuShow");
        menuItemsList.classList.add("menuShow");
        // menuIconsList.classList.add("menuShow");
    }
}

