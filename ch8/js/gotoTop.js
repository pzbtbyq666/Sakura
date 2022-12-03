/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-15 15:07:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-11-15 15:48:16
 * @FilePath: \Semester projects\js\GoToTop.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 返回顶部函数整体封装
 */

$(function(){

     window.GoToTop = function(){
        var $GoToTopHTML = $(
            '<div class="backTotop"><img src="./images/gototop_05.jpg" alt=""></div>'
            )


            //样式
    $GoToTopHTML.css({
        width: '30px',
        height: '50px',
        position: 'fixed',
        bottom: '100px',
        left: '610px',
        marginLeft: '50%',
        display: 'none',
    })

     // 返回顶部
     $(document).scroll(function(){
        // 获取距离顶部位置
        var Top_y = $('html,body').scrollTop();
        if (Top_y > 800){
           $('.backTotop').fadeIn();
        }else{
            $('.backTotop').fadeOut();
        }
    })

    $('body').on('click','.backTotop',function(){
        $('html,body').animate({
            scrollTop : 0
       })
    })
    // $('.backTotop').click(function(){
    //     $('html,body').animate({
    //         scrollTop : 0
    //     })
    // })

    //追加到页面尾部
    $('body').append($GoToTopHTML)
    }
    
    
    
});