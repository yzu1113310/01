$(function(){
    $("input").on("click",function(){
        $("h1").text("Hello");
    });
});


$(function(){
    $("input").on("click",function(){
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
    });
});
