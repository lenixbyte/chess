const rowncol = 8;
function createChessboard() {
  let chessboard = "";

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

  for (i = 0; i < rowncol; i++) {
    for (j = 0; j < rowncol; j++) {
      if (i == 0) {
        if ((i + j) % 2 == 0) {
          chessboard += `<div class="sqaure white"><img src="${chessImageIconsBlack[j]}" alt="chessicons" /> </div>`;
        } else {
          chessboard += `<div class="sqaure black">
                    <img src="${chessImageIconsBlack[j]}" alt="chessicons" /> </div>`;
        }
      } else if (i == 1) {
        if ((i + j) % 2 == 0) {
          chessboard +=
            '<div class="sqaure white"><img src="./icons/bP.png" alt="chessicons" /></div>';
        } else {
          chessboard +=
            '<div class="sqaure black"><img src="./icons/bP.png" alt="chessicons" /></div>';
        }
      } else if (i == 6) {
        if ((i + j) % 2 == 0) {
          chessboard +=
            '<div class="sqaure white"><img src="./icons/wP.png" alt="chessicons" /></div>';
        } else {
          chessboard +=
            '<div class="sqaure black"><img src="./icons/wP.png" alt="chessicons" /></div>';
        }
      } else if (i == 7) {
        if ((i + j) % 2 == 0) {
          chessboard += `<div class="sqaure white"><img src="${chessImageIcons[j]}" alt="chessicons" /> </div>`;
        } else {
          chessboard += `<div class="sqaure black"><img src="${chessImageIcons[j]}" alt="chessicons" /> </div>`;
        }
      } else {
        if ((i + j) % 2 == 0) {
          chessboard += '<div class="sqaure white"></div>';
        } else {
          chessboard +=
            '<div class="sqaure black"><div class="other-black"></div></div>';
        }
      }
    }
  }
  return chessboard;
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
