var selectedPiece = "";
var turn = 'w';
var coordinates = [];
var options = [];
var moved = false;
var highlightItems = [];

var pieces = {
    w_king: {
        position: '9_5',
        img: '&#9812;',
        captured: false,
        moved: false,
        type: 'w_king'

    },
    w_queen: {
        position: '9_4',
        img: '&#9813;',
        captured: false,
        moved: false,
        type: 'w_queen'
    },
    w_bishop1: {
        position: '9_3',
        img: '&#9815;',
        captured: false,
        moved: false,
        type: 'w_bishop'
    },
    w_bishop2: {
        position: '9_6',
        img: '&#9815;',
        captured: false,
        moved: false,
        type: 'w_bishop'
    },
    w_knight1: {
        position: '9_2',
        img: '&#9816;',
        captured: false,
        moved: false,
        type: 'w_knight'
    },
    w_knight2: {
        position: '9_7',
        img: '&#9816;',
        captured: false,
        moved: false,
        type: 'w_knight'
    },
    w_rook1: {
        position: '9_1',
        img: '&#9814;',
        captured: false,
        moved: false,
        type: 'w_rook'
    },
    w_rook2: {
        position: '9_8',
        img: '&#9814;',
        captured: false,
        moved: false,
        type: 'w_rook'
    },
    w_pawn1: {
        position: '8_1',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },
    w_pawn2: {
        position: '8_2',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },
    w_pawn3: {
        position: '8_3',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },
    w_pawn4: {
        position: '8_4',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },
    w_pawn5: {
        position: '8_5',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },
    w_pawn6: {
        position: '8_6',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },
    w_pawn7: {
        position: '8_7',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },
    w_pawn8: {
        position: '8_8',
        img: '&#9817;',
        captured: false,
        type: 'w_pawn',
        moved: false
    },

    b_king: {
        position: '2_5',
        img: '&#9818;',
        captured: false,
        moved: false,
        type: 'b_king'
    },
    b_queen: {
        position: '2_4',
        img: '&#9819;',
        captured: false,
        moved: false,
        type: 'b_queen'
    },
    b_bishop1: {
        position: '2_3',
        img: '&#9821;',
        captured: false,
        moved: false,
        type: 'b_bishop'
    },
    b_bishop2: {
        position: '2_6',
        img: '&#9821;',
        captured: false,
        moved: false,
        type: 'b_bishop'
    },
    b_knight1: {
        position: '2_2',
        img: '&#9822;',
        captured: false,
        moved: false,
        type: 'b_knight'
    },
    b_knight2: {
        position: '2_7',
        img: '&#9822;',
        captured: false,
        moved: false,
        type: 'b_knight'
    },
    b_rook1: {
        position: '2_1',
        img: '&#9820;',
        captured: false,
        moved: false,
        type: 'b_rook'
    },
    b_rook2: {
        position: '2_8',
        img: '&#9820;',
        captured: false,
        moved: false,
        type: 'b_rook'
    },
    b_pawn1: {
        position: '3_1',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    },
    b_pawn2: {
        position: '3_2',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    },
    b_pawn3: {
        position: '3_3',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    },
    b_pawn4: {
        position: '3_4',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    },
    b_pawn5: {
        position: '3_5',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    },
    b_pawn6: {
        position: '3_6',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    },
    b_pawn7: {
        position: '3_7',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    },
    b_pawn8: {
        position: '3_8',
        img: '&#9823;',
        captured: false,
        type: 'b_pawn',
        moved: false
    }
}


function gameStart() {
    for (let piece in pieces) {
        document.getElementById(pieces[piece]["position"]).innerHTML = pieces[piece].img;
    }
}


function movePiece(e) {
    highlightItems = [];
    var [posx, posy] = e.parentElement.id.split("_");
    if (turn === 'w') {
        selectedPiece = e.getAttribute('class').split(" ")[0];
        switch (pieces[selectedPiece]["type"]) {
            case 'w_pawn':
                if (pieces[selectedPiece].moved == false) {
                    coordinates = [{ x: 0, y: 1 }, { x: 0, y: 2 }].map(function(val) {
                        highlightItems.push((parseInt(posx) - parseInt(val.y)) + '_' + (parseInt(posy) + parseInt(val.x)));
                    });
                } else if (pieces[selectedPiece].moved == true) {
                    coordinates = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function(val) {
                        highlightItems.push((parseInt(posx) - parseInt(val.y)) + '_' + (parseInt(posy) + parseInt(val.x)));
                    });
                }
                break;
            case 'b_pawn':
                if (pieces[selectedPiece].moved == false) {
                    coordinates = [{ x: 0, y: 1 }, { x: 0, y: 2 }].map(function(val) {
                        highlightItems.push((parseInt(posx) + parseInt(val.y)) + '_' + (parseInt(posy) + parseInt(val.x)));

                    });
                } else if (pieces[selectedPiece].moved == true) {
                    coordinates = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function(val) {
                        highlightItems.push((parseInt(posx) + parseInt(val.y)) + '_' + (parseInt(posy) + parseInt(val.x)));
                    });
                }
                break;
            case 'w_knight':
                coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function(val) {
                    highlightItems.push((parseInt(posx) - parseInt(val.y)) + '_' + (parseInt(posy) + parseInt(val.x)));
                });
                break;
            case 'b_knight':

                coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function(val) {
                    highlightItems.push((parseInt(posx) + parseInt(val.y)) + '_' + (parseInt(posy) + parseInt(val.x)));
                });
                break;

        }
    }

    highlightItems.forEach((n) => {
        [x, y] = n.split("_");
        x = parseInt(x) + 1;
        n1 = x + '_' + y;
        document.getElementById(n1).setAttribute('style', 'animation: fadeMe 1s');
    })




}