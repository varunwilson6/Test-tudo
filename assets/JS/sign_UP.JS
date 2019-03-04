//global variables
var password, Email, validOk, stateObj = {};

function sign_up_Loader() {
    stateObj = { foo: "signup" };
    history.pushState(stateObj, null, "signup.html");

    localStorage.setItem("pageStatus", "signUpPg");
    if (!document.querySelector(".viewPadcenter")) {
    //Head Creating 
    creating_Head();
    //AppHolder Div Creating
    creating_Appholder();
    //ViewPad Div Creatings
    creating_viewPad();
    //ViewPadCenter Div Creating
    creating_viewPadcenter();
    }
    //loading sign-up Page
    //removing logout button to Login button in Header


    
    //setting the previous divs size and align to center;
    document.querySelector(".viewPad").style.margin = "0 auto";
    document.querySelector(".viewPadcenter").style.width = "100%";
    sign_up_Container();
}

function sign_up_Container() {
    // removing all child contents from the ViewPadCenter 
    var viewPadcenterDiv = document.querySelector(".viewPadcenter");
    while (viewPadcenterDiv.firstChild) {
        viewPadcenterDiv.removeChild(viewPadcenterDiv.firstChild);
    }

    var sign_up_Div = document.createElement("div");
    sign_up_Div.setAttribute("id", "sign_up_Div");
    document.querySelector(".viewPadcenter").appendChild(sign_up_Div);
        var sign_up_Ele = document.createElement("div");
        sign_up_Ele.setAttribute("id", "sign_up_Ele");
        document.getElementById("sign_up_Div").appendChild(sign_up_Ele);
            var sign_up_Head = document.createElement("div");
            sign_up_Head.setAttribute("id", "sign_up_Head");
            sign_up_Ele.appendChild(sign_up_Head);
                var sign_up_H_Span = document.createElement("span");
                sign_up_H_Span.setAttribute("id", "sign_up_H_Span");
                sign_up_H_Span.innerHTML = "Sign-Up";
                sign_up_Head.appendChild(sign_up_H_Span);
            
            var comCont = document.createElement("div");
            comCont.setAttribute("id", "comCont");
            var comEleSpan = document.createElement("span");
            comEleSpan.setAttribute("id", "comEleSpan");
            comEleSpan.innerHTML = "Please fill the below Details";
            comCont.appendChild(comEleSpan);
            document.getElementById("sign_up_Ele").appendChild(comCont);
            
            
            
            
            var sign_up_Body = document.createElement("div");
            sign_up_Body.setAttribute("id", "sign_up_Body");
            sign_up_Ele.appendChild(sign_up_Body);
                var sign_up_FormCont = document.createElement("div");
                sign_up_FormCont.setAttribute("id", "sign_up_FormCont");
                sign_up_Body.appendChild(sign_up_FormCont);

                var name_Div = document.createElement("div");
                name_Div.setAttribute("id", "name_Div");
                name_Div.setAttribute("class", "formSub_div");
                sign_up_FormCont.appendChild(name_Div);
                    var f_name = document.createElement("div");
                    f_name.setAttribute("id","f_name");
                    name_Div.appendChild(f_name);
                    var account_pic = document.createElement("div");
                    account_pic.setAttribute("id", "account_icon");
                    account_pic.innerHTML = '<i class="fas fa-user-alt"></i>'
                    f_name.appendChild(account_pic);
                    var f_nameInput = document.createElement("input");
                    f_nameInput.setAttribute("type", "text");
                    f_nameInput.setAttribute("name", "f_name");
                    f_nameInput.setAttribute("placeholder", "Enter your First name")
                    f_name.appendChild(f_nameInput);

                    var l_name = document.createElement("div");
                    l_name.setAttribute("id","l_name");
                    name_Div.appendChild(l_name);
                    var l_nameInput = document.createElement("input");
                    l_nameInput.setAttribute("placeholder", "Enter your Last name")
                    l_nameInput.setAttribute("type", "text");
                    l_nameInput.setAttribute("name", "l_name");
                    l_name.appendChild(l_nameInput);
                    var name_Div_clear = document.createElement("div");
                    name_Div_clear.setAttribute("class", "clear");
                    name_Div.appendChild(name_Div_clear);

                var mail_Div = document.createElement("div");
                mail_Div.setAttribute("id", "mail_Div");
                mail_Div.setAttribute("class", "formSub_div");
                sign_up_FormCont.appendChild(mail_Div);
                var mail_icon = document.createElement("div");
                mail_icon.setAttribute("id", "mail_icon_cont");
                mail_Div.appendChild(mail_icon);
                mail_icon.innerHTML = '<i class="fas fa-at"></i>'
                var mail_DivInput = document.createElement("input");
                mail_DivInput.setAttribute("name", "email_inbx")
                mail_DivInput.setAttribute("placeholder", "Enter your mail-Id")
                mail_Div.appendChild(mail_DivInput);

                var pwd_Div = document.createElement("div");
                pwd_Div.setAttribute("id", "pwd_Div");
                pwd_Div.setAttribute("class", "formSub_div");
                sign_up_FormCont.appendChild(pwd_Div);
                    var pwd_Intial = document.createElement("div");
                    pwd_Intial.setAttribute("id","pwd_Intial");
                    pwd_Div.appendChild(pwd_Intial);
                    var password_Pic = document.createElement("div");
                    password_Pic.setAttribute("id", "password_Pic");
                    pwd_Intial.appendChild(password_Pic);
                    password_Pic.innerHTML = '<i class="fas fa-key"></i>'
                    var pwd_IntialInput = document.createElement("input");
                    pwd_IntialInput.setAttribute("type", "password");
                    pwd_IntialInput.setAttribute("name", "Intial_pwd")
                    pwd_IntialInput.setAttribute("placeholder", "Enter your Password")
                    pwd_Intial.appendChild(pwd_IntialInput);

                    var pwd_Confirm = document.createElement("div");
                    pwd_Confirm.setAttribute("id","pwd_Confirm");
                    pwd_Div.appendChild(pwd_Confirm);
                    var pwd_confmInput = document.createElement("input");
                    pwd_confmInput.setAttribute("placeholder", "Repeat your Password")
                    pwd_confmInput.setAttribute("type", "password");
                    pwd_confmInput.setAttribute("name", "confirm_pwd");
                    pwd_Confirm.appendChild(pwd_confmInput);
                    var pwd_Div_clear = document.createElement("div");
                    pwd_Div_clear.setAttribute("class", "clear");
                    pwd_Div.appendChild(name_Div_clear);
            
            var sign_upLinkCont = document.createElement("div");
            sign_upLinkCont.setAttribute("id", "sign_upLinkCont");
            document.getElementById("sign_up_Ele").appendChild(sign_upLinkCont);

            var sign_Up_Link = document.createElement("a");
            sign_Up_Link.setAttribute("id", "sign_Up_Link");
            sign_Up_Link.innerHTML = "Create My Account";
            sign_Up_Link.addEventListener("click", validationFun)
            sign_upLinkCont.appendChild(sign_Up_Link);

            var cancel_span = document.createElement("span");
            cancel_span.setAttribute("id", "cancel_span");
            cancel_span.innerHTML = "I already have a account"
            cancel_span.addEventListener("click", function() {
                sign_in_Loader();
            })
            sign_upLinkCont.appendChild(cancel_span);
            
            document.querySelector(".log_Out").innerHTML = "Sign-In";
            document.querySelector(".log_Out").addEventListener("click", function () {
            sign_in_Loader();
            })
           
}



function validationFun() {

    validOk = true;
    var classEle = document.getElementsByClassName("maTrySpan");
    if (classEle) {
    console.log(classEle);
    for(i = classEle.length; i>0 ; i--) {
        classEle[i-1].remove();
    }
    }
    console.log('validation')
    var x = document.getElementsByTagName("input");
    console.log(x);
    for (i=0; i<x.length; i++) {
        if(x[i].value == "" ) {
            console.log(x[i])
            var manSpan = document.createElement("span");
            manSpan.setAttribute("class", "maTrySpan");
            manSpan.innerHTML = "* This Field is mandatory";
            var target = x[i];
            validOk = false;
            cmtAdd(target, manSpan)
            
        } else if (x[i].name == "Intial_pwd") {
            
            var target = x[i];
            var manSpan = document.createElement("span");
            manSpan.setAttribute("class", "maTrySpan");
                passValid(target,manSpan)
                cmtAdd(target, manSpan);
            } else if (x[i].name == "confirm_pwd" && password) {
                var target = x[i];
                var manSpan = document.createElement("span");
                manSpan.setAttribute("class", "maTrySpan");
                confirm_pwd(target, manSpan);
                cmtAdd(target, manSpan);
                
            } else if (x[i].name =="email_inbx") {
                var target = x[i];
                var manSpan = document.createElement("span");
                manSpan.setAttribute("class", "maTrySpan");
                mailValid(target,manSpan);
                cmtAdd(target, manSpan);
            } 
            // else if (x[i].name == "f_name" || x[i].name == "l_name") {
            //     var target = x[i];
            //     var manSpan = document.createElement("span");
            //     manSpan.setAttribute("class", "maTrySpan");
            //     nameValid(target,manSpan);
            //     cmtAdd(target, manSpan);
            // } 
        }
        if (validOk) submitFun();
    
}


function cmtAdd(target, manSpan) {
            target.parentNode.style.position = "relative";
            target.parentNode.appendChild(manSpan);
            manSpan.style.position = "absolute";
            manSpan.style.width = "75%";
            manSpan.style.top = "35px";
            manSpan.style.left = "1px";
            manSpan.style.fontSize = "12px";
            manSpan.style.color = "red"
}

function passValid(target, manSpan) {
    password = true;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!regularExpression.test(target.value)) {
        password = false
    } else if(target.value.length < 8) {
        password = false;
    }
    if (password == false) {
        validOk = false;
    manSpan.innerHTML = "Enter a Valid Password" +   
        "Password should contain -"+ "<br>" + "(lowercase, UpperCase, Number and minimum 8 characters)";
    }
}

function confirm_pwd(target, manSpan) {
    var Intial_pwd = document.querySelector("#pwd_Intial input").value;
    if ( Intial_pwd !=  target.value) {
        validOk = false;
        manSpan.innerHTML = "Passwords Not Matching"
    }
}

function mailValid(target,manSpan) {
    Email = false;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.value))
  {
    Email = true;
  }
  if( Email == false) {
    validOk = false;
    manSpan.innerHTML = "Email should contain @ and in name@domain format";
    signvalidOk = false;
  }
}

// function nameValid(target,manSpan) {
//     console.log("name valid")
//     var nameOk = true;
//     var nameExpr = /^[A-Za-z0-9-]/;
//     if (!nameExpr.test(target.value)) {
//         nameOk = false;
//     }
//     if(nameOk == false) {
//         manSpan.innerHTML = "Name should not contain special charecters"
//     }
// }

function submitFun() {
    var firstName = document.querySelector("[name = 'f_name']").value
    var lastName = document.querySelector("[name = 'l_name']").value
    var password = document.querySelector("[name = 'Intial_pwd']").value
    var mailId = document.querySelector("[name = 'email_inbx']").value
    console.log(firstName, lastName, password, mailId)
    var userObj = {}
    userObj.mail = mailId, userObj.firstName = firstName,
    userObj.lastName = lastName, userObj.password = password;

    var signUpAjxwrapper = new ajaxWrapper(JSON.stringify(userObj));
    console.log(signUpAjxwrapper);
    signUpAjxwrapper.setMethod("POST");
    signUpAjxwrapper.setURL('https://p1-to-do.firebaseio.com/users.json');
    signUpAjxwrapper.setCallBackFun(function (response) {
        var signUpAjxwrapper2 = new ajaxWrapper();
        signUpAjxwrapper2.setMethod("GET");
        signUpAjxwrapper2.setURL("https://p1-to-do.firebaseio.com/users.json");
        signUpAjxwrapper2.setCallBackFun(signUpcallBack)
        signUpAjxwrapper2.executeCall()
    });
    signUpAjxwrapper.executeCall();

}


function signUpcallBack(response) {
    console.log(response);
    var comEleSpan = document.getElementById('comEleSpan');
    comEleSpan.innerHTML = "Login Credentials saved by Server."
    var contDiv = document.getElementById('sign_up_FormCont');
    document.getElementById("sign_Up_Link").innerHTML = "Login to My Account";
    document.getElementById("sign_Up_Link").addEventListener("click", function() {
        sign_in_Loader();
    })
    while(contDiv.firstChild) {
        contDiv.removeChild(contDiv.firstChild);
    }

    var resObj = JSON.parse(response);
    console.log(resObj);
    var keysGot = Object.keys(resObj);
    console.log(keysGot);
    resObj = resObj[keysGot[keysGot.length-1]].firstName;
    console.log(resObj);
    contDiv.innerHTML = "Hai " + " " + "<i>" + resObj + "</i>" + ", " + " Congrats!!!"
    contDiv.style.textAlign = "center";

}