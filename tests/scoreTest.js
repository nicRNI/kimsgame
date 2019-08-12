


//get rid of plurals and capitalization***
var nameCheck;
var colorCheck;
function scoring()
{//use for loop
    nameCheck = [false,false,false,false,false,false,false,false,false,false,false,false];
    colorCheck = [false,false,false,false,false,false,false,false,false,false,false,false];

    var b;
    for(b=0; b<12; b++)
    {
        //look for item name in storage, and item correct...
        if(localStorage["item"+b].correctname.includes(localStorage["resp"+b]))
        {
            nameCheck[b] = true;
        }

        if(localStorage["color"+b].correctcolor.includes(localStorage["cresp"+b]))
        {
            colorCheck[b] = true;
        }
    }
}