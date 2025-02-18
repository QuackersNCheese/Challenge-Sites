/* Codewars
An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a string that 
contains only letters is an isogram. Assume the empty string is an isogram. 
Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
StringsFundamentals*/
const isIsogram = s => [...new Set(s.toLowerCase())].join('') == s.toLowerCase();

// Testing
console.log(isIsogram("Dermatoglyphics") == true ? "Pass" : "Fail");
console.log(isIsogram("isogram") == true ? "Pass" : "Fail" );
console.log(isIsogram("aba") == false ? "Pass" : "Fail"  );
console.log(isIsogram("moOse") == false ? "Pass" : "Fail"  );
console.log(isIsogram("isIsogram") == false ? "Pass" : "Fail" );
console.log(isIsogram("") == true ? "Pass" : "Fail" );