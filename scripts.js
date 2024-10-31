// Time -> O(n) | Space -> O(1)
function isPalindrome(string) {
  let len = string.length;
  if (len === 1) return true;
  
  for (let i = 0; i < Math.floor(len/2); i++) {
    if (string.charAt(i) !== string.charAt(len - i - 1)) {
        return false;
    }
  }
  return true;
}
