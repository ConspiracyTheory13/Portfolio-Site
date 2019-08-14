const bioBlock =`
<section class="bioTextBlock" id="bioBlock">
    <h1>Biography</h1>
    <img class="placeholderProfile" src="profile.jpg"></img>
    <p> Salutations, feel free to call me Charlotte. 
        I'm an Oregon native, an experience driven learner who holds a 
        Bachelor's degree in Social Sciences from Portland State University with a heavy focus 
        in Psychology.                                                                       
    </p>
</section>`
//<br> You'll find me in the phone book under unusual solutions, or you would if you had a phone book. <br>
// A recent bootcamp grad from the Web Developer Track through Bloc.io, I am enamored by the way technology opens 
// the door of opportunity for people of every background. My heart lies with integrity driven services and 
// businesses designed by the people, for the people. 
const portfolioBlock =`
<section id="portfolioBlock"> 
<h1>Portfolio</h1>
<div class="projectOneContainer">
<header class="projectHeader">
    <h2>Cognition & Mental Heuristics Quiz App</h2>
    <a href="https://conspiracytheory13.github.io/Cognition/">Live</a>
    <a href="https://github.com/ConspiracyTheory13/Cognition">Repo</a>
</header>
<div class="projectOneImagesContainer">
    <img class="project1" src="quizappstartscreen.png"></img>   
    <img class="project1 hidden" src="p1final.png"></img>   
    <img class="project1 hidden" src="p1second.png"></img>   
    <img class="project1 hidden" src="p1third.png"></img> 
    <button class="dot"></button>
    <div class="projectFooter">
    <a><img class="leftArrow" src="leftarrow.png"></img></a>
    <a><img class="rightArrow" src="rightarrow.png"></img></a>        
</div>
</div>
</div>
<div class="projectTwoContainer"></div> 
</section>`;

const homeButton= `
<button class="home" id="homeButton">Back</button>`;

//does this look sloppy? Should I just have the same button attached
//at the end of both my bioBlock and homeButton functions?

// function that openBioModal with back button
// OpenportfolioModal on css slider with back button
// function that scrolls between photos in projects

const openModalBio = () => {
    $('#pageRenderContainer').html(bioBlock);
    event.preventDefault();
    $('#bioBlock').append(homeButton);
    // let homeButton= document.getElementById("")
    console.log("openModalBiofires")
    document.getElementById("home").addEventListener("click", backToHome);   

};


const openPortfolioModal = () => {
    $('#pageRenderContainer').html(portfolioBlock);
    event.preventDefault();
    $('#bioBlock').append(homeButton);  
    console.log("openPortfolioModalfires")
};

const backToHome = () => {
    $('#pageRenderContainer').html(bioBlock);
    console.log("back to home fires")
}

document.getElementById("bioLaunch").addEventListener("click", openModalBio);   
document.getElementById("portfolioLaunch").addEventListener("click", openPortfolioModal);