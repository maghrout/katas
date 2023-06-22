class Game {
    private board = {
        topLeft: '',
        topMiddle: '',
        topRight: '',
        left: '',
        middle: '',
        right: '',
        bottomLeft: '',
        bottomMiddle: '',
        bottomRight: ''
    };

    placePiece(positionOnBoard: string) {
        if (positionOnBoard === 'topMiddle') {
            this.board.topMiddle = 'X';
        }
        else if (positionOnBoard === 'topRight') {
            this.board.topRight = 'O';
        }
        else {
            this.board.topLeft = 'O';
        }
    }

    currentStateOfBoard() {
        return this.board;
    }
}

describe('Given an empty board and the first player is O when they place an O in the topLeft square', () => {
    it('should place a counter on the topLeft square', () => {
        const game = new Game();
        game.placePiece('topLeft');
        const currentBoardState = game.currentStateOfBoard();
        expect(currentBoardState).toEqual({
            topLeft: 'O',
            topMiddle: '',
            topRight: '',
            left: '',
            middle: '',
            right: '',
            bottomLeft: '',
            bottomMiddle: '',
            bottomRight: ''
        });
    })
})