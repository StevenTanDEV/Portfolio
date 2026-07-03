const container = document.getElementById("projectList");

Object.entries(projects)
    .forEach(([id, project]) => {

        logo = project.isUnity ? "images/logo-unity.png" : "images/logo-unreal.png";

        container.innerHTML += `
        <section class="project">
        <div style = "display:flex; align-items:center;">
            <img src="${logo}"; alt="Logo" style="height: 50px; margin: auto 1rem auto 0;"> 
                <div><h1 style="margin: 0;">${project.title}</h1></div>
         </div>
         <h2 style="margin: 5px; font-weight: bold; text-transform: none; letter-spacing: normal; color:rgb(182, 182, 182)">${project.genre}</h2>
         <ul class="description"> ${project.bullets.map(b => `<li>${b}</li>`).join("")}</ul>

        <div class="media">
            <div class="video">
                <iframe
                    src="https://drive.google.com/file/d/${project.video}/preview"
                    allow="autoplay"
                    allowfullscreen>
                 </iframe>
            </div>
            <div class="screenshots">
            ${project.screenshots.map(s => `<img src="${s}">`).join("")}
            </div>
        </div>
        </section>
        <hr>

        `;
    });