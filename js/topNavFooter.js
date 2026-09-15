
fetch("top-bar.html")
  .then((Response) => Response.text())
  .then((topbarData) => {
    document.getElementById("top-bar").innerHTML = topbarData;
  });

  fetch("header.html")
    .then((Response) => Response.text())
    .then((headerData) => {
      document.getElementById("header").innerHTML = headerData;
    });


  fetch("footer.html")
    .then((Response) => Response.text())
    .then((footerData) => {
      document.getElementById("footer").innerHTML = footerData;
    });


