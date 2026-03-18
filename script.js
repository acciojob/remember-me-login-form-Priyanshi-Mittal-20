//your JS code here. If required.
let submitBtn=document.getElementById("submit")
let userName=document.getElementById("username")
let checkBox=document.getElementById("checkbox")
let password=document.getElementById("password")
let existingBtn=document.getElementById("existing")
window.addEventListener("load", () => {
  if (localStorage.getItem("username")) {
    existingBtn.style.display = "block";
  }
});
submitBtn.addEventListener("click",handle)
function handle(e)
{
	e.preventDefault()
	alert(`Logged in as ${userName.value}` );
	if(checkBox.checked)
	{
		localStorage.setItem("username",userName.value)
		localStorage.setItem("password",password.value)
		existingBtn.style.display="block"
	}
	else
	{
		localStorage.removeItem("username")
		localStorage.removeItem("password")
		existingBtn.style.display="none"
	}
}

existingBtn.addEventListener("click",user)
function user()
{
	let savedUser=localStorage.getItem("username")
	if(savedUser){
		alert(`Logged in as ${savedUser}`)
	}
}