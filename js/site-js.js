// FUNCTIONS FOR EXPERIENCE BUTTON
$("#experienceButton").click(function(){
    $("#experienceButton").addClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
});
// FUNCTIONS FOR SKILLS BUTTON
$("#skillsButton").click(function(){
    $("#experienceButton").removeClass("active");
    $("#skillsButton").addClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
});
// FUNCTIONS FOR PROJECTS BUTTON
$("#projectsButton").click(function(){
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").addClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").removeClass("active");
});
// FUNCTIONS FOR RESUME BUTTON
$("#resumeButton").click(function(){
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").addClass("active");
    $("#contactButton").removeClass("active");
});
// FUNCTIONS FOR CONTACT BUTTON
$("#contactButton").click(function(){
    $("#experienceButton").removeClass("active");
    $("#skillsButton").removeClass("active");
    $("#projectsButton").removeClass("active");
    $("#resumeButton").removeClass("active");
    $("#contactButton").addClass("active");
});