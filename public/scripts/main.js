console.log('sanity');

$("#js-rotating").Morphist({
    animateIn: "flipInX",
    animateOut: "flipOutX",
    speed: 4000,
    complete: function () {

    }
});

let projects = [
    {
    title: `R6 API`,
    description: `No dragon can resist the fascination of riddling talk and of wasting time trying to understand it. It does not do to leave a live dragon out of your calculations, if you live near him. May the wind under your wings bear you where the sun sails and the moon walks. Is it juicy?`,
    github: `https://github.com/DaltonHart/R6-Tactics`,
    hosted: `https://boiling-fjord-73796.herokuapp.com/`,
    image: `images/r6api.png`,
    },
    {
    title: `R6 React Site`,
    description: `No dragon can resist the fascination of riddling talk and of wasting time trying to understand it. It does not do to leave a live dragon out of your calculations.`,
    github: `https://github.com/DaltonHart/R6-Tactics-Main-Site`,
    hosted: ``,
    image: `images/r6home.png`,
    },
    {
    title: `Elevated React`,
    description: `No dragon can resist the fascination of riddling talk and of wasting time trying to understand it. It does not do to leave a live dragon out of your calculations, if you live near him. May the wind under your wings bear you where the sun sails and the moon walks. Is it juicy? `,
    github: `https://github.com/DaltonHart/Elevated-React`,
    hosted: `https://www.npmjs.com/package/elevated-react`,
    image: `images/elevated-react.png`,
    },
]

projects.forEach(project => {
    let card = `<article class="proj-card">
                    <img src="${project.image}">
                    <section class="card-bott">
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                        <a href="${project.github}">
                            <i class="fab fa-github-square"></i>
                        </a>
                        <a href="${project.hosted}">
                            <i class="fab fa-chrome"></i>
                        </a>
                    </section>
                </article>`
    $('#project-list').append(card);
});
