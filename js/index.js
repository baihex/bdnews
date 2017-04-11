$(function(){
    refreshNews('推荐')
    $("nav li").click(function () {
        $("nav li span").removeClass('active')
        $(this).find('span').addClass('active')
        let type=$(this).text()
        refreshNews(type)
    })
})

// 更新新闻-先删除旧的
function refreshNews(type) {

    $.ajax({
        url: '/bdnews/server/getnews.php',
        type: 'GET',
        datatype: 'json',
        data:{newstype:type},
        success:function (data) {
console.log(data)
            let lists=$(".newswrap")
            lists.empty()
            for (let i=0;i<data.length;i++){

                let list=$("<div></div>").addClass('news').prependTo(lists)
                let newsimg=$("<div>").addClass('newsimg').appendTo(list)
                let img=$("<img>").attr('src',data[i].newsimg).prependTo(newsimg)
                let newstext=$("<div>").addClass('newstext').appendTo(list)
                let h1=$("<h1>").html(data[i].newstitle).appendTo(newstext)
                let p=$("<p>").html(data[i].newstime).appendTo(newstext)
                let span=$("<span>").html(data[i].newssrc).appendTo(p)
            }
        }
    })
}