player1_name=localStorage.getItem('player1_name');
player2_name=localStorage.getItem('player2_name');
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+' : ';
document.getElementById("player2_name").innerHTML=player2_name+' : ';
document.getElementById('player1_score').innerHTML=player1_score;
document.getElementById('player2_score').innerHTML=player2_score;
document.getElementById('question_tag').innerHTML="Question Turn- "+player1_name;
document.getElementById("answer_tag").innerHTML="Answer Turn- "+player2_name;
function Submit(){
    getWord=document.getElementById("word").value
    word=getWord.toLowerCase()
    console.log(word)
    letter1=word.charAt(1)
    console.log(letter1)
    lengthD=Math.floor(word.length/2)
    letter2=word.charAt(lengthD)
    console.log(letter2)
    lengthS=word.length-1
    letter3=word.charAt(lengthS)
    remove1=word.replace(letter1,'_')
    remove2=remove1.replace(letter2,"_")
    remove3=remove2.replace(letter3,'_')
    console.log(remove3)
    question="<h4>Q. "+remove3+"</h4> <br>"
    input="Answer: <input type='text' id='answer'> <br> <br>"
    checkBttn="<button onclick='check()' class='btn btn-info'>Submit</button>"
    total=question+input+checkBttn;
    document.getElementById("output").innerHTML=total
    document.getElementById("word").value=""
    document.getElementById('message').innerHTML=''
}
question_turn='player_1'
answer_turn='player_2'
function check(){
    getAnswer=document.getElementById('answer').value
    answer=getAnswer.toLowerCase()
    console.log(answer)
    if (answer==word) {
        if (answer_turn=='player_1') {
         player1_score=player1_score+1
         document.getElementById('player1_score').innerHTML=player1_score
         document.getElementById('message').innerHTML='CONGRATS '+player1_name+', YOU ARE CORRECT!'

        } else {
            player2_score=player2_score+1
            document.getElementById('player2_score').innerHTML=player2_score
            document.getElementById('message').innerHTML='CONGRATS '+player2_name+', YOU ARE CORRECT!'
        }
    }
    else{
        if (answer_turn=='player_1') {
            player1_score=player1_score-1
            document.getElementById('player1_score').innerHTML=player1_score
            document.getElementById('message').innerHTML='OOPS '+player1_name+', YOU ARE INCORRECT, BETTER LUCK NEXT TIME.'
   
           } else {
               player2_score=player2_score-1
               document.getElementById('player2_score').innerHTML=player2_score
               document.getElementById('message').innerHTML='OOPS '+player2_name+', YOU ARE INCORRECT, BETTER LUCK NEXT TIME.'
           }   
    }
   if (question_turn=='player_1') {
     question_turn='player_2'  
     document.getElementById('question_tag').innerHTML="Question Turn- "+player2_name;
   } else {
    question_turn='player_1'
    document.getElementById('question_tag').innerHTML='Question Turn- '+player1_name   
   }
   if (answer_turn=='player_1') {
     answer_turn='player_2'
     document.getElementById('answer_tag').innerHTML='Answer Turn- '+player2_name  
   } else {
    answer_turn='player_1'
    document.getElementById('answer_tag').innerHTML='Answer Turn- '+player1_name   
   }
   document.getElementById('output').innerHTML=''
}
