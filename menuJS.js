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
            console.log(this.closest('.select').children[0].getAttribute('data-type'));
            localStorage['Menu'] = this.closest('.select').children[0].getAttribute('data-type');
        });
    });
});

//^^^ maybe start localStorage menu at pre each time go to here?



//****************************USE localStorage example above to help direct to proper instructions page
//then have each instructions page direct to the right gamemode (pre/post)


function field_focus(field, ID)
{
    if(field.value == ID)
    {

        field.value = '';

    }

}


function field_blur(field, ID)
{
    if(field.value == '')
    {

        field.value = ID;
    }
    console.log(field.value, "hi123");
}

var idnum;
function get_id(field, ID)
{
    idnum = field.value;
    localStorage["ID"] = idnum;

}

function doClick()
{
    if (document.getElementById('login').value == "ID"){
        alert("Please enter your ID");
    } else if (localStorage['Menu'] == "OnPOST"){
        window.location.href = "instructions2.html";
    } else if (localStorage['Menu'] == "Event1POST"){
        window.location.href = "instructions2.html";
    } else if (localStorage['Menu'] == "Event7POST"){
        window.location.href = "instructions2.html";
    } else{
        window.location.href = "instructions.html";
    }
}



console.log(idnum, "works?");


//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
});

//Stop click event
$('a').click(function(event){
    event.preventDefault();
});

