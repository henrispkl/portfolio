// scrollShow.js by Henri
// Best way to use:
// Version: 1.0
// 
// ------ Arguments ------
// element: the node DOM element to be checked
// ---
// distance: distance in px to trigger the action (optional, default: 0)
// ---
// markShow: true or false, defines if the function will trigger only
// once for an element (optional, default: false)
// ---
// 
// document.addEventListener('scroll', () => {
//      if (scrollShow(element, distance, markShow)) {
//          ..do something if element is visible like setting it's opacity to 1
//      };
// });

function scrollShow(element, distance = 0, markShown = true) {

    //Function to check if the element is shown, returning true if it is
    function execute() {

        //Getting the position data from the element such as bottom, top, width etc
        let rect = element.getBoundingClientRect();

        //
        let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight) - distance;
        
        //If the bottom position of the element is not bigger than 0 OR the top position minus
        //the browser view height is not bigger or equal to 0, then the object will be visible
        if(!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
           return true;
        } else {
            return false;
        }
    }
    
    // With markShown on, the element will be marked as "shown" in its classlist
    // with this the execute() function will ever only trigger once for an element
    if (markShown == true) {
        if (!element.classList.contains("_scrollShown")) {
            element.classList.add("_scrollShown");
            return execute();
        }
    }

    //Will be true if the element is visible or false if it is not visible
    return execute();
}

let title1 = document.getElementById("title1");
let text1 = document.getElementById("text1");
let contactButton = document.getElementById("contactButton");
let aboutUs = document.getElementById("aboutUs");
let aboutText = document.getElementById("aboutText");
let aboutImg = document.getElementById("aboutImg");
let professionalSkills = document.getElementById("professionalSkills");
let skillSec = document.getElementsByClassName("skill-sec");
let skillProgress = document.getElementsByClassName("skill-progress");
let stat = document.getElementsByClassName("stat");
let workProcessTitle = document.getElementById("workProcessTitle");
let workProcessText = document.getElementById("workProcessText");
let skill2 = document.getElementsByClassName("skill2");

function show1() {
    if (scrollShow(title1)) {
            title1.style.opacity = "1";
        setTimeout(() => {
            text1.style.opacity = "1";
        }, 500);
        setTimeout(() => {
            contactButton.style.opacity = "1";
            contactButton.style.transform = "none";
        }, 1500);
    };
}

show1();

document.addEventListener('scroll', () => {

    show1();
    
    if (scrollShow(aboutUs, 100)) {
        aboutUs.style.opacity = "1";
    }
    if (scrollShow(aboutText, 100)) {
        aboutText.style.opacity = "1";
        setTimeout(() => {
            aboutImg.style.opacity = "1";
        }, 1000);
    }
    
    if (scrollShow(professionalSkills, 100)) {
        professionalSkills.style.opacity = "1";
        setTimeout(() => {
            
            for (let i = 0; i < skillSec.length; i++) {
                const element = skillSec[i];
                element.style.opacity = "1";
            }

            for (let i = 0; i < skillProgress.length; i++) {
                const element = skillProgress[i];
                element.style.opacity = "1";
                setTimeout(() => {
                    element.classList.remove('skill-progress-zero');
                }, 500);
            }
        }, 500);
    }

    if (scrollShow(stat[0], 100)) {
        for (let i = 0; i < stat.length; i++) {
            const element = stat[i];
            setTimeout(() => {
                element.style.opacity = "1";
            }, i * 150);
        }
    }

    if (scrollShow(workProcessTitle, 100)) {
        workProcessTitle.style.opacity = "1";
        setTimeout(() => {
            workProcessText.style.opacity = "1";
        }, 500);
    }

    if (scrollShow(skill2[0], 100)) {
        for (let i = 0; i < skill2.length; i++) {
            const element = skill2[i];
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "none";
            }, i * 150);
        }
    }
});