function checkBraces(string) {
    let closing = ')}]';
    let collectedBraces = [];

    if(string.length >= 1 && string.length <= 104){
        for (let i=0; i<string.length; i++){
            let lastElement = collectedBraces[collectedBraces.length-1];

                if(string[i] === '(' || string[i] === '{' || string[i] === '['){
                    collectedBraces.push(string[i]);
                }
                else if (closing.includes(string[i]) && collectedBraces.length > 0){
                    if((lastElement === '(' && string[i] === ')') || 
                    (lastElement === '{' && string[i] === '}') || 
                    (lastElement === '[' && string[i] === ']')){

                        collectedBraces.pop();
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            if (collectedBraces.length === 0){
                return true;
            }
            else {
                return false;
            }
    }
    else {
        return false;
    }
}

let str = '{{({}({}))}}';
let str1 = '()()()(({}[[))]]';
let str2 = '[[(]])';
let str3 = '{{({}({}))}'
console.log(checkBraces(str3));
console.log(checkBraces(str1));
console.log(checkBraces(str2));
console.log(checkBraces(str));