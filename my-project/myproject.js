let dataProject = [];

function addProject(event) {
  event.preventDefault();

  // Title
  let title = document.getElementById("input-title").value;
  title.length >= 18 ? (title = title.slice(0, 18) + " ...") : (title = title);

  // Date
  let startDate = new Date(document.getElementById("input-startDate").value);
  let endDate = new Date(document.getElementById("input-endDate").value);

  if (startDate > endDate) {
    alert("Error Your Date");
  } else if (startDate < endDate) {
    getTime = new Date(endDate - startDate);
  }

  let distanceDay = Math.floor(getTime / (1000 * 3600 * 24));
  let distanceMonth = Math.floor(distanceDay / 31);

  console.log(distanceDay);

  duration =
    distanceMonth <= 0 ? distanceDay + " hari" : distanceMonth + " bulan";

  console.log(duration);

  //Description
  let description = document.getElementById("input-description").value;
  description.length >= 182
    ? (description = description.slice(0, 182) + " ...")
    : (description = description);

  // Checkbox
  let node = document.getElementById("input-node-js").checked;
  let react = document.getElementById("input-react-js").checked;
  let angular = document.getElementById("input-angular").checked;
  let laravel = document.getElementById("input-laravel").checked;

  // Image Files
  let image = document.getElementById("input-image").files;
  image = URL.createObjectURL(image[0]);

  let project = {
    title,
    startDate,
    endDate,
    duration,
    description,
    node,
    react,
    angular,
    laravel,
    image,
  };

  dataProject.push(project);

  renderProject();
}

function renderProject() {
  document.getElementById("listProject").innerHTML = firstProject;

  for (let i = 0; i < dataProject.length; i++) {
    document.getElementById("listProject").innerHTML += `
            <div class="project-list-item">
                <div class="project-image">
                    <img src="${dataProject[i].image}" alt="">
                </div>
                <div class="project-content" >
                    <h2>
                        <a href="myproject-detail.html" target="_blank">
                            ${dataProject[i].title}
                        </a>
                    </h2>
                    <div class="duration-project">
                        <p>Durasi: ${dataProject[i].duration} </p>
                    </div>
                    <div class="description-project">
                        <p>
                            ${dataProject[i].description}
                        </p>
                    </div>
                    <div class="technologis-project">
                        ${
                          dataProject[i].node
                            ? `<i class="fa-brands fa-node-js"></i>`
                            : ""
                        }
                        ${
                          dataProject[i].react
                            ? `<i class="fa-brands fa-react"></i>`
                            : ""
                        }
                        ${
                          dataProject[i].angular
                            ? `<i class="fa-brands fa-angular"></i>`
                            : ""
                        }
                        ${
                          dataProject[i].laravel
                            ? `<i class="fa-brands fa-laravel"></i>`
                            : ""
                        }
                    </div>
                    <div class="btn-group">
                        <div class="btn-left">
                            <button>Edit</button>
                        </div>
                        <div class="btn-right">
                            <button class="del-btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div> 
        `;
  }
}

let firstProject = `
<div class="project-list-item">
    <div class="project-image">
        <img src="../asset/img/uplabs.png" alt="">
    </div>
    <div class="project-content">
        <h2>
            <a href="myproject-detail.html" target="_blank">
                Road Trip Mobile
            </a>
        </h2>
        <div class="duration-project">
            <p>Durasi: <span>1 Bulan</span></p>
        </div>
        <div class="description-project">
            <p>
                UI/UX Design Road Trip Apps
                Ini merupakan UI/UX Design pertama saya menggunakan Figma. Saya membuat UI/UX Design terinspirasi dari berbagai macam aplikasi terutama aplikasi perjalanan.
            </p>
        </div>
        <div class="technologis-project">
            <i class="fa-brands fa-node-js"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-laravel"></i>
        </div>
        <div class="btn-group">
            <div class="btn-left">
                <button>Edit</button>
            </div>
            <div class="btn-right">
                <button class="del-btn">Delete</button>
            </div>
        </div>
    </div>
</div>   
`;
