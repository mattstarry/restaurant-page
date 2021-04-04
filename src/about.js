const about = function() {
    const content = document.querySelector('#content');

    const page = document.createElement('div');
    page.classList.add('page');

    const heading = document.createElement('h2');
    heading.textContent = "About";
    page.appendChild(heading);

    const info = document.createElement('p');
    info.textContent = "founded in 2021, we blazed a way for food pioneers all around the globe. welcome to the future."
    page.appendChild(info);

    content.appendChild(page);
}

export default about