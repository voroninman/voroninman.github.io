const grid = [
    '=',
    'X',
    '==',
    'XX',
    '=X',
    'X=',
    '====XX===',
    'X========',
    '========X',
    '=========',
    'X=======X',
    '==X===X==',
].map(x => x.split(''))
// console.log(grid)

const [open, close] = ['<seq>', '</seq>']

const reduced = grid.map(cells => [cells.join(''), cells.reduce((acc, curr, currInx, cells) => {
    
})])
`
console.log(reduced)

