import "./css/index.scss";
import "./sprite/sprite.css";

console.log('hello webpack');

()=>{
    let name = "小明";
    let str = `${name}，你好。`;
    console.log(str);
}

$('h1')
    .mousemove(function(){
        $(this).css('color','green')
    })
    .mouseleave(function(){
        $(this).css('color','red')
    })