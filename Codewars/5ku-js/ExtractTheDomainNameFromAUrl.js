/* Codewars
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
ParsingRegular Expressions*/

/*function domainName(url) {
  let site = url.split('/').filter(x => /\./.test(x))[0];
  return site.split('.').filter(x => x != 'www')[0];
}*/

//const domainName = u => u.split('/').filter(x => /\./.test(x))[0].split('.').filter(x => x != 'www')[0];

// inspired by RobertEngel
let domainName = u => u.replace(/.+\/\/|www.|\..+/g, '');

// Testing
console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");