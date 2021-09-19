let sudokuBoardOne = [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],

    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],

    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9]
];
let sudokuBoard = [
    [3, 9, "", "", 5, '', '', '', ''],
    ['', '', '', 2, '', '', '', '', 5],
    ['', '', '', 7, 1, 9, '', 8, ''],

    ['', 5, '', '', 6, 8, '', '', ''],
    [2, '', 6, '', '', 3, '', '', ''],
    ['', '', '', '', '', '', '', '', 4],

    [5, '', '', '', '', '', '', '', ''],
    [6, 7, '', 1, '', 5, '', 4, ''],
    [1, '', 9, '', '', '', 2, '', '']
];

function bordInit() {
    let empty = [
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    ];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            empty[i][j] = sudokuBoard[i][j];
        }
    }
    return empty;
};

function initialise() {
    let cell_1 = document.querySelector(".cell-1");
    let cell_2 = document.querySelector(".cell-2");
    let cell_3 = document.querySelector(".cell-3");
    let cell_4 = document.querySelector(".cell-4");
    let cell_5 = document.querySelector(".cell-5");
    let cell_6 = document.querySelector(".cell-6");
    let cell_7 = document.querySelector(".cell-7");
    let cell_8 = document.querySelector(".cell-8");
    let cell_9 = document.querySelector(".cell-9");
    let cell_10 = document.querySelector(".cell-10");
    let cell_11 = document.querySelector(".cell-11");
    let cell_12 = document.querySelector(".cell-12");
    let cell_13 = document.querySelector(".cell-13");
    let cell_14 = document.querySelector(".cell-14");
    let cell_15 = document.querySelector(".cell-15");
    let cell_16 = document.querySelector(".cell-16");
    let cell_17 = document.querySelector(".cell-17");
    let cell_18 = document.querySelector(".cell-18");
    let cell_19 = document.querySelector(".cell-19");
    let cell_20 = document.querySelector(".cell-20");
    let cell_21 = document.querySelector(".cell-21");
    let cell_22 = document.querySelector(".cell-22");
    let cell_23 = document.querySelector(".cell-23");
    let cell_24 = document.querySelector(".cell-24");
    let cell_25 = document.querySelector(".cell-25");
    let cell_26 = document.querySelector(".cell-26");
    let cell_27 = document.querySelector(".cell-27");
    let cell_28 = document.querySelector(".cell-28");
    let cell_29 = document.querySelector(".cell-29");
    let cell_30 = document.querySelector(".cell-30");
    let cell_31 = document.querySelector(".cell-31");
    let cell_32 = document.querySelector(".cell-32");
    let cell_33 = document.querySelector(".cell-33");
    let cell_34 = document.querySelector(".cell-34");
    let cell_35 = document.querySelector(".cell-35");
    let cell_36 = document.querySelector(".cell-36");
    let cell_37 = document.querySelector(".cell-37");
    let cell_38 = document.querySelector(".cell-38");
    let cell_39 = document.querySelector(".cell-39");
    let cell_40 = document.querySelector(".cell-40");
    let cell_41 = document.querySelector(".cell-41");
    let cell_42 = document.querySelector(".cell-42");
    let cell_43 = document.querySelector(".cell-43");
    let cell_44 = document.querySelector(".cell-44");
    let cell_45 = document.querySelector(".cell-45");
    let cell_46 = document.querySelector(".cell-46");
    let cell_47 = document.querySelector(".cell-47");
    let cell_48 = document.querySelector(".cell-48");
    let cell_49 = document.querySelector(".cell-49");
    let cell_50 = document.querySelector(".cell-50");
    let cell_51 = document.querySelector(".cell-51");
    let cell_52 = document.querySelector(".cell-52");
    let cell_53 = document.querySelector(".cell-53");
    let cell_54 = document.querySelector(".cell-54");
    let cell_55 = document.querySelector(".cell-55");
    let cell_56 = document.querySelector(".cell-56");
    let cell_57 = document.querySelector(".cell-57");
    let cell_58 = document.querySelector(".cell-58");
    let cell_59 = document.querySelector(".cell-59");
    let cell_60 = document.querySelector(".cell-60");
    let cell_61 = document.querySelector(".cell-61");
    let cell_62 = document.querySelector(".cell-62");
    let cell_63 = document.querySelector(".cell-63");
    let cell_64 = document.querySelector(".cell-64");
    let cell_65 = document.querySelector(".cell-65");
    let cell_66 = document.querySelector(".cell-66");
    let cell_67 = document.querySelector(".cell-67");
    let cell_68 = document.querySelector(".cell-68");
    let cell_69 = document.querySelector(".cell-69");
    let cell_70 = document.querySelector(".cell-70");
    let cell_71 = document.querySelector(".cell-71");
    let cell_72 = document.querySelector(".cell-72");
    let cell_73 = document.querySelector(".cell-73");
    let cell_74 = document.querySelector(".cell-74");
    let cell_75 = document.querySelector(".cell-75");
    let cell_76 = document.querySelector(".cell-76");
    let cell_77 = document.querySelector(".cell-77");
    let cell_78 = document.querySelector(".cell-78");
    let cell_79 = document.querySelector(".cell-79");
    let cell_80 = document.querySelector(".cell-80");
    let cell_81 = document.querySelector(".cell-81");
    cell_1.innerHTML = String(sudokuBoard[0][0]);
    cell_2.innerHTML = String(sudokuBoard[0][1]);
    cell_3.innerHTML = String(sudokuBoard[0][2]);
    cell_10.innerHTML = String(sudokuBoard[0][3]);
    cell_11.innerHTML = String(sudokuBoard[0][4]);
    cell_12.innerHTML = String(sudokuBoard[0][5]);
    cell_19.innerHTML = String(sudokuBoard[0][6]);
    cell_20.innerHTML = String(sudokuBoard[0][7]);
    cell_21.innerHTML = String(sudokuBoard[0][8]);
    cell_4.innerHTML = String(sudokuBoard[1][0]);
    cell_5.innerHTML = String(sudokuBoard[1][1]);
    cell_6.innerHTML = String(sudokuBoard[1][2]);
    cell_13.innerHTML = String(sudokuBoard[1][3]);
    cell_14.innerHTML = String(sudokuBoard[1][4]);
    cell_15.innerHTML = String(sudokuBoard[1][5]);
    cell_22.innerHTML = String(sudokuBoard[1][6]);
    cell_23.innerHTML = String(sudokuBoard[1][7]);
    cell_24.innerHTML = String(sudokuBoard[1][8]);
    cell_7.innerHTML = String(sudokuBoard[2][0]);
    cell_8.innerHTML = String(sudokuBoard[2][1]);
    cell_9.innerHTML = String(sudokuBoard[2][2]);
    cell_16.innerHTML = String(sudokuBoard[2][3]);
    cell_17.innerHTML = String(sudokuBoard[2][4]);
    cell_18.innerHTML = String(sudokuBoard[2][5]);
    cell_25.innerHTML = String(sudokuBoard[2][6]);
    cell_26.innerHTML = String(sudokuBoard[2][7]);
    cell_27.innerHTML = String(sudokuBoard[2][8]);
    cell_28.innerHTML = String(sudokuBoard[3][0]);
    cell_29.innerHTML = String(sudokuBoard[3][1]);
    cell_30.innerHTML = String(sudokuBoard[3][2]);
    cell_37.innerHTML = String(sudokuBoard[3][3]);
    cell_38.innerHTML = String(sudokuBoard[3][4]);
    cell_39.innerHTML = String(sudokuBoard[3][5]);
    cell_46.innerHTML = String(sudokuBoard[3][6]);
    cell_47.innerHTML = String(sudokuBoard[3][7]);
    cell_48.innerHTML = String(sudokuBoard[3][8]);
    cell_31.innerHTML = String(sudokuBoard[4][0]);
    cell_32.innerHTML = String(sudokuBoard[4][1]);
    cell_33.innerHTML = String(sudokuBoard[4][2]);
    cell_40.innerHTML = String(sudokuBoard[4][3]);
    cell_41.innerHTML = String(sudokuBoard[4][4]);
    cell_42.innerHTML = String(sudokuBoard[4][5]);
    cell_49.innerHTML = String(sudokuBoard[4][6]);
    cell_50.innerHTML = String(sudokuBoard[4][7]);
    cell_51.innerHTML = String(sudokuBoard[4][8]);
    cell_34.innerHTML = String(sudokuBoard[5][0]);
    cell_35.innerHTML = String(sudokuBoard[5][1]);
    cell_36.innerHTML = String(sudokuBoard[5][2]);
    cell_43.innerHTML = String(sudokuBoard[5][3]);
    cell_44.innerHTML = String(sudokuBoard[5][4]);
    cell_45.innerHTML = String(sudokuBoard[5][5]);
    cell_52.innerHTML = String(sudokuBoard[5][6]);
    cell_53.innerHTML = String(sudokuBoard[5][7]);
    cell_54.innerHTML = String(sudokuBoard[5][8]);
    cell_55.innerHTML = String(sudokuBoard[6][0]);
    cell_56.innerHTML = String(sudokuBoard[6][1]);
    cell_57.innerHTML = String(sudokuBoard[6][2]);
    cell_64.innerHTML = String(sudokuBoard[6][3]);
    cell_65.innerHTML = String(sudokuBoard[6][4]);
    cell_66.innerHTML = String(sudokuBoard[6][5]);
    cell_73.innerHTML = String(sudokuBoard[6][6]);
    cell_74.innerHTML = String(sudokuBoard[6][7]);
    cell_75.innerHTML = String(sudokuBoard[6][8]);
    cell_58.innerHTML = String(sudokuBoard[7][0]);
    cell_59.innerHTML = String(sudokuBoard[7][1]);
    cell_60.innerHTML = String(sudokuBoard[7][2]);
    cell_67.innerHTML = String(sudokuBoard[7][3]);
    cell_68.innerHTML = String(sudokuBoard[7][4]);
    cell_69.innerHTML = String(sudokuBoard[7][5]);
    cell_76.innerHTML = String(sudokuBoard[7][6]);
    cell_77.innerHTML = String(sudokuBoard[7][7]);
    cell_78.innerHTML = String(sudokuBoard[7][8]);
    cell_61.innerHTML = String(sudokuBoard[8][0]);
    cell_62.innerHTML = String(sudokuBoard[8][1]);
    cell_63.innerHTML = String(sudokuBoard[8][2]);
    cell_70.innerHTML = String(sudokuBoard[8][3]);
    cell_71.innerHTML = String(sudokuBoard[8][4]);
    cell_72.innerHTML = String(sudokuBoard[8][5]);
    cell_79.innerHTML = String(sudokuBoard[8][6]);
    cell_80.innerHTML = String(sudokuBoard[8][7]);
    cell_81.innerHTML = String(sudokuBoard[8][8]);
};

//the code of the sudoku solver
const isValidCell = (grid, elem, row, col) => {
    for (let j = 0; j < 9; j++) {
        if (grid[row][j] == elem) return false;
    };
    for (let i = 0; i < 9; i++) {
        if (grid[i][col] == elem) return false;
    };
    let x = (Math.floor(row / 3)) * 3,
        y = (Math.floor(col / 3)) * 3;
    for (let i = x; i < (x + 3); i++) {
        for (let j = y; j < (y + 3); j++) {
            if (grid[i][j] == elem) return false;
        };
    };
    return true;

};


const sudokuSolver = (grid) => {
    let emptyArray = new Array()

    function findCell(grid, callback) {
        callback;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] == "") {
                    emptyArray.push(i);
                    emptyArray.push(j);
                };
            }
        };
    }
    findCell(grid);
    let [a, b] = emptyArray;
    if (a == null) return true;
    for (let i = 1; i <= 9; i++) {
        if (isValidCell(grid, i, a, b)) {
            grid[a][b] = i;
            if (sudokuSolver(grid)) return true;
        };
        grid[a][b] = "";
    };
    return false;
};
let newBoard = bordInit();
initialise();

let solve = document.querySelector(".solve");
let refresh = document.querySelector(".refresh");
let answer = document.querySelector(".answer-box");
solve.addEventListener("click", () => {
    let state = sudokuSolver(sudokuBoard);
    initialise();
    answer.innerHTML += String(state).replace("t", "T");

});
refresh.addEventListener("click", () => {
    sudokuBoard = newBoard;
    initialise();
    newBoard = bordInit();
    answer.innerHTML = "Solvable? "
});
/*
let bigBoard = [
    [
        [5, 3, "", "", 7, "", "", "", ""],
        [6, "", "", 1, 9, 5, "", "", ""],
        ["", 9, 8, "", "", "", "", 6, ""],

        [8, "", "", "", 6, "", "", "", 3],
        [4, "", "", 8, "", 3, "", "", 1],
        [7, "", "", "", 2, "", "", "", 6],

        ["", 6, "", "", "", "", 2, 8, ""],
        ["", "", "", 4, 1, 9, "", "", 5],
        ["", "", "", "", 8, "", "", 7, 9]
    ],
    [
        [3, 9, "", "", 5, '', '', '', ''],
        ['', '', '', 2, '', '', '', '', 5],
        ['', '', '', 7, 1, 9, '', 8, ''],

        ['', 5, '', '', 6, 8, '', '', ''],
        [2, '', 6, '', '', 3, '', '', ''],
        ['', '', '', '', '', '', '', '', 4],

        [5, '', '', '', '', '', '', '', ''],
        [6, 7, '', 1, '', 5, '', 4, ''],
        [1, '', 9, '', '', '', 2, '', '']
    ]
];*/