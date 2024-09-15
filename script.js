const rowncol = 8;

let chessImageIconsBlack = [
  "./icons/bR.png",
  "./icons/bN.png",
  "./icons/bB.png",
  "./icons/bQ.png",
  "./icons/bK.png",
  "./icons/bB.png",
  "./icons/bN.png",
  "./icons/bR.png",
];

let chessImageIcons = [
  "./icons/wR.png",
  "./icons/wN.png",
  "./icons/wB.png",
  "./icons/wQ.png",
  "./icons/wK.png",
  "./icons/wB.png",
  "./icons/wN.png",
  "./icons/wR.png",
];

const chesspieces = {
  r: "./icons/bR.png",
  n: "./icons/bN.png",
  b: "./icons/bB.png",
  q: "./icons/bQ.png",
  k: "./icons/bK.png",
  p: "./icons/bP.png",
  R: "./icons/wR.png",
  N: "./icons/wN.png",
  B: "./icons/wB.png",
  Q: "./icons/wQ.png",
  K: "./icons/wK.png",
  P: "./icons/wP.png",
};

function StringFromCharCode(charcode) {
  return String.fromCharCode(charcode);
}

function createChessboard() {
  let chessboard = "";
  for (i = 0; i < rowncol; i++) {
    for (j = 0; j < rowncol; j++) {
      if ((i + j) % 2 == 0) {
        chessboard += `<div class="sqaure white" id=${
          StringFromCharCode(j + 65) + (i + 1)
        }></div>`;
      } else {
        chessboard += `<div class="sqaure black" id=${
          StringFromCharCode(j + 65) + (i + 1)
        }></div>`;
      }
    }
  }
  return chessboard;
}

// function renderfen(fen) {
//   let positions = fen.split("/");
//   if(positions.length !== rowncol){
//     return alert("Invalid Fen. Try with correct fen.")
//   }
//   for(pos, i in positions){
//     let row = pos.split("");
//     for(piece, j in row){
//       if(chesspieces[piece]){
//         document.getElementById(StringFromCharCode(j + 65) + (i + 1)).innerHTML = `<img src="${chesspieces[piece]}" alt="chessicons" />`;
//       }
//     }
//   }
// }

function startGame() {
  // let initialfen = "rnbqkb1r/pppppppp/7n/8/8/8/PPPPPPPP/RNBQKBNR";
  // renderfen(initialfen);
  for (i = 0; i < rowncol; i++) {
    document.getElementById(
      StringFromCharCode(i + 65) + 1
    ).innerHTML = `<img src="${chessImageIconsBlack[i]}" alt="chessicons" />`;
    document.getElementById(
      StringFromCharCode(i + 65) + 2
    ).innerHTML = `<img src="./icons/bP.png" alt="chessicons" />`;
    document.getElementById(
      StringFromCharCode(i + 65) + 7
    ).innerHTML = `<img src="./icons/wP.png" alt="chessicons" />`;
    document.getElementById(
      StringFromCharCode(i + 65) + 8
    ).innerHTML = `<img src="${chessImageIcons[i]}" alt="chessicons" />`;
  }
}

function renderrank() {
  let rank = "";
  for (i = 0; i < rowncol; i++) {
    rank += `<div class="textsq ranksq">${i + 1}</div>`;
  }
  return rank;
}

function renderfile() {
  let file = "";
  for (i = 65; i < 73; i++) {
    file += `<div class="textsq filesq">${String.fromCharCode(i)}</div>`;
  }
  return file;
}

document.getElementById("chessBoard").innerHTML = createChessboard();
document.getElementById("rank").innerHTML = renderrank();
document.getElementById("file").innerHTML = renderfile();

startGame();
