var constInput;

function addTaskContfun() {
    //  console.log(document.querySelector(".addTaskLink"));
    var addTaskFun = function () {
        if (document.querySelector(".serBoxDiv input").value != "") {
            var userTask = document.querySelector(".serBoxDiv input").value;
            console.log(userTask);
            var sendingObj = {};
            sendingObj.Task = userTask;
            console.log(JSON.stringify(sendingObj));
            var ajaxWraobj1 = new ajaxWrapper(JSON.stringify(sendingObj));
            ajaxWraobj1.setMethod("POST");
            ajaxWraobj1.setURL("https://p1-to-do.firebaseio.com/to-do.json");
            ajaxWraobj1.setLoadingFun(loadingFun);
            ajaxWraobj1.setCallBackFun(function (response) {
                console.log("Function called", response);
                var ajaxWraobj2 = new ajaxWrapper();
                ajaxWraobj2.setLoadingFun(loadingFun);
                ajaxWraobj2.setMethod("GET");
                ajaxWraobj2.setURL("https://p1-to-do.firebaseio.com/to-do.json");
                ajaxWraobj2.setCallBackFun(callBack)
                ajaxWraobj2.executeCall();
            });
            ajaxWraobj1.executeCall();
        }
        document.querySelector(".serBoxDiv input").value = "";
    }
    document.querySelector(".addTaskLink").addEventListener("click", addTaskFun);
  
    document.addEventListener('keypress', function (e) {
        if (document.querySelector(".taskCont").firstChild == document.querySelector(".formCont")){
        var key = e.which || e.keyCode;
    if (key === 13) {
        addTaskFun();
    }
}
});
    // add Task button pressing function    
}

var loadingFun = function() {
    
}

var callBack = function (response) {
    if(response == "null" ) {
        document.querySelector(".taskAdding").innerHTML="";
        returnHome()
    } else {
    var divTasksContainer = document.createElement("div");
    divTasksContainer.setAttribute("class", "allTasksCOnt");
    var resObject  = JSON.parse(response);
  //  console.log(resObject);
    var keysStore = Object.keys(resObject);
  //  console.log(keysStore);

   // console.log(resObject[keysStore[1]].Task);


    for (i = 0; i < keysStore.length; i++) {
        var todoItem = document.createElement('div');
        todoItem.setAttribute("id",("Item" + (i+1)) );
        var itemInput = document.createElement("input");
        itemInput.setAttribute("type","text");
        itemInput.addEventListener('focus',checkBoxhide);
        // itemInput.addEventListener('blur',checkBoxUnhide);
        var itemCheckInput = document.createElement("input");
        itemCheckInput.setAttribute("type","checkbox");
        itemCheckInput.setAttribute("data-id",[keysStore[i]]);
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
        itemInput.style.width = "90%";
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
}
}


var onloadTasks = function() {
    var intialLoad = new ajaxWrapper();
    intialLoad.setURL('https://p1-to-do.firebaseio.com/to-do.json');
    intialLoad.setMethod('GET');
    intialLoad.executeCall();
    intialLoad.setCallBackFun(callBack);
}

var onloadFun =  function () {
    var addTaskImp =  document.querySelector(".addTask > a");
    addTaskImp.onclick = taskCreDv;
    var addTaskImp2 =  document.querySelector(".addTaskBtCont > button");
    addTaskImp2.onclick = taskCreDv;
    dateAdding();
}

function dateAdding() {
    // date adding;
    var todayDates = new Date();
    var toDay = todayDates.getDay();
    var toDate = todayDates.getDate();
    var toMonth = todayDates.getMonth();
    console.log(toDay,toDate,toMonth);
    var monthscd = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sept","Nov","Dec"];
    var daysscd = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
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
    console.log(dataDelObj.URL)
    dataDelObj.executeCall();
    
}
function checkBoxhide(evenPassing) {
    var hiddingCheckbox = evenPassing.target.parentNode.firstChild;
    hiddingCheckbox.style.display = "none";
    evenPassing.target.style.borderColor = "gainsboro";
    evenPassing.target.style.borderRadius = "3px";
    evenPassing.target.style.width = "100%"
    editAndSave(evenPassing);
}

// this function unHide the checkbox and delete the save and cancel button 
function checkBoxUnhide (evenPassing) {
    var hiddenCheckbox = evenPassing.target.parentNode.parentNode.firstChild; // checkbox is the fist child of parent
    hiddenCheckbox.style.display = "inline-block";
    currentvalue = constInput;
    hiddenCheckbox.nextSibling.value = currentvalue;
    hiddenCheckbox.nextSibling.style.borderColor = "transparent";
    hiddenCheckbox.nextSibling.style.width = "90%";
    console.log(hiddenCheckbox.nextSibling.value);
    var parentDiv = evenPassing.target.parentNode;
    parentDiv.removeChild(parentDiv.lastChild.previousSibling);
    parentDiv.removeChild(parentDiv.lastChild);

}
// This function is for creating the save and cancel button while clicking the tasks,
// The functions called in this is CheckBox Unhide, To unhide the checkbox and remove
function editAndSave(evenPassing) {

    var parentDiv = evenPassing.target.parentNode;
    var TaskValueNow = evenPassing.target.value
    constInput = TaskValueNow;
    if (document.getElementById("activetask")) {   // removing the exsisting activetask div that contains sav and can
        var tempActiveTask = document.getElementById("activetask");
        var inputBox = tempActiveTask.parentNode.firstChild.nextSibling;
        var consvaleview = constInput;
        inputBox.style.width = "90%";
        inputBox.style.border = "transparent";
        inputBox.previousSibling.style.display = "inline-block"
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
    saveLinkSpan.style.padding = "8px 12px";
    saveLinkSpan.style.display = "inline-block";
    saveLinkSpan.innerHTML = "Save";
    document.getElementById("activetask").lastChild.appendChild(saveLinkSpan);
    saveLinkSpan.addEventListener("click",updateTask);
    var cancelLink = document.createElement("a");
    cancelLink.style.padding = "4px 8px";
    cancelLink.style.backgroundColor = "crimson";
    cancelLink.style.borderRadius = "5px";
    cancelLink.innerHTML = "Cancel";
    cancelLink.style.marginLeft = "5px";
    cancelLink.style.fontSize = "15px";
    cancelLink.style.color = "white";
    cancelLink.style.cursor = "pointer";
    cancelLink.addEventListener("click",checkBoxUnhide);
    document.getElementById("activetask").appendChild(cancelLink);
}

function updateTask(evenPassing) {
    var inputCurrent = evenPassing.target.parentNode.parentNode.previousSibling;
    input_value = inputCurrent.value;
    var inputCurrent_id = inputCurrent.getAttribute("data-id");
    var Id_OfCont = JSON.stringify(inputCurrent_id);
    console.log(inputCurrent);
    console.log(Id_OfCont);
    var sendingObj = {};
    sendingObj.Task = input_value;
    console.log(sendingObj)
    console.log(JSON.stringify(sendingObj));
    var ajaxWraobj4 = new ajaxWrapper(JSON.stringify(sendingObj));
    ajaxWraobj4.setURL("https://p1-to-do.firebaseio.com/to-do/"+inputCurrent_id+".json");
    ajaxWraobj4.setMethod("PATCH");
    ajaxWraobj4.setCallBackFun(onloadTasks);
    ajaxWraobj4.executeCall();
    
}



    