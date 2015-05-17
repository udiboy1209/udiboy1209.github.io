var open = {"about":false, "projects":false, "stuff":false, "contact":false}; 
var open_id;
var scrollHeight=300;      

function closeMenus(){
    if(open_id!=""){
        $(".cpage#"+open_id).animate({
            height : '4px'
        }, 500);

        open[open_id]=false;

        open_id = "";
    }
}

function openMenu(id){
    if(!open[id]){
        closeMenus();
        $(".cpage#"+id).animate({
            height : '550px'
        }, 1500);

        open[id]=true;

        open_id=id;
    } else {
        closeMenus();
    }

    window.location.hash = open_id;
}

function openContent(filename){
    closeMenus();

    $("#cdrawer").animate({width:"95%"}, 2000);
    $("#cdrawer").load(filename);
}

$(document).ready(function(){
    $("#about .content-wrapper").load("about.htm");
    $("#projects .content-wrapper").load("projects.htm");
    $("#stuff .content-wrapper").load("stuff.htm");
    $("#contact .content-wrapper").load("contact.htm");

    $(".scrollButton").click(function(){
        var id = $(this).attr('id');
        openMenu(id);
    });
    
    var hash=document.location.hash.substring(1);
    if(hash==null || hash=="")
        hash="about";

    openMenu(hash);
});

