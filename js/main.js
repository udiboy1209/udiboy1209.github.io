open_id = ""
content_open = false
smileys={
    ":)":"smile.png",
    ":P":"tongue.png",
    ":D":"teeth.png",
    "^_^":"happy.png",
    ":|":"neutral.png",
    ":(":"sad.png",
    ">:(":"mad.png",
    "B|":"dude.png",
    ":O":"surprised.png",
    ":S":"weird.png",
    ";)":"wink.png"};

function closeMenus(url){

    close_func=function(){
            window.location.href=url
	    };

    if(open_id!=""){
        $(".cpage#"+open_id).animate({
            height : '4px'
        },500,"swing",close_func);
    }

    if(content_open){
        $("#cdrawer").animate({width:"0px"},500,"swing",close_func);
    }
}

function openMenu(id){
    $(".cpage#"+id).animate({
        height : '550px'
    }, 1500);

    open_id=id
}

function onContentLoad(){
    $('a:external').attr('target', '_blank');

    $('a:not(:external)').click(function(e){
        e.preventDefault()
        var path = $(this).attr('href');
        closeMenus(path)
    });

    $("p").html(function (i,content) {
        return content.replace(/[:\/)PDS(|^_>]+/g, function (match) {
                console.log("replacing in "+i+" "+match);
                return typeof smileys[match] != 'undefined' ?
                               '<img class="emo" src="/includes/smileys/'+smileys[match]+'"/>' :
                                          match;
                  });
    });
}

function openContent(filename){
    $("#cdrawer").animate({width:"90%"}, 2000);
    $("#cdrawer .content-wrapper").load("/pages/"+filename+".htm",onContentLoad);

    content_open=true
}

$(document).ready(function(){

    $(".content-wrapper").css("width",screen.availWidth*0.6);
    $(".content-wrapper").css("height",screen.availHeight*0.6);
    $(".content-wrapper").css("margin-left",screen.availWidth*0.1);

    $(".scrollButton").click(function(){
        var id = $(this).attr('id');
        closeMenus("/?menu="+id);
        console.log("id: "+id)
    });


    $(".scrollButton").mouseenter(function(){
        $(this).animate({height:"42px"},100);
    });
    
    $(".scrollButton").mouseleave(function(){
        $(this).animate({height:"37px"},100);
    });

    var page = $.query.page
    var menu = $.query.menu

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

