var canvas2d = [[3,2,3,4,3],
                [2,3,3,4,0],
                [7,3,3,5,3],
                [6,5,3,4,1],
                [1,2,3,3,3]];

// start [x, y]
// canvas[y][x]

function floodFill(canvas, start, color){
    var startx = start[0];
    var starty = start[1];
    var original = canvas[starty][startx];
    canvas[starty][startx] = color;
    if(canvas2d[starty-1] && canvas2d[starty-1][startx] == original){
        floodFill(canvas, [startx, starty-1], color);
    }
    if(canvas2d[starty+1] && canvas2d[starty+1][startx] == original){
        floodFill(canvas, [startx, starty+1], color);
    }
    if(canvas2d[starty][startx-1] && canvas2d[starty][startx-1] == original){
        floodFill(canvas, [startx-1, starty], color);
    }
    if(canvas2d[starty][startx+1] && canvas2d[starty][startx+1] == original){
        floodFill(canvas, [startx+1, starty], color);
    }
}

floodFill(canvas2d, [0,0], 9);
console.log(canvas2d);