passwordInput = document.getElementById("PasswordInput");
loginCard = document.getElementById("loginCard");
resumeDiv = document.getElementById("Resume");

window.CheckPassword = function() {
  var settings = {
    async: true,
    crossDomain: true,
    url: "http://localhost:3000/special/password",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Host: "localhost:3000",
      "Accept-Encoding": "gzip, deflate",
      "Content-Length": "31",
      Connection: "keep-alive"
    },
    processData: false,
    data: '{\n    "passcode": "cognitive"\n}'
  };

  $.ajax(settings).done(function(response) {
    html_insert = JSON.parse(response).resume_html;
    loginCard.parentNode.removeChild(loginCard);
    resumeDiv.innerHTML = html_insert;
  });
};
