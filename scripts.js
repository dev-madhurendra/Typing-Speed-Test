const texts = [
    {_id:1,text:"thin reply if here soup well model ruler dream your true hat want sun forest live smell share north shape home small bean model wife their five sword half now sunny of kill ocean"}
    ,
    {_id:2,text:"street tool poor tidy key gift shop hole house meat early queen plenty hat base lip dream wind area grave fever forget large serve punish these chase copper fold path bridge long shout born"}
    ,
    {_id:3,text:"under rude trust right earth sunny smile key see begin flag catch if stop hope ball dirty keep swim place skirt rock open obey copper kind bird like peace bridge else zero woman anyone"}
    ,
    {_id:4,text:"into power shade my uncle drop boil gift worry day want thin float room table arrive four best fast four world very expect safe fly usually sit soup dog wire friend boat serve prison"}
    ,
    {_id:5,text:"body brave great where every news area cap case weak me zero pull tall catch aunt sheet iron at heart keep news teach die man foot glad end taste king hour worry toe our"}
    ,
    {_id:6,text:"place lion sail nose down forest sport are shade mouth day car voice thin common half not send fire some dark circle tall count lie shade toe hill ball simple fight only school too"}
    ,
    {_id:7,text:"lonely cut bright meal hope far often he there drive day skirt dry game lesson needle along pass three game box while warm few place tell some usually sky lamp count float prince yard"}
    ,
    {_id:8,text:"our we type pay build mean win third forget stone smell try laugh flat grow away money fool drink bag east on hall she home steal home hand push yell east beer colour arm"}
    ,
    {_id:9,text:"or film compare title bone offer point sugar raise show shake tell bright famous best fool fork sound usual find wear go know empty which meet again young here breathe light skin tear own"}
    ,
    {_id:10,text:"before car twice colour heavy jelly tooth want meat king silver radio prison equal air last from list shout name easy can for enemy on arrive lesson choice away our enjoy come open win"}
]


const text_container = document.querySelector('.text-container');
let text_arr = [];
// for (const key in texts) {
//     if (Object.hasOwnProperty.call(texts, key)) {
//         const element = texts[key];
//         text_arr = element["text"].split(" ");
        

//     }
// }
window.addEventListener("load", (event) => {
    let getRandomIndex = Math.floor(Math.random()*(texts.length));
    // console.log(getRandomIndex);
    let element = texts[getRandomIndex];
    text_arr = element["text"].split(' ');
    // console.log(text_arr);
    for(let i=0;i<text_arr.length;i++){
        let className = `first${i+1}`;
        document.querySelector(`.${className}`).innerHTML = text_arr[i];
    }
  });

// typing speed test logic code
const input = document.querySelector('#inputs');

// select times when pro and begginer is clicked
const times = document.querySelector('.times');
let typingTime = 30;
let beginner = document.querySelector('.beginner_p');
let pro = document.querySelector('.pro_p');


const selectBeg = () => {
    typingTime = 30;
    times.innerText = `${typingTime}s`;
    if(!beginner.classList.contains('add-underline') && pro.classList.contains('add-underline')){
        beginner.classList.add('add-underline');
        pro.classList.remove('add-underline');
    }
    else{
        
        beginner.classList.add('add-underline');
    }
}

const selectPro = () => {
    typingTime = 15;
    times.innerText = `${typingTime}s`;
    if(!pro.classList.contains('add-underline') && beginner.classList.contains('add-underline')){
        pro.classList.add('add-underline');
        beginner.classList.remove('add-underline');
    }else{
        pro.classList.add('add-underline');

    }
}

// matched string
const matchedString = (a,b) =>{
    if(a===b){
        return true;
    }
    return false;
}



let typingStartTime;
let endTime;
let isTypingStart = false;
let str1 = "";
let str2 = "";
let index = 0;
let firstTimeKeyUp = false;
let isIntervalClear = false;
let cw = 0;

if(firstTimeKeyUp===false){
    input.onkeyup = function(){
        // console.log(input.value);
        let startTime = typingTime;
        // console.log(interval);
    
        if(firstTimeKeyUp===false){
            
            firstTimeKeyUp = true;    
            const startTimer = setInterval(() => {
                // console.log(startTime);
                if(startTime==0){
                    let d = new Date();
                    endTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                    // console.log(endTime);
                    document.querySelector('.beginner-and-pro-buttons').style.visibility = "visible";
                    isIntervalClear = true;
                    clearInterval(startTimer);
                }
                if(isTypingStart===false){
                    let d = new Date();
                    typingStartTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                    // console.log(typingStartTime);
                    document.querySelector('.beginner-and-pro-buttons').style.visibility = "hidden";
                    isTypingStart = true;
                }
        
                // for(let i=0;i<text_arr.length;){
                //     input.onekeypress = (e) =>{
                //         console.log(e.keyCode);
                //     }
                // }
        
                times.innerText = `${startTime}s`;
                startTime = startTime-1;
            }, 1000);
        }else{
            if(isIntervalClear===false){
                if(str1.trim().length>=text_arr[index].length){
                    if(str1.trim()===text_arr[index].trim()){
                        document.querySelector(`.first${index+1}`).style.color = "green";
                        cw++;
                        document.querySelector('.cw').innerText = `${cw}`
                    }else{
                        document.querySelector(`.first${index+1}`).style.color = "red";
                    }
                    console.log(text_arr[index] , index , '->' , str1);
                    input.value = '';
                    str1 = '';
                    index++;
                }
                str1 = input.value;
            }else{
                input.style.visibility = "hidden";
                let speed = Math.round(cw*60/typingTime);
                document.querySelector('.timesup').innerText = `WPM`;
                times.innerText = `${speed}`
                // console.log(text_arr.length);

            }
            // console.log(str1);            
            
        }
        
    }
    
}


// input.onkeyup = () => {
//     function sayHi() {
//         console.log(`Hi`);
//     }
// }

function reloadAgain(){
    window.location.reload();
}



// for themes
const select = document.querySelector('#select');
    


// for footer
let d = new Date();
const footer = document.querySelector('.footer')
footer.innerText +=" " +  d.getFullYear();


// change Theme
const color = ["#66545e","#aa6f73","#eea990",
                ,"#0d1137","#077b8a","#3b4d61","#243763","#181D31","#434242","#A555EC","#FF6363"];
let size = color.length;
function changeTheme(){
    document.querySelector('body').style.backgroundColor = color[Math.round(Math.random()*size)];
}
