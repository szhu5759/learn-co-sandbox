const letters = ["alpha", "gamma", "delta"]

var newLetters = [...letters.slice(0, 1), 'beta', ...letters.slice(1)]

console.log(newLetters)