$(function () {
    let newstable=$(".am-table tbody")
    refreshNews()
    // add news
    $("#btnsubmit").click(function (e) {
        // stop default
        e.preventDefault()

        // 判断表单填写情况
        if ($("#newssrc").val()===''){
            $("#newssrc").parent().addClass('am-form-warning')
        }else{
            $("#newssrc").parent().removeClass('am-form-warning')
        }
        if ($("#imgsrc").val()===''){
            $("#imgsrc").parent().addClass('am-form-warning')
        }else{
            $("#imgsrc").parent().removeClass('am-form-warning')
        }
        if ($("#newstitle").val()===''){
            $("#newstitle").parent().addClass('am-form-warning')
        }else{
            $("#newstitle").parent().removeClass('am-form-warning')
        }
        if ($("#newstime").val()===''){
            $("#newstime").parent().addClass('am-form-warning')
        }else{
            $("#newstime").parent().removeClass('am-form-warning')
        }
        // 提交表单
        if ($("#newssrc").val()!==''&$("#imgsrc").val()!==''&$("#newstitle").val()!==''&$("#newstime").val()!==''){

            let jsonnews={
                newstitle:$("#newstitle").val(),
                newssrc:$("#newssrc").val(),
                imgsrc:$("#imgsrc").val(),
                newstime:$("#newstime").val(),
                newstype:$("#newstype").val()
            }
            console.log(jsonnews)
            $.ajax({
                url: '/bdnews/server/insert.php',
                type: 'post',
                data:jsonnews,
                datatype: 'json',
                success:function (data) {
                    refreshNews()
                    console.log(data)
                }
            })
        }
    })

    // delete model

    let deleteid
    newstable.on('click','.am-btn-danger', function() {
        deleteid=$(this).parent().prevAll().eq(2).html()
        console.log(deleteid)
            $('#my-confirm').modal({
                onConfirm: function(options) {

                    $.ajax({
                        url: '/bdnews/server/delete.php',
                        type: 'post',
                        data:{newsid:deleteid},
                        datatype: 'json',
                        success:function (data) {
                            console.log(data)
                            refreshNews()
                        }
                    })
                },
                // closeOnConfirm: false,
                onCancel: function() {
                    alert('算求，不弄了');
                }
            });
        });
    // editor model

    let editorid
    newstable.on('click','.am-btn-secondary', function() {
        editorid=$(this).parent().prevAll().eq(2).html()
        // console.log(editorid)

        $.ajax({
            url: '/bdnews/server/editor.php',
            type: 'get',
            data:{newsid:editorid},
            datatype: 'json',
            success:function (data) {
                // console.log(data)
                $("#unewstitle").val(data[0].newstitle)
                $("#unewstype").val(data[0].newstype)
                $("#uimgsrc").val(data[0].newsimg)
                $("#unewssrc").val(data[0].newssrc)
                let utime=data[0].newstime.split(' ')[0]
                $("#unewstime").val(utime)
            }
        })
        $('#umy-confirm').modal({
            onConfirm: function(options) {

                $.ajax({
                    url: '/bdnews/server/updata.php',
                    type: 'post',
                    data:{
                        newstitle:$("#unewstitle").val(),
                        newstype:$("#unewstype").val(),
                        newsimg:$("#uimgsrc").val(),
                        newstime:$("#unewstime").val(),
                        newssrc:$("#unewssrc").val(),
                        id:editorid
                    },
                    success:function (data) {
                        console.log(data)
                        refreshNews()
                    }
                })
                console.log($("#unewssrc").val())
            },
            // closeOnConfirm: false,
            onCancel: function() {
                alert('算求，不弄了');
            }
        });
    });
    function refreshNews() {
        newstable.empty()
        $.ajax({
            type:'get',
            url:'/bdnews/server/getnews.php',
            datatype:'json',
            success:function (data) {
                data.forEach(function (item) {
                    let newstr=$("<tr>")
                    let newsid=$("<td>").html(item.id)
                    let newstitle=$("<td>").html(item.newstitle)
                    let newstime=$("<td>").html(item.newstime)
                    let newsdo=$("<td>")
                    let newsbtned=$("<button>").addClass("am-btn am-btn-sm am-btn-secondary").html('编辑').css('margin-right','5px')
                    let newsbtnre=$("<button>").addClass("am-btn am-btn-sm am-btn-danger").html('删除')
                    newsdo.append(newsbtned,newsbtnre)
                    newstr.append(newsid,newstitle,newstime,newsdo)
                    newstable.append(newstr)
                })
            }
        })
    }
})