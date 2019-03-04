// Gobal variables
{ var monthscd, daysscd, constInput, today_Date, today_Day,
     today_Month,task_Temp_Due, tasks_Due_Date, active_data_date }

window.addEventListener("popstate", function(event) {
    console.log(event.state.foo);
    if (event.state.foo == 'signin') {
        sign_in_Loader();
    } else if (event.state.foo == 'signup') {
        sign_up_Loader();
    }

})

function addTaskContfun() {
    //  //console.log(document.querySelector(".addTaskLink"));
    var addTaskFun = function () {
        console.log('addTaskfun Eneterd');
        if (document.querySelector(".serBoxDiv input").value != "") {
            var userTask = document.querySelector(".serBoxDiv input").value;
            //console.log(userTask);
            var sendingObj = {};
            sendingObj.Task = userTask;
            sendingObj.Date = task_Temp_Due;
            sendingObj.firebaseid = loginUserKey;
            if (task_Temp_Due == undefined) {
                var Datetemp = [];
                var currentDate = new Date();
                Datetemp[0] = currentDate.getFullYear();
                Datetemp[1] = currentDate.getMonth()+1;
                Datetemp[2] = currentDate.getDate();
                //console.log(Datetemp);
                sendingObj.Date= Datetemp;
            }
            console.log(loginUserKey)
            //console.log(JSON.stringify(sendingObj));
            var ajaxWraobj1 = new ajaxWrapper(JSON.stringify(sendingObj));
            ajaxWraobj1.setMethod("POST");
            ajaxWraobj1.setURL("https://p1-to-do.firebaseio.com/to-do.json");
            ajaxWraobj1.setCallBackFun(function (response) {
                var ajaxWraobj2 = new ajaxWrapper();
                ajaxWraobj2.setLoadingFun(loadingFunSub);
                ajaxWraobj2.setMethod("GET");
                loginUserKey = localStorage.getItem("loginUserKey")
                ajaxWraobj2.setURL(
                    'https://p1-to-do.firebaseio.com/to-do.json?orderBy="firebaseid"&equalTo="'+loginUserKey+'\"'
            );
                ajaxWraobj2.setCallBackFun(callBack)
                ajaxWraobj2.executeCall();
                //console.log(response)
            });
            ajaxWraobj1.executeCall();
            console.log('Excecute call overed');
        }
        document.querySelector(".serBoxDiv input").value = "";
    }
    document.querySelector(".addTaskLink").addEventListener("click", addTaskFun);
  
    document.addEventListener('keypress', function (e) {
        if (document.querySelector(".taskCont").firstChild == document.querySelector(".formCont")){
        var key = e.which || e.keyCode;
        console.log(e);
    if (key === 13) {
        e.preventDefault();
        console.log('addTasling to be triggered');
        addTaskFun();
    }
}
});
    // add Task button pressing function    
}

// Loading function on Each task adding
var loadingFunSub = function() {
    var divCre = document.createElement("div");
    divCre.setAttribute("id","loadFunDiv");
    document.querySelector(".taskAdding").appendChild(divCre);
    var loadFunDivInner = '<img style="-webkit-user-select: none;" src="file:///home/varun/Downloads/Dual%20Ring-2.2s-200px.gif" width=50 height=50></img>'
    document.getElementById("loadFunDiv").innerHTML = loadFunDivInner;
    document.querySelector("#loadFunDiv > img").style.display = "block";
    document.querySelector("#loadFunDiv > img").style.margin = "0 auto"
}

var loadingFun = function() {
    var loadFunDivInner = '<div id="mainLoadCont"><img style="-webkit-user-select: none;" src="file:///home/varun/Downloads/Dual%20Ring-2.2s-200px.gif" width=110 height=100></img></div>'
    document.querySelector(".taskCont").innerHTML = loadFunDivInner;
    document.querySelector("#mainLoadCont img").style.display = "block";
    document.querySelector("#mainLoadCont img").style.margin = "0 auto"; 
}

var removeloadingFun = function() {
    if (document.getElementById("mainLoadCont")) {
        document.getElementById("mainLoadCont").remove();
    }
}

// Call Back Function - Creates Divs, checkbox all there attributes to contain the adding
var callBack = function (response) {
    document.querySelector(".log_Out").innerHTML = "Sign-Out";
            document.querySelector(".log_Out").addEventListener("click", function () {
                sign_in_Loader();
            })
    
    if(response == "null" ) {

        document.querySelector(".taskAdding").innerHTML="";
        returnHome()
    } else {
    var divTasksContainer = document.createElement("div");
    divTasksContainer.setAttribute("class", "allTasksCOnt");
    var resObject  = JSON.parse(response);
  //console.log(resObject);
    var keysStore = Object.keys(resObject);
  //console.log(keysStore);
   // //console.log(resObject[keysStotask_Temp_duere[1]].Task);
    for (i = 0; i < keysStore.length; i++) {
        var todoItem = document.createElement('div');
        todoItem.setAttribute("id",("Item" + (i+1)) );
        var itemInput = document.createElement("input");
        todoItem.style.position = "relative";
        itemInput.setAttribute("type","text");
        itemInput.addEventListener('focus',checkBoxhide);
        // itemInput.addEventListener('blur',checkBoxUnhide);
        var itemCheckInput = document.createElement("input");
        itemCheckInput.setAttribute("type","checkbox");
        itemCheckInput.setAttribute("data-id",[keysStore[i]]);
        itemCheckInput.setAttribute("class","taskInputBox");
        itemCheckInput.addEventListener('change',dataDeletion);
        itemCheckInput.style.verticalAlign = "middle";
        itemInput.style.boxSizing = "border-box";
        itemInput.style.fontSize = "14px";
        itemInput.style.border = "1px solid transparent"
        itemInput.style.padding = "8px 5px";
        itemInput.setAttribute("data-id", [keysStore[i]]);
        itemInput.value = resObject[keysStore[i]].Task;
        todoItem.appendChild(itemCheckInput);
        todoItem.appendChild(itemInput);
        divTasksContainer.appendChild(todoItem);
        itemInput.style.outline = "none";
        itemInput.style.width = "80%";
        ////console.log(resObject[keysStore[i]].Date[1])
        //Due date Adding part
        var dueDivCont = document.createElement("div");
        dueDivCont.setAttribute("data-date",[keysStore[i]]);
        dueDivCont.style.display = "inline-block";
        dueDivCont.style.position = "absolute";
        dueDivCont.style.padding = "0px 10px";
        dueDivCont.style.top = "7px";
        dueDivCont.style.border = "1px solid orange";
        dueDivCont.style.borderRadius = "4px";
        todoItem.appendChild(dueDivCont);
        var dueDateSpanHead = document.createElement("div");
        dueDateSpanHead.style.fontSize = "10px";
        dueDivCont.appendChild(dueDateSpanHead);
        dueDateSpanHead.innerHTML = "Due Date";
        dueDateSpanHead.style.borderBottom = "1px solid red"; 
        var dueDateSpanBody = document.createElement("div");
        dueDateSpanBody.style.fontSize = "13px";
        dueDateSpanBody.style.textAlign = "center"
        dueDivCont.appendChild(dueDateSpanBody);
        ////console.log(resObject[keysStore[i]].Date);
        dueDateDisplayFun(dueDateSpanBody,keysStore,resObject,i);
        // dueDateSpanBody.innerHTML = resObject[keysStore[i]].Date[2] + "<br>" + resObject[keysStore[i]].Date[1] + "-" +
        // resObject[keysStore[i]].Date[0]
    }
    
    var baseDiv = document.querySelector(".taskAdding");
    while (baseDiv.firstChild) {
        baseDiv.removeChild(baseDiv.firstChild)
    }
    baseDiv.insertBefore(divTasksContainer, baseDiv.childNodes[0]);
    if (baseDiv.innerHTML!="") {
        baseDiv.style.margin = "10px 0 0 0";
        baseDiv.style.padding = " 0 15px";
    }
    var conCh = document.querySelector(".allTasksCOnt");
    if (conCh.innerHTML != "") {
        var allChilds = document.querySelector(".taskCont");
        while(allChilds.children[1]) {
            allChilds.children[1].remove();
        } 
    }
    var allchDivs = document.querySelectorAll(".allTasksCOnt > div");
    for (i = 0; i < allchDivs.length; i++) {
    allchDivs[i].style.padding = "10px 0";
    allchDivs[i].style.borderTop = "1px solid #FFF6EA";
    }
    returnHome();
}
}

var onloadTasks = function() {
    localStorage.setItem("pageStatus", "signedIn");
    loginUserKey = localStorage.getItem("loginUserKey")
    var intialLoad = new ajaxWrapper();
    intialLoad.setURL('https://p1-to-do.firebaseio.com/to-do.json?orderBy="firebaseid"&equalTo="'+loginUserKey+'\"');
    intialLoad.setMethod('GET');
    intialLoad.setLoadingFun(loadingFun);
    intialLoad.setRemoveLoadingFun(removeloadingFun);
    intialLoad.setCallBackFun(callBack);
    intialLoad.executeCall();
}

var onloadFun =  function () {
    if (localStorage.getItem("pageStatus")=="loginPg") {
    sign_up_Loader();
    sign_In_Container();
} else if (localStorage.getItem("pageStatus")=="signedIn") {
    head2TaskDiv();
    onloadTasks();
} else {sign_up_Loader();}
}

function dateAdding() {
    // date adding;
    var todayDates = new Date();
    var toDay = todayDates.getDay();
    var toDate = todayDates.getDate();
    var toMonth = todayDates.getMonth();
    //console.log(toDay,toDate,toMonth);
    monthscd = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sept","Nov","Dec"];
    daysscd = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    today_Date = toDate;
    today_Day = daysscd[toDay];
    today_Month = monthscd[toMonth]; 
    var xy = document.getElementById("to");
    xy.innerHTML = daysscd[toDay];
    document.getElementById("toDate").innerHTML = toDate;
    document.getElementById("toMonth").innerHTML = monthscd[toMonth];
}

function  dataDeletion(evenPassing){
    
    var targetId = evenPassing.target.getAttribute('data-id');
    var dataDelObj = new ajaxWrapper();
    dataDelObj.setURL("https://p1-to-do.firebaseio.com/to-do/"+targetId+".json")
    dataDelObj.setMethod("delete");
    dataDelObj.setCallBackFun(onloadTasks);
    //console.log(dataDelObj.URL)
    dataDelObj.executeCall();
}
function checkBoxhide(evenPassing) {

    var hiddingCheckbox = evenPassing.target.parentNode.firstChild;
    hiddingCheckbox.style.display = "none";
    evenPassing.target.style.border = "1px solid gainsboro";
    evenPassing.target.style.borderRadius = "3px";
    evenPassing.target.style.width = "100%";
    active_data_date = hiddingCheckbox.nextSibling.getAttribute("data-id");
    document.querySelector("div [data-date=" + active_data_date + "]").style.display = "none";
    editAndSave(evenPassing);
}

// this function unHide the checkbox and delete the save and cancel button 
function checkBoxUnhide (evenPassing) {
    var hiddenCheckbox = evenPassing.target.parentNode.parentNode.firstChild; // checkbox is the fist child of parent
    hiddenCheckbox.style.display = "inline-block";
    document.querySelector("div [data-date=" + active_data_date + "]").style.display = "inline-block";
    currentvalue = constInput;
    hiddenCheckbox.nextSibling.value = currentvalue;
    hiddenCheckbox.nextSibling.style.borderColor = "transparent";
    hiddenCheckbox.nextSibling.style.width = "80%";
    //console.log(hiddenCheckbox.nextSibling.getAttribute("data-id"));
    var parentDiv = evenPassing.target.parentNode;
    parentDiv.removeChild(parentDiv.lastChild.previousSibling);
    parentDiv.removeChild(parentDiv.lastChild);
    if (document.getElementById("activetask")) {   
        var tempActiveTask = document.getElementById("activetask");
        var inputBox = tempActiveTask.parentNode.firstChild.nextSibling;
        var consvaleview = constInput;
        inputBox.style.width = "80%";
        inputBox.previousSibling.style.display = "inline-block"
        document.querySelector("div [data-date=" + active_data_date + "]").style.display = "inline-block";
        document.getElementById("activetask").remove();
    }

}
// This function is for creating the save and cancel button while clicking the tasks,
// The functions called in this is CheckBox Unhide, To unhide the checkbox and remove
function editAndSave(evenPassing) {

    var parentDiv = evenPassing.target.parentNode;
    var TaskValueNow = evenPassing.target.value
    constInput = TaskValueNow;
    if (document.getElementById("activetask")) {   
        var tempActiveTask = document.getElementById("activetask");
        var inputBox = tempActiveTask.parentNode.firstChild.nextSibling;
        var consvaleview = constInput;
        inputBox.style.width = "80%";
        inputBox.style.border = "transparent";
        inputBox.previousSibling.style.display = "inline-block"
        inputBox.nextSibling.style.display = "inline-block"
        document.getElementById("activetask").remove();
    }
    // creating div to contain save and cancel buttons
    var savAndcanCont = document.createElement("div");
    savAndcanCont.setAttribute("id","activetask");
    parentDiv.appendChild(savAndcanCont);
    var saveLink = document.createElement("a");
    saveLink.style.backgroundColor = "#ff9000";
    saveLink.style.borderRadius = "4px";
    saveLink.style.display = "inline-block";
    saveLink.style.marginTop = "5px";
    saveLink.style.color = "white";
    saveLink.style.cursor = "pointer";
    document.getElementById("activetask").appendChild(saveLink);
    var saveLinkSpan = document.createElement("span");
    saveLinkSpan.style.padding = "4px 12px";
    saveLinkSpan.style.display = "inline-block";
    saveLinkSpan.innerHTML = "Save";
    document.getElementById("activetask").lastChild.appendChild(saveLinkSpan);
    saveLinkSpan.addEventListener("click",updateTask);
    var cancelLink = document.createElement("a");
    cancelLink.setAttribute("id", "cancelLink");
    cancelLink.style.padding = "3px 8px";
    cancelLink.style.backgroundColor = "#f7630e";
    cancelLink.style.borderRadius = "10px";
    cancelLink.innerHTML = "Cancel";
    cancelLink.style.marginLeft = "5px";
    cancelLink.style.fontSize = "15px";
    cancelLink.style.color = "white";
    cancelLink.style.cursor = "pointer";
    cancelLink.addEventListener("click",checkBoxUnhide);
    cancelLink.addEventListener("mouseover",cancelCss);
    cancelLink.addEventListener("mouseout",cancelCssOut);
    document.getElementById("activetask").appendChild(cancelLink);
}
// This fucntion is using to Update the tasks,..
function updateTask(eventPassing) {
    console.log(eventPassing.currentTarget.parentNode.parentNode);
    var inputCurrent = eventPassing.target.parentNode.parentNode.previousSibling.previousSibling; // Input text box that contain input to Edit
    input_value = inputCurrent.value;
    var inputCurrent_id = inputCurrent.getAttribute("data-id");
    var Id_OfCont = JSON.stringify(inputCurrent_id);
    //console.log(inputCurrent);
    //console.log(Id_OfCont);
    var sendingObj = {};
    sendingObj.Task = input_value;
    //console.log(sendingObj)
    //console.log(JSON.stringify(sendingObj));
    var ajaxWraobj4 = new ajaxWrapper(JSON.stringify(sendingObj));
    ajaxWraobj4.setURL("https://p1-to-do.firebaseio.com/to-do/"+inputCurrent_id+".json");
    ajaxWraobj4.setMethod("PATCH");
    ajaxWraobj4.setCallBackFun(onloadTasks);
    ajaxWraobj4.executeCall();    
}

// cancel button css Functions 
function cancelCss() {
    document.getElementById("cancelLink").style.backgroundColor = ("#ea5b19");
    cancelLink.style.borderRadius = "10px";
}
function cancelCssOut() {
    document.getElementById("cancelLink").style.backgroundColor = "#f7630e";
    document.getElementById("cancelLink").style.borderRadius = ("5px")
}

//function calender display while clicking date in input box
function displayDateIp() {
    //creating Div to contain Date input and it will be absolute in postion
    var dateIpCr = document.createElement("div");
    dateIpCr.setAttribute("id","dateIn_Cr");
    dateIpCr.style.position = "absolute";
    dateIpCr.style.top = "40px";
    dateIpCr.style.left = "344px";

    document.querySelector(".serBoxDiv").appendChild(dateIpCr);
    //creating date input callender
    if(!document.getElementById("cal_in_dateIn")) {
    var dateIp = document.createElement("input");
    dateIp.setAttribute("type","date");
    dateIp.setAttribute("id","cal_in_dateIn");
    document.getElementById("dateIn_Cr").appendChild(dateIp);

    //Submit Span Creation
    var dateSubmitSpan = document.createElement("span");
    dateSubmitSpan.setAttribute("id", "date_Sub");
    dateSubmitSpan.style.fontSize = "9px";
    dateSubmitSpan.innerHTML = "Submit";
    dateSubmitSpan.style.padding = "2px 8px";
    dateSubmitSpan.style.border = "1px solid transparent"
    dateSubmitSpan.style.background = "green";
    dateSubmitSpan.style.borderRadius = "5px";
    dateSubmitSpan.style.color = "wheat";
    dateSubmitSpan.style.margin = "5px 5px 0px 0px";
    dateSubmitSpan.addEventListener("mouseover", function() {
        this.style.border = "1px solid #3dff4d";
        this.style.color = "white";
        this.style.cursor = "pointer";
    })
    dateSubmitSpan.addEventListener("mouseout", function() {
        this.style.border = "1px solid transparent";
        this.style.color = "wheat";
    })
    dateSubmitSpan.addEventListener("click", function() {
        var calenTemValue =  document.getElementById("cal_in_dateIn").value;
        //console.log(typeof(calenTemValue));
        task_Temp_Due = calenTemValue;
        document.getElementById("dateIn_Cr").remove();
        fun_InValAnalize();
    })

    //Close Span Creation
    var dateCloseSpan = document.createElement("span");
    dateCloseSpan.setAttribute("id", "date_Sub");
    dateCloseSpan.style.fontSize = "9px";
    dateCloseSpan.innerHTML = "Close";
    dateCloseSpan.style.padding = "2px 8px";
    dateCloseSpan.style.border = "1px solid transparent";
    dateCloseSpan.style.background = "red";
    dateCloseSpan.style.borderRadius = "5px";
    dateCloseSpan.style.color = "wheat";
    dateCloseSpan.style.fontWeight = "bold";
    dateCloseSpan.addEventListener("mouseover", function() {
        this.style.border = "1px solid yellow";
        this.style.color = "white";
        this.style.cursor = "pointer";
    })
    dateCloseSpan.addEventListener("mouseout", function() {
        this.style.border = "1px solid transparent";
        this.style.color = "wheat";
    })
    dateCloseSpan.addEventListener("click", function() {
        document.getElementById("dateIn_Cr").remove();
    })


    document.getElementById("dateIn_Cr").appendChild(dateSubmitSpan);
    document.getElementById("dateIn_Cr").appendChild(dateCloseSpan);
    }
}
// analizing the given input and showing it in the due date spans
function fun_InValAnalize() {
    var value_str = task_Temp_Due;
    var value_arr = value_str.split("-");
    task_Temp_Due = value_arr;
    //console.log(task_Temp_Due);
    document.getElementById("date_Near_In_Date").innerHTML = task_Temp_Due[2];
    document.getElementById("date_Near_In_Day").innerHTML = monthscd[Number(task_Temp_Due[1])-1];
}
function dueDateDisplayFun(dueDateSpanBody,keysStore,resObject,i) {
    dueDateSpanBody.innerHTML = resObject[keysStore[i]].Date[2] + "-" +
    resObject[keysStore[i]].Date[1] + "<br>" + resObject[keysStore[i]].Date[0]
}




    