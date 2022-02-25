const grid = document.querySelector('.grid');
const set = document.querySelector('.set');
const colour = document.querySelector('.colour');
const reset = document.querySelector('.reset');

for(let i = 0; i < 16*16; i++)
{
    let newDiv = document.createElement('div');
    newDiv.id = 'd'+ (i+1);
    newDiv.className = 'item';
    grid.appendChild(newDiv);
}

grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
grid.style.gridTemplateRows = 'repeat(16, 1fr)'

const grids = document.querySelectorAll('.item');

grids.forEach((grid) => {
    grid.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'pink';
    })
})

let numOfGrids;
set.addEventListener('click', setup);

function setup()
{
    numOfGrids = prompt("Please enter number of grids");
    if(numOfGrids == null)
    {
        return;
    }
    grid.textContent = '';
    for(let i = 0; i < numOfGrids*numOfGrids; i++)
    {
        let newDiv = document.createElement('div');
        newDiv.id = 'd'+ (i+1);
        newDiv.className = 'item';
        grid.appendChild(newDiv);
    }

    console.log(numOfGrids);

    grid.style.gridTemplateColumns = `repeat(${numOfGrids}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${numOfGrids}, 1fr)`;

    const grids = document.querySelectorAll('.item');

    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'pink';
        })
    })

    colour.addEventListener('click', csetup);

function csetup()
{
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = random_bg_color();
        })
    })
}

reset.addEventListener('click', () => {
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'black';
    });
});
}

colour.addEventListener('click', csetup);

function csetup()
{
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = random_bg_color();
        });
    });
}

reset.addEventListener('click', () => {
    grids.forEach((grid) => {
        grid.style.backgroundColor = 'black';
    });
});

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
    }