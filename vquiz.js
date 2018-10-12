/*
Plugin Name: vQuiz.js
Plugin Author: vishwajeet kumar
About Plugin: This is a small javascript plugin to create a quiz system on web with instant answer check and explanation on clicking any answer.
 */

// this function add Explanation text in front of all the hint Text
function addExplanation(){
	//getting the main quiz div
	var getHint = document.getElementById('vquiz');
	//getting all the hint div inside main qiuz div
	var AllHint = getHint.getElementsByClassName("vHint");

	//lopping through all the hint div
	for (var i = 0; i < AllHint.length; i++) {
		//creating a <b> tag
		var btag = document.createElement("b");
		//creating text node                 
		var explText = document.createTextNode("Explanation: ");


		//adding text to <b> tag
		btag.appendChild(explText);
		//appending it to all the hint tag text
		AllHint[i].insertBefore(btag, AllHint[i].firstChild);
	}
}


//adding wrong and right icon in front of all answer
function addIcon(){
	//getting the main quiz div
	var getQuiz = document.getElementById('vquiz');
	//getting all the answer div inside main qiuz div
	var getAns = getQuiz.getElementsByClassName("vAnswer");

	//lopping through all the answer div
	for (var i = 0; i < getAns.length; i++) {
		//getting thier data wrong or right
		var checkStatus = getAns[i].dataset.vquiz;
		//check for right answer
		if(checkStatus == "right"){
			//set right icon in front of answer
			getAns[i].insertAdjacentHTML('afterbegin', '<span class="vrighticon">&check; </span>');
		}
		//check for wrong answer
		else if(checkStatus == "wrong"){
			//set wrong icon in front of answer
			getAns[i].insertAdjacentHTML('afterbegin', '<span class="vwrongicon">&cross; </span>');
		}
		
	}
	
}


//this is the main function of the quiz system which should be called after all the required dom is loaded
function vquiz(){
	//add explanation and icon via thier respective function
	addExplanation();
	addIcon();

	//getting the main quiz div
	var getQuiz = document.getElementById('vquiz');

	//getting all the answer div
	var quizBtn = getQuiz.getElementsByClassName("vAnswer");

	//looping through all the answer div
	for (var i = 0; i < quizBtn.length; i++) {

	  //adding click event lintner to all the answer btn	
	  quizBtn[i].addEventListener("click", function() {
	  	//stoping default action
	    event.preventDefault();

	    //selecting parent node i.e vQContainer
	    var Qparent = this.parentNode;

	    // reset every thing
	    //hiding all the hint
	    this.parentNode.getElementsByClassName('vHint')[0].style.display = "none";

	    //getting all the answer element in the question
	    var qans = Qparent.getElementsByClassName("vAnswer");

	    //looping throught it
	    for (var i = 0; i < qans.length; i++) {

	    	//reset color class for both right and wrong answer
	    	if(qans[i].className == "vAnswer vWrong" || qans[i].className == "vAnswer vRight" ){
	    		qans[i].className = "vAnswer";
	    		//reset icon for both right and wrong answer
	    		qans[i].getElementsByTagName("span")[0].style.display = "none";
	    	}
	    }

	    //if data is wrong set red color class and display icon
	    if(this.dataset.vquiz == "wrong"){
	    	this.className += " vWrong";
	    	this.getElementsByTagName("span")[0].style.display = "inline";
	    }

		   
	    //display hint div
	    this.parentNode.getElementsByClassName('vHint')[0].style.display = "block";

	    //get all answer
	    var qans = Qparent.getElementsByClassName("vAnswer");


	    // loop through all the answer
	    for (var i = 0; i < qans.length; i++) {
	    	//check the right one and set color class and icon
	    	var check = qans[i].dataset.vquiz;
	    	if(check == "right"){
		    	qans[i].className += " vRight";
		    	qans[i].getElementsByTagName("span")[0].style.display = "inline";
		    }
	    }
	    
	  }, true);
	}
}