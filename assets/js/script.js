var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY, h:mm:ss a"));

const hour = $('.hourDiv');
const plan = $('.text');
const save = $('.save');

input = localStorage.getItem('text')
plan.text(input);


save.click(function () {
    const hour = $(this).attr("id");
    const planner = $(this).siblings('textarea').val();
    localStorage.setItem( hour, planner);
    
    
    // plan.textContent = input
});