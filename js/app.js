// Js to handle changes to the battery planning tool
// The first part is to initate the values since we want to be absolute
// able to calculate the result as the user changes one and one parameter
// Should ideally be coupled to the index file

let period =4
let interval=10



$(function() {


    $('#submit-btn2').click(() => {
			period = $('#period').val()
			showConsumption(period,interval)
    })

		$('#submit-btn3').click(() => {
			interval = $('#interval').val()
			showConsumption(period,interval)

		})


		function showConsumption(period,interval) {
			consume = quickCalc(period, interval)
			console.log(consume)
			battery(consume)
		}

		// Here we should add an reset button if we have time


		// Calculate the batttery consumption - based on a simple,
		// 20 days/10 Minutes calculation
		function quickCalc(days,mInt) {

			const totSamples=20*24*60/10  //Total number of sample
			const desiredSamples=days*24*60/mInt		// The planned number totSamples
			batteryConsumption = desiredSamples/totSamples
			console.log(batteryConsumption)
			return batteryConsumption
		}


		function battery (percentage) {
			// Here we want to draw the updated % used of the battery into the blue boxtext
			// and we want to indicate how much battery is left by drawing up the battery
			// Pick out the image number to uss:
			let imageNumber=Math.round((1-percentage)*100/20)
			// Generate the image number
			let imageName=`image/ECO-battery-${imageNumber}.png`
			if (percentage>=1) {
				imageName="image/ECO-battery-red.png"
			}
			//Send the new image to the screen, id=battery
			document.getElementById('battery').src=imageName;
			// convert the percentage to a whole number and add the % sign
			let percTxt=`${Math.round(percentage*100)}%`
			// change the text in the blue box on the screen
			document.getElementById("result").innerHTML = percTxt

			console.log(percentage)
			console.log(imageName)
			console.log(imageNumber)
			console.log(percTxt)

			return
		}
})
