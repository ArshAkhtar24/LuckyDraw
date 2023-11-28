const emailInput = document.getElementById("email");
const stopButton = document.getElementById("stopButton");
const startButton = document.getElementById("startButton");
const boxElement1 = document.getElementById("box");
const boxElement2 = document.getElementById("box2");
const boxElement3 = document.getElementById("box3");
const boxElement4 = document.getElementById("box4");
const boxElement5 = document.getElementById("box5");
const boxElement6 = document.getElementById("rollDown");
var numberInput;
let nameChangeInterval, nameChangeInterval2;
var x = 0;

startButton.onclick = function () {
  boxElement1.style.display = "flex";
  boxElement1.style.animation = "none";
  boxElement1.offsetHeight;
  boxElement1.style.animation = null;

  boxElement2.style.display = "flex";
  boxElement2.style.animation = "none";
  boxElement2.offsetHeight;
  boxElement2.style.animation = null;

  boxElement3.style.display = "flex";
  boxElement3.style.animation = "none";
  boxElement3.offsetHeight;
  boxElement3.style.animation = null;

  boxElement4.style.display = "flex";
  boxElement4.style.animation = "none";
  boxElement4.offsetHeight;
  boxElement4.style.animation = null;

  boxElement5.style.display = "flex";
  boxElement5.style.animation = "none";
  boxElement5.offsetHeight;
  boxElement5.style.animation = null;

  startButton.style.display = "none";

  startChangingName();

  boxElement1.classList.add("movebox1");

  setTimeout(function () {
    boxElement2.classList.add("movebox12");
  }, 400);
  setTimeout(function () {
    boxElement3.classList.add("movebox13");
  }, 800);
  setTimeout(function () {
    boxElement4.classList.add("movebox14");
  }, 1200);
  setTimeout(function () {
    boxElement5.classList.add("movebox15");
  }, 1600);

  setTimeout(function () {
    startTime = new Date();
    boxElement1.classList.remove("movebox1");
    stopButton.style.display = "inline-block";
    boxElement1.classList.add("movetype2");
  }, 2000);

  setTimeout(function () {
    boxElement1.classList.remove("movebox1");
    boxElement2.classList.add("movetype2");
  }, 2200);

  setTimeout(function () {
    boxElement3.classList.remove("movebox1");
    boxElement3.classList.add("movetype2");
  }, 2400);

  setTimeout(function () {
    boxElement4.classList.remove("movebox1");
    boxElement4.classList.add("movetype2");
  }, 2600);

  setTimeout(function () {
    boxElement5.classList.remove("movebox1");
    boxElement5.classList.add("movetype2");
  }, 2800);
};

stopButton.onclick = function () {
  stopButton.style.display = "none";
  endTime = new Date();
  timeDiff = endTime - startTime;
  var t;
  for (i = 0; i < 1000; i++) {
    t = timeDiff - i * 1000;
    if (t < 1000) {
      break;
    }
  }
  // var randomNumber = Math.floor(Math.random() * 10) + 1;
  stopTime = 1000 - t;
  setTimeout(function () {
    boxElement1.classList.remove("movetype2");
    boxElement1.style.display = "flex";
    boxElement1.style.animation = "none";
    boxElement1.style.animation = "move31 1.0s linear 1 forwards";
    setTimeout(function () {
      boxElement1.style.display = "none";
    }, 2000);
  }, stopTime);

  setTimeout(function () {
    boxElement2.classList.remove("movetype2");
    boxElement2.style.display = "flex";
    boxElement2.style.animation = "none";
    boxElement2.style.animation = "move32 0.8s linear 1 forwards";
    setTimeout(function () {
      boxElement2.style.display = "none";
    }, 1800);
  }, stopTime + 200);

  setTimeout(function () {
    boxElement3.classList.remove("movetype2");
    boxElement3.style.display = "flex";
    boxElement3.style.animation = "none";
    boxElement3.style.animation = "move33 0.6s linear 1 forwards";
    setTimeout(function () {
      boxElement3.style.display = "none";
    }, 1600);
  }, stopTime + 400);

  setTimeout(function () {
    boxElement4.classList.remove("movetype2");
    boxElement4.style.display = "flex";
    boxElement4.style.animation = "none";
    boxElement4.style.animation = "move34 0.4s linear 1 forwards";
    setTimeout(function () {
      boxElement4.style.display = "none";
    }, 1400);
  }, stopTime + 600);

  setTimeout(function () {
    boxElement5.classList.remove("movetype2");
    boxElement5.style.display = "flex";
    boxElement5.style.animation = "none";
    boxElement5.style.animation = "move35 0.2s linear 1 forwards";
    startButton.style.display = "inline-block";
    boxElement6.textContent = boxElement3.textContent;
    setTimeout(function () {
      boxElement6.style.display = "inline-block";
      boxElement6.style.animation = "moveDown 2s linear 1 forwards";
      boxElement5.style.display = "none";
    }, 1200);
    stopChangingName();
  }, stopTime + 800);
};

async function startChangingName() {
  const jsonDataPath = "output.json";

  try {
    const response = await fetch(jsonDataPath);
    const data = await response.json();

    let currentIndex = x;
    var name;
    nameChangeInterval = setInterval(function () {
      employee = data[currentIndex];
      name = employee.Employee_Name;
      boxElement1.textContent = name;
      currentIndex = (currentIndex + 1) % data.length;

      setTimeout(function () {
        employee = data[currentIndex];
        name = employee.Employee_Name;
        boxElement2.textContent = name;
        currentIndex = (currentIndex + 1) % data.length;
      }, 400);

      setTimeout(function () {
        employee = data[currentIndex];
        name = employee.Employee_Name;
        boxElement3.textContent = name;
        currentIndex = (currentIndex + 1) % data.length;
      }, 800);

      setTimeout(function () {
        employee = data[currentIndex];
        name = employee.Employee_Name;
        boxElement4.textContent = name;
        currentIndex = (currentIndex + 1) % data.length;
      }, 1200);

      setTimeout(function () {
        employee = data[currentIndex];
        name = employee.Employee_Name;
        boxElement5.textContent = name;
        currentIndex = (currentIndex + 1) % data.length;
      }, 1600);
      x = currentIndex;
    }, 2000);
    
    
    setTimeout(function () {
      clearInterval(nameChangeInterval)
      nameChangeInterval = setInterval(function () {
        
        setTimeout(function () {
          employee = data[currentIndex];
          name = employee.Employee_Name;
          boxElement1.textContent = name;
          currentIndex = (currentIndex + 1) % data.length;
          employee = data[currentIndex];
          name = employee.Employee_Name;
          boxElement2.textContent = name;
          currentIndex = (currentIndex + 1) % data.length;
        }, 200);

        setTimeout(function () {
          employee = data[currentIndex];
          name = employee.Employee_Name;
          boxElement3.textContent = name;
          currentIndex = (currentIndex + 1) % data.length;
        }, 200);

        setTimeout(function () {
          employee = data[currentIndex];
          name = employee.Employee_Name;
          boxElement4.textContent = name;
          currentIndex = (currentIndex + 1) % data.length;
        }, 200);

        setTimeout(function () {
          employee = data[currentIndex];
          name = employee.Employee_Name;
          boxElement5.textContent = name;
          currentIndex = (currentIndex + 1) % data.length;
        }, 200);
      }, 1000);
    }, 2000); // Start after 2 seconds
  } catch (error) {
    boxElement1.textContent = "smth off";
  }
}

function stopChangingName() {
  clearInterval(nameChangeInterval);
}

emailInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    numberInput = emailInput.value;
  }
});
