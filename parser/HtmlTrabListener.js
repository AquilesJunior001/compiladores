var antlr4 = require('antlr4/index');
var TrabLexer = require('../parser/TrabLexer');
var TrabParser = require('../parser/TrabParser');
var TrabListener = require('../parser/TrabListener').TrabListener;

HtmlTrabListener = function () {
    TrabListener.call(this);
    this.values = [];
    return this;
}

HtmlTrabListener.prototype = Object.create(TrabListener.prototype);

HtmlTrabListener.prototype.constructor = HtmlTrabListener;

// Enter a parse tree produced by TrabParser#prog.
HtmlTrabListener.prototype.enterProg = function (ctx) {
    console.log('enterProg:', ctx.getText());
    ctx.values = [];
};

// Exit a parse tree produced by TrabParser#prog.
HtmlTrabListener.prototype.exitProg = function (ctx) {
    console.log('exitProg:', ctx.getText());
    this.values = ctx.values;
    console.log(this.values)
};


// Enter a parse tree produced by TrabParser#expr.
HtmlTrabListener.prototype.enterExpr = function (ctx) {
    console.log('enterExpr:', ctx.getText());
    if (ctx != null) {
        ctx.value = ctx.getText();
    } else {
        ctx.value = null;
    }
};

// Exit a parse tree produced by TrabParser#expr.
HtmlTrabListener.prototype.exitExpr = function (ctx) {
    console.log('exitExpr:', ctx.getText());
    if (ctx.value && ctx.parentCtx instanceof TrabParser.TrabParser.ProgContext) {
        ctx.parentCtx.values.push({
            'expr': ctx.getText(),
            'value': ctx.value
        });
    }
};



exports.HtmlTrabListener = HtmlTrabListener;