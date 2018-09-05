// FUNCTIONS FOR HOME BUTTON
$("#homeButton").click(function(){
    $("#homeButton").addClass("active");
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
    $(".home").fadeToggle(500);
    $(".experience").css("display", "none");
    $(".skills").css("display", "none");
    $(".projects").css("display", "none");
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
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
    $(".experience").fadeToggle(500);
    $(".skills").css("display", "none");
    $(".projects").css("display", "none");
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
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
    $(".skills").fadeToggle(500);
    $(".projects").css("display", "none");
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
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
    $(".projects").fadeToggle(500);
    $(".resume").css("display", "none");
    $(".contact").css("display", "none");
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
    $(".resume").fadeToggle(500);
    $(".contact").css("display", "none");
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
    $(".contact").fadeToggle(500);
});
// PAGE LOAD CONTENT FUNCTIONS
$(document).ready(setTimeout(function () {
    $("#homeName").fadeToggle(500);
}, 1000));
$(document).ready(setTimeout(function () {
    $("#homePar1").fadeIn(500);
}, 2000));
$(document).ready(setTimeout(function () {
    $("#homePar2").fadeIn(500);
}, 3000));

