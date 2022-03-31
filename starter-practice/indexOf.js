function indexOf(isMatch, elements) {
    if (Array.isArray(elements)) {
      for (let index = 0, length = elements.length; index < length; index++) {
          //here elements array is not needed but doesn't hurt even if it is present
        if (isMatch(elements[index], index, elements)) {
          return index;
        }
      }
    }
    return -1; //if all false
  }
  
  module.exports = indexOf;