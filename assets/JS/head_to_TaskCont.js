function head2TaskDiv() {
    var allCont = document.querySelector(".container");
    while(allCont.firstChild) {
        allCont.removeChild(allCont.firstChild);
    }
    creating_Head();
    creating_Appholder();
    creating_viewPad();
    creating_viewPadcenter();
    creating_rightR1();
    creating_inBox();
    creating_taskAdding();
    creating_taskCont();
    dateAdding();
}

//Head Creating Function
function creating_Head() {
    var headCont = document.createElement("div");
    headCont.setAttribute("class", "headCont");
    document.querySelector(".container").appendChild(headCont);
    var head = document.createElement("div");
    head.setAttribute("class", "head");
    head.style.backgroundColor = "#ff9000";
    head.style.borderColor = "#e98300";
    head.style.height = "44px";
    head.style.boxShadow = "0 1px 2px rgba(0,0,0,0.15)";
    headCont.appendChild(head);
    var headElement = document.createElement("div");
    headElement.setAttribute("class", "headElement");
    headElement.style.width = "69%";
    headElement.style.margin = "0 auto";
    headElement.style.paddingTop = "8px";
    head.appendChild(headElement);
    var svgCont = document.createElement("div");
    svgCont.setAttribute("class", "svgCont");
    svgCont.style.width = "80%";
    svgCont.style.display = "inline-block";
    headElement.appendChild(svgCont);
    svgCont.innerHTML = '<svg class="svgEle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/todoist_logo.svg"><path fill="currentColor" fill-rule="evenodd" d="M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"></path></svg>'
    document.querySelector(".svgEle").style.color = "white";
    var toDoHead = document.createElement("div");
    toDoHead.setAttribute("class","toDoHead");
    toDoHead.style.display = "inline-block";
    toDoHead.style.verticalAlign = "middle";
    toDoHead.style.marginBottom = "10px";
    toDoHead.style.paddingLeft = "12px";
    toDoHead.style.color = "white";
    toDoHead.innerHTML = "My Todoist"
    svgCont.appendChild(toDoHead);
    var log_Out = document.createElement("div");
    log_Out.setAttribute("class","log_Out");
    log_Out.style.cssFloat = "right";
    log_Out.style.border = "1px groove transparent";
    log_Out.style.padding = "3px 8px";
    log_Out.style.borderRadius = "5px";
    log_Out.style.color = "white";
    log_Out.innerHTML = "Logout";
    log_Out.addEventListener("mouseover", function() {
        log_Out.style.cursor = "pointer";
        log_Out.style.borderColor = "rgb(255, 138, 60)";
        log_Out.style.background = "#e98300";
    })
    log_Out.addEventListener("mouseout", function() {
        log_Out.style.cursor = "pointer";
        log_Out.style.borderColor = "transparent";
        log_Out.style.background = "none";
    })
    log_Out.addEventListener("click", function() {
        onloadFun();
    })
    headElement.appendChild(log_Out);
    var clearingDiv = document.createElement("div");
    clearingDiv.setAttribute("class","clear");
    clearingDiv.style.clear = "both";
    headElement.appendChild(clearingDiv);
}


//appHolder Creating Function
function creating_Appholder() {
    var appHolder = document.createElement("div");
    appHolder.setAttribute("class", "appHolder");
    appHolder.style.backgroundColor = "#fafafa";
    document.querySelector(".container").appendChild(appHolder);
}

//viewPad Div Creating Function
function creating_viewPad() {
    var viewPad = document.createElement("div");
    viewPad.setAttribute("class","viewPad");
    viewPad.style.width = "55.8%";
    viewPad.style.marginLeft = "34%";
    document.querySelector(".appHolder").appendChild(viewPad);
}

//viewPad center Div Creating Function
function creating_viewPadcenter() {
    var viewPadcenter = document.createElement("div");
    viewPadcenter.setAttribute("class", "viewPadcenter");
    viewPadcenter.style.padding = "20px";
    viewPadcenter.style.width = "86%";
    viewPadcenter.style.background = "white";
    viewPadcenter.style.boxSizing = "border-box";
    viewPadcenter.style.border = "1px solid #f1f1f1";
    document.querySelector(".viewPad").appendChild(viewPadcenter);
}

//RightR1 Div Creating Function
function creating_rightR1() {
    var rightR1 = document.createElement("div");
    rightR1.setAttribute("class", "rightR1");
    rightR1.style.marginTop = "20px";
    rightR1.style.padding = "0 14px";
    document.querySelector(".viewPadcenter").appendChild(rightR1);
}

//inBox Div Creating Function
function creating_inBox() {
    var inBox = document.createElement("div");
    inBox.setAttribute("class","inBox");
    inBox.style.width = "50%";
    document.querySelector(".rightR1").appendChild(inBox);
        var todayLink = document.createElement("a");
        todayLink.style.textDecoration = "none";
        document.querySelector(".inBox").appendChild(todayLink);
            var todayDate = document.createElement("div");
            todayDate.setAttribute("class", "todayDate");
            todayDate.style.color= "#333";
            todayDate.style.textDecoration = "none";
            todayDate.style.fontSize = "20px";
            todayDate.style.fontWeight = "normal";
            todayDate.innerHTML = "Today";
            todayDate.style.cssFloat = "left";
            todayLink.appendChild(todayDate);
        var to = document.createElement("span");
        to.setAttribute("class", "inBoxspan");
        to.setAttribute("id", "to");
        inBox.appendChild(to);
        var toDate = document.createElement("span");
        toDate.setAttribute("class", "inBoxspan");
        toDate.setAttribute("id", "toDate");
        inBox.appendChild(toDate);
        var toMonth = document.createElement("span");
        toMonth.setAttribute("class", "inBoxspan");
        toMonth.setAttribute("id", "toMonth");
        inBox.appendChild(toMonth);
}

//TaskAdding Div Creating Function
function creating_taskAdding() {
    var taskAdding = document.createElement("div");
    taskAdding.setAttribute("class", "taskAdding");
    taskAdding.style.margin = "10px 0px 0px";
    taskAdding.style.padding = "0px 15px";
    document.querySelector(".viewPadcenter").appendChild(taskAdding);
}

//taskCont Div Creating Function
function creating_taskCont() {
    var taskCont = document.createElement("div");
    taskCont.setAttribute("class", "taskCont");
    document.querySelector(".viewPadcenter").appendChild(taskCont);
}
