/* Codewars
ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar 
cipher.

Create a function that takes a string and returns the string ciphered with 
Rot13. If there are numbers or special characters included in the string, they 
should be returned as they are. Only letters from the latin/english alphabet 
should be shifted, like in the original Rot13 "implementation".

CiphersFundamentals*/
function rot13(msg){
  let result = [];
  for(let i = 0; i < msg.length; i++) {
    if(msg[i] >= 'a' && msg[i] <= 'z')
      result.push(String.fromCharCode((msg[i].charCodeAt(0)-97+13)%26+97));
    else if(msg[i] >= 'A' && msg[i] <= 'Z')
      result.push(String.fromCharCode((msg[i].charCodeAt(0)-65+13)%26+65));
    else
      result.push(msg[i]);
  }
  return result.join('');
}

// Testing
console.log(rot13("test") == "grfg");
console.log(rot13("Test") == "Grfg");
console.log(rot13(" test,  Test!") == " grfg,  Grfg!");