/**
 * Created by ffulauh on 2017/5/26.
 */
$(function () {
    $.ajax({
        async:false,
        url:"http://47.93.155.23/appUser/getList?_search=false&nd=1495790054565&rows=20&page=1&sidx=id&sord=desc",
        data:{},
        success:function (result) {
            
        },
        error:function () {

        }
    });
});
