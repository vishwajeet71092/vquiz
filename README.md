# vquiz ( Javascript Plugin )
A JavaScript Plugin to create quiz system with only HTML Markup and attribute.

## Example Markup
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
			<div class="vQustion">1. The territory of Porus who offered strong resistance to Alexander was situated between the rivers of</div>
			<!-- vquiz answer div with class vAnswer and data wrong or right -->
			<div class="vAnswer" data-vquiz="wrong">Sutlej and Beas</div>
			<div class="vAnswer" data-vquiz="right">Jhelum and Chenab</div>
			<!-- vquiz Explantion div with class vHint -->
			<div class="vHint">No answer description available for this question. Let us discuss.</div>
			<div class="vAnswer" data-vquiz="wrong">Ravi and Chenab</div>
			<div class="vAnswer" data-vquiz="wrong">Ganga and Yamuna</div>
		</div>

		<div class="vQContainer">
			<div class="vQustion">2. Under Akbar, the Mir Bakshi was required to look after</div>
			<div class="vAnswer" data-vquiz="right">military affairs</div>
			<div class="vHint">The head of the military was called the Mir Bakshi, appointed from among the leading nobles of the court. The Mir Bakshi was in charge of intelligence gathering, and also made recommendations to the emperor for military appointments and promotions.</div>
			<div class="vAnswer" data-vquiz="wrong">the state treasury</div>
			<div class="vAnswer" data-vquiz="wrong">the royal household</div>
			<div class="vAnswer" data-vquiz="wrong">the land revenue system</div>
		</div>
		
		<div class="vQContainer">
			<div class="vQustion">There were widespread risings against the British in the 1820s. Which one of the following did not revolt in the 1820s?</div>
			<div class="vAnswer" data-vquiz="wrong">Santhals</div>
			<div class="vAnswer" data-vquiz="wrong">Ahoms</div>
			<div class="vAnswer" data-vquiz="right">Pagal Panthis</div>
			<div class="vHint">No answer description available for this question. Let us discuss.</div>
			<div class="vAnswer" data-vquiz="wrong">Ramosi</div>
		</div>
	</div>
	<!-- link vquiz.js (required) -->
	<script src="vquiz.min.js"></script>
	<!-- initiate the plugin -->
	<script> vquiz(); </script>
</body>
</html>
