function nextPalindrome(num) {
  //your JS code here.
	for(let i = ++num;i<=1000000;i++) {
		let s = i+"";
		let flag = 0;
		for(let j = 0;j<s.length/2;j++) {
			if(s.charAt(j)!==s.charAt(s.length-j-1)) {
				flag = 1;
				break;
			}
		}
		if(flag == 0) {
			return i;
		}
	}  
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
