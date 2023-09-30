let string=aabaa
let count=1
for (let i=0;i<string.length;i++){
    if(string[i]==string[string.length(1+i)]){
        continue;
    }else if(string[i]==string[string.length(i+2)]){
        string.replace(string[string.length][i+2])
        count++
    }else{
        string.replace(string[i],'')
        count++
    }
}
if(count==1){
console.log(1)
}else{
    console.log(count)
}

