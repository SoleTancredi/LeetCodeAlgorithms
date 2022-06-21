var isPalindrome = function(x) {
    
    let string = x.toString();
    let code;
    let str1 ='';
    let str2 = '';
    
    for(let i = 0; i < string.length; i++)
    {
        code = string.charCodeAt(i);
        str1 = str1.concat(code.toString());
    }

    for(let j = string.length-1; j > -1; j--)
    {
        code = string.charCodeAt(j);
        str2 = str2.concat(code.toString());

    }

    if(str1 != str2)
    {
        return false 
    }
 
    return true
};

console.log(isPalindrome(2332));