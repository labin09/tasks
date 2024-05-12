function updateOutput() {

  var iframes = document.querySelectorAll("iframe");
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    var iframeContent = iframe.contentDocument || iframe.contentWindow.document;
    var htmlContent = "<html><head><style>" + document.querySelector(".css-panel").value + "</style></head><body>" + document.querySelector(".html-panel").value + "</body></html>";
    iframeContent.open();
    iframeContent.write(htmlContent);
    iframeContent.close();
  }
  var outputPanel = document.getElementById("output-panel");
  outputPanel.contentWindow.eval(document.querySelector(".javascript-panel").value);
}

document.querySelectorAll(".file").forEach(function(element) {
  element.addEventListener("click", function() {
    document.getElementById("file-toggle").style.display = (document.getElementById("file-toggle").style.display === "none") ? "block" : "none";
    this.classList.toggle("file-click");
  });
});

document.querySelectorAll(".help").forEach(function(element) {
  element.addEventListener("click", function() {
    document.getElementById("help-toggle").style.display = (document.getElementById("help-toggle").style.display === "none") ? "block" : "none";
    this.classList.toggle("help-click");
  });
});

document.querySelectorAll(".top-buttons").forEach(function(element) {
  element.addEventListener("click", function() {
    this.classList.toggle("top-buttons-click");
  });
});

document.querySelectorAll(".output").forEach(function(element) {
  element.addEventListener("click", function() {
    this.classList.toggle("output-button-click");
  });
});

document.querySelectorAll(".panel").forEach(function(element) {
  element.style.height = (window.innerHeight - 40) + "px";
});

document.querySelectorAll("iframe").forEach(function(element) {
  element.contentDocument.write(document.querySelector(".html-panel").value);
});

document.addEventListener("DOMContentLoaded", function() {
  updateOutput();
})


document.querySelectorAll("textarea").forEach(function(element) {
  element.addEventListener("change", updateOutput);
  element.addEventListener("keyup", updateOutput);
  element.addEventListener("paste", updateOutput);
});

document.getElementById("html").addEventListener("click", function() {
  document.querySelector(".html-panel").style.display = (document.querySelector(".html-panel").style.display === "none") ? "block" : "none";
});

document.getElementById("css").addEventListener("click", function() {
  document.querySelector(".css-panel").style.display = (document.querySelector(".css-panel").style.display === "none") ? "block" : "none";
});

document.getElementById("javascript").addEventListener("click", function() {
  document.querySelector(".javascript-panel").style.display = (document.querySelector(".javascript-panel").style.display === "none") ? "block" : "none";
});

document.querySelectorAll(".output").forEach(function(element) {
  element.addEventListener("click", function() {
    document.getElementById("output-panel").style.display = (document.getElementById("output-panel").style.display === "none") ? "block" : "none";
  });
});