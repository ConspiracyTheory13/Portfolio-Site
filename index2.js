//why the fuck is bio only running x2???

const mainPage=`
<img class="cootieHero" alt="image of a paper fortune teller set as page background." src="CootiesCaught.png">            
    <div class="row">
        <div class="column">
            <a class="anchorLinks rightTopBio" id="bioLaunch"></a>
            <a class="anchorLinks leftTopPortfolio" id="portfolioLaunch"></a>
        </div>
    <div class="column">
        <a href="https://github.com/ConspiracyTheory13" class="anchorLinks rightBottomGithub"></a>
        <a href="https://www.linkedin.com/in/conspiracytheory/" class="anchorLinks leftBottomLinked"></a>
    </div>
</div>`;

const bioBlock =`
<section class="bioTextBlock" id="bioBlock">
    <h1>Biography</h1>
    <img class="placeholderProfile" src="profile.jpg">
    <p>     
        Salutations, that's just my fancy way of saying "hello". My name is Charla, but feel free to call me Charlotte. 
        A recent bootcamp grad from the Web Developer Track through Bloc.io, I am enamored by the way technology opens 
        the door of opportunity for people of every background. I'm an Oregon native, petrichor obsessed and experience driven.
        I obtained my Bachelor's degree in Social Sciences from Portland State University, and am continuing on to
        achieve my masters.
    </p> 
</section>`;

const portfolioBlock =`
<section label for="portfolioBlock" id="portfolioBlock"> 
    <h1>Portfolio</h1>
    <div class="projectOneContainer">
        <header id="projectHeader" label for="projectHeader" class="projectHeader">
            <h2>Cognition & Mental Heuristics Quiz App</h2>
                <div class="linkContainer">
                    <a href="https://conspiracytheory13.github.io/Cognition/">Live</a>
                    <a href="https://github.com/ConspiracyTheory13/Cognition">Repo</a>
                </div>
        </header>

    <div class="projectOneImagesContainer">
        <img class="project1" src="quizappstartscreen.png" id="p1CurrentImage">   
        <div class="projectFooter">
            <a id="previousImage"><img class="arrowNav" src="leftarrow.png"></a>
            <a id="nextImage"><img class="arrowNav" src="rightarrow.png"></a>        
        </div>
    </div>
    </section>`;

const portfolioImagesArray = [
    { name: 'quizStart', image: 'quizappstartscreen.png'}, 
    { name: 'quizSecond', image: 'p1second.png' }, 
    { name: 'quizThird', image: 'p1third.png' },
    { name: 'quizFinal', image: 'p1final.png' }
];

// const apiImagesArray = [
//     { name: 'apiStart', image: 'p2firstpage.png'}, 
//     { name: 'apiSecond', image: 'p2screentwo.png' }, 
// ];

let currentImage = 0;

function nextButton() {
    currentImage ++;
    if(currentImage === portfolioImagesArray.length) {
        currentImage = 0;
    }
    setImage();
}

function previousButton() {
    currentImage --;
    if(currentImage < 0) {
        currentImage = portfolioImagesArray.length -1;
    }
    setImage();
}

function setImage() {
    document.getElementById("p1CurrentImage").src=portfolioImagesArray[currentImage].image;
}

const openModalBio = () => {
    $('#pageRenderContainer').html(bioBlock);
    event.preventDefault();
    revealHomeButton();
    console.log("openModalBiofires");
};

const openPortfolioModal = () => {
    $('#pageRenderContainer').html(portfolioBlock);
    revealHomeButton();
    document.getElementById("nextImage").addEventListener("click", nextButton);   
    document.getElementById("previousImage").addEventListener("click", previousButton);       
    event.preventDefault();
};

//work
const revealHomeButton = () => {
    $("#homeButton").removeClass("hidden");       
};

const hideHomeButton = () => {
    $('#homeButton').addClass('hidden');
};

//work

const backToHome = () => {
    $('#pageRenderContainer').html(mainPage);
    hideHomeButton();
};

$('#pageRenderContainer').html(mainPage);

document.getElementById("homeButton").addEventListener("click", backToHome);   
document.getElementById("bioLaunch").addEventListener("click", openModalBio);   
document.getElementById("portfolioLaunch").addEventListener("click", openPortfolioModal);