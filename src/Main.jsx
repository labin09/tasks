import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    function updateOutput() {
      var iframes = document.querySelectorAll("iframe");
      for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        var iframeContent =
          iframe.contentDocument || iframe.contentWindow.document;
        var htmlContent =
          "<html><head><style>" +
          document.querySelector(".css-panel").value +
          "</style></head><body>" +
          document.querySelector(".html-panel").value +
          "</body></html>";
        iframeContent.open();
        iframeContent.write(htmlContent);
        iframeContent.close();
      }
      var outputPanel = document.getElementById("output-panel");
      outputPanel.contentWindow.eval(
        document.querySelector(".javascript-panel").value
      );
    }

    document.querySelectorAll(".file").forEach(function (element) {
      element.addEventListener("click", function () {
        document.getElementById("file-toggle").style.display =
          document.getElementById("file-toggle").style.display === "none"
            ? "block"
            : "none";
        this.classList.toggle("file-click");
      });
    });

    document.querySelectorAll(".help").forEach(function (element) {
      element.addEventListener("click", function () {
        document.getElementById("help-toggle").style.display =
          document.getElementById("help-toggle").style.display === "none"
            ? "block"
            : "none";
        this.classList.toggle("help-click");
      });
    });

    document.querySelectorAll(".top-buttons").forEach(function (element) {
      element.addEventListener("click", function () {
        this.classList.toggle("top-buttons-click");
      });
    });

    document.querySelectorAll(".output").forEach(function (element) {
      element.addEventListener("click", function () {
        this.classList.toggle("output-button-click");
      });
    });

    document.querySelectorAll(".panel").forEach(function (element) {
      element.style.height = window.innerHeight - 40 + "px";
    });

    document.querySelectorAll("iframe").forEach(function (element) {
      element.contentDocument.write(
        document.querySelector(".html-panel").value
      );
    });

    updateOutput();

    document.querySelectorAll("textarea").forEach(function (element) {
      element.addEventListener("change", updateOutput);
      element.addEventListener("keyup", updateOutput);
      element.addEventListener("paste", updateOutput);
    });

    document.getElementById("html").addEventListener("click", function () {
      document.querySelector(".html-panel").style.display =
        document.querySelector(".html-panel").style.display === "none"
          ? "block"
          : "none";
    });

    document.getElementById("css").addEventListener("click", function () {
      document.querySelector(".css-panel").style.display =
        document.querySelector(".css-panel").style.display === "none"
          ? "block"
          : "none";
    });

    document
      .getElementById("javascript")
      .addEventListener("click", function () {
        document.querySelector(".javascript-panel").style.display =
          document.querySelector(".javascript-panel").style.display === "none"
            ? "block"
            : "none";
      });

    document.querySelectorAll(".output").forEach(function (element) {
      element.addEventListener("click", function () {
        document.getElementById("output-panel").style.display =
          document.getElementById("output-panel").style.display === "none"
            ? "block"
            : "none";
      });
    });
  }, []);

  return (
    <>
      <div id="topbar-container">
        {/* <a href=""><img id="logo" src="images/logo.jpg" /></a> */}

        <div className="file">
          File <span className="down-arrow">⯆</span>
        </div>

        <div className="add-library">Add library</div>

        <div id="button-container">
          <div className="top-buttons" id="html">
            HTML
          </div>
          <div className="top-buttons" id="css">
            CSS
          </div>
          <div className="top-buttons" id="javascript">
            JavaScript
          </div>
          <div className="top-buttons" id="console">
            Console
          </div>
          <div className="output">Output</div>
        </div>

        <a href="" className="login">
          Login or Register
        </a>

        <a href="" className="blog">
          Blog
        </a>

        <div className="help">Help</div>
      </div>

      <div id="file-toggle">
        <div className="file-options">News</div>
        <div className="file-options">Make bin private</div>
        <div className="file-options">Delete</div>
        <div className="file-options file-options-border">Archive</div>
        <div className="file-options">Add description</div>
        <div className="file-options">Save snapshot</div>
        <div className="file-options file-options-border">Clone</div>
        <div className="file-options">Publish to vanity homepage</div>
        <div className="file-options">Export as gist</div>
        <div className="file-options">Download</div>
        <div className="file-options">Save as template</div>
      </div>

      <div id="help-toggle">
        <div className="help-options">Keyboard shrotcuts</div>
        <div className="help-options help-options-border">JS Bin URLs</div>
        <div className="help-options">Search help...</div>
        <div className="help-options help-options-border">All help topics</div>
        <div className="help-options">Send feedback & file bugs</div>
        <div className="help-options">Donate on Gratipay</div>
        <div className="help-options">Follow @js_bin</div>
        <div className="help-options">Support JS Bin: upgrade now</div>
      </div>

      <div id="body-container">
        <div></div>

        <textarea className="html-panel panel"></textarea>

        <textarea className="css-panel panel"></textarea>

        <textarea className="javascript-panel panel"></textarea>

        <iframe id="output-panel" className="panel"></iframe>
      </div>

      <script src="myScript.js" type="text/javascript"></script>
    </>
  );
};

export default Main;
