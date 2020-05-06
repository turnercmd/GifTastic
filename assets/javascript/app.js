//define variables

var topics = ["golf", "football", "basketball", "soccer", "baseball"];

 

//create an array of strings
function buttonPopulate(){
    $("#Topicsbutton").empty();

//Try using a loop that appends a button for each string in the array.  
    for ( var i=0; i < topics.length; i++)
    {
        var a = $("<button>");
        a.addClass("top")
        a.attr("data-name",topics[i])
        a.text(topics[i])
        $("buttonsView").append(a);

    

    }
} 
buttonPopulate();

//When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.


//When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.


//Under every gif, display its rating (PG, G, so on).


//This data is provided by the GIPHY API.


//Only once you get images displaying with button presses should you move on to the next step.


//Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.


