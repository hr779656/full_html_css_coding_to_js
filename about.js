var a1 = document.getElementById("b_d");
a1.style.margin = "0";
a1.style.padding = "0";

var  a2 = document.createElement("div");
a2.setAttribute("id", "main_container");
a2.style.height = "90vh";
a2.style.width = "30%";
a2.style.backgroundColor = "#fff";
a2.style.margin = "auto"
a2.style.marginTop = "20px"
a2.style.borderRadius = "20px"
a2.style.boxShadow = "15px 20px 20px #000"
a2.style.display = "flex"
a2.style.flexDirection = "column"
a2.style.justifyContent = "center"
a2.style.alignItems = "center"
document.body.append(a2);

var a3 = document.createElement("p");
a3.setAttribute("class", "main_heading");
a3.innerHTML = "sign up";
a3.style.fontSize = "32pt";
a3.style.fontFamily = "sans-serif";
a3.style.color = "#0014FF";
a3.style.textTransform = "Capitalize";
a3.style.letterSpacing = "0.5px";
a3.style.fontWeight = "600";
a3.style.textShadow = "4px 1px 2px #8B7E74"
a2.append(a3);


var a4 = document.createElement("div");
a4.setAttribute("class", "div_2");
a4.style.height = "85%";
a4.style.width = "85%";
a4.style.marginTop = "-40px"
a4.style.display = "flex";
a4.style.flexDirection = "column"
a4.style.alignItems = "center"
a4.style.justifyContent = "space-evenly"
a2.append(a4);

var a5 = document.createElement("input");
a5.setAttribute("placeholder", "First Name")
a5.style.height = "30px"
a5.style.width = "95%"
a5.style.borderRadius = "20px"
a5.style.paddingLeft = "12px" 
a5.style.background = "rgb(235, 227, 227)"
a5.style.boxShadow = "5px 6px 10px #000"
a4.append(a5)

var a6 = document.createElement("input");
a6.setAttribute("placeholder", "Last Name")
a6.style.height = "30px"
a6.style.width = "95%"
a6.style.borderRadius = "20px"
a6.style.paddingLeft = "12px" 
a6.style.background = "rgb(235, 227, 227)"
a6.style.boxShadow = "5px 6px 10px #000"
a4.append(a6)

var a7 = document.createElement("input");
a7.setAttribute("placeholder", "Email")
a7.style.height = "30px"
a7.style.width = "95%"
a7.style.borderRadius = "20px"
a7.style.paddingLeft = "12px" 
a7.style.background = "rgb(235, 227, 227)"
a7.style.boxShadow = "5px 6px 10px #000"
a4.append(a7)

var a8 = document.createElement("input");
a8.setAttribute("placeholder", "Password")
a8.style.height = "30px"
a8.style.width = "95%"
a8.style.borderRadius = "20px"
a8.style.paddingLeft = "12px" 
a8.style.background = "rgb(235, 227, 227)"
a8.style.boxShadow = "5px 6px 10px #000"
a4.append(a8)

var a9 = document.createElement("button")
a9.innerHTML = "SignUp"
a9.style.color = "#fff"
a9.style.width = "100px"
a9.style.height = "45px"
a9.style.background = "#0014FF"
a9.style.borderRadius = "10px"
a9.style.fontSize = "14pt"
a4.append(a9)

