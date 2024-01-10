var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort()
    original = original.toLowerCase().split('').sort()
    return test.join('') === original.join('') ? true : false
  }
  