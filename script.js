// api url
const api_url = 
      "https://api.spacexdata.com/v3/launches?limit=100";
var yearslist = new Set();
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
	

    if (response) {
     		document.getElementById("employees").innerHTML = 
			`<div class="container">${data.map(function(space){
			return`<div class="item" style="border:10px solid white; margin:15px; background-color:white;">
			<img src="${space.links.mission_patch_small}" style="border:2px solid lightgrey; background-color:lightgrey;" width="200px" height="250px"; margin:15px;><br>
			<p style=" word-wrap: break-word; color: blue;"><strong>${space.mission_name}#${space.flight_number}</strong></p><br>
			<b>Mission Ids:</b>${space.mission_id}<br>
			<b>Launch Year:</b>${space.launch_year}<br>
			<b>Succesful Launch:</b>${space.launch_success}<br>
			<b>Successful Landing:</b>${space.launch_year}</p>
			</div>`
		}).join('')}</div>`



		


		document.getElementById("launchtrue").addEventListener("click", launchtrue);
		function launchtrue(){
			document.getElementById("employees").innerHTML =
			`<div class="container">${data.map(function(space){
				if(space.launch_success==true){
				return`<div ="item" style="border:10px solid white; margin:15px; background-color:white;">
				<img src="${space.links.mission_patch_small}" style="border:2px solid lightgrey; background-color:lightgrey;" width="200px" height="250px"; margin:15px;><br>
				<p style="white-space: wrap;"><span style="color: blue;"><strong>${space.mission_name}#${space.flight_number}</strong></span><br>
				<b>Mission Ids:</b>${space.mission_id}<br>
				<b>Launch Year:</b>${space.launch_year}<br>
				<b>Succesful Launch:</b>${space.launch_success}<br>
				<b>Successful Landing:</b>${space.launch_year}</p>
				</div>`
			}}).join('')}</div>`
		}

		document.getElementById("launchfalse").addEventListener("click", launchfalse);
		function launchfalse(){
			document.getElementById("employees").innerHTML =
			`<div class="container">${data.map(function(space){
				if(space.launch_success==false){
				return`<div ="item" style="border:10px solid white; margin:15px; background-color:white;">
				<img src="${space.links.mission_patch_small}" style="border:2px solid lightgrey; background-color:lightgrey;" width="200px" height="250px"; margin:15px;><br>
				<p style="white-space: wrap;"><span style="color: blue;"><strong>${space.mission_name}#${space.flight_number}</strong></span><br>
				<b>Mission Ids:</b>${space.mission_id}<br>
				<b>Launch Year:</b>${space.launch_year}<br>
				<b>Succesful Launch:</b>${space.launch_success}<br>
				<b>Successful Landing:</b>${space.launch_year}</p>
				</div>`
			}}).join('')}</div>`
		}

		var abc = uniqueArray(data);
		var yrs = Array.from(abc);
		console.log(yrs);

		document.getElementById("btndiv").innerHTML =
			`<div class="container">${yrs.map(function(btn){
				return`<div class="button">
				${btn}
				</div>`
			}).join(' ')}</div>`

			document.getElementById("btndiv").addEventListener("click", btnClicked);
			function btnClicked(){
				var btnText = this.innerText;
				console.log(btnText);
				document.getElementById("employees").innerHTML =
			`<div class="container">${yrs.map(function(space){
				if(space.launch_year==btnText){
				return`<div ="item" style="border:10px solid white; margin:15px; background-color:white;">
				<img src="${space.links.mission_patch_small}" style="border:2px solid lightgrey; background-color:lightgrey;" width="200px" height="250px"; margin:15px;><br>
				<p style="white-space: wrap;"><span style="color: blue;"><strong>${space.mission_name}#${space.flight_number}</strong></span><br>
				<b>Mission Ids:</b>${space.mission_id}<br>
				<b>Launch Year:</b>${space.launch_year}<br>
				<b>Succesful Launch:</b>${space.launch_success}<br>
				<b>Successful Landing:</b>${space.launch_year}</p>
				</div>`
			}}).join('')}</div>`

			}

		//document.getElementById("btndiv").addEventListener("click", functionyr());
			function functionyr(yr){
			
		}	

		
    } 

   
}
// Calling that async function
getapi(api_url);

function uniqueArray(space){
	//var yearslist = [];

	for(let i=0;i<space.length;i++){
		//if(yearslist.indexOf(space.launch_year)=== -1){
			yearslist.add(space[i].launch_year);
		//}	
		console.log(space[i].launch_year+'test')				
	}
	return yearslist;
}

	//console.log(JSON.stringify(yearslist));





  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
