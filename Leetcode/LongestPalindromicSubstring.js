function longestPalindrome(s) {
    let start = 0;
    let maxLength = 1;

    // Helper function to expand around center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Check for palindromic substrings with odd length
        expandAroundCenter(i, i);

        // Check for palindromic substrings with even length
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
}