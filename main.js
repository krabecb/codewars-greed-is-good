const arr = [2, 3, 4, 6, 2]
const arr2 = [5, 5, 5, 3, 3]
const arr3 = [1, 5, 1, 3, 4]
const arr4 = [ 1, 1, 1, 3, 3 ]

function score( dice ) {
  let pts = 0
  const hash = dice.reduce((obj, key) => {
    obj[key] = obj[key] ? obj[key] + 1 : 1
    return obj
  }, {}) 
  for (let [key, val] of Object.entries(hash)) {
    if (val >= 3) {
      switch (key) {
          case '1':
            pts += 1000
            break;
          case '2':
            pts += 200
            break;
          case '3':
            pts += 300
            break;
          case '4':
            pts += 400
            break;
          case '5':
            pts += 500
            break;
          case '6':
            pts += 600
            break;
      }
      val -= 3
    }
    if ((key === '1' || key === '5') && val < 3 && val !== 0) {
      function solveRecursively(k, v) {
        if (k === '1') { pts += 100}
        if (k === '5') { pts += 50}
        if (v === 1) return
        return solveRecursively(k, --v)
      }
      solveRecursively(key, val)
    }
  }
  return pts
}
score(arr4)