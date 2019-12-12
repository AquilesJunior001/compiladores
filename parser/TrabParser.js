// Generated from Trab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TrabListener = require('./TrabListener').TrabListener;
var grammarFileName = "Trab.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\b7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0006",
    "\u0002\b\n\u0002\r\u0002\u000e\u0002\t\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0005\u0003\u000f\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u0015\n\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0019\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u001e\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003",
    "\u0003\u0003\u0007\u0003&\n\u0003\f\u0003\u000e\u0003)\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003-\n\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00031\n\u0003\u0003\u0003\u0003\u0003\u0005\u00035\n\u0003\u0003\u0003",
    "\u0002\u0002\u0004\u0002\u0004\u0002\u0002\u0002@\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u00044\u0003\u0002\u0002\u0002\u0006\b\u0005\u0004",
    "\u0003\u0002\u0007\u0006\u0003\u0002\u0002\u0002\b\t\u0003\u0002\u0002",
    "\u0002\t\u0007\u0003\u0002\u0002\u0002\t\n\u0003\u0002\u0002\u0002\n",
    "\u000b\u0003\u0002\u0002\u0002\u000b\f\u0007\u0002\u0002\u0003\f\u0003",
    "\u0003\u0002\u0002\u0002\r\u000f\u0007\u0005\u0002\u0002\u000e\r\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\u0010\u0003",
    "\u0002\u0002\u0002\u0010\u0011\u0007\u0007\u0002\u0002\u0011\u0012\u0007",
    "\u0006\u0002\u0002\u00125\u0005\u0004\u0003\u0002\u0013\u0015\u0007",
    "\u0005\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0014\u0015\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0018\u0007",
    "\u0003\u0002\u0002\u0017\u0019\u0007\u0005\u0002\u0002\u0018\u0017\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001a\u0003",
    "\u0002\u0002\u0002\u001a\u001b\u0007\u0007\u0002\u0002\u001b\u001d\u0007",
    "\u0006\u0002\u0002\u001c\u001e\u0007\u0005\u0002\u0002\u001d\u001c\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f\u0003",
    "\u0002\u0002\u0002\u001f\'\u0007\u0007\u0002\u0002 \"\u0007\u0006\u0002",
    "\u0002!#\u0007\u0005\u0002\u0002\"!\u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$&\u0007\u0007\u0002\u0002",
    "% \u0003\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002\'%\u0003\u0002",
    "\u0002\u0002\'(\u0003\u0002\u0002\u0002(*\u0003\u0002\u0002\u0002)\'",
    "\u0003\u0002\u0002\u0002*,\u0007\u0004\u0002\u0002+-\u0005\u0004\u0003",
    "\u0002,+\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-5\u0003\u0002",
    "\u0002\u0002.0\u0007\u0007\u0002\u0002/1\u0005\u0004\u0003\u00020/\u0003",
    "\u0002\u0002\u000201\u0003\u0002\u0002\u000215\u0003\u0002\u0002\u0002",
    "23\u0007\u0006\u0002\u000235\u0005\u0004\u0003\u00024\u000e\u0003\u0002",
    "\u0002\u00024\u0014\u0003\u0002\u0002\u00024.\u0003\u0002\u0002\u0002",
    "42\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002\u0002\f\t\u000e",
    "\u0014\u0018\u001d\"\',04"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'~'" ];

var symbolicNames = [ null, null, null, "NEGACAO", "SIMBOLO", "LETRA", "WS" ];

var ruleNames =  [ "prog", "expr" ];

function TrabParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TrabParser.prototype = Object.create(antlr4.Parser.prototype);
TrabParser.prototype.constructor = TrabParser;

Object.defineProperty(TrabParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TrabParser.EOF = antlr4.Token.EOF;
TrabParser.T__0 = 1;
TrabParser.T__1 = 2;
TrabParser.NEGACAO = 3;
TrabParser.SIMBOLO = 4;
TrabParser.LETRA = 5;
TrabParser.WS = 6;

TrabParser.RULE_prog = 0;
TrabParser.RULE_expr = 1;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrabParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(TrabParser.EOF, 0);
};

ProgContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrabListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrabListener ) {
        listener.exitProg(this);
	}
};




TrabParser.ProgContext = ProgContext;

TrabParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TrabParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 4;
            this.expr();
            this.state = 7; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TrabParser.T__0) | (1 << TrabParser.NEGACAO) | (1 << TrabParser.SIMBOLO) | (1 << TrabParser.LETRA))) !== 0));
        this.state = 9;
        this.match(TrabParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrabParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.LETRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrabParser.LETRA);
    } else {
        return this.getToken(TrabParser.LETRA, i);
    }
};


ExprContext.prototype.SIMBOLO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrabParser.SIMBOLO);
    } else {
        return this.getToken(TrabParser.SIMBOLO, i);
    }
};


ExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprContext.prototype.NEGACAO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrabParser.NEGACAO);
    } else {
        return this.getToken(TrabParser.NEGACAO, i);
    }
};


ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrabListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrabListener ) {
        listener.exitExpr(this);
	}
};




TrabParser.ExprContext = ExprContext;

TrabParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TrabParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.state = 50;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TrabParser.NEGACAO) {
                this.state = 11;
                this.match(TrabParser.NEGACAO);
            }

            this.state = 14;
            this.match(TrabParser.LETRA);
            this.state = 15;
            this.match(TrabParser.SIMBOLO);
            this.state = 16;
            this.expr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 18;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TrabParser.NEGACAO) {
                this.state = 17;
                this.match(TrabParser.NEGACAO);
            }

            this.state = 20;
            this.match(TrabParser.T__0);
            this.state = 22;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TrabParser.NEGACAO) {
                this.state = 21;
                this.match(TrabParser.NEGACAO);
            }

            this.state = 24;
            this.match(TrabParser.LETRA);
            this.state = 25;
            this.match(TrabParser.SIMBOLO);
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TrabParser.NEGACAO) {
                this.state = 26;
                this.match(TrabParser.NEGACAO);
            }

            this.state = 29;
            this.match(TrabParser.LETRA);
            this.state = 37;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TrabParser.SIMBOLO) {
                this.state = 30;
                this.match(TrabParser.SIMBOLO);
                this.state = 32;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===TrabParser.NEGACAO) {
                    this.state = 31;
                    this.match(TrabParser.NEGACAO);
                }

                this.state = 34;
                this.match(TrabParser.LETRA);
                this.state = 39;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 40;
            this.match(TrabParser.T__1);
            this.state = 42;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 41;
                this.expr();

            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 44;
            this.match(TrabParser.LETRA);
            this.state = 46;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 45;
                this.expr();

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 48;
            this.match(TrabParser.SIMBOLO);
            this.state = 49;
            this.expr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TrabParser = TrabParser;
