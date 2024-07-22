import $ from "jquery";
import _ from "lodash";

let count = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');


function updateCounter(x) {
    count++;
    $('#count').html(`${count} clicks on the button`);
    return;
}

$('button').on('click', _.debounce(updateCounter, 1000));