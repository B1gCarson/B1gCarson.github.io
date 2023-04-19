function showHide(){
	hidden = document.getElementById("hidden1","hidden2");
	//access the link
	link1 = document.getElementById("link1","link2")
	
	if(hidden.classList.contains("hidden")){
		hidden.classList.remove("hidden")
		//change link to "show less"
		link1.innerHTML = ("See Less...")
	} else {
		hidden.classList.add("hidden")
		//change links innerhtml to show more
		link1.innerHTML = ("See More...")
	}
}

function showHide2(){
	hidden = document.getElementById("hidden2");
	//access the link
	link2 = document.getElementById("link2")
	
	if(hidden.classList.contains("hidden")){
		hidden.classList.remove("hidden")
		//change link to "show less"
		link2.innerHTML = ("See Less...")
	} else {
		hidden.classList.add("hidden")
		//change links innerhtml to show more
		link2.innerHTML = ("See More...")
	}
}

function showScore(){
	let sectionScore = document.getElementById("score");
	let question1 = document.getElementById("q1").value;
	let question2 = document.getElementById("q2").value;
	let question3 = document.getElementById("q3").value;
	let question4 = document.getElementById("q4").value;
	let total = 0;
	
	if(question1 == "Saoirse Ronan"){
		total += 1;
	}
	else{
		total += 0;
	}
	
	if(question2 == "LeBron James"){
		total += 1;
	}
	else{
		total += 0;
	}
	
	if(question3 == "Kendrick Lamar"){
		total += 1;
	}
	else{
		total += 0;
	}
	
	if(question4 == "Squats"){
		total += 1;
	}
	else{
		total += 0;
	}
	
	//show result
	sectionScore.classList.remove("hidden");
	sectionScore.innerHTML += "<h3 id=finale>" + "You scored: " + total + "/4" + "</h3>";
}

var slide = true;
function slideShow(){
	var x = document.getElementById("vibing").src;
	document.getElementById("vibing").src = document.getElementById("friends").src;
	document.getElementById("friends").src = document.getElementById("ari").src;
	document.getElementById("ari").src = document.getElementById("baby").src;
	document.getElementById("baby").src = x;
}

function startShow(){if(slide){slideShow();}
}
setInterval(startShow, 5000);