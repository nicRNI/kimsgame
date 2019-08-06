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



//*******IF THEY RUN OUT OF TIME, MAKE IT AUTOMATICALLY SUBMIT, so that DATA is saved (maybe see how to press button w code?)

var idnum2;
function get_info()
{
    idnum2 = field.value;
    localStorage["resp1"] = idnum2;

}



//Stop click event
$('a').click(function(event){
    event.preventDefault();
});