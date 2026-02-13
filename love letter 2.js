$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_next = $("#next");

  var pages = $(".page");
  var currentPage = 0;

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  btn_next.click(function () {
    nextPage();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    resetPages();
  }

  function nextPage() {
    if (currentPage < pages.length - 1) {
      $(pages[currentPage]).removeClass("active").addClass("exit");
      currentPage++;
      $(pages[currentPage]).addClass("active");
    }
  }

  function resetPages() {
    pages.removeClass("active exit");
    currentPage = 0;
    $(pages[0]).addClass("active");
  }
});
