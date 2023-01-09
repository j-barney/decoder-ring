
const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //return early for errors in shift parameter
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false}
    // if decoding, multiply shift by -1 to go the opposite direction
    if (!encode) {
      shift = shift * -1
    }
    //convert input to lower case and set up holder variable as well as alphabet to reference
    const lowerCaseString = input.toLowerCase()
    const alphaRef = "abcdefghijklmnopqrstuvwxyz"
    let encodedString = ""
    //for loop through input length
    for (let i = 0; i < lowerCaseString.length; i++) {
      //assign index to variable
     const currentChar = lowerCaseString[i]
     //if alphabet includes current index add the shift to the index
     if (alphaRef.includes(currentChar)) {
      let shiftIndex = alphaRef.indexOf(currentChar) + shift
      if (shiftIndex > 25) {
        shiftIndex -= 26
      }
      if (shiftIndex < 0) {
        shiftIndex += 26
      }
      encodedString += alphaRef[shiftIndex]
      }
      else {
        encodedString += currentChar
      }
     }
     return encodedString
    }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };