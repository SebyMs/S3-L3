let taskcounter = 0;
const task = function (submitEvent) {
  submitEvent.preventDefault();
  const form = submitEvent.target;
  const inputList = form.elements;
  console.log(inputList);
  innerText = "";
  if (inputList.tagName !== "BUTTON") {
    const valoreInput = inputList[0].value;
    taskcounter += 1;
    innerText = valoreInput;
  }
  const conferma = confirm("Sei sicuro?");
  if (conferma) {
    const container = document.querySelector("#task");
    const li = document.createElement("li");
    li.setAttribute("id", taskcounter);
    li.innerHTML = `${taskcounter} | ${innerText} <button onclick='deleteTask(event)' id=${taskcounter}>Delete</button>`;
    container.appendChild(li);
  } else alert("Operazione annullata");
  const underLineSelect = document.querySelectorAll("li");
  for (let i = 0; i < underLineSelect.length; i++) {
    underLineSelect[i].setAttribute("onclick", "underLine(event)");
  }
};

const deleteTask = function (event) {
  event.preventDefault();
  const stringaDaEliminare = event.target.id;
  id = stringaDaEliminare;
  stringa = document.getElementById(id);
  stringa.style.display = "none";
};

const underLine = function (event) {
  const stringaDaSottolineare = event.target.id;
  event.target.classList.toggle("underline");
};

// elements del target ci da l array node degli elementi all interno del event
// target ci da tutto il codice dell event
// value stringa che diamo all input o valore in generale dell input
