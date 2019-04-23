var projects = [
  {
    name: "LJ Todolist V1.0",
    description: "This is my first",
    image: "LJTodolistV1.0.png",
    openUrl: "#",
    special: "old"
  },
  {
    name: "LJ Todolist V1.1",
    description: "This is my second",
    image: "LJTodolistV1.1.png",
    openUrl: "#",
    special: "old"
  },
  {
    name: "LJ Todolist V1.2",
    description: "This is my third",
    image: "LJTodolistV1.2.png",
    openUrl: "#",
    special: "old prototype"
  },
]

function onLoad() {
  var projectCards = "";
  for (var i = 0; i < projects.length; i++) {
    var special = "";

    if(projects[i].special.includes('old')){
      special += ' <span class="badge badge-warning">old</span>';
    }
    if(projects[i].special.includes('prototype')){
      special += ' <span class="badge badge-info">Prototype</span>';
    }

    projectCards += `
    <div class="card bg-light row" style="min-width:24rem; width:45%; margin:2%;">
      <img src="./img/${projects[i].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${projects[i].name} ${special}</h5>
        <p class="card-text">
          ${projects[i].description}
        </p>
        <a href="${projects[i].openUrl}" class="btn btn-primary">Open</a>
      </div>
    </div>
    `;
  }
  document.getElementById('projectCards').innerHTML = projectCards;
}
