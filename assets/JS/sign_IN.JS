var signvalidOk, userMail, userPwd, loginUserKey, mailauthen; //global variables

function sign_in_Loader() {
    if (!document.querySelector(".viewPadcenter")) {
    //Head Creating 
    creating_Head();
    //AppHolder Div Creating
    creating_Appholder();
    //ViewPad Div Creating
    creating_viewPad();
    //ViewPadCenter Div Creating
    creating_viewPadcenter();
    }
    //loading sign-in Page
    //removing logout button to Login button in Header
    document.querySelector(".log_Out").innerHTML = "Sign-Up";
    document.querySelector(".log_Out").addEventListener("click", function () {
        sign_up_Loader();
    })
    //setting the previous divs size and align to center;
    document.querySelector(".viewPad").style.margin = "0 auto";
    document.querySelector(".viewPadcenter").style.width = "100%";
    sign_In_Container();
}

function sign_In_Container() {
    localStorage.setItem("pageStatus", "loginPg");
    // removing all child contents from the ViewPadCenter 
    var viewPadcenterDiv = document.querySelector(".viewPadcenter");
    while (viewPadcenterDiv.firstChild) {
        viewPadcenterDiv.removeChild(viewPadcenterDiv.firstChild);
    }


    var sign_in_Div = document.createElement("div");
    sign_in_Div.setAttribute("id", "sign_in_Div");
    document.querySelector(".viewPadcenter").appendChild(sign_in_Div);
        var sign_in_Ele = document.createElement("div");
        sign_in_Ele.setAttribute("id", "sign_in_Ele");
        document.getElementById("sign_in_Div").appendChild(sign_in_Ele);
            var sign_in_Head = document.createElement("div");
            sign_in_Head.setAttribute("id", "sign_in_Head");
            sign_in_Ele.appendChild(sign_in_Head);
                var sign_in_H_Span = document.createElement("span");
                sign_in_H_Span.setAttribute("id", "sign_in_H_Span");
                sign_in_H_Span.innerHTML = "Login Here";
                sign_in_Head.appendChild(sign_in_H_Span);
            
            var comCont = document.createElement("div");
            comCont.setAttribute("id", "comCont");
            var comEleSpan = document.createElement("span");
            comEleSpan.setAttribute("id", "comEleSpan");
            comEleSpan.innerHTML = "Please fill the Login Details";
            comCont.appendChild(comEleSpan);
            document.getElementById("sign_in_Ele").appendChild(comCont);

            var sign_in_Body = document.createElement("div");
            sign_in_Body.setAttribute("id", "sign_in_Body");
            sign_in_Ele.appendChild(sign_in_Body);
                var sign_in_FormCont = document.createElement("div");
                sign_in_FormCont.setAttribute("id", "sign_in_FormCont");
                sign_in_Body.appendChild(sign_in_FormCont);

                var sign_in_form = document.createElement("form");
                sign_in_form.setAttribute("id", "signIn");
                sign_in_FormCont.appendChild(sign_in_form);
                var labelForMail = document.createElement("label");
                labelForMail.setAttribute("for", "mailInput");
                sign_in_form.appendChild(labelForMail);
                labelForMail.innerHTML = "Enter your registered Mail-Id"
                var mailInputCont = document.createElement("div");
                mailInputCont.setAttribute("id", "mailInputCont");
                sign_in_form.appendChild(mailInputCont);
                var iconCont = document.createElement("div");
                iconCont.innerHTML = '<i class="fas fa-at"></i>'
                mailInputCont.appendChild(iconCont);
                
                var mailIn = document.createElement("input");
                mailIn.setAttribute("type", "text");
                mailIn.setAttribute("name", "email_inbx");
                mailIn.setAttribute("placeholder","Type your Mail-Id here,..");
                mailInputCont.appendChild(mailIn);

                var labelForPwd = document.createElement("label");
                labelForPwd.setAttribute("for", "mailInput");
                sign_in_form.appendChild(labelForPwd);
                labelForPwd.style.marginTop = "22px";
                labelForPwd.innerHTML = "Enter your Password"
                var pwdInputCont = document.createElement("div");
                pwdInputCont.setAttribute("id", "pwdInputCont");
                sign_in_form.appendChild(pwdInputCont);
                var PassiconCont = document.createElement("div");
                PassiconCont.innerHTML = '<i class="fas fa-unlock-alt"></i>'
                pwdInputCont.appendChild(PassiconCont);
                
                var pwdIn = document.createElement("input");
                pwdIn.setAttribute("type", "password");
                pwdIn.setAttribute("placeholder", "Type your password here");
                pwdInputCont.appendChild(pwdIn);

                
            var sign_inLinkCont = document.createElement("div");
            sign_inLinkCont.setAttribute("id", "sign_inLinkCont");
            document.getElementById("sign_in_Ele").appendChild(sign_inLinkCont);

            var sign_In_Link = document.createElement("a");
            sign_In_Link.setAttribute("id", "sign_In_Link");
            sign_In_Link.innerHTML = "Sign In";
            sign_In_Link.addEventListener("click", signInValidFun)
            sign_inLinkCont.appendChild(sign_In_Link);

            var cancel_span = document.createElement("span");
            cancel_span.setAttribute("id", "forGotText");
            cancel_span.innerHTML = "Forgot Password"
            sign_inLinkCont.appendChild(cancel_span);

}


function signInValidFun() {

    signvalidOk = true;
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
            signvalidOk = false;
            cmtAdd(target, manSpan)
            
            
        } else if (x[i].name =="email_inbx" && signvalidOk == false) {
            var target = x[i];
            var manSpan = document.createElement("span");
            manSpan.setAttribute("class", "maTrySpan");
            mailValid(target,manSpan);
            cmtAdd(target, manSpan);
        }
    }

    if (signvalidOk == true) {
        signIn();
    }

}

function signIn() {
    userMail = document.querySelector("#mailInputCont input").value;
    userPwd = document.querySelector("#pwdInputCont input").value;
    console.log(userMail, userPwd);

    var signInkAjaxWrapper = new ajaxWrapper();
    signInkAjaxWrapper.setMethod("GET");
    signInkAjaxWrapper.setURL("https://p1-to-do.firebaseio.com/users.json");
    signInkAjaxWrapper.setCallBackFun(signIncallBack);
    signInkAjaxWrapper.executeCall();
}

function signIncallBack(response) {
    console.log(JSON.parse(response));
    if (JSON.parse(response) == null) {
        usrNotReg();
    } else {
    var resObject = JSON.parse(response);
    var KeysGot = Object.keys(resObject);
    console.log(resObject);
    console.log(KeysGot);
    var authen = false;
    mailauthen = false;
    for (i=0; i<KeysGot.length; i++) {
        if(resObject[KeysGot[i]].mail == userMail) {
            mailauthen = true;
            if(resObject[KeysGot[i]].password == userPwd) {
            authen = true;
            loginUserKey = KeysGot[i];
            localStorage.setItem("loginUserKey", loginUserKey);

        }
        }
    }
    if (mailauthen==false) {
    usrNotReg()
    } else if (authen == false && mailauthen == true) {
        passWrong()
    } else if(authen == true){
        head2TaskDiv();
        onloadTasks();
        authen = false;
        localStorage.setItem("pageStatus", "signedIn");
    }
}
}
function passWrong() {
var target = document.querySelector("#pwdInputCont input");
            var manSpan = document.createElement("span");
            manSpan.setAttribute("class", "maTrySpan");
            manSpan.innerHTML = "Password is wrong";
            cmtAdd(target, manSpan);
}

function usrNotReg() {
    var target = document.querySelector("#pwdInputCont input");
            var manSpan = document.createElement("span");
            manSpan.setAttribute("class", "maTrySpan");
            manSpan.innerHTML = "User not Registered";
            cmtAdd(target, manSpan);
}