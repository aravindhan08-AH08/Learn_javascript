const employees = [
  { name: "Arjun", role: "Developer", email: "arjun@work.com" },
  { name: "Sara", role: "Designer", email: "sara@work.com" },
  { name: "Leo", role: "Manager", email: "leo@work.com" },
];

let container = document.createElement("div");

// styling for the parent container
container.style.width = "100%";
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.border = "1px solid #a2a2a2";

for (let i = 0; i < employees.length; i = i + 1) {
  // Step 1 want to create a employee card
  let myCard = document.createElement("div");
  // step 2 want to add employee name role, email by destructing
  let { name, role, email } = employees[i];
  console.log(name, role, email);
  // step 3 open three separate div -> innerText -> name, role and email
  let nameSpan = document.createElement("div");
  let roleSpan = document.createElement("div");
  let emailSpan = document.createElement("div");

  nameSpan.innerText = name;
  roleSpan.innerText = role;
  emailSpan.innerText = email;
  // step 4 i want to append employee card to the container

  // ?? Option 1
  // for employees
  // if (role != 'Manager') {
  //     myCard.classList.add('card');
  // } else if (role == 'Manager') {
  //     myCard.classList.add('card');
  //     myCard.classList.add('manager-bg');
  // }

  // ?? Option 2
  myCard.classList.add("card");

  if (role == "Manager") {
    myCard.classList.add("manager-bg");
  }

  myCard.appendChild(nameSpan);
  myCard.appendChild(roleSpan);
  myCard.appendChild(emailSpan);

  container.appendChild(myCard);
}

document.body.appendChild(container);
