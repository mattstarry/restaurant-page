const menu = function() {
    const content = document.querySelector('#content');

    const page = document.createElement('div');
    page.classList.add('page');

    const img = document.createElement('img');
    img.classList.add('mainimg');
    img.src = "burger.jpeg";
    page.appendChild(img);

    const heading = document.createElement('h2');
    heading.textContent = "Menu";
    page.appendChild(heading);

    const bhead = document.createElement('h3');
    bhead.textContent = "burger"
    page.appendChild(bhead);

    const binfo = document.createElement('p');
    binfo.textContent = "half pounder with onions and fries on top"
    page.appendChild(binfo);

    const phead = document.createElement('h3');
    phead.textContent = "pizza"
    page.appendChild(phead);

    const pinfo = document.createElement('p');
    pinfo.textContent = "cooked on a metal pan. 7 different cheeses. 3 different metals."
    page.appendChild(pinfo);

    content.appendChild(page);
}

export default menu