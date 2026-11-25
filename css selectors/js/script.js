let name="ABC";
const age="28";

document.getElementById("studentName").textContent="Name :"+ name;
document.getElementById("studentAge").textContent="Age :"+ age;

document.getElementById("result").innerHTML="Name :"+name+"<br>Age:"+age;

document.write("Name:"+name + "<br>");
document.write("Age:"+age);


function greetI(){
    alert("hello student");
}