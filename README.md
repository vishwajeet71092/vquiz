# vquiz ( Javascript Plugin )
A JavaScript Plugin to create quiz system with only HTML Markup and attribute.

## About Plugin
###### Plugin Name: vQuiz.js
###### Plugin version: 1.0.0
###### Plugin Author: vishwajeet kumar
###### Description: This is a small javascript plugin to create a quiz system on web with instant answer check and explanation on clicking any answer.

## How to Use
1. Download **vquiz.js** and **vquiz.css**. 
2. Put it in your project directory and link it on the page.

    ```html
    <!-- link vquiz.css (required) -->
    <link rel="stylesheet" href="vquiz.css">
    <!-- link vquiz.js (required) -->
    <script src="vquiz.min.js"></script>
    ```
    
3. Create a div with id vquiz ```<div id="vquiz">``` . This is the main container of quiz system.

   ```html
   <div class="vquiz"> </div>
   ```
   
4. To create a question and answer block create a div with class vQContainer inside vquiz div ```<div class="vQContainer">```

   ```html
    <div class="vquiz">
	  <div class="vQContainer"> </div>  
    </div>
   ```
   
5. Put the question in a div with class vQustion ```<div class="vQustion">```

   ```html
    <div class="vquiz">
	  <div class="vQContainer">
		  <div class="vQustion"> 1. This is a Question ? </div>
	  </div>  
    </div>
   ```
   
6. Put the options in a div with class vAnswer and data-vquiz attribute should contain wrong ```data-vquiz="wrong"``` in case the option is wrong and right ```data-vquiz="right"``` in case it is the right option.

   ```html
    <div class="vquiz">
	  <div class="vQContainer">
		  <div class="vQustion"> 1. This is a Question ? </div>
		  <div class="vAnswer" data-vquiz="wrong">Option 1</div>
		  <div class="vAnswer" data-vquiz="right">Option 2</div>
	  </div>  
    </div>
   ```
   
6. Put the Explanation text in a div with class vHint. ```<div class="vHint">```

   ```html
    <div class="vquiz">
	  <div class="vQContainer">
		  <div class="vQustion"> 1. This is a Question ? </div>
		  <div class="vAnswer" data-vquiz="wrong">Option 1</div>
		  <div class="vAnswer" data-vquiz="right">Option 2</div>
		  <div class="vHint">This is a Explanation for the answer.</div>
	  </div>  
    </div>
   ```
   
 7. Put this script before the closing body tag and after the vquiz.js
 
 ````html
    <script> vquiz(); </script>
 ````


## Example Markup



```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>VQuiz</title>
	<!-- link vquiz.css (required) -->
	<link rel="stylesheet" href="vquiz.css">
</head>
<body>
	<!-- vquiz main div with id vquiz -->
	<div id="vquiz">
		<!-- vquiz question container div with class vQContainer -->
		<div class="vQContainer">
			<!-- vquiz question div with class vQuestion -->
			<div class="vQustion">1. First operating system designed using C programming language.</div>
			<!-- vquiz answer div with class vAnswer and data wrong or right -->
			<div class="vAnswer" data-vquiz="wrong"> DOS</div>
			<div class="vAnswer" data-vquiz="wrong"> Windows</div>
			<div class="vAnswer" data-vquiz="right"> UNIX</div>
			<div class="vAnswer" data-vquiz="wrong"> Mac</div>
			<!-- vquiz Explantion div with class vHint -->
			<div class="vHint">UNIX. C actually invented to write an operation system called UNIX. By 1973 the entire UNIX OS is designed using C.</div>
		</div>
		
		<!-- vquiz question container div with class vQContainer -->
		<div class="vQContainer">
			<!-- vquiz question div with class vQuestion -->
			<div class="vQustion">2. The correct order of mathematical operators in mathematics and computer programming,</div>
			<!-- vquiz answer div with class vAnswer and data wrong or right -->
			<div class="vAnswer" data-vquiz="wrong"> Addition, Subtraction, Multiplication, Division</div>
			<div class="vAnswer" data-vquiz="right"> Division, Multiplication, Addition, Subtraction</div>
			<div class="vAnswer" data-vquiz="wrong"> Multiplication, Addition, Division, Subtraction</div>
			<div class="vAnswer" data-vquiz="wrong">Mathematical operators can be done in any order</div>
			<!-- vquiz Explantion div with class vHint -->
			<div class="vHint">It is BODMAS.</div>
		</div>

		<!-- vquiz question container div with class vQContainer -->
		<div class="vQContainer">
			<!-- vquiz question div with class vQuestion -->
			<div class="vQustion">3. Choose the correct statement that can retrieve the remainder of the division 5.5 by 1.3?</div>
			<!-- vquiz answer div with class vAnswer and data wrong or right -->
			<div class="vAnswer" data-vquiz="wrong"> rem = modf(5.5 % 1.3)</div>
			<div class="vAnswer" data-vquiz="wrong"> rem = modf(5.5, 1.3)</div>
			<div class="vAnswer" data-vquiz="right"> rem = fmod(5.5, 1.3)</div>
			<div class="vAnswer" data-vquiz="wrong"> rem = f(5.5, 1.3)</div>
			<!-- vquiz Explantion div with class vHint -->
			<div class="vHint">A floating-point constant without an f, F, l, or L suffix has type double. If the letter f or F is the suffix, the constant has type float. If suffixed by the letter l or L, it has type long double.</div>
		</div>
	</div>
	<!-- link vquiz.js (required) -->
	<script src="vquiz.min.js"></script>
	<!-- initiate the plugin -->
	<script> vquiz(); </script>
</body>
</html>
```

