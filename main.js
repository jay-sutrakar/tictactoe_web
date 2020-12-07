
let filledBoxes = [ [-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
let turn = 1
const turnText = document.querySelector('#turn')
const resetGame = function () {
    filledBoxes = [ [-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
    turn = 1
    document.querySelectorAll('.c').forEach(item => {
        const p = item.querySelector('h1')
        p.textContent = ""
    })
}
const checkBoxes = function () {
    for(let i = 0;i< 2 ; i++ ){
        if(filledBoxes[i][0] !== -1 && (filledBoxes[i][0] === filledBoxes[i][1]) && (filledBoxes[i][1] === filledBoxes[i][2])) {
            if(turn === 1) {
                alert('X Won')
                resetGame()
            }else {
                alert('X Won')
                resetGame()
            }
        }
        if(filledBoxes[0][i] !== -1 && (filledBoxes[0][i] === filledBoxes[1][i]) && (filledBoxes[1][i] === filledBoxes[2][i])) {
            if(turn === 1) {
                alert('O Won')
                resetGame()
            }else {
                alert('X Won')
                resetGame()
            }
        }

    }
    if(filledBoxes[0][0] !== -1 && (filledBoxes[0][0] === filledBoxes[1][1]) && (filledBoxes[2][2] === filledBoxes[1][1])){
        if(turn === 1) {
           alert('O Won')
            resetGame()
        }else {
            alert('X Won')
            resetGame()
        }
    } else if (filledBoxes[0][2] !== -1 && (filledBoxes[0][2] === filledBoxes[1][1]) && (filledBoxes[2][0] === filledBoxes[1][1])) {
        if(turn === 1) {
            alert('O Won')
            resetGame()
        }else {
            alert('X Won')
            resetGame()
        }
    }
}


const block = document.querySelectorAll('.c').forEach(item => {
    item.addEventListener('click',(e) => {
        // console.log(typeof item.id)
        switch (item.id) {

            case 'b00':
                if(filledBoxes[0][0] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[0][0] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[0][0] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }
                    // document.querySelector('#b00').appendChild(p)
                    checkBoxes()
                }
                break;
            case 'b01':
                if(filledBoxes[0][1] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[0][1] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[0][1] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }
                    checkBoxes()
                }
                break;
            case 'b02':
                if(filledBoxes[0][2] === -1) {
                    const p = item.querySelector('h1')

                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[0][2] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[0][2] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }

                    checkBoxes()
                }
                break;
            case 'b10':
                if(filledBoxes[1][0] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[1][0] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[1][0] =  2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }

                    checkBoxes()
                }
                break;
            case 'b11':
                if(filledBoxes[1][1] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[1][1] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[1][1] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }

                    checkBoxes()
                }
                break;
            case 'b12':
                if(filledBoxes[1][2] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[1][2] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[1][2] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }

                    checkBoxes()
                }
                break;
            case 'b20':
                if(filledBoxes[2][0] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[2][0] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[2][0] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }

                    checkBoxes()
                }
                break;
            case 'b21':
                if(filledBoxes[2][1] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[2][1] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[2][1] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }

                    checkBoxes()
                }
                break;
            case 'b22':
                if(filledBoxes[2][2] === -1) {
                    const p = item.querySelector('h1')
                    if(turn === 1) {
                        p.textContent = "x"
                        filledBoxes[2][2] = 1
                        turn = 2
                        turnText.textContent = "Player O's turn"
                    } else {
                        p.textContent = "o"
                        filledBoxes[2][2] = 2
                        turn = 1
                        turnText.textContent = "Player X's turn"
                    }

                    checkBoxes()
                }
                break;

        }
    })
})


document.querySelector("#resetbutton").addEventListener('click',(e) => {
   resetGame()
})
