grammar Trab;
prog : expr+ EOF ;
expr : NEGACAO? LETRA SIMBOLO expr
| NEGACAO? '(' NEGACAO? LETRA SIMBOLO NEGACAO? LETRA (SIMBOLO NEGACAO? LETRA)* ')' expr?
| LETRA expr?
| SIMBOLO expr ;
NEGACAO: '~';
SIMBOLO: '.'|'+';
LETRA : [A-Z];
WS : [ \t\r\n]+ -> skip ;