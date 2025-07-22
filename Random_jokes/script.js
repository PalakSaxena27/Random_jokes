const URL = "https://official-joke-api.appspot.com/random_joke";
const btn = document.querySelector("#btn");
alert("Are You Sure, You Wanna Continue");

const getJokes = async()=>
{
    console.log("Getting Data............");
    let response= await fetch(URL);
    console.log(response);
    let data= await response.json();
    console.log(data);
    console.log("Babu Bhaiya : ", data.setup);      
    console.log("Raju : ", data.punchline);

    document.getElementById("setup").innerText = "Babu Bhaiya 😂: " +  data.setup; 
    document.getElementById("punchline").innerText = "Raju 😂 : " +  data.punchline;
}

btn.addEventListener("click" , getJokes);