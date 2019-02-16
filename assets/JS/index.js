

function addTaskContfun() {
    //  console.log(document.querySelector(".addTaskLink"));
    var addTaskFun = function () {
        if (document.querySelector(".serBoxDiv input").value != "") {
            var userTask = document.querySelector(".serBoxDiv input").value;
            console.log(userTask);
            var ajaxWraobj1 = new ajaxWrapper(JSON.stringify(userTask));
            ajaxWraobj1.setMethod("POST");
            ajaxWraobj1.setURL("https://p1-to-do.firebaseio.com/.json");
            ajaxWraobj1.setLoadingFun(loadingFun);
            ajaxWraobj1.executeCall();
            ajaxWraobj1.setCallBackFun(function (response) {
                console.log("Function called", response);
                var ajaxWraobj2 = new ajaxWrapper();
                ajaxWraobj2.setLoadingFun(loadingFun);
                ajaxWraobj2.setMethod("GET");
                ajaxWraobj2.setURL("https://p1-to-do.firebaseio.com/.json");
                ajaxWraobj2.executeCall();
                ajaxWraobj2.setCallBackFun(callBack)
            });

        }
        document.querySelector(".serBoxDiv input").value = "";
    }
    document.querySelector(".addTaskLink").addEventListener("click", addTaskFun);
    // add Task button pressing function    
}

var loadingFun = function() {
    
}

var callBack = function (response) {
    
    var baseDiv = document.querySelector(".taskAdding");
    var divcr = document.createElement("div");
    divcr.setAttribute("class", "allTasksCOnt");
    console.log(response);
    var resObjec  = JSON.parse(response);
    console.log(resObjec);
    var tasksStrArr = Object.values(resObjec);
    console.log(tasksStrArr);
    var tasksBdyCont = ""
    for (i = 0; i < tasksStrArr.length; i++) {
        tasksBdyCont += "<div>"+"<input type='checkbox'>"+tasksStrArr[i]+"</div>"
    }
    divcr.innerHTML = tasksBdyCont
    while (baseDiv.firstChild) {
        baseDiv.removeChild(baseDiv.firstChild)
    }
    baseDiv.insertBefore(divcr, baseDiv.childNodes[0]);
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

var onloadTasks = function() {
    var intialLoad = new ajaxWrapper();
    intialLoad.setURL('https://p1-to-do.firebaseio.com/.json');
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



    