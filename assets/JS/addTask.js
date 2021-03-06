// Add Task Button on home page
function taskCreDv() {
    {
        var dsPlySpc = document.querySelector(".taskCont");
        while (dsPlySpc.firstChild) {
            dsPlySpc.removeChild(dsPlySpc.firstChild);
        }
    }
    Seac_AssTas_Can();
    
}

// Cancel Button Function.
function returnHome() {
    var dsPlySpc = document.querySelector(".taskCont");
        while (dsPlySpc.firstChild) {
            dsPlySpc.removeChild(dsPlySpc.firstChild);
        }
        if (document.querySelector(".taskAdding").firstChild.innerHTML != "") {
            AddTaskOnly() 
        } else {
        svgAppr();
    }
    
}

// function for SearchBox and Add Task / Cancel;
function Seac_AssTas_Can() {

{
    var formCont = document.createElement("div");
    formCont.setAttribute("class","formCont");
    document.querySelector(".taskCont").appendChild(formCont);
}
    {
        var formCre = document.createElement("form");
        formCre.setAttribute("class","addTaskForm");
        formCre.style.display = "inline-block";
        formCre.style.width = "96%";
        formCre.style.marginLeft = "15px";
        document.querySelector(".formCont").appendChild(formCre);
    }
    {
        var serBoxDiv = document.createElement("div");
        serBoxDiv.setAttribute("class", "serBoxDiv");
        serBoxDiv.style.border = "1px solid #ddd";
        serBoxDiv.style.borderRadius = "3px";
        serBoxDiv.style.margin = "18px 0 0";
        serBoxDiv.style.height = "33px";
        serBoxDiv.style.position = "relative";
        document.querySelector(".addTaskForm").appendChild(serBoxDiv);
    }
    {
        var serBox = document.createElement("input");
        serBox.style.outline = "none";
        serBox.style.background = "none";
        serBox.style.border = "none";
        serBox.setAttribute("placeholder", "e.g. Buy gift tomorrow at 6pm p1 #Errands")
        serBox.style.padding = "9px 9px 0 8px";
        serBox.style.width = "85%";
        serBox.style.boxSizing = "border-box";
        document.querySelector(".serBoxDiv").appendChild(serBox);
        serBox.addEventListener("focus", function() {
            if (task_Temp_Due == undefined) {
                document.getElementById("date_Near_In_Date").innerHTML = today_Date;
                document.getElementById("date_Near_In_Day").innerHTML = today_Day;
            }            
        })
    }
    {
        var dateNearInput = document.createElement("div");
        dateNearInput.setAttribute("id", "date_Near_In");
        dateNearInput.setAttribute("title", "Select Date")
        dateNearInput.style.display = "inline-block";
        dateNearInput.style.padding = "0 8px";
        dateNearInput.style.cursor = "pointer";
        dateNearInput.style.fontSize = "15px";
        dateNearInput.style.color = "gray";
        dateNearInput.style.borderLeft = "1px solid";
        dateNearInput.style.verticalAlign = "bottom";
        document.querySelector(".serBoxDiv").appendChild(dateNearInput);
        var subSpan1 = document.createElement("span"); 
        subSpan1.setAttribute("id","date_Near_In_Date");
        var subSpan2 = document.createElement("span"); 
        subSpan2.setAttribute("id","date_Near_In_Day");
        document.getElementById("date_Near_In").appendChild(subSpan1);
        document.getElementById("date_Near_In").appendChild(subSpan2);
        subSpan1.innerHTML = today_Date;
        subSpan2.innerHTML = today_Day;
        document.querySelector("#date_Near_In > span ").style.marginRight = "5px";
        // document.getElementById("date_Near_In").addEventListener("click",function(){alert("kool")});
        dateNearInput.addEventListener("mouseover",function(){
            this.style.color = "red";
            this.style.padding = "0 3px";
            this.style.fontSize = "14px";
            if(task_Temp_Due == undefined) {
            subSpan1.innerHTML = "Due";
            subSpan2.innerHTML = "Date";
        }
        });
        dateNearInput.addEventListener("mouseout",function(){
            this.style.color = "gray";
        });
        dateNearInput.addEventListener("click", displayDateIp); // Date in will display in below statement while clicking   
    }
{
    var addTaskLink = document.createElement("a");
    addTaskLink.setAttribute("class", "addTaskLink");
    addTaskLink.innerHTML = "Add Task"
    addTaskLink.style.border = ("1px solid transparent");
    addTaskLink.style.textDecoration = ("none");
    addTaskLink.style.backgroundColor = ("#ff9000");
    addTaskLink.style.color = ("#fff");
    addTaskLink.style.padding = ("6px 12px 7px 12px");
    addTaskLink.style.borderRadius = ("3px");
    addTaskLink.style.margin = ("6px 0 0");
    addTaskLink.style.display = ("inline-block");
    addTaskLink.style.fontWeight = ("bold");
    addTaskLink.style.fontSize = ("13px");
    addTaskLink.style.cursor = ("pointer")
    document.querySelector(".addTaskForm").appendChild(addTaskLink);
}
{
    var taskCanLink = document.createElement("a");
    taskCanLink.setAttribute("class","TaskcanLin");
    taskCanLink.innerHTML = "Cancel";
    taskCanLink.style.cursor = ("pointer");
    taskCanLink.style.color = ("#555");
    taskCanLink.style.fontSize = ("13px");
    taskCanLink.style.padding = ("2px 5px");
    taskCanLink.style.textDecoration = ("none");
    document.querySelector(".addTaskForm").appendChild(taskCanLink);
}
var returnHmImp = document.querySelector(".TaskcanLin");
returnHmImp.onclick =  function() {
    returnHome();
    data_ResetFun();
}
addTaskContfun();
}

// Function for SVG present when Task Container is Empty

function svgAppr() {
    {
        var row2 =  document.createElement("div");
        row2.setAttribute("class", "row2");
        document.querySelector(".taskCont").appendChild(row2);
        }
        {
        var addTask = document.createElement("div");
        addTask.setAttribute("class", "addTask");
        addTask.style.padding = "18px 12px 0";
        addTask.style.borderTop = "1px solid rgb(255, 246, 234)"
        document.querySelector(".row2").appendChild(addTask);
        }
        {
        var addTaskLink = document.createElement("a");
        addTaskLink.style.color = "#808080";
        addTaskLink.setAttribute("href","#")
        addTaskLink.style.textDecoration = "none";
        addTaskLink.style.fontSize = "14px";
        addTaskLink.style.display = "block";
        addTaskLink.style.cursor = "pointer";
        document.querySelector(".addTask").appendChild(addTaskLink);
            {
            var addTaskSpan = document.createElement("span");
            addTaskSpan.style.marginRight = "12px";
            addTaskSpan.style.color = "#ff9000";
            var svgstr0 = '<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" data-svgs-path="sm1/plus.svg"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd"></path></svg>'
            addTaskSpan.innerHTML = svgstr0;
            document.querySelector(".addTask a").appendChild(addTaskSpan);
            }
            {
                var spanAdd = document.createElement("span");
                spanAdd.setAttribute("class", "spanAdd");
                spanAdd.innerHTML= "Add Task";
                spanAdd.style.color = "rgb(128, 128, 128)"
                document.querySelector(".addTask a").appendChild(spanAdd);
            }
        
        }
        { 
            var appViewCont = document.createElement("div");
            appViewCont.style.width = "260px";
            appViewCont.style.margin = "0 auto";
            {
                var svgstr = '<svg data-svgs-path="theme_tangerine/today_zero.svg" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><g transform="translate(-2050 -240)"><g id="TodayZero"><path fill="none" d="M1800-100h300v300h-300z" transform="matrix(.73333 0 0 .66667 730 306.667)"></path><g transform="translate(-697.953 -324.629)"><g id="TodayZeroA"><path d="M910.542 2035.61c-4.052-6.71-11.418-11.21-19.826-11.21-.71 0-1.413.04-2.107.1.056-.88.084-1.77.084-2.67 0-16-14.917-29.93-28.049-37.1-1.812-14.85 9.601-36.34 36.321-45.02 14.327-4.65 17.58-29.04 44.762-34.02 25.358-4.65 40.343 11.29 50.401 20.67a39.991 39.991 0 0 0 19.972 10.08c24.7 4.61 44.37 16.66 45.86 47.2.93 18.94-16.24 35.3-28.03 32.24 8.68 10.96 3.18 31.42-14.83 31.8l-81.102.56.002-.24c0-8.28-6.721-15-15-15-3.136 0-6.049.97-8.458 2.61z" fill="#ffefd9" transform="translate(1854.61 -1400.53) scale(1.0442)"></path><path fill="#ffd39a" fill-rule="nonzero" d="M906 1997.12h26v1.768h-26z" transform="translate(1773.81 -1574.13) scale(1.13138)"></path><path d="M534.394 1190.53c-.441-.59-1.55.37-1.55.37l-.006 35.27 1.689.1.006-35.27s.024-.18-.139-.47z" fill="#ffd39a" fill-rule="nonzero" transform="scale(-.35409 .35409) rotate(-60 -3214.049 9126.704)"></path><path d="M534.244 1190.67c-.507-.3-1.248-.12-1.313.33v49.06c.08.57 1.415.67 1.509 0l.001-49.06c-.038-.27-.12-.26-.197-.33z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(-.1987 -.34416 -.52902 .30543 3645.53 490.907)"></path><path d="M534.344 1190.62c-.537-.43-1.426-.22-1.492.38v49.06c.079.72 1.574.84 1.668 0V1191c-.009-.07.013-.17-.176-.38z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(-.17986 -.31152 -.41947 .24218 3497.17 547.717)"></path><path d="M534.344 1190.39c-.448-.7-1.466.48-1.466.48l-.006 48.26c0 .52.319.96.73.99h.003c.23.02.456-.08.624-.28.169-.21.264-.49.264-.79l.006-48.05s.025-.25-.155-.61z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(-.18435 -.3193 -.24882 .14366 3285.74 669.698)"></path><path d="M537.465 1187.79c-2.273-4.16-7.982-2.28-8.306 2.9-.422 20.34-2.147 48.16 1.037 53.09 2.325 3.6 7.693 1.8 8.018-3.4.346-16.66 1.017-33.39-.019-50a7.65 7.65 0 0 0-.73-2.59z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(-.03308 -.0573 -.04466 .02578 2951.05 670.877)"></path><path d="M534.508 1240.65c.266-.14.445-.19.496-.59V1191c-.116-.88-2.52-.9-2.638 0v49.06c.081.62.821 1.11 2.142.59z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(.197 -.11373 -.19903 -.34474 3021.82 1155.93)"></path><path d="M534.537 1240.75c.6-.27.595-.43.625-.69V1191c-.113-.94-2.826-1.07-2.954 0v49.06c.08.67.882 1.2 2.329.69z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(.17589 -.10155 -.17771 -.3078 3012.26 1103.63)"></path><path d="M534.579 1240.65c.48-.27.446-.38.471-.59V1191c-.111-.89-2.606-.98-2.729 0v49.06c.082.65.938 1.16 2.258.59z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(.19042 -.10994 -.1924 -.33323 3028.33 1139.63)"></path><path d="M534.528 1240.75c.346-.16.566-.25.619-.69V1191c-.112-.93-2.796-1.06-2.922 0v49.06c.079.67.872 1.18 2.303.69z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(.17785 -.10268 -.1797 -.31124 3025.13 1108.48)"></path><path d="M535.047 1241.21c.883-.38.94-.61 1.05-1 1.554-16.38.014-32.81.014-49.21-.141-1.48-4.373-1.76-4.835-.15-1.554 16.38-.014 32.81-.014 49.21.101 1.07 1.601 1.9 3.785 1.15z" fill="#ffd39a" fill-rule="nonzero" transform="matrix(.10715 -.06186 -.10826 -.18751 2980.44 933.271)"></path><path d="M21078.5 1361.07c0-2.25.6-4.07 1.4-4.07.8 0 1.4 1.82 1.4 4.07 1.6-1.59 3.4-2.43 3.9-1.87.6.55-.3 2.29-1.9 3.88 2.3 0 4.1.64 4.1 1.42 0 .78-1.8 1.42-4.1 1.42 1.6 1.59 2.5 3.33 1.9 3.88-.5.56-2.3-.28-3.9-1.87 0 2.25-.6 4.07-1.4 4.07-.8 0-1.4-1.82-1.4-4.07-1.6 1.59-3.3 2.43-3.9 1.87-.6-.55.3-2.29 1.9-3.88-2.3 0-4.1-.64-4.1-1.42 0-.78 1.8-1.42 4.1-1.42-1.6-1.59-2.5-3.33-1.9-3.88.6-.56 2.3.28 3.9 1.87z" fill="#ff9101" transform="matrix(-.16127 -.90792 .90792 -.16127 5045.01 20015.9)"></path><circle cx="992.409" cy="1962.41" r="2.409" fill="#fff" transform="matrix(.5585 0 0 .5585 2330.06 -438.91)"></circle><path d="M21078.6 1361.24c0-2.34.6-4.24 1.3-4.24.7 0 1.4 1.9 1.4 4.24 1.6-1.65 3.4-2.57 3.9-2.04.5.52-.4 2.3-2 3.95 2.3 0 4.2.61 4.2 1.35 0 .75-1.9 1.35-4.2 1.35 1.6 1.66 2.5 3.43 2 3.95-.5.53-2.3-.39-3.9-2.04 0 2.34-.7 4.24-1.4 4.24s-1.3-1.9-1.3-4.24c-1.7 1.65-3.5 2.57-4 2.04-.5-.52.4-2.29 2-3.95-2.3 0-4.2-.6-4.2-1.35 0-.74 1.9-1.35 4.2-1.35-1.6-1.65-2.5-3.43-2-3.95.5-.53 2.3.39 4 2.04z" fill="#ffd39a" transform="matrix(.23866 -.8907 .8907 .23866 -3341.73 19104.7)"></path><circle cx="992.409" cy="1962.41" r="2.409" fill="#fff" transform="matrix(.73496 0 0 .73496 2164.88 -787.12)"></circle><circle cx="992.409" cy="1962.41" r="2.409" fill="#fff" transform="matrix(.73496 0 0 .73496 2176.93 -778.362)"></circle><circle cx="992.409" cy="1962.41" r="2.409" fill="#fff" transform="matrix(.73496 0 0 .73496 2162.03 -793.049)"></circle><circle cx="992.409" cy="1962.41" r="2.409" fill="#fff" transform="matrix(.73496 0 0 .73496 2147.28 -779.555)"></circle><path d="M21078.6 1361.24c0-2.34.6-4.24 1.3-4.24.7 0 1.4 1.9 1.4 4.24 1.6-1.65 3.4-2.57 3.9-2.04.5.52-.4 2.3-2 3.95 2.3 0 4.2.61 4.2 1.35 0 .75-1.9 1.35-4.2 1.35 1.6 1.66 2.5 3.43 2 3.95-.5.53-2.3-.39-3.9-2.04 0 2.34-4.4-8.17-2.7-6.52z" fill="#ff9101" transform="matrix(.35673 -.85033 .85033 .35673 -5783.98 18104.8)"></path><circle cx="992.409" cy="1962.41" r="2.409" fill="#fff" transform="matrix(.5585 0 0 .5585 2341.76 -429.731)"></circle><circle cx="992.409" cy="1962.41" r="2.409" fill="#fff" transform="matrix(.5585 0 0 .5585 2350.38 -441.601)"></circle><path d="M2959.287 718.38s-7.693 7.532-8.454 20.288" fill="none" stroke="#ffefd9" stroke-width="2.0034321"></path><path d="M16521 1367s9.1 8.91 10 24" fill="none" stroke="#ffefd9" stroke-width="4.03" transform="matrix(-.5324 0 0 .45789 11758.1 101.746)"></path><path d="M16521 1367s9.1 8.91 10 24" fill="none" stroke="#ffefd9" stroke-width="1.97" transform="matrix(-.84533 0 0 1.16233 16916.5 -878.133)"></path><path d="M2914.156 694.345l-36.963 36.962" fill="none" stroke="#fff" stroke-width="2.0019600000000004" stroke-linecap="butt" stroke-linejoin="miter"></path><path d="M16660.5 1343v47" fill="none" stroke="#fff" stroke-width="2.27" stroke-linecap="butt" stroke-linejoin="miter" transform="matrix(1.1122 0 0 .5561 -15634.1 -34.045)"></path><path d="M16660.5 1343v47" fill="none" stroke="#fff" stroke-width="2.26" stroke-linecap="butt" stroke-linejoin="miter" transform="rotate(-45 10651.763 19610.098) scale(1.1122 .56793)"></path><path d="M16660.5 1343v47" fill="none" stroke="#fff" stroke-width="2.27" stroke-linecap="butt" stroke-linejoin="miter" transform="matrix(0 -1.1122 .5561 0 2148.84 19242.6)"></path><path d="M16660.5 1343v47" fill="none" stroke="#fff" stroke-width="2.26" stroke-linecap="butt" stroke-linejoin="miter" transform="matrix(1.1122 0 0 .56793 -15701.6 -76.373)"></path><path d="M16660.5 1343v47" fill="none" stroke="#fff" stroke-width="2.27" stroke-linecap="butt" stroke-linejoin="miter" transform="rotate(-45 10606.043 19696.236) scale(1.1122 .5561)"></path><path d="M16660.5 1343v47" fill="none" stroke="#fff" stroke-width="2.28" stroke-linecap="butt" stroke-linejoin="miter" transform="matrix(0 -1.1122 .54427 0 2071.13 19242.3)"></path><path d="M16660.5 1343v47" fill="none" stroke="#fff" stroke-width="2.27" stroke-linecap="butt" stroke-linejoin="miter" transform="rotate(-135 10663.85 4000.993) scale(1.1122 .56556)"></path><path d="M2757.67 715.074s8.945 8.76 9.83 23.594" fill="none" stroke="#ffefd9" stroke-width="1.9955914999999997"></path><path d="M16521 1367s9.1 8.91 10 24" fill="none" stroke="#ffefd9" stroke-width="3.46" transform="matrix(.61914 0 0 .53248 -7476.08 -2.02)"></path><path d="M16521 1367s9.1 8.91 10 24" fill="none" stroke="#ffefd9" stroke-width="4.87" transform="matrix(-.30957 0 0 .49152 7901.6 54.957)"></path><path d="M16521 1367s9.1 8.91 10 24" fill="none" stroke="#ffefd9" stroke-width="1.74" transform="matrix(1.1325 0 0 1.16553 -15949 -882.588)"></path><path d="M16510 1390h247.8" fill="none" stroke="#ffd39a" stroke-width="2.23" transform="matrix(.86928 0 0 .92058 -11601.6 -540.94)"></path><circle cx="16572.5" cy="1362.5" r="18.5" fill="none" stroke="#ff9101" stroke-width="1.42" transform="translate(-20585.3 -1212.44) scale(1.41279)"></circle><path d="M16621.3 1346.54l25.9 23.55 1.6-1.08c-8.1-18.93-15.9-31.84-23.8-44.01l-3.7 21.54z" fill="#ffd39a" transform="translate(-15631.5 -803.988) scale(1.1122)"></path><path d="M16623.3 1323.01l-21.7 4.86 20.7 19.59-18.6 18.3 3 2.64s22.4-4.73 28.2-18.3c3.3-10.12-11.6-27.09-11.6-27.09z" fill="#fff" transform="translate(-15631.5 -803.988) scale(1.1122)"></path><path d="M2874.955 680.303l18.112 26.262" fill="none" stroke="#ff9101" stroke-width="2.0013318" stroke-linecap="butt" stroke-linejoin="miter"></path><path d="M16629.4 1332.86c-8.9 5.06-19.9 5.11-28.9.14-2.7-1.46-4.6-2.53-4.6-2.53l7.5-11.95s.5-6.87 1-13.49c.2-2.16 1.6-4.02 3.6-4.77 2-.76 4.3-.27 5.8 1.26 6.1 5.76 15.1 13.72 26.5 21.73v2.04c-12.6-1.13-19.6-7.92-19.6-7.92l9.4 15.13s-.3.13-.7.36z" fill="#ffb24d" transform="translate(-15631.5 -805.12) scale(1.1122)"></path><path d="M2829.841 721.947l7.452-7.418s-4.56 8.386 1.78 13.535M2889.801 725.306l-6.296-6.754s7.948 3.857 11.921-3.023" fill="none" stroke="#ff9101" stroke-width="2.0019600000000004" stroke-linecap="butt" stroke-linejoin="miter"></path><circle cx="16572.5" cy="1362.5" r="18.5" fill="none" stroke="#ff9101" stroke-width="1.42" transform="translate(-20517.5 -1212.44) scale(1.41279)"></circle><path d="M2875.775 667.74h35.073l-5.657 20.366" fill="none" stroke="#ff9101" stroke-width="2.0025426" stroke-linecap="butt"></path><circle cx="964" cy="1992" r="2" fill="#ff9101" transform="matrix(.84853 0 0 .84853 2055.52 -1016.32)"></circle><g transform='+
                '"rotate(15.851 14517.738 -63056.329) scale(1.07957)"><path d="M19160.7 1281.8l-15.3 9.04s4 8.26 13.6 5.24c3.2-1 5-3.84 5-7.34 0 0 1.3-1.01 2.6-1.94.3-.23.4-.63.3-.99-.1-.36-.5-.61-.8-.62-.9-.03-1.8-.06-2.5-.08-.7-.02-1.4-.45-1.7-1.1-.6-1.47-1.2-2.21-1.2-2.21z" fill="#ffd39a"></path><clipPath id="_clip1"><path d="M19160.7 1281.8l-15.3 9.04s4 8.26 13.6 5.24c3.2-1 5-3.84 5-7.34 0 0 1.3-1.01 2.6-1.94.3-.23.4-.63.3-.99-.1-.36-.5-.61-.8-.62-.9-.03-1.8-.06-2.5-.08-.7-.02-1.4-.45-1.7-1.1-.6-1.47-1.2-2.21-1.2-2.21z"></path></clipPath><g clip-path="url(#_clip1)"><circle cx="933.915" cy="1953.09" r="3.915" fill="#ff9101" transform="translate(17199.3 -2785.22) scale(2.08657)"></circle><path d="M19159.68 1286.477c.26.873.486 1.751.721 2.629" fill="none" stroke="#ff9101" stroke-width="1.8549423"></path></g></g><path d="M2824.788 623.63l31.887-7.704" fill="none" stroke="#ffd39a" stroke-width="1.9966843" stroke-linecap="butt" stroke-linejoin="miter"></path><path d="M2881.35 2659.91c-.39-1.39-.79-2.78-1.18-4.17-.26-.94-.47-1.88-.63-2.84-.11-.68-.18-1.36-.12-2.05.04-.5.14-1 .33-1.46 1.48-3.45 4.44.17 6.63-1.35 1.85-1.28.82-3.19 2.49-4.73.89-.83 2.5-1.06 3.87-.2 2.66 1.67 4.14 3.99 5.98 6.45" fill="#ffd39a" transform="matrix(.84803 .28016 -.29317 .88738 1166.94 -2549.11)"></path><path d="M922.972 1933s-11.472 13.87-11.472 19.82c0 2.59 2.57 4.69 5.736 4.69s5.736-2.1 5.736-4.69V1933z" fill="#ff9101" transform="matrix(.71654 1.14772 -1.40202 .8753 4887.01 -2120.57)"></path><path d="M943.947 1964l-2.57-6.06s4.985-2.56 8.623.1" fill="none" stroke="#ffb24d" stroke-width="1.27" stroke-linecap="butt" stroke-linejoin="miter" transform="matrix(1.1946 0 0 1.1746 1713.23 -1663.07)"></path></g></g></g></g></svg>'
             }
            appViewCont.innerHTML = svgstr;
            document.querySelector(".taskCont").appendChild(appViewCont);
        }
        {
            var viwPadCenBase = document.createElement("div");
            viwPadCenBase.setAttribute("class", "viwPadCenBase");
            viwPadCenBase.style.textAlign = "center";
            document.querySelector(".taskCont").appendChild(viwPadCenBase);
            {
                var allClear = document.createElement("div");
                allClear.setAttribute("class", "allClr");
                allClear.innerHTML = "All Clear";
                document.querySelector(".viwPadCenBase").appendChild(allClear);
            }
            {
                var lookDiv = document.createElement("div");
                lookDiv.setAttribute("class","lookDiv");
                lookDiv.innerHTML = "Looks like everything's organized in the right place.";
                lookDiv.style.color = "#777";
                lookDiv.style.margin = "8px 0";
                lookDiv.style.fontSize = "13px";
                document.querySelector(".viwPadCenBase").appendChild(lookDiv);
            }
            {
                var addTaskBtCont = document.createElement("div");
                addTaskBtCont.setAttribute("class","addTaskBtCont");
                addTaskBtCont.style.marginTop = "20px";
                document.querySelector(".viwPadCenBase").appendChild(addTaskBtCont);
                {
                    var addTaskbt = document.createElement("button");
                    addTaskbt.style.display = "block";
                    addTaskbt.innerHTML = "Add Task"
                    addTaskbt.style.fontSize = "13px";
                    addTaskbt.style.lineHeight = "17px";
                    addTaskbt.style.margin = "0 auto";
                    addTaskbt.style.padding = "6px 12px 7px 12px";
                    addTaskbt.style.textDecoration = "none";
                    addTaskbt.style.backgroundColor = "#ff9000"
                    addTaskbt.style.border = "solid 1px transparent"
                    addTaskbt.style.borderRadius = "3px";
                    addTaskbt.style.color = "white";
                    addTaskbt.style.cursor = "pointer";
                    document.querySelector(".addTaskBtCont").appendChild(addTaskbt);
                }
            }
            {
                var viwPaBaACont = document.createElement("div");
                viwPaBaACont.setAttribute("class","viwPaBaACont");
                viwPaBaACont.style.marginTop = "10px";
                document.querySelector(".viwPadCenBase").appendChild(viwPaBaACont);
                {
                    var viwBsLink = document.createElement("a");
                    viwBsLink.style.textDecoration = "none";
                   // viwBsLink.innerHTML = " How to plan your day";
                    viwBsLink.style.color = "#ff9000";
                    viwBsLink.style.fontSize = "13px";
                    viwBsLink.style.height = "29px";
                    viwBsLink.style.display = "inline-block";
                    document.querySelector(".viwPaBaACont").appendChild(viwBsLink);
                    {
                        var svgspan2 = document.createElement("span");
                        svgspan2.setAttribute("class", "svgspan2");
                        var svgstr3 = '<svg width="17" height="17"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm-.1-2.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM5.5 5.87c.06-1.32.9-2.37 2.53-2.37 1.47 0 2.47.95 2.47 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4H7.32V9.1c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H5.5z" id="tick-a"></path></svg>'
                        svgspan2.innerHTML = svgstr3;
                        svgspan2.style.marginRight = "4px";
                        document.querySelector(".viwPaBaACont a").appendChild(svgspan2);
                    }
                    {
                        var linkSpan = document.createElement("span");
                        linkSpan.setAttribute("class", "linkSpan");
                        linkSpan.innerHTML = "How to plan your day";
                        document.querySelector(".viwPaBaACont a").appendChild(linkSpan);
                    }
                }
            }
        }
        var addTaskImp =  document.querySelector(".addTask > a");
        addTaskImp.onclick = function() {
            taskCreDv()
            data_ResetFun()            
        }
        var addTaskImp2 =  document.querySelector(".addTaskBtCont > button");
        addTaskImp2.onclick = taskCreDv;
}

//funcion to create AddTask link expect the SVG and rest all.
function AddTaskOnly() {
    {
        var row2 =  document.createElement("div");
        row2.setAttribute("class", "row2");
        document.querySelector(".taskCont").appendChild(row2);
        }
        {
        var addTask = document.createElement("div");
        addTask.setAttribute("class", "addTask");
        addTask.style.padding = "18px 12px 0";
        addTask.style.borderTop = "1px solid rgb(255, 246, 234)"
        document.querySelector(".row2").appendChild(addTask);
        }
        {
        var addTaskLink = document.createElement("a");
        addTaskLink.style.color = "#808080";
        addTaskLink.setAttribute("href","#")
        addTaskLink.style.textDecoration = "none";
        addTaskLink.style.fontSize = "14px";
        addTaskLink.style.display = "block";
        addTaskLink.style.cursor = "pointer";
        document.querySelector(".addTask").appendChild(addTaskLink);
            {
            var addTaskSpan = document.createElement("span");
            addTaskSpan.style.marginRight = "12px";
            addTaskSpan.style.color = "#ff9000";
            var svgstr0 = '<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" data-svgs-path="sm1/plus.svg"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd"></path></svg>'
            addTaskSpan.innerHTML = svgstr0;
            document.querySelector(".addTask a").appendChild(addTaskSpan);
            }
            {
                var spanAdd = document.createElement("span");
                spanAdd.setAttribute("class", "spanAdd");
                spanAdd.innerHTML= "Add Task";
                spanAdd.style.color = "rgb(128, 128, 128)"
                document.querySelector(".addTask a").appendChild(spanAdd);
            }
        
        }
        var addTaskImp =  document.querySelector(".addTask > a");
        addTaskImp.onclick = function() {
            taskCreDv()
            data_ResetFun()            
        }
        if (document.querySelector(".taskAdding").innerHTML == "") {
            var addTaskImp2 =  document.querySelector(".addTaskBtCont > button");
            addTaskImp2.onclick = taskCreDv;
        }
}

function data_ResetFun() {
        console.log("checking onclick");
        task_Temp_Due = undefined;
}