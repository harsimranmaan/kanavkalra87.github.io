$(document).ready(function(){
	$('body').on('click', '.headerLink', function () {
		$(document).attr("title", "Vivek Singh Memorial Trust - " + $(this).text());
		$("#TopMenu").find(".topmenuSelected").removeClass("topmenuSelected");
		$(this).parent().addClass("topmenuSelected");
		if($(this).text() == "Projects"){
			$("#generalBody").hide();
			$("#projectsBody").show();
			$("#projectsBody").load("htmlPages/" + $(this).attr('id') + ".html");
		}else{
			$("#generalBody").show();
			$("#projectsBody").hide();
			$("#dynamicBody").load("htmlPages/" + $(this).attr('id') + ".html");
		}
	});
	
	$('body').on('click', '.highLightsLink', function () {
		$("#overlayPopup").html("Loading...");
		$("#overlayPopup").load("highlights/" + $(this).attr('id') + ".html");
		$("#overlayPopup").popup("show");
	});
	
	$('body').on('click', '.projectsLink', function () {
		$("#projectsBody").load("projects/" + $(this).attr('id') + ".html");
		//$("#projectsBody").load("projects/gallery-details.html");
	});
	$('body').on('click', '.projectMoreDetails', function () {
		//$("#overlayPopup").html("Loading...");
		//$("#overlayPopup").load("projects/" + $(this).attr('id') + ".html");
		//$("#overlayPopup").popup("show");
		$("#projectsBody").load("projects/" + $(this).attr('id') + ".html")
	});
	$('body').on('click', '.returnToProjects', function () {
		$("#generalBody").hide();
		$("#projectsBody").show();
		$("#projectsBody").load("htmlPages/projects.html");
	});
});

