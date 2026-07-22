function calc(){
    let m = Number(document.querySelector('input[name="left"]').value);
    let n = Number(document.querySelector('input[name="right"]').value);
    let answer = Number(m+n);
    let span = document.querySelector("span#answer");
    span.textContent = answer;
}
b=document.querySelector('button#calc');
b.addEventListener('click',calc); 