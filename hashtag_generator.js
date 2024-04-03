

function hashTag_Generator (args1) {
    if(args1.trim() === "" || args1.length > 280) {
        return false;
    }

//    return "#"+(args1.trim().split(" ").map((i)=>{
//         return i[0].toUpperCase() + i.substr(1);
//     })).join("")
return args1.trim().split(" ").reduce((agg,currWord) => agg[0].toUpperCase() + agg.substr(i) + currWord[0].toUpperCase() + currWord.substr(i), "")
}

console.log(hashTag_Generator("my name is khalil pathan"));