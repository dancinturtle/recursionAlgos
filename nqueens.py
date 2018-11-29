class ChessBoard:
    def __init__(self, **kwargs):
        self.board = []
        if 'x' in kwargs and 'y' in kwargs:
            self.x = kwargs['x']
            self.y = kwargs['y']
            # - = safe
            # X = threatened
            # Q = queen
            for i in range(kwargs['y']):
                row = []
                for j in range(kwargs['x']):
                    row.append("-")
                self.board.append(row)
        elif 'board' in kwargs:
            self.y = len(kwargs['board'])
            self.x = len(kwargs['board'][0])
            for row in kwargs['board']:
                newrow = []
                for item in row:
                    newrow.append(item)
                self.board.append(newrow)
    def allSafe(self, x, y):
        # diagonals and column
        for move in range(len(self.board)):
            self.board[move][x] = "X"
            if x-y+move >= 0 and x-y+move < len(self.board[move]):
                self.board[move][x-y+move] = "X"
            if x+y-move >= 0 and x+y-move < len(self.board[move]):
                self.board[move][x+y-move] = "X"
        # row   
        for i in range(len(self.board[y])):
            self.board[y][i] = "X"
        # place the queen
        self.board[y][x] = "Q"
        return self
    def readBoard(self):
        for row in self.board:
            print(row)
        return self

def nQueens(n, depth=0, result = [], **kwargs):
    if 'x' in kwargs and 'y' in kwargs:
        if n > kwargs['x'] or n > kwargs['y']:
            raise Exception("Too many queens you fuck")
        board = ChessBoard(x=kwargs['x'], y=kwargs['y'])
    elif 'board' in kwargs:
        board = kwargs['board']
    else:
        raise Exception("you done fucked up")
    for row in range(depth, board.y-n+1):
       
        for item in range(board.x):
            if board.board[row][item] == "-":
                newboard = ChessBoard(board = board.board)
                newboard.allSafe(item, row)
                if n-1 == 0:
                    result.append(newboard)
                else:
                    nQueens(n-1, row+1, result, board=newboard)
    return result

    
            
                

resultarray = nQueens(8, x=8, y=8)
for count in range(len(resultarray)):
    print(count)
    resultarray[count].readBoard()
    print("------------------------")


