// Callback hell example (Nested Callbacks)
function string(){
    document.body.style.backgroundColor = 'Red';
    document.body.style.transition = '1s';
    setTimeout(() => {
        document.body.style.backgroundColor = 'Blue';
        setTimeout(() => {
            document.body.style.backgroundColor = 'Green';
            setTimeout(() => {
                document.body.style.backgroundColor = 'Yellow';
            }, 2000);
        }, 2000);
    }, 2000);
}
string();

// Using promises
const color2 = async ()=>{

    let color = document.body.style.backgroundColor;       
        

    await new Promise((res,rej)=>{setTimeout(()=>{res(color = 'red')},1000)});
    await new Promise((res,rej)=>{setTimeout(()=>{res(color = 'blue')},1000)});
}
color2();


// Easy way to use promise
const color = async (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay); 
    })
}

async function Rainbow(){
    await color('red', 1000);
    await color('green', 1000);
    await color('violet', 1000);
    await color('blue', 1000);
    await color('yellow', 1000);
    await color('indigo', 1000);
    await color('darkblue', 1000);
    await color('purple', 1000);
}

Rainbow()
