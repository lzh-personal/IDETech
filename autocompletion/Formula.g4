grammar Formula;
/** entry point */
start: expression EOF;

expression
   : '(' expression ')'                                  
   | '-'  expression                                    
   | <assoc=right> expression op='^' expression          
   | left=expression op=('*' | '/') right=expression     
   | left=expression op=('+' | '-') right=expression     
   | atom                                                
   ;

atom
   : function                                             #functionAtom
   | constant                                             #constantAtom
   | NUMBER                                               #numberAtom
   | VARIABLE                                             #variableAtom
   ;

constant
   : PI
   | I
   ;

function
   : VARIABLE '(' param (',' param)* ')'
   | VARIABLE '(' ')'
   ;
param
   : string
   | expression
   ;
string
   : '"' VARIABLE '"'
   | '\'' VARIABLE '\''
   ;

PI:     'pi';
I:      'i';
NUMBER: ('0' .. '9') + ('.' ('0' .. '9') +)?;
VARIABLE: VALID_ID_START VALID_ID_CHAR*;
VALID_ID_START: [a-zA-Z_];
VALID_ID_CHAR: [a-zA-Z0-9_];

WS
   : [ \r\n\t] + -> skip
   ;