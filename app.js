  

var score =0  ;
let totalscore= 5;
 alert ("i will ask you some questions and yo've to give answer in yes or no");
let qn1 = "prompt means take input from user";
let qn2 = "++i is a post increment" ;
let qn3 = "javascript runs line by line";
let qn4 = "alert means to pop up";
let qn5 = "concatenate means to add two strings?";

let ans1 = "yes";
let ans2 = "no";
let ans3 = "yes";
let ans4 = "yes";
let ans5 = "yes";

 const res1= prompt(qn1);
 const res2=prompt(qn2);
 const res3=prompt(qn3);
 const res4=prompt(qn4);
 const res5= prompt(qn5);

 if ( res1 === ans1)
 {
    score++
 }
 
 if ( res2=== ans2)
 {
    score++
 }
 if ( res3 === ans3)
 {
    score++
 }
 if ( res4 === ans4)
 {
    score++
 }
 if ( res5 === ans5)
 {
    score++
 }
 let perc= (score / totalscore)*100 
 alert  ("your percentage is :  " + perc +"%" );