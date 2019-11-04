$('body').css({
    'backgroundColor': 'black',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center'
})

const main = $('main')
$(main).css({
    'margin': '2vw',
    'backgroundColor': 'black',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'height': '84vh'
})

$('div').css({
    'display': 'flex',
    'justifyContent': 'space-around',
    'width': '60vw',
    'marginBottom': '3vh'
})

const autoBtn = $('button')
$(autoBtn).css({
    'height': '11vh',
    'minWidth': '15vw',
    'fontSize': '1.2rem'
})

$('td').css({
    'width': '15vw',
    'height': '12vh',
})

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#';
    i = 0
    while (i < 6) {
        color += letters[Math.floor(Math.random() * 16)]
        i++
    }
    return color
}

function changeColors() {
    const cells = $('td')

    for (let i = 0; i < cells.length; i++) {
        // $(cells[i]).html(getRandomColor) //not working. needs fix.
        $(cells[i]).css('backgroundColor', getRandomColor)
    }
}

let id

function autoChangeColors() {
    id = setInterval(changeColors, 800);
}

function stopAutoChangeColors() {
    clearInterval(id);
}


$(document).ready(changeColors)
$('#btn').click(changeColors)
$('#autoBtn').click(autoChangeColors)
$('#stopBtn').click(stopAutoChangeColors)

