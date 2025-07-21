let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function(){
  let text = this.value
  let char  = text.length
  document.getElementById("char").innerHTML = char;

  text = text.trim()
let word  = text.split(" ")
let cleanlist = word.filter(function(e){
return e != ""
})
console.log(cleanlist)
document.getElementById("word").innerHTML = cleanlist.length
})