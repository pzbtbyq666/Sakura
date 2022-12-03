/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-30 14:45:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-11-30 20:23:48
 * @FilePath: \Semester projects\js\shopcar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
$(function(){

    // 1.全选事件
    // 定义变量
    
    var $headInput = $('table thead input[type=checkbox]'); //头部选择框
    var $bodyInput = $('table tbody input[type=checkbox]'); //中间选择框
    var $allIput = $('.totalPrice input[type=checkbox]');   //结算选择框
    
    $headInput.change(function(){
        // 获取选中状态
        var state = $(this).prop('checked')
        // 使所有选择框保持一致
        $bodyInput.prop('checked',state)
        $allIput.prop('checked',state)
        
        // 调用总计函数
        calcToatalprice();
     })

     $allIput.change(function(){
        // 获取选中状态
        var state = $(this).prop('checked')
        // 使所有选择框保持一致
        $bodyInput.prop('checked',state)
        $headInput.prop('checked',state)

        // 调用总计函数
        calcToatalprice();
        
     })

     $bodyInput.change(function(){
        
        
        var flag = true;
        

        // 循环表格中所有选择框的状态
        $bodyInput.each(function(i,input){
            if (!$(input).prop('checked')) {
                flag = false;
            }
            
        })
        
        // 把状态用来改变全选框
        $headInput.prop('checked',flag)
        $allIput.prop('checked',flag)



     // 调用总计函数
     calcToatalprice();
     })
     


    // 计数器控制

    // 加
    $('.add').on('click',function(){
        //下一个input节点
        var $nextInput = $(this).next();
        //获取input值
        var oldVal = parseFloat($nextInput.val());

        oldVal++;

        $nextInput.val(oldVal)

        //小计
        subToalprice(oldVal,$(this));
        // 调用总计函数
        calcToatalprice();
    })

    // 减
    $('.reduce').on('click',function(){
        var $prevInput = $(this).prev();
        var oldVal = parseInt($prevInput.val());
        oldVal--;
        oldVal = oldVal < 1 ? 1 : oldVal;
        $prevInput.val(oldVal);

         //小计
         subToalprice(oldVal,$(this));
         // 调用总计函数
        calcToatalprice();
    })

    //抽取小计函数
    function subToalprice (value,dom) {
        var subtotal = value * parseFloat( dom.closest('tr').find('.price').text() ).toFixed(2) ;
         dom.closest('tr').find('.subprice').text(subtotal.toFixed(2))
    }


    // 删除
    $('.del').click(function() {
        $(this).closest('tr').remove()
    })
    
    //计算总价\
    function calcToatalprice(){

        // 定义变量保持总价
        var TotalPrice = 0;

        $bodyInput.each(function(i,input){
        

            if ($(input).prop('checked')) {
                TotalPrice += parseFloat( $(input).closest('tr').find('.subprice').text() )
            }
            
            
        })
        
        // 把总价渲染到对应位置
        $('.Bigprice').text(TotalPrice.toFixed(2))
        
    }
   
})