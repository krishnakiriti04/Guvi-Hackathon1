var d = document.createElement('div');
d.setAttribute('class', 'boundary');

var d1 = document.createElement('div');
d1.id = "heading";


var d2 = document.createElement('div');
d2.id = "gameDesign"

var table = document.createElement('table');
table.setAttribute('class', 'chess-board')

var tbody = document.createElement('tbody');

var row1 = createRow(1);
var row2 = createRow(2);
row2.childNodes[1].innerHTML = "<button id='2_1' class='b_rook1 btn' onclick='movePiece(this)'></button>";
row2.childNodes[2].innerHTML = "<button id='2_2' class='b_knight1 btn' onclick='movePiece(this)'></button>";
row2.childNodes[3].innerHTML = "<button id='2_3' class='b_bishop1 btn' onclick='movePiece(this)'></button>";
row2.childNodes[4].innerHTML = "<button id='2_4' class='b_queen btn' onclick='movePiece(this)'></button>";
row2.childNodes[5].innerHTML = "<button id='2_5' class='b_king btn' onclick='movePiece(this)'></button>";
row2.childNodes[6].innerHTML = "<button id='2_6' class='b_bishop2 btn' onclick='movePiece(this)'></button>";
row2.childNodes[7].innerHTML = "<button id='2_7' class='b_knight2 btn' onclick='movePiece(this)'></button>";
row2.childNodes[8].innerHTML = "<button id='2_8' class='b_rook2 btn' onclick='movePiece(this)'></button>";
var row3 = createRow(3);
row3.childNodes[1].innerHTML = "<button id='3_1' class='b_pawn1 btn' onclick='movePiece(this)'></button>";
row3.childNodes[2].innerHTML = "<button id='3_2' class='b_pawn2 btn' onclick='movePiece(this)'></button>";
row3.childNodes[3].innerHTML = "<button id='3_3' class='b_pawn3 btn' onclick='movePiece(this)'></button>";
row3.childNodes[4].innerHTML = "<button id='3_4' class='b_pawn4 btn' onclick='movePiece(this)'></button>";
row3.childNodes[5].innerHTML = "<button id='3_5' class='b_pawn5 btn' onclick='movePiece(this)'></button>";
row3.childNodes[6].innerHTML = "<button id='3_6' class='b_pawn6 btn' onclick='movePiece(this)'></button>";
row3.childNodes[7].innerHTML = "<button id='3_7' class='b_pawn7 btn' onclick='movePiece(this)'></button>";
row3.childNodes[8].innerHTML = "<button id='3_8' class='b_pawn8 btn' onclick='movePiece(this)'></button>";
var row4 = createRow(4);
var row5 = createRow(5);
var row6 = createRow(6);
var row7 = createRow(7);
var row8 = createRow(8);
row8.childNodes[1].innerHTML = "<button id='8_1' class='w_pawn1 btn' onclick='movePiece(this)'></button>";
row8.childNodes[2].innerHTML = "<button id='8_2' class='w_pawn2 btn' onclick='movePiece(this)'></button>";
row8.childNodes[3].innerHTML = "<button id='8_3' class='w_pawn3 btn' onclick='movePiece(this)'></button>";
row8.childNodes[4].innerHTML = "<button id='8_4' class='w_pawn4 btn' onclick='movePiece(this)'></button>";
row8.childNodes[5].innerHTML = "<button id='8_5' class='w_pawn5 btn' onclick='movePiece(this)'></button>";
row8.childNodes[6].innerHTML = "<button id='8_6' class='w_pawn6 btn' onclick='movePiece(this)'></button>";
row8.childNodes[7].innerHTML = "<button id='8_7' class='w_pawn7 btn' onclick='movePiece(this)'></button>";
row8.childNodes[8].innerHTML = "<button id='8_8' class='w_pawn8 btn' onclick='movePiece(this)'></button>";
var row9 = createRow(9);
row9.childNodes[1].innerHTML = "<button id='9_1' class='w_rook1 btn' onclick='movePiece(this)'></button>";
row9.childNodes[2].innerHTML = "<button id='9_2' class='w_knight1 btn' onclick='movePiece(this)'></button>";
row9.childNodes[3].innerHTML = "<button id='9_3' class='w_bishop1 btn' onclick='movePiece(this)'></button>";
row9.childNodes[4].innerHTML = "<button id='9_4' class='w_queen btn' onclick='movePiece(this)'></button>";
row9.childNodes[5].innerHTML = "<button id='9_5' class='w_king btn' onclick='movePiece(this)'></button>";
row9.childNodes[6].innerHTML = "<button id='9_6' class='w_bishop2 btn' onclick='movePiece(this)'></button>";
row9.childNodes[7].innerHTML = "<button id='9_7' class='w_knight2 btn' onclick='movePiece(this)'></button>";
row9.childNodes[8].innerHTML = "<button id='9_8' class='w_rook2 btn' onclick='movePiece(this)'></button>";

var btndiv = document.createElement('div');
btndiv.setAttribute('class', 'button');

var startgame = document.createElement('button');
startgame.innerHTML = "Start Game";
startgame.setAttribute('class', 'btn_gamestart');
startgame.setAttribute('onclick', 'gameStart()');

var resetgame = document.createElement('button');
resetgame.innerHTML = "Reset Game";
resetgame.setAttribute('class', 'btn_gamereset');
resetgame.setAttribute('onclick', 'gameStart()');

btndiv.append(startgame, resetgame);

document.body.append(d);
d.append(d1, d2);
d2.append(btndiv, table);
table.append(tbody);
tbody.append(row1, row2, row3, row4, row5, row6, row7, row8, row9);


function createRow(num) {
    var temp = document.createElement('tr');
    temp.id = 'row-' + (num - 1);

    if (num === 1) {
        for (let i = 0; i < 9; i++) {
            var d = document.createElement('th');
            if (i == 0) {
                d.innerHTML = "";
            } else {
                d.innerHTML = String.fromCharCode(97 + (i - 1));
            }
            temp.append(d);
        }
    } else {
        for (let i = 0; i < 9; i++) {
            if (i == 0) {
                var d = document.createElement('th');
                d.innerHTML = (num - 1);
            } else {
                var d = document.createElement('td');
                d.id = (num - 1) + '_' + i;

                var btn = document.createElement('button');
                btn.id = num + '_' + i;
                btn.setAttribute('class', 'btn');
                btn.setAttribute('onclick', 'movePiece(this)');
                d.append(btn);
                if (num % 2 === 0) {
                    if (i % 2 !== 0) {
                        d.setAttribute('class', 'dark')
                    } else {
                        d.setAttribute('class', 'light')
                    }
                } else {
                    if (i % 2 === 0) {
                        d.setAttribute('class', 'dark')
                    } else {
                        d.setAttribute('class', 'light')
                    }
                }
            }
            temp.append(d);
        }
    }
    return temp;
}