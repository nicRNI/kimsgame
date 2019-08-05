var select = document.querySelectorAll('.select');
var index = 1;
select.forEach(function(e) {
    e.querySelector('.selectBtn').addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('toggle');
        this.nextElementSibling.style.zIndex = index++;
        this.classList.toggle('toggle');
    });
    e.querySelectorAll('.option').forEach(function(b) {
        b.addEventListener('click', function() {
            this.parentElement.classList.remove('toggle');
            this.closest('.select').children[0].classList.remove('toggle');
            this.closest('.select').children[0].setAttribute('data-type', this.getAttribute('data-type'));
            this.closest('.select').children[0].innerText = this.innerText;
        });
    });
});


let idnum;

function field_focus(field, ID)
{
    if(field.value == ID)
    {
        idnum == field.value;
        field.value = '';
    }
}

function field_blur(field, ID)
{
    if(field.value == '')
    {
        idnum == field.value;
        field.value = ID;

    }
}





//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
});

//Stop click event
$('a').click(function(event){
    event.preventDefault();
});


