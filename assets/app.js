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
    title: "KKCF Final Demo Project",
    description: "Designed and developed a comprehensive personal portfolio during a 100-hour project-based fellowship. This site integrates my technical CS projects with a forward-looking small business concept, emphasizing clean UI and cross-platform accessibility.",
    link: "https://kaden-final-demo-project--kqdn.replit.app/index.html"
},

{
    title: "Encryption Project in Java",
    description: "Java-based encryption system implementing historical and modern substitution ciphers. Features a flexible Cipher class that handles the classic Caesar shift, custom mapping keys, and dynamic rotation after every character to prevent frequency analysis. Supports case sensitivity and file I/O via the Encrypt class.",
    link: "https://github.com/kqdn/Encryption-Project-Java"
}

]

function displayProjects() {
    const projectsContainer = document.getElementById("projects-container");
    
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-card");
        
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

displayProjects();