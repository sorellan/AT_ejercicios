nuevafrase();
function nuevafrase(){
         var words = [
           ["The table", "My uncle", "A book", "The road", "Music"],
           ["talks", "knows", "thinks", "works", "runs", "eats"],
           ["fast", "low", "far away", "hard", "in pijama", "while dances cha-cha-cha"]
         ];
         var sentence = document.getElementById("sentence");
         var newwords = [];
         for(var i=0;i<words.length;i+=1){
           newwords.push(words[i][Math.floor(Math.random() * words[i].length)]);
         }
         sentence.innerHTML = newwords.join(" ");
       };

