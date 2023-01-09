// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26 || Array.from(new Set(alphabet)).length !== 26) return false
    let refAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = alphabet.split('')
    input = input.toLowerCase()
    let encoder = {}
    let decoder = {}
    let sEncodedString = ''
    refAlphabet.split('').forEach((letter, index) => {
      encoder[letter] = alphabet[index]
      decoder[alphabet[index]] = letter
    })
    if (!encode) encoder = decoder
    input.split('').forEach(input => {
      sEncodedString += input === ' ' ? ' ' : encoder[input]
    })
    return sEncodedString
    

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
