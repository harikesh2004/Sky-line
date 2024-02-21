let a=document.getElementById("loginbtn");
let b=document.getElementById("registerbtn");
let x=document.getElementById("login");
let y=document.getElementById("register");
function login(){
    x.style.left="4px";
    y.style.right="-520px";
    a.className+="white-btn";
    b.className="btn";
    x.style.opacity=1;
    y.style.opacity=0;
}
function register(){
    x.style.left="-510px";
    y.style.right="5px";
    a.className="btn";
    b.className+="white-btn";
    x.style.opacity=0;
    y.style.opacity=1;
}
function myMenuFunction(){
    let i=document.getElementById("navMenu");
    if(i.className === "nav-menu"){
        i.className+=" responsive";
    }
    else{
        i.className="nav-menu";
    }
}