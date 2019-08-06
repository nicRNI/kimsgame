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


//Stop click event
$('a').click(function(event){
    event.preventDefault();
});