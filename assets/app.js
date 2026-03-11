let projects = [

{
    title: "Project 1",
    description: "Description of project 1",
    link: ""
},

{
    title: "Project 2",
    description: "Description of project 2",
    link: ""
}

]

function displayProjects() {
    let projectsContainer = document.getElementById("projects-container");
    console.log(projectsContainer);
    projects.forEach(project => {
        let projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

displayProjects();