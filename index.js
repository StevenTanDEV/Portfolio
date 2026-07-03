document.querySelectorAll(".project-card").forEach(card => {
    const id = card.dataset.id;
    const project = projects[id];

    if (!project) return;

    engineName = project.isUnity ? "(Unity)" : "(Unreal)";

    // card.innerHTML = `
    // <span class = "image">
    //     <img src ="${project.cover}" alt ="${project.title}" >        
    //     </span>
    //     <a href = "project.html?id=${id}">
    //             <h2>${project.title}</h2>
	// 		<div class="content">
	// 		    <p>${project.genre} ${engineName}</p>
	// 		</div>
    //     </a>
    // `;
    
    card.innerHTML = `
    <span class = "image">
        <img src ="${project.cover}" alt ="${project.title}" >        
        </span>
        <a href = "additional-projects-list.html#${id}">
                <h2>${project.title}</h2>
			<div class="content">
			    <p>${project.genre} ${engineName}</p>
			</div>
        </a>
    `;
});