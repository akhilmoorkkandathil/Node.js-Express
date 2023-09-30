// var isValid = function(s) {
//     for (let i=0;i<s.length;i++){
//             if(s[i]=="("){
//                 console.log('hello')

// const { log } = require("console");

                
//                s= s.replace(")","")
//                 console.log(s)
//             }else if(s[i] =='{'){
//                 console.log('hello')
//                 s=s.replace('}','')
                
//             }else if(s[i] =='['){
//                 console.log('hello')
//                 s=s.replace(']','')
                
//             }
//             console.log(s)
            
//     }
//     if(s.length/2!=1){
//         return false
//     }else{
//         return true
//     }

    
// };

// let s="({)}"

// console.log(isValid(s));


// var removeDuplicates = function(nums) {
//     let count=0;
//     for(let i=0;i<nums.length;i++){
//         let value=nums[i]
//         for(j=i+1;j<nums.length;j++){
//             if(nums[j]===value && nums[i]!="_"){
//                nums[j]='_'
//                count++
//             }
//         }
        
//     }
//     let sorted=nums.sort()
//     return sorted.sort((a,b)=>(a-b))
// };

// const result=removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// console.log(result)



// var merge = function(nums1, m, nums2, n) {
//     let array=nums1.slice(0,m).concat(nums2.slice(0,n))
//     let result= array.sort((a,b)=>(a-b))
//     return result
    
// };


// const result = merge([1,2,3,0,0,0],3,[2,5,6],3)
// console.log(result)

// var isAnagram = function(s, t) {
//     if(s.length!=t.length){return false}
//    for(let i=0;i<s.length;i++){
//        for(let j=0;j<t.length;j++){
//           if(s[i]==t[j]){
            
//           t=t.replace(t[j],'')
//           s=s.replace(s[i],'')
//           console.log(s)
//           console.log(t)
//           break
           
//           }
          
//        }
//        i--
//    }
   
//    if(t.length===0 && s.length==0){
//        return true
//    }else{
//        return false
//    }
   
// };

// console.log(isAnagram('nagaram','nagaram'))


// var plusOne = function(digits) {
//     let add=''
//     let val=digits.map((x)=>{
         
//          return 1+parseInt(val[val.length-1])
         
         
//     })
// };

// console.log(plusOne([9,9]))



// const myfunction=(num)=>{
    
// let string=num.toString()
// for (let i=0;i<string.length;i++){
//     if(string[i]==6){
//         var value=string.replace('6',9)
//         break        
//     }
// }
// return parseInt(value)
// }
// console.log(myfunction([9696969]))


// let n = 15
// let array=[]
// for( let i=0;i<n-1;i++){
//     array.push(i)
// }
// var value=array.reduce((cum,cur)=>{
//     return cum+cur
// })
// array.push(-value)
// console.log(array)



//1331
// let array=[10,15,20,5]
// let sorted=array.sort((a,b)=>a-b)
// for(let i=1;i<=array.length;i++){
//     let value=array[i]
//     for(let j=i+1;j<=array.length;j++){
//           if (value>array[j]){
//             value=array[j]
//             console.log(value)
//           }
//     }
// }
// console.log(sorted)


// let string='babbababa' 
// let count=0
// for (let i=0;i<string.length;i++){
//     if(string[i]==string[string.length-1-i]){
//         console.log(string)
//         continue;
        
//     }else if(string[i]==string[string.length-2-i]){
//         string=string.replace(string[string.length-1-i],'')
//         console.log(string)
//         count++
//     }else{
//         string=string.replace(string[i],'')
//         console.log(string)
//         count++
//     }
// }
// if(count==1){
// console.log(1)
// }else{
//     console.log(count)
// }



// let a = [[1,1,0,0,1],[0,0,1,1,0],[1,1,1,1,0],[0,0,0,1,0],[1,1,1,1,1]]

// const soldiers=a.map((x)=>{
//      return x.reduce((cum,cur)=>{
//         return cum+cur
//     })
// })
// console.log(soldiers);
// for(let i=0;i<a.length;i++){
//     soldiers.push([i])
// }
// console.log(soldiers);
// let sort=soldiers.sort((a,b)=>a-b)
// console.log(soldiers.indexOf(sort));

// var small =soldiers[0]
// let arr=[]
// arr.push[0]
// for(let j=0;j<soldiers.length;j++){
//     arr.push[0]
//     for (let i=0;i<soldiers.length;i++){
//         if(soldiers[i]<small){
        
//             small=soldiers[i]
//             //console.log(small)
//             arr.pop()
//             arr.push(i)
//         }
//     }
// }
// console.log(small)
// console.log(arr);

// let nums = [8,1,2,2,3]
// let a=[]

// for(let i=0;i<nums.length;i++){
//     let count=0
//     for(let j=0;j<nums.length;j++){
//     if(nums[j]<nums[i]){
//         count++
//     }
//     }
//     a.push(count)
// }
// console.log(a);

// const s='aaaabbbbcccc'
// for (var i = 0; i < s.length; i++) {
//     for(var j=i+1;j<s.length;j++){
//         if(s[i]<s[j]){
//                 console.log(s.charAt(i));
                
//         }
//     }
// }


// s.split('',',')
 
// const a=[]
// const b=[]
// a.push(s[0])

// for ( let i=0;i<s.length;i++){
//     for(let j=i+1;j<s.length;j++){
//     if(a[i]<s[j]){
//         a.push(s[j])
//         console.log(s);
//         break
//     }
//     }
//     b.push(a)
// }
// console.log(a);
// console.log(b);



// for(let i=0;i<arr.length;i++){
//     var value =arr[i]
//     var count = 1
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             count ++
//             if(arr[i]===count){
//                 console.log(value);
//             }
//         }
//     }
//     }
// const arr = [3,3,4,4,4,2,2,2]
// const sorted = arr.sort((a,b)=>a-b)
// //console.log(sorted);
// for(let i=0;i<sorted.length;i++){
//     let sum = sorted[i]
//     for(let j=i+1;j<sorted.length;j++){
//         if(sorted[i]===sorted[j] ){
//             sum = sum +sorted[j]
//         }
//     }
//     if(sum/sorted[i]===sorted[i] && sorted[i]!=sorted[i+1]){
//         var result = sorted[i]
//     }
// }
// if(result){
//     console.log(result);
// }else{
//     console.log(-1);
// }


const s = 'leetccccccode'
let count=1
let val =0
for(let i=0;i<s.length;i++){

    if(s[i]==s[i+1]){
        count++
    }else{
        count=1
    }
    if(count>val){
        val=count
    }
    
}
console.log(val);



