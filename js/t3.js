$(function () {

    function createGrid() {
        var grid;

        grid = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];

        console.log(grid);

        return grid
    }

    function renderGrid(grid) {
        var gridContainer = $('.grid-container');

        for (var i=grid.length-1; i>=0; i--) {
            for (var j=grid[i].length-1; j>=0; j--) {
                $('.grid-container').prepend('<div class="grid-square-'+i+j+'">'+grid[i][j]+'</div>');
            }
        }
    }

    (function newGame() {
        var grid = createGrid();
        renderGrid(grid);
    })();

});