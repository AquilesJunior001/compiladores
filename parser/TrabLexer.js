// Generated from Trab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b \b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0006\u0007",
    "\u001b\n\u0007\r\u0007\u000e\u0007\u001c\u0003\u0007\u0003\u0007\u0002",
    "\u0002\b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b",
    "\u0003\u0002\u0005\u0004\u0002--00\u0003\u0002C\\\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u0002 \u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005",
    "\u0011\u0003\u0002\u0002\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t",
    "\u0015\u0003\u0002\u0002\u0002\u000b\u0017\u0003\u0002\u0002\u0002\r",
    "\u001a\u0003\u0002\u0002\u0002\u000f\u0010\u0007*\u0002\u0002\u0010",
    "\u0004\u0003\u0002\u0002\u0002\u0011\u0012\u0007+\u0002\u0002\u0012",
    "\u0006\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u0080\u0002\u0002\u0014",
    "\b\u0003\u0002\u0002\u0002\u0015\u0016\t\u0002\u0002\u0002\u0016\n\u0003",
    "\u0002\u0002\u0002\u0017\u0018\t\u0003\u0002\u0002\u0018\f\u0003\u0002",
    "\u0002\u0002\u0019\u001b\t\u0004\u0002\u0002\u001a\u0019\u0003\u0002",
    "\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002",
    "\u0002\u0002\u001e\u001f\b\u0007\u0002\u0002\u001f\u000e\u0003\u0002",
    "\u0002\u0002\u0004\u0002\u001c\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TrabLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TrabLexer.prototype = Object.create(antlr4.Lexer.prototype);
TrabLexer.prototype.constructor = TrabLexer;

Object.defineProperty(TrabLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

TrabLexer.EOF = antlr4.Token.EOF;
TrabLexer.T__0 = 1;
TrabLexer.T__1 = 2;
TrabLexer.NEGACAO = 3;
TrabLexer.SIMBOLO = 4;
TrabLexer.LETRA = 5;
TrabLexer.WS = 6;

TrabLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

TrabLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

TrabLexer.prototype.literalNames = [ null, "'('", "')'", "'~'" ];

TrabLexer.prototype.symbolicNames = [ null, null, null, "NEGACAO", "SIMBOLO", 
                                      "LETRA", "WS" ];

TrabLexer.prototype.ruleNames = [ "T__0", "T__1", "NEGACAO", "SIMBOLO", 
                                  "LETRA", "WS" ];

TrabLexer.prototype.grammarFileName = "Trab.g4";



exports.TrabLexer = TrabLexer;

