// Generated from Trab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TrabParser.
function TrabListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TrabListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TrabListener.prototype.constructor = TrabListener;

// Enter a parse tree produced by TrabParser#prog.
TrabListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by TrabParser#prog.
TrabListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by TrabParser#expr.
TrabListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by TrabParser#expr.
TrabListener.prototype.exitExpr = function(ctx) {
};



exports.TrabListener = TrabListener;