$(function () {

    function createGrid() {
        var grid;

        grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        return grid
    }

    function renderGrid(grid) {
        var gridContainer = $('.grid-container');

        if ($('.grid-square')) {
            for (var i=grid.length-1; i>=0; i--) {
                for (var j=grid[i].length-1; j>=0; j--) {
                    var count=i*3+j;
                    gridContainer.prepend('<div class="grid-square" data-count="'+count+'" data-ref="'+i+','+j+'">'+grid[i][j]+'</div>');
                }
            }
        }


    }

    function clearGrid(grid) {
         grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        $('.grid-square').each(function() { $(this).text('') });

        return grid;
    }

    function cyclePlayerToken() {
        return 'X'
        //return turn % 2 === 0 ? 'X ' : 'O';
    }

    function updateGrid(ref, grid, token) {
        var refArray = ref.toString().split(',');

        console.log(typeof token);

        grid[refArray[0]][refArray[1]] = token;

        $('[data-ref="'+ref+'"]').text(token);

        checkGrid(grid);
    }

    function checkGrid(grid) {
        if (grid[0][0] + grid[0][1] + grid[0][2] === 'XXX' || grid[1][0] + grid[1][1] + grid[1][2] === 'XXX' || grid[2][0] + grid[2][1] + grid[2][2] === 'XXX') {
            alert('Winner');
            var grid = clearGrid(grid);
            newGame(grid);
        } else if (grid[0][0] + grid[1][0] + grid[2][0] === 'XXX' || grid[0][1] + grid[1][1] + grid[2][1] === 'XXX' || grid[0][2] + grid[1][2] + grid[2][2] === 'XXX') {
            alert('Winner');
            var grid = clearGrid(grid);
            newGame(grid);
        } else if (grid[0][0] + grid[1][1] + grid[2][2] === 'XXX' || grid[2][0] + grid[1][1] + grid[0][2] === 'XXX') {
            alert('Winner');
            var grid = clearGrid(grid);
            newGame(grid);
        } else {
            return;
        }
    }

    function newGame(grid) {
        var turn = 0;
        if (!grid) {
            var grid = createGrid();
            renderGrid(grid);
        }
        var token = cyclePlayerToken();

        // UI components
        $('.grid-square').on('click', function () {
            var ref = $(this).data('ref');
            updateGrid(ref, grid, token);
        });

    };


    newGame();

});