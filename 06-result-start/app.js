const list = document.querySelector("#list");
const filter = document.querySelector("#filter");
let USERS = [];
filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  render(filteredUsers);
});

async function start() {
  list.innerHTML = "Loading ...";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setTimeout(() => {
      USERS = data;
      const sortData = sortUsersByName(data);
      console.log(sortData);
      render(sortData);
    }, 2000);
    //  console.log(resp);
    // console.log(data);
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = err.message;
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No matched users!";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function sortUsersByName(users) {
  return users.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function toHTML(user) {
  return `
        <li class="lsit-group-item">${user.name}</li>
    `;
}

start();
