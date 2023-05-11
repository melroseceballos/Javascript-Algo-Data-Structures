var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
  
    let res = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
  
    while (left <= right && top <= bottom) {
      // Traverse from left to right
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
  
      // Traverse from top to bottom
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      right--;
  
      if (top <= bottom) {
        // Traverse from right to left
        for (let i = right; i >= left; i--) {
          res.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      if (left <= right) {
        // Traverse from bottom to top
        for (let i = bottom; i >= top; i--) {
          res.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return res;
  };