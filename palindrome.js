function isPalindrome(input) {
  let cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  return cleanInput === cleanInput.split('').reverse().join('');
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('level'));
console.log(isPalindrome('Computer'));