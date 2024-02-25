const check = document.getElementById("check");
const sub = document.getElementById("sub");
const verify = document.getElementById("verify");
const captcha = document.getElementById("captcha2");
const img = [[document.getElementById("11"),document.getElementById("12"),document.getElementById("13")],
             [document.getElementById("21"),document.getElementById("22"),document.getElementById("23")],
             [document.getElementById("31"),document.getElementById("32"),document.getElementById("33")]];
let imgbool =[[false,false,false],
              [false,false,false],
              [false,false,false]];
let imgnum = 1;
let correct;
let captext = document.getElementById("itype");
captcha.style.visibility = "hidden";
check.onclick = function(){
    if(check.checked){
        check.disabled = true;
        setTimeout(() => {
            
            captcha.style.visibility = "visible";
        }, 1000);
    }
    else{
        console.log("off");
    }
}
//step 2 captcha
function imgcheck (r,c,){
    if(imgbool[r][c] == false){
        imgbool[r][c] = true;
        img[r][c].style.transform = `scale(${0.8})`;
    }
    else{
        imgbool[r][c] = false;
        img[r][c].style.transform = `scale(${1})`;
    }
}  
img[0][0].addEventListener("click", ()=>{imgcheck(0,0)});
img[0][1].addEventListener("click", ()=>{imgcheck(0,1)});
img[0][2].addEventListener("click", ()=>{imgcheck(0,2)});
img[1][0].addEventListener("click", ()=>{imgcheck(1,0)});
img[1][1].addEventListener("click", ()=>{imgcheck(1,1)});
img[1][2].addEventListener("click", ()=>{imgcheck(1,2)});
img[2][0].addEventListener("click", ()=>{imgcheck(2,0)});
img[2][1].addEventListener("click", ()=>{imgcheck(2,1)});
img[2][2].addEventListener("click", ()=>{imgcheck(2,2)});
class img_captcha{
    
    
    captcha2_fill(){
        img[0][0].src = "/captcha png/dirt 1.jpg";
        img[0][1].src = "/captcha png/taal lake 3.jpg";
        img[0][2].src = "/captcha png/taal lake 1.jpg";
        img[1][0].src = "/captcha png/tawilis1.jpg";
        img[1][1].src = "/captcha png/dirt 2.jpg";
        img[1][2].src = "/captcha png/dirt 4.jpg";
        img[2][0].src = "/captcha png/taal lake 2.jpg";
        img[2][1].src = "/captcha png/dirt 3.jpg";
        img[2][2].src = "/captcha png/tawilis2.jpg";
        imgnum++;
    }
    captcha3_fill(){
        img[0][0].src = "/captcha png/tarsier 2.jpg";
        img[0][1].src = "/captcha png/soup1.jpg";
        img[0][2].src = "/captcha png/grass.jpg";
        img[1][0].src = "/captcha png/grass2.jpg";
        img[1][1].src = "/captcha png/cutting.jpg";
        img[1][2].src = "/captcha png/soup2.jpg";
        img[2][0].src = "/captcha png/tarsier 1.webp";
        img[2][1].src = "/captcha png/grass3.jpg";
        img[2][2].src = "/captcha png/cutting 2.jpg";
        imgnum++;
    }
    captcha4_fill(){
        img[0][0].src = "/captcha png/forest1.jpg";
        img[0][1].src = "/captcha png/forest5.webp";
        img[0][2].src = "/captcha png/forest3.jpg";
        img[1][0].src = "/captcha png/forest4.jpg";
        img[1][1].src = "/captcha png/forest2.jpg";
        img[1][2].src = "/captcha png/forest3.jpg";
        img[2][0].src = "/captcha png/forest1.jpg";
        img[2][1].src = "/captcha png/forest5.webp";
        img[2][2].src = "/captcha png/forest4.jpg";
        imgnum++;
    }
    captcha5_fill(){
        img[0][0].src = "/captcha png/white1.jpg";
        img[0][1].src = "/captcha png/big bird.jpg";
        img[0][2].src = "/captcha png/PHP Eagle 2.jpg";
        img[1][0].src = "/captcha png/big bird.jpg";
        img[1][1].src = "/captcha png/white1.jpg";
        img[1][2].src = "/captcha png/PHP Eagle.jpg";
        img[2][0].src = "/captcha png/kfc.jpg";
        img[2][1].src = "/captcha png/white1.jpg";
        img[2][2].src = "/captcha png/kfc.jpg";
        imgnum++;
    }
    captcha6_fill(){
        img[0][0].src = "/captcha png/taal lake 1.jpg";
        img[0][1].src = "/captcha png/white1.jpg";
        img[0][2].src = "/captcha png/philippines flag.png";
        img[1][0].src = "/captcha png/white1.jpg";
        img[1][1].src = "/captcha png/philippines flag.png";
        img[1][2].src = "/captcha png/white1.jpg";
        img[2][0].src = "/captcha png/taal lake 2.jpg";
        img[2][1].src = "/captcha png/white1.jpg";
        img[2][2].src = "/captcha png/asia.jpg";
        imgnum++;
    }
    captcha7_fill(){
        img[0][0].src = "/captcha png/white1.jpg";
        img[0][1].src = "/captcha png/A.png";
        img[0][2].src = "/captcha png/white1.jpg";
        img[1][0].src = "/captcha png/white1.jpg";
        img[1][1].src = "/captcha png/B.jpg";
        img[1][2].src = "/captcha png/white1.jpg";
        img[2][0].src = "/captcha png/white1.jpg";
        img[2][1].src = "/captcha png/C.jpg";
        img[2][2].src = "/captcha png/white1.jpg";
        imgnum++;
    }
    captcha8_fill(){
        img[0][0].src = "/captcha png/C.jpg";
        img[0][1].src = "/captcha png/A.png";
        img[0][2].src = "/captcha png/B.jpg";
        img[1][0].src = "/captcha png/A.png";
        img[1][1].src = "/captcha png/B.jpg";
        img[1][2].src = "/captcha png/B.jpg";
        img[2][0].src = "/captcha png/C.jpg";
        img[2][1].src = "/captcha png/C.jpg";
        img[2][2].src = "/captcha png/B.jpg";
        imgnum++;
    }
    captcha9_fill(){
        img[0][0].src = "/captcha png/white1.jpg";
        img[0][1].src = "/captcha png/white1.jpg";
        img[0][2].src = "/captcha png/white1.jpg";
        img[1][0].src = "/captcha png/white1.jpg";
        img[1][1].src = "/captcha png/white1.jpg";
        img[1][2].src = "/captcha png/white1.jpg";
        img[2][0].src = "/captcha png/white1.jpg";
        img[2][1].src = "/captcha png/white1.jpg";
        img[2][2].src = "/captcha png/white1.jpg";
        imgnum++;
    }
    captcha1_check(callback){
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        if(imgbool[0][1] == true && imgbool[1][2] == true) {
            correct++;
        }
        console.log(correct);
        if(correct==7&&imgbool[0][1]==true&&imgbool[1][2]==true&&imgbool[2][0] == true){
            imgcheck(0,1)
            imgcheck(1,2);
            imgcheck(2,0);
            captext.textContent = "Tawilis";
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha2_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        if(imgbool[1][0] == true && imgbool[2][2] == true) {
            correct++;
        }
        console.log(correct);
        if(correct==8&&imgbool[1][0]==true&&imgbool[2][2]==true){
            imgcheck(1,0);
            imgcheck(2,2);
            captext.textContent = "Tarsier";
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha3_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        if(imgbool[0][0] == true && imgbool[2][0] == true) {
            correct++;
        }
        console.log(correct);
        if(correct==8 &&imgbool[0][0]==true&&imgbool[2][0]==true){
            imgcheck(0,0);
            imgcheck(2,0);
            captext.textContent = "Veit Cong";
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha4_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        console.log(correct);
        if(correct==0){
            imgcheck(0,0);
            imgcheck(0,1);
            imgcheck(0,2);
            imgcheck(1,0);
            imgcheck(1,1);
            imgcheck(1,2);
            imgcheck(2,0);
            imgcheck(2,1);
            imgcheck(2,2);
            captext.textContent = "Question 1 answer";
            alert("Go to inspect tab then console");
            console.log("Answer the question by clicking on the img on the captcha that correspond with the question answers.\nQuestion #1 what is true on the new ₱1000 bill\nA. Philippine Eagle\nB. BIG A** BIRD\nC. KFC");
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha5_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        console.log(correct);
        if(correct == 7 &&imgbool[0][2] == true && imgbool[1][2] == true){
            imgcheck(0,2);
            imgcheck(1,2);
            captext.textContent = "Question 2 answer";
            console.log("Question #2 Where is tawilis located?\nA. Taal lake\nB. Philippines\nC. Asia");
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha6_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        console.log(correct);
        if(correct == 7 && imgbool[0][0] == true && imgbool[2][0] == true){
            imgcheck(0,0);
            imgcheck(2,0);
            captext.textContent = "Question 3 answer";
            console.log("Question #3 What are Endemic animals?\nA. Endemic animals are animals found in certain areas\nB. Colloid is Endemic animals\nC. Endemic animals are animals that are indemic");
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha7_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        console.log(correct);
        if(correct == 8 && imgbool[0][1] == true){
            imgcheck(0,1);
            //imgcheck(1,1);
            //imgcheck(2,1);
            captext.textContent = "Question 4 answer";
            console.log("Question #4 what does agila eat?\nA. fish and insects\nB. big birds, snakes, and lizards\nC. All of the above");
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha8_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        console.log(correct);
        if(correct == 5 && imgbool[0][2] == true && imgbool[1][2] == true && imgbool[2][2] == true && imgbool[1][1]== true){
            imgcheck(0,2);
            imgcheck(2,2);
            imgcheck(1,2);
            imgcheck(1,1);
            captext.textContent = "Final Question answer";
            console.log("Final Question Who photograph the Tamaraw, Philippine Crocodile, and Tawilis and who CC it?\nA. Stanly. CC by-book\nB. Gregg Yan. CC by-SA 3.0\nC. Gregg Yan CC by-SA 3.0");
            callback();
        }
        else{
            alert("Verifcation failed try again alien!");
        }
    }
    captcha9_check(callback) {
        correct = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (imgbool[i][j] == false) {
                    correct++;
                }
            }
        }
        console.log(correct);
        if(correct == 2 && imgbool[0][1] == false && imgbool[1][0] == false){
            imgcheck(0,0);
            imgcheck(0,2);
            imgcheck(1,1);
            imgcheck(1,2);
            imgcheck(2,0);
            imgcheck(2,1);
            imgcheck(2,2);
            callback();
            captext.textContent = "Ads";
            setTimeout(() => {
                alert("Captcha beaten! Good for you!");
            }, 1000);
        }
    }
}
const Captcha_img = new img_captcha();
verify.onclick = function(){
    switch (imgnum) {
        case 1:
            Captcha_img.captcha1_check(Captcha_img.captcha2_fill);
            break;
        case 2:
            Captcha_img.captcha2_check(Captcha_img.captcha3_fill);
            break;
        case 3:
            Captcha_img.captcha3_check(Captcha_img.captcha4_fill);
            break;
        case 4:
            Captcha_img.captcha4_check(Captcha_img.captcha5_fill);
            break;
        case 5:
            Captcha_img.captcha5_check(Captcha_img.captcha6_fill);
            break;
        case 6:
            Captcha_img.captcha6_check(Captcha_img.captcha7_fill);
            break;
        case 7:
            Captcha_img.captcha7_check(Captcha_img.captcha8_fill);
            break;
        case 8:
            Captcha_img.captcha8_check(Captcha_img.captcha8_fill);
            break;
        case 9:
            Captcha_img.captcha9_check(Captcha_img.captcha9_fill);
            break;
        default:
            console.log("Empty Text");
            break;
    }
}
