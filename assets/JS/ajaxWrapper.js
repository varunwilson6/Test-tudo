
var fireBaseKeys = [];
var ajaxWrapper = function (bodyData) {
    this.URL = null;
    this.method = "";
    this.callBackFunction = null;
    this.loadingFunction = null;
    this.removeloadingFun = null;
    this.body = bodyData;
}
ajaxWrapper.prototype.setMethod = function (method) {
    this.method = method;
}
ajaxWrapper.prototype.setURL = function (URL) {
    this.URL = URL;
}
ajaxWrapper.prototype.setCallBackFun = function (callBackFunction) {
    this.callBackFunction = callBackFunction;
}
ajaxWrapper.prototype.setLoadingFun = function (loadingFun) {
    this.loadingFunction = loadingFun;
}
ajaxWrapper.prototype.setRemoveLoadingFun = function (removeLoadingFun) {
    this.removeloadingFun = removeLoadingFun;
}
ajaxWrapper.prototype.executeCall = function () {
    var ajaxWrapperInst = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        ajaxWrapperInst.loadingFunction && ajaxWrapperInst.loadingFunction();
        if (this.readyState == 4 && this.status == 200) {
            ajaxWrapperInst.removeloadingFun && ajaxWrapperInst.removeloadingFun();
            ajaxWrapperInst.callBackFunction && ajaxWrapperInst.callBackFunction(this.response);
        }
    }
    xhttp.open(this.method, this.URL, true);
    xhttp.send(this.body);
}
