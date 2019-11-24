passwordInput = document.getElementById("PasswordInput");
loginCard = document.getElementById("loginCard");
resumeDiv = document.getElementById("Resume");

var origin_url = "http://localhost:3000";
origin_url = "https://sambaumohl.com";

var host = "localhost:3000";
host = "sambaumohl.com";

window.CheckPassword = function() {
  var settings = {
    async: true,
    crossDomain: true,
    url: origin_url + "/special/password",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Host: host,
      "Accept-Encoding": "gzip, deflate",
      "Content-Length": "31",
      Connection: "keep-alive"
    },
    processData: false,
    data: '{\n    "passcode": "' + passwordInput.value + '"\n}'
  };

  $.ajax(settings).done(function(response) {
    html_insert = JSON.parse(response).resume_html;
    loginCard.parentNode.removeChild(loginCard);
    resumeDiv.innerHTML = html_insert;
  });
};
