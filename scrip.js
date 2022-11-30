
// var myname = prompt("請輸入你的名子");
// document.write("你的名子"+myname);

// var num1 = prompt("請輸入數字");
// var num2 = prompt("請輸入數字");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// document.write(num1+num2);

// function maxNum(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         return num1; 
//     }else if(num2>num1 && num2>num3){
//         return num2; 
//     }else
//         return num3; 
// }
// document.write(maxNum(100,99,5));

// var movie = {
//     title:"黑豹2：瓦干達萬歲",
//     maker:"漫威影業",
//     duration:"161分鐘",
//     actors:[
//         {
//             name:"Letitia Michelle Wright",
//             age:29,
//             is_male:false
//         },
//         {
//             name:"Lupita Nyong'o",
//             age:39,
//             is_male:false
//         },
//         {
//             name:"Tenoch Huerta Mejía",
//             age:41,
//             is_male:true
//         }
//     ]
// };
// document.write(movie.actors[0].name);

var password = 123456;
var input;
var entry_count = 0;/* 一開始登入次數 */
var entry_limit = 3;/* 登入次數 */
var out_of_limit = false;/* 登入超過次數 */
while(password!=input &&!out_of_limit){
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt("請輸入密碼");
    }
    else{
        out_of_limit=true;
    }
}
if(out_of_limit){
    alert("超過登入次數");
}else{
    alert("登入成功");
}