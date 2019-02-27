// FUNCTIONS FOR HOME BUTTON
$("#homeButton").click(function(){
    $("#homeButton").addClass("active");
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
    $(".home").fadeToggle(750);
    $(".experience").css("display", "none");
    $(".skills").css("display", "none");
    $(".projects").css("display", "none");
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
    $("#headshot").css("display", "none");
    $("#headshot").fadeToggle(750);
});

// FUNCTIONS FOR EXPERIENCE BUTTON
$("#experienceButton").click(function(){
    $("#homeButton").removeClass("active");
    $("#experienceButton").addClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
    $(".home").css("display", "none");
    $(".experience").fadeToggle(750);
    $(".skills").css("display", "none");
    $(".projects").css("display", "none");
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
    $("#headshot").css("display", "none");
});

// FUNCTIONS FOR SKILLS BUTTON
$("#skillsButton").click(function(){
    $("#homeButton").removeClass("active");
    $("#experienceButton").removeClass("active");
    $("#skillsButton").addClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
    $(".home").css("display", "none");
    $(".experience").css("display", "none");
    $(".skills").fadeToggle(750);
    $(".projects").css("display", "none");
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
    $("#headshot").css("display", "none");

});
// FUNCTIONS FOR PROJECTS BUTTON
$("#projectsButton").click(function(){
    $("#homeButton").removeClass("active");
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").addClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
    $(".home").css("display", "none");
    $(".experience").css("display", "none");
    $(".skills").css("display", "none");
    $(".projects").fadeToggle(750);
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
    $("#headshot").css("display", "none");

});
// FUNCTIONS FOR RESUME BUTTON
$("#resumeButton").click(function(){
    $("#homeButton").removeClass("active");
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").addClass("active");
    $("#contactButton").removeClass("active");
    $(".home").css("display", "none");
    $(".experience").css("display", "none");
    $(".skills").css("display", "none");
    $(".projects").css("display", "none");
    $(".resume").fadeToggle(750);
    $(".contact").css("display", "none");
    $("#headshot").css("display", "none");

});
// FUNCTIONS FOR CONTACT BUTTON
$("#contactButton").click(function(){
    $("#homeButton").removeClass("active");
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").addClass("active");
    $(".home").css("display", "none");
    $(".experience").css("display", "none");
    $(".skills").css("display", "none");
    $(".projects").css("display", "none");
    $(".resume").css("display", "none");
    $(".contact").fadeToggle(750);
    $("#headshot").css("display", "none");
    $("#headshot").fadeToggle(750);

});
// PAGE LOAD CONTENT FUNCTIONS
$(document).ready(setTimeout(function () {
    $("#headshot").fadeToggle(1000);
}, 500));
$(document).ready(setTimeout(function () {
    $("#homeName").fadeToggle(1000);
}, 500));
$(document).ready(setTimeout(function () {
    $("#otherHeadshotBox").fadeIn(1000);
}, 0));
$(document).ready(setTimeout(function () {
    $("#homePar1").fadeIn(1000);
}, 1000));
$(document).ready(setTimeout(function () {
    $("#homePar2").fadeIn(1000);
}, 1500));


