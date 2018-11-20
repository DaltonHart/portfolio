console.log('sanity');

$("#js-rotating").Morphist({
    // The entrance animation type (In).
    animateIn: "flipInX",
    // The exit animation type (Out). Refer to Animate.css for a list of available animations.
    animateOut: "flipOutX",
    // The delay between the changing of each object in milliseconds.
    speed: 4000,
    complete: function () {
        
    }
});