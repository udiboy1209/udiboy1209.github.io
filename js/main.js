var open = {"about":false, "projects":false, "stuff":false, "contact":false}; 
var open_id;
var content_open=false;

function closeMenus(url,external){
    if(typeof external == undefined)
	external = false

    close_func=function(){
		if(url != undefined && url != null && url != "") {
		    if(external)
			window.location=url
		    else
		        window.location.href=url
		}
	    };

    if(open_id!=""){
        $(".cpage#"+open_id).animate({
            height : '4px'
        },500,"swing",close_func);

        open[open_id]=false;

        open_id = "";
        //location.hash="";
    }

    if(content_open){
        $("#cdrawer").animate({width:"0px"},500,"swing",close_func);
        //location.search="";
        content_open=false;
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

    //window.location.hash = open_id;
}

function onContentLoad(){
    $("a").click(function(e){
	e.preventDefault()
	var path = $(this).attr('href');
	if(/^(http|mailto)/.test(path))
		closeMenus(path,true)
	else 
		closeMenus("?page="+path)
    });
}

function openContent(filename){
    $("#cdrawer").animate({width:"90%"}, 2000);
    $("#cdrawer .content-wrapper").load(filename,onContentLoad);

    content_open=true;
}

$(document).ready(function(){
    $(".content-wrapper").css("width",screen.availWidth*0.5);
    $(".content-wrapper").css("height",screen.availHeight*0.6);
    $(".content-wrapper").css("margin-left",screen.availWidth*0.1);

    $(".scrollButton").click(function(){
        var id = $(this).attr('id');
	closeMenus("?menu="+id);
	console.log("id: "+id)
    });


    $(".scrollButton").mouseenter(function(){
        $(this).animate({height:"42px"},100);
    });
    
    $(".scrollButton").mouseleave(function(){
        $(this).animate({height:"37px"},100);
    });

    var menu=$.query.menu;
    var page=$.query.page;

    if(page!="" && page != null){
        openContent(page);
        return;
    }

    if(menu==null || menu==""){
        menu="about";
    }

    $("#"+menu+" .content-wrapper").load(menu+".htm",onContentLoad);
    //$("#projects .content-wrapper").load("projects.htm");
    //$("#stuff .content-wrapper").load("stuff.htm");
    //$("#contact .content-wrapper").load("contact.htm");

    openMenu(menu);
});

