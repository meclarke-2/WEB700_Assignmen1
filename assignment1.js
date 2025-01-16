/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ______________________ Student ID: ______________ Date: ________________
*
********************************************************************************/ 
// from step 6
function getRandomInt(max) {
    return Math.floor(Math.random() * (max)); 
}

/*step 3*/
let serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
let serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
let serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared Maya",
    "Maya Clarke: meclarke@myseneca.ca", 
    "User Logged In", 
    "Main Panel", 
    "Logout Complete"
];

/*step 4 */
function httpRequest(httpVerb,path) {
    for(let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
  }
  
  /*step 5*/
  console.log(httpRequest("GET","/"))
  console.log(httpRequest("GET", "/about"))
  console.log(httpRequest("GET", "/contact"))
  console.log(httpRequest("GET", "/panel"))
  console.log(httpRequest("POST", "/login"))
  console.log(httpRequest("POST", "/logout"))
  console.log(httpRequest("GET","unkown"))

  /*step 6 */
  function automateTests() {
    let testVerbs= ["GET", "POST"];
    let testPaths= ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "randomPath2"];

    function randomRequest() {
        let randVerb = testVerbs[getRandomInt(testVerbs.length)];
        let randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb,randPath));
    }
    
    setInterval(randomRequest, 1000);
  }

  /*step 7*/
  automateTests();


