const burger = document.querySelector("#burger-menu");
const navUl = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
    navUl.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navUl.classList.remove("active");
    });
});


let projects = [

{
    title: "Song Catalogue",
    description: "Built an interactive music catalog web app in vanilla HTML, CSS, and JavaScript. Structured a dataset of 25+ songs as an array of objects and implemented real-time search, multi-criteria sorting (BPM, stream count), genre filtering with active state toggling, and a light/dark theme toggle.",
    link: "https://kqdn.github.io/Song-Catalogue/"
},

{
    title: "Minecraft & Discord Community",
    description: "Founded a Minecraft server community and programmed a custom Discord bot in JavaScript/TypeScript using the Discord API to automate functionality and drive user engagement. Scaled the server to 1,200+ members and achieved official Discord Community Server status through strategic advertisement partnerships and interactive events.",
    link: ""
}

]

function displayProjects() {
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-card");

        const linkHtml = project.link
            ? `<a href="${project.link}" class="project-link" target="_blank">View Project</a>`
            : "";

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${linkHtml}
        `;
        projectsContainer.appendChild(projectElement);
    });
}

displayProjects();