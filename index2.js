const mainPage=`
<label for="heroImageNavigator"></label>
<img id="HeroImageNavigator" class="cootieHero" alt="image of a paper fortune teller set as page background." src="CootiesCaught.png">            
    <div class="row">
        <div class="column">
            <label for="biographyLaunch"></label>
            <a class="anchorLinks rightTopBio" id="biographyLaunch"></a>
            <label for="portfolioLaunch"></label>
            <a class="anchorLinks leftTopPortfolio" id="portfolioLaunch"></a>
        </div>
    <div class="column">
        <label for="githubProfileLaunch"></label>
        <a href="https://github.com/ConspiracyTheory13" id="githubProfileLaunch" class="anchorLinks rightBottomGithub"></a>
        <label for="linkedinProfileLaunch"></label>
        <a href="https://www.linkedin.com/in/conspiracytheory/" id="linkedinProfileLaunch" class="anchorLinks leftBottomLinked"></a>
    </div>
</div>`;

const bioBlock =`
<section class="bioTextBlock" id="bioBlock">
        <h1>Biography</h1>
        <img class="placeholderProfile" alt="picture of female bodied person with unnaturally colored hair and facial piercings" src="profile.jpg">
        <p>     
            Salutations, that's just my fancy way of saying "hello".<br> My name is Charla, but feel free to call me Charlotte. 
            A recent bootcamp grad from the Web Developer Track through Bloc.io, I am enamored by the way technology opens 
            the door of opportunity for people of every background. I'm an Oregon native, petrichor obsessed and experience driven.
            I obtained my Bachelor's degree in Social Sciences from Portland State University, and am continuing on to
            achieve my masters focusing in neuropsychology and neurobiology.
        </p> 
        <section id="contactInfo" class="contactInfo">
        <h1>Contact<h1>
        <h2>Email Address:</h2><a href="xConspiracyTheory13x@gmail.com"> xConspiracyTheory13x@gmail.com</a></br>
        <a href="https://github.com/ConspiracyTheory13">Github Profile</a><br>
        <a href="https://www.linkedin.com/in/conspiracytheory/">Linked In Profile</a>
</section>`;

const portfolioBlock =
`<section id="portfolioBlock"> 
    <h1>Portfolio</h1>
    <div class="projectOneContainer">
        <header id="projectHeader" class="projectHeader">
            <h2>Cognition & Mental Heuristics Quiz</h2>
            <h3>Technologies Used: HTML CSS JavaScript Jquery</h3>
            <p class="projectsTagline">This heuristics app is designed for any user who wants to test their knowledge of human nature. 
            The development of this app combined two of my passions: coding and human cognition.
            </p>
                <div class="linkContainer">
                    <a href="https://conspiracytheory13.github.io/Cognition/">Live</a>
                    <a href="https://github.com/ConspiracyTheory13/Cognition">Repo</a>
                </div>
        </header>

        <div class="projectOneImagesContainer">
            <img class="project1" alt="scrollable picture of quiz app images" src="quizappstartscreen.png" id="p1CurrentImage">   
            <div class="projectFooter">
                <a id="previousImage"><img alt="left facing arrow denoting previous image" class="arrowNav" src="leftarrow.png"></a>
                <a id="nextImage"><img alt="right facing arrow denoting previous image" class="arrowNav" src="rightarrow.png"></a>        
        
            </div>
        </div>
    </div>

</section>
`;

const portfolioImagesArray = [
    { name: 'quizStart', alt:'image of quiz app start screen', image: 'quizappstartscreen.png'}, 
    { name: 'quizSecond', alt:'image of quiz app question set up', image: 'p1second.png' }, 
    { name: 'quizThird', alt: 'image of quiz app question feedback screen',image: 'p1third.png' },
    { name: 'quizFinal', alt: 'image of quiz app final feedback screen', image: 'p1final.png' }
];

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

const revealHomeButton = () => {
    $("#homeButton").removeClass("hidden");       
};

const hideHomeButton = () => {
    $('#homeButton').addClass('hidden');
};


const backToHome = () => {
    hideHomeButton();
    $('#pageRenderContainer').html(mainPage);
};

$('#pageRenderContainer').html(mainPage);

document.getElementById("homeButton").addEventListener("click", backToHome);   
document.getElementById("biographyLaunch").addEventListener("click", openModalBio);   
document.getElementById("portfolioLaunch").addEventListener("click", openPortfolioModal);
