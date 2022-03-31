function indexOf(compare, sortedElements) {
  if(Array.isArray(sortedElements)) {
    let lowerIndex = 0;
    let higherIndex = sortedElements.length - 1;
    while(lowerIndex <= higherIndex) {
      let index = Math.floor((higherIndex + lowerIndex)/2);
      
      const comparison = compare(sortedElements[index], index, sortedElements) //from main.js
//searches for the item in the particular index found by middle index if matching from main.js hits 0 and returns index
      if(comparison === 0) {
        return index;
      }
      //if supposed in the array index is greater then lower index is moved right by 1 position
        if(comparison > 0) {
          lowerIndex = index +1
        }
//       if whatever in the array index is less than expected then higher is moved left once from the middle(index) found before
        if(comparison < 0) {
          higherIndex = index -1
        }
      }
    }
    return -1;
  }


module.exports = indexOf;
