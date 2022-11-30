var questions = [
    {
        prompt:"蘋果是什麼顏色?\n(a)紅色\n(b)黃色\n(c)綠色\n(d)藍色",
        answer:"a"
    },
    {
        prompt:"1公里等於幾公尺?\n(a)0.1\n(b)10\n(c)1000\n(d)100",
        answer:"c"
    },
    {
        prompt:"計程車是什麼顏色?\n(a)紅色\n(b)黃色\n(c)綠色\n(d)藍色",
        answer:"b"
    },
    {
        prompt:"香蕉是什麼顏色?\n(a)紅色\n(b)黃色\n(c)綠色\n(d)藍色",
        answer:"b"
    }, 
]

var score = 0;
for (var i = 0; i <questions.length; i++ ){
    var input = prompt(questions[i].prompt);
    if(input==questions[i].answer){
        score++;
        alert("答對了!");
    }
    else{
        alert("答錯了!");
    }
}
alert("總共答對了"+score+"題!");