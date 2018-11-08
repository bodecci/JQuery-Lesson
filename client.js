console.log('JS');

$(document).ready(handReady);// the ready() is expecting a callback function as it's param
//jquery is event driven 
//DOM document object model

function handReady() {
    console.log('jquery loaded');
    //you tell jquery to go select the h1 tag. then u tell it what u want to do
    $('h1').text('JQuery is Awesome');//this is known as a setter. it changes the text of our h1
    console.log($('h1').text());// this is the getter

    //Click listener
    $('#submitBtn').on('click', handleClick);//listening for a click on the button
    $('#output').on('click', '.person', handleDelete);//LISTENING ON 



    //DOM TRAVESAL
    //$('#test').parent().empty(); gets parents
    // $('#test').parent().children().first();
    // $('#test').next();//gets you next sibling
    // $('#test').last();//gets you last sibling
}// end doc ready

function handleClick() {
    console.log('submit was clicked');
    //collect whats in the input 
    const name = $('#nameTxt').val(); //gets the value in the nameTxt id in index.html
    const age = $('#ageTxt').val();//gets the value in the ageTxt id
    const food = $('#foodTxT').val();//gets the value in the foodTxT id

    $('#nameTxt').val('');//setter
    $('#ageTxt').val('');//setter
    $('#foodTxt').val('');//setter   

    //and log what was entered
    console.log('here is name: ', name);

    //$('#output').append('<li>' + name + ' is '+ age + ' and likes ' + food +'</li>');
    // TEMPLATE LITERAL! ``
    $('#output').append(`<li class="person">${name} is ${age} and likes ${food}</li>`);
    //$('li').on('click', handleDelete);
}// end handleClick

function handleDelete() {
    console.log('handleDelete called');
    //$(this).css('color', 'blue');
    //$(this).remove();
    //$(this).addClass('highlight'); //adds the class
    //$(this).removeClass('highlight'); //removes the 
    $(this).toggleClass('highlight');
}//end handleDelete function


console.log('end of file');
