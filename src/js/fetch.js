const createNode = (elem) => {
    return document.createElement(elem);
};
const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}

const carsUl = document.querySelector('#carslist');
const carsDetails = document.querySelector('#carsdetails');
const url = 'api/api.json';

fetch(url)
    .then(res => res.json())
    .then(data => {
        //console.log(data.vehicles)
        initCarslist(data);

        const detailsLinks = document.querySelectorAll('.carslist__url');
        for (const detailsLink of detailsLinks) {
            detailsLink.addEventListener('click', function(e) {
                e.preventDefault();
                initDetails(data);
            })
        }
        
    }).catch(err => {       
        console.error('Error: ', err.message);
    });
    
function initDetails(data) {
    data.vehicles.map(() => {
        let div = createNode('div');
        div.classList.add('carsdetails');
        div.innerText = 'alle details';
        appendNode(carsDetails, div);
    });
}

function initCarslist(data) {
    data.vehicles.map((car) => {
        let li = createNode('li'),
            img = createNode('img'),
            div = createNode('div');
            span = createNode('span');
        a = createNode('a');
        li.classList.add('carslist__item');
        img.src = car.images[0];
        img.classList.add('carslist__img');
        span.innerText = car.brand;
        a.innerText = 'details';
        a.classList.add('carslist__url');
        a.href = 'details.html?' + car.id;

        appendNode(li, img);
        appendNode(li, span);
        appendNode(li, div);
        appendNode(li, a);
        appendNode(carsUl, li);
    });
}