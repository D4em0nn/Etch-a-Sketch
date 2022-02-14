const grid = document.querySelector('.grid');

/*let test = document.createElement('div');
test.textContent = 'hello';
grid.appendChild(test);*/

for(let i = 0; i < 256; i++)
{
    let newDiv = document.createElement('div');
    newDiv.id = 'd'+ (i+1);
    newDiv.className = 'item';
    newDiv.style.length = '10px';
    newDiv.style.width = '10px';
    //newDiv.style.margin = '5px';
    grid.appendChild(newDiv);
}

const grids = document.querySelectorAll('.item');

grids.forEach((grid) => {
    grid.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'pink';
    })
})