const home = function() {
    const content = document.querySelector('#content');

    const page = document.createElement('div');
    page.classList.add('page');

    const img = document.createElement('img');
    img.classList.add('mainimg');
    img.src = "building.jpg";
    page.appendChild(img);

    const heading = document.createElement('h2');
    heading.textContent = "Welcome to My Restaurant";
    page.appendChild(heading);

    const info = document.createElement('p');
    info.textContent = "this is my restaurant. please look around for a good food eating time"
    page.appendChild(info);

    content.appendChild(page);
}

export default home