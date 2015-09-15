$(function () {

    function createGrid() {
        var grid;

        grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        console.log(grid);

        return grid
    }

    function renderGrid(grid) {
        var gridContainer = $('.grid-container');

        for (var i=grid.length-1; i>=0; i--) {
            for (var j=grid[i].length-1; j>=0; j--) {
                $('.grid-container').prepend('<div class="grid-square" data-ref="'+i+j+'">'+grid[i][j]+'</div>');
            }
        }
    }

    function cyclePlayerToken(turn) {
        return turn % 2 === 0 ? 'X ' : 'O';
    }

    (function newGame() {
        var turn = 0;
        var grid = createGrid();
        renderGrid(grid);
        var token = cyclePlayerToken(turn);

        // UI components
        $('.grid-square').on('click', function () {
            $(this).text(token);
            console.log($(this).data('ref'));
        });

    })();

});