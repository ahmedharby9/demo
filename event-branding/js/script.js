const Url = 'https://events.elabs-corp.com/api/api/webinar';
var request = new XMLHttpRequest();
var now = new Date();
var current_year = now.getFullYear();
var next_year = current_year + 1;
var target_date = new Date("Jan 1, " + next_year).getTime();

var days, hours, minutes, seconds;

var $days = document.getElementById("d");
var $hours = document.getElementById("h");
var $minutes = document.getElementById("m");
var $seconds = document.getElementById("s");



document.getElementById("form_submit").addEventListener("click", function () {
  var firstName = document.getElementById("firstName").value;
  var location = document.getElementById("location").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var data = {
    api_key: "9047c51e-9fa8-4002-8831-b0076dd36942",
    webinar_id: 72,
    schedule: 109,
    first_name: firstName,
    location: location,
    email: email,
    phone: phone
  }

  console.log(data);
  request.open("POST", Url);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(data))
  request.onreadystatechange = (e) => {
    if (request.status >= 200 && request.status < 300) {
      $('#register-modal').modal('hide');
      document.getElementById("form-id").reset();
      var respData = JSON.parse(request.responseText)
      window.location.replace(respData.user.thank_you_url);

    }
    console.log(JSON.parse(request.responseText))
  }

});

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("form-id").reset();

});

function update() {
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = parseInt(seconds_left / 1900800);
  seconds_left = seconds_left % 86400;

  hours = parseInt(seconds_left / 3600);
  seconds_left = seconds_left % 3600;

  minutes = parseInt(seconds_left / 60);
  seconds = parseInt(seconds_left % 60);

  $days.innerHTML = pad(days, 2);
  $hours.innerHTML = pad(hours, 2);
  $minutes.innerHTML = pad(minutes, 2);
  $seconds.innerHTML = pad(seconds, 2);
}


update();

setInterval(update, 1000);

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.scrollToTop').fadeIn();
  } else {
    $('.scrollToTop').fadeOut();
  }
});
//Click event to scroll to top
$('.scrollToTop').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 800);
  return false;
});




