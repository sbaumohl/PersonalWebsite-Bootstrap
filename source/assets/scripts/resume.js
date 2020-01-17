passwordInput = document.getElementById("PasswordInput");

var origin_url = "http://localhost:3000";
var host = "localhost:3000";
origin_url = "https://www.sambaumohl.com";
host = "www.sambaumohl.com";

window.CheckPassword = function() {
  var http = new XMLHttpRequest();

  http.open("POST", origin_url + "/special/password", true);
  http.setRequestHeader("Content-type", "application/json");
  http.setRequestHeader("Accept-Encoding", "gzip, deflate");
  http.setRequestHeader("Host", host);
  http.responseType = "arraybuffer";

  http.onreadystatechange = function() {
    //Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      var newBlob = new Blob([http.response], { type: "application/pdf" });
      var data = window.URL.createObjectURL(newBlob);
      var link = document.createElement("a");
      link.href = data;
      link.download = "SamBaumohlResume.pdf";
      link.click();
      setTimeout(function() {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data);
      }, 100);
    }
  };

  http.send('{\n    "passcode": "' + passwordInput.value + '"\n}');
};
