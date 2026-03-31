let projects = [

{
    title: "KKCF Final Demo Project",
    description: "Designed and developed a comprehensive personal portfolio during a 100-hour project-based fellowship. This site integrates my technical CS projects with a forward-looking small business concept, emphasizing clean UI and cross-platform accessibility.",
    link: "https://kaden-final-demo-project--kqdn.replit.app/index.html"
},

{
    title: "Project 2",
    description: "Description of project 2",
    link: ""
}

]

function displayProjects() {
    let projectsContainer = document.getElementById("projects-container");
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