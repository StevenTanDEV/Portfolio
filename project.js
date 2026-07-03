const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const project = projects[id];

if (!project)
{
    window.location.replace("index.html");
}
else
{
    document.getElementById("windowName").innerText = `${project.title} - Steven Tan`;
    document.getElementById("title").innerText = project.title;
    document.getElementById("genre").innerText = project.genre;
    document.getElementById("video").src = `https://drive.google.com/file/d/${project.video}/preview`;
    document.getElementById("screenshot1").src = project.screenshots[0];
    document.getElementById("screenshot2").src = project.screenshots[1];

    document.getElementById("logo").src = project.isUnity ? "images/logo-unity.png" : "images/logo-unreal.png";

    const list = document.getElementById("bullets");
    project.bullets.forEach(bullet => {
        const li = document.createElement("li");
        li.innerText = bullet;
        list.appendChild(li);
    });
}