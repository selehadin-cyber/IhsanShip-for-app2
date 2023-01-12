const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/* let globalEmail = "set2";

const yourFunction = async () => {
  await delay(5000);
  console.log("Waited 5s");
  const email = document.querySelector(".panel-body .dropdown-body .list-unstyled").lastChild.innerText;
  globalEmail = email;
  const name = document.querySelector("span.name").innerText;
  const zip = document.querySelector("span.zip").innerText;
  console.log(email);
  console.log(name);
  console.log(zip);
};

yourFunction();

console.log("wassup");
*/
addDivHTML(); 

async function addDivHTML() {
  await delay(5000);
  const email = document.querySelector("#EditFormUnprinted > div:nth-child(2) > div.col-sm-12.col-sm-12.col-lg-12.col-xl-3.ssit-order-right > div > div:nth-child(4) > div.col-sm-12.order-section-content.last-row > div > div > div.ssit-address-display-block > div:nth-child(4) > span").lastChild.innerText;
  globalEmail = email;
  

  let button = document.createElement("button");
  button.innerText = "Copy"
  button.onclick = () => {
    var copyText = document.querySelector("#EditFormUnprinted > div:nth-child(2) > div.col-sm-12.col-sm-12.col-lg-12.col-xl-3.ssit-order-right > div > div:nth-child(4) > div.col-sm-12.order-section-content.last-row > div > div > div.ssit-address-display-block > div:nth-child(4) > span").lastChild.innerText;

    // Select the text field
    /*  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices */

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    //alert("Copied the text: " + copyText);
  };
  //div.appendChild(button)
}
let globalName = ""

/* addNameHTML()

async function addNameHTML() {
  await delay(5000);
  const name = document.querySelector("span.name").innerText;
  globalName = name;
  var span = document.createElement("span");;
  span.setAttribute("class", "name1");
  span.classList.add("name1");
  span.innerText = globalName;
  document.body.appendChild(span);

  
} */

var intervalID = setInterval(function () {
  //var div = document.getElementsByClassName("example")[0];
  //var name = document.getElementsByClassName("name1")[0];
  let button = document.createElement("button");
  button.innerText = "Copy E-mail"
  button.onclick = () => {
    var copyText = document.querySelector("#EditFormUnprinted > div:nth-child(2) > div.col-sm-12.col-sm-12.col-lg-12.col-xl-3.ssit-order-right > div > div:nth-child(4) > div.col-sm-12.order-section-content.last-row > div > div > div.ssit-address-display-block > div:nth-child(4) > span").lastChild.textContent;

    // Select the text field
    /*  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices */

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    //alert("Copied the text: " + copyText);
  };
  
  parentDiv = document.querySelector("#EditFormUnprinted > div:nth-child(2) > div.col-sm-12.col-sm-12.col-lg-12.col-xl-3.ssit-order-right > div > div:nth-child(4) > div.col-sm-12.order-section-content.last-row > div > div > div.ssit-address-display-block > div:nth-child(4) > span");
  targetDiv = document.querySelector("#EditFormUnprinted > div:nth-child(2) > div.col-sm-12.col-sm-12.col-lg-12.col-xl-3.ssit-order-right > div > div:nth-child(4) > div.col-sm-12.order-section-content.last-row > div > div > div.ssit-address-display-block > div:nth-child(4) > span").lastChild
  if (targetDiv != null) {
    console.log(targetDiv);
    //console.log(div);
    parentDiv.insertBefore(button, targetDiv);
    //parentDiv.insertBefore(name, targetDiv);
    clearInterval(intervalID);
  }
}, 6000);


