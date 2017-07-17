
// const fn = n=>{
//     let answer = [];

//     for(let ix = 0;ix < n;){
//         let element = Math.floor(Math.random() * 31) + 2;

//         if(answer.indexOf(element) == -1){
//             answer.push(element);
//             ix++;
//         }
//     }
//     return answer;
// };

// console.log(fn(3));

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let answer = [];
    let flag = true;
    let index = 0;
    let dictionary = ['qwertyuiop','asdfghjkl','zxcvbnm'];
    for(let word of words){
        console.log('word is '+ word);
        let lWord = word.toLowerCase();
        console.log('lWord is '+ lWord);
        for(let i = 0;i < 3;i++){
            if(dictionary[i].indexOf(lWord[0])!== -1){
                index = i;
                break;
            }
            console.log('i:'+ i);
            console.log(word);
        }
        
        console.log('index:'+index);
        flag = true;
        for(let ix = 0;ix < lWord.length;ix++){
            if(dictionary[index].indexOf(lWord[ix])==-1){
                flag = false;
                break;
            }
        }
        
        if(flag){
            answer.push(word);
        }
        
    }
    
    return answer;
};

console.log(findWords(['hello','alaska','dad','peace']));