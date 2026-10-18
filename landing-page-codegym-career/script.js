(function () {
  var form = document.getElementById("consultForm");
  var feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      feedback.textContent = "Cảm ơn bạn! Đây là bản demo giao diện, thông tin chưa được gửi đến máy chủ.";
      form.reset();
    });
  }

  document.querySelectorAll("#careerNav .nav-link, #careerNav .nav-cta").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && window.jQuery) {
        window.jQuery("#careerNav").collapse("hide");
      }
    });
  });
})();
