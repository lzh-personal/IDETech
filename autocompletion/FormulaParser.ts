// Generated from Formula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FormulaListener } from "./FormulaListener";
import { FormulaVisitor } from "./FormulaVisitor";


export class FormulaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly PI = 11;
	public static readonly I = 12;
	public static readonly NUMBER = 13;
	public static readonly VARIABLE = 14;
	public static readonly VALID_ID_START = 15;
	public static readonly VALID_ID_CHAR = 16;
	public static readonly WS = 17;
	public static readonly RULE_start = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_atom = 2;
	public static readonly RULE_constant = 3;
	public static readonly RULE_function = 4;
	public static readonly RULE_param = 5;
	public static readonly RULE_string = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expression", "atom", "constant", "function", "param", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'-'", "'^'", "'*'", "'/'", "'+'", "','", "'\"'", 
		"'''", "'pi'", "'i'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "PI", "I", "NUMBER", "VARIABLE", 
		"VALID_ID_START", "VALID_ID_CHAR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FormulaParser._LITERAL_NAMES, FormulaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FormulaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Formula.g4"; }

	// @Override
	public get ruleNames(): string[] { return FormulaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FormulaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FormulaParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FormulaParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.expression(0);
			this.state = 15;
			this.match(FormulaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, FormulaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FormulaParser.T__0:
				{
				this.state = 18;
				this.match(FormulaParser.T__0);
				this.state = 19;
				this.expression(0);
				this.state = 20;
				this.match(FormulaParser.T__1);
				}
				break;
			case FormulaParser.T__2:
				{
				this.state = 22;
				this.match(FormulaParser.T__2);
				this.state = 23;
				this.expression(5);
				}
				break;
			case FormulaParser.PI:
			case FormulaParser.I:
			case FormulaParser.NUMBER:
			case FormulaParser.VARIABLE:
				{
				this.state = 24;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 36;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FormulaParser.RULE_expression);
						this.state = 27;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 28;
						_localctx._op = this.match(FormulaParser.T__3);
						this.state = 29;
						this.expression(4);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FormulaParser.RULE_expression);
						this.state = 30;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 31;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FormulaParser.T__4 || _la === FormulaParser.T__5)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 32;
						_localctx._right = this.expression(4);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FormulaParser.RULE_expression);
						this.state = 33;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 34;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FormulaParser.T__2 || _la === FormulaParser.T__6)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 35;
						_localctx._right = this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FormulaParser.RULE_atom);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new FunctionAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.function();
				}
				break;

			case 2:
				_localctx = new ConstantAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.constant();
				}
				break;

			case 3:
				_localctx = new NumberAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.match(FormulaParser.NUMBER);
				}
				break;

			case 4:
				_localctx = new VariableAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 44;
				this.match(FormulaParser.VARIABLE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FormulaParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			_la = this._input.LA(1);
			if (!(_la === FormulaParser.PI || _la === FormulaParser.I)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FormulaParser.RULE_function);
		let _la: number;
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.match(FormulaParser.VARIABLE);
				this.state = 50;
				this.match(FormulaParser.T__0);
				this.state = 51;
				this.param();
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FormulaParser.T__7) {
					{
					{
					this.state = 52;
					this.match(FormulaParser.T__7);
					this.state = 53;
					this.param();
					}
					}
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 59;
				this.match(FormulaParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.match(FormulaParser.VARIABLE);
				this.state = 62;
				this.match(FormulaParser.T__0);
				this.state = 63;
				this.match(FormulaParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FormulaParser.RULE_param);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FormulaParser.T__8:
			case FormulaParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				this.string();
				}
				break;
			case FormulaParser.T__0:
			case FormulaParser.T__2:
			case FormulaParser.PI:
			case FormulaParser.I:
			case FormulaParser.NUMBER:
			case FormulaParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 67;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FormulaParser.RULE_string);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FormulaParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				this.match(FormulaParser.T__8);
				this.state = 71;
				this.match(FormulaParser.VARIABLE);
				this.state = 72;
				this.match(FormulaParser.T__8);
				}
				break;
			case FormulaParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				this.match(FormulaParser.T__9);
				this.state = 74;
				this.match(FormulaParser.VARIABLE);
				this.state = 75;
				this.match(FormulaParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13Q\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\'\n\x03\f" +
		"\x03\x0E\x03*\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x040\n\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x069\n\x06\f" +
		"\x06\x0E\x06<\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06C\n" +
		"\x06\x03\x07\x03\x07\x05\x07G\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\bO\n\b\x03\b\x02\x02\x03\x04\t\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x02\x05\x03\x02\x07\b\x04\x02\x05\x05\t\t\x03\x02\r" +
		"\x0E\x02U\x02\x10\x03\x02\x02\x02\x04\x1B\x03\x02\x02\x02\x06/\x03\x02" +
		"\x02\x02\b1\x03\x02\x02\x02\nB\x03\x02\x02\x02\fF\x03\x02\x02\x02\x0E" +
		"N\x03\x02\x02\x02\x10\x11\x05\x04\x03\x02\x11\x12\x07\x02\x02\x03\x12" +
		"\x03\x03\x02\x02\x02\x13\x14\b\x03\x01\x02\x14\x15\x07\x03\x02\x02\x15" +
		"\x16\x05\x04\x03\x02\x16\x17\x07\x04\x02\x02\x17\x1C\x03\x02\x02\x02\x18" +
		"\x19\x07\x05\x02\x02\x19\x1C\x05\x04\x03\x07\x1A\x1C\x05\x06\x04\x02\x1B" +
		"\x13\x03\x02\x02\x02\x1B\x18\x03\x02\x02\x02\x1B\x1A\x03\x02\x02\x02\x1C" +
		"(\x03\x02\x02\x02\x1D\x1E\f\x06\x02\x02\x1E\x1F\x07\x06\x02\x02\x1F\'" +
		"\x05\x04\x03\x06 !\f\x05\x02\x02!\"\t\x02\x02\x02\"\'\x05\x04\x03\x06" +
		"#$\f\x04\x02\x02$%\t\x03\x02\x02%\'\x05\x04\x03\x05&\x1D\x03\x02\x02\x02" +
		"& \x03\x02\x02\x02&#\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02" +
		"\x02()\x03\x02\x02\x02)\x05\x03\x02\x02\x02*(\x03\x02\x02\x02+0\x05\n" +
		"\x06\x02,0\x05\b\x05\x02-0\x07\x0F\x02\x02.0\x07\x10\x02\x02/+\x03\x02" +
		"\x02\x02/,\x03\x02\x02\x02/-\x03\x02\x02\x02/.\x03\x02\x02\x020\x07\x03" +
		"\x02\x02\x0212\t\x04\x02\x022\t\x03\x02\x02\x0234\x07\x10\x02\x0245\x07" +
		"\x03\x02\x025:\x05\f\x07\x0267\x07\n\x02\x0279\x05\f\x07\x0286\x03\x02" +
		"\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;=\x03\x02" +
		"\x02\x02<:\x03\x02\x02\x02=>\x07\x04\x02\x02>C\x03\x02\x02\x02?@\x07\x10" +
		"\x02\x02@A\x07\x03\x02\x02AC\x07\x04\x02\x02B3\x03\x02\x02\x02B?\x03\x02" +
		"\x02\x02C\v\x03\x02\x02\x02DG\x05\x0E\b\x02EG\x05\x04\x03\x02FD\x03\x02" +
		"\x02\x02FE\x03\x02\x02\x02G\r\x03\x02\x02\x02HI\x07\v\x02\x02IJ\x07\x10" +
		"\x02\x02JO\x07\v\x02\x02KL\x07\f\x02\x02LM\x07\x10\x02\x02MO\x07\f\x02" +
		"\x02NH\x03\x02\x02\x02NK\x03\x02\x02\x02O\x0F\x03\x02\x02\x02\n\x1B&(" +
		"/:BFN";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FormulaParser.__ATN) {
			FormulaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FormulaParser._serializedATN));
		}

		return FormulaParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(FormulaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FormulaParser.RULE_start; }
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FormulaParser.RULE_expression; }
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FormulaParser.RULE_atom; }
	public copyFrom(ctx: AtomContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionAtomContext extends AtomContext {
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterFunctionAtom) {
			listener.enterFunctionAtom(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitFunctionAtom) {
			listener.exitFunctionAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFunctionAtom) {
			return visitor.visitFunctionAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantAtomContext extends AtomContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterConstantAtom) {
			listener.enterConstantAtom(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitConstantAtom) {
			listener.exitConstantAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitConstantAtom) {
			return visitor.visitConstantAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberAtomContext extends AtomContext {
	public NUMBER(): TerminalNode { return this.getToken(FormulaParser.NUMBER, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterNumberAtom) {
			listener.enterNumberAtom(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitNumberAtom) {
			listener.exitNumberAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitNumberAtom) {
			return visitor.visitNumberAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableAtomContext extends AtomContext {
	public VARIABLE(): TerminalNode { return this.getToken(FormulaParser.VARIABLE, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterVariableAtom) {
			listener.enterVariableAtom(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitVariableAtom) {
			listener.exitVariableAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitVariableAtom) {
			return visitor.visitVariableAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public PI(): TerminalNode | undefined { return this.tryGetToken(FormulaParser.PI, 0); }
	public I(): TerminalNode | undefined { return this.tryGetToken(FormulaParser.I, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FormulaParser.RULE_constant; }
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(FormulaParser.VARIABLE, 0); }
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FormulaParser.RULE_function; }
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FormulaParser.RULE_param; }
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(FormulaParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FormulaParser.RULE_string; }
	// @Override
	public enterRule(listener: FormulaListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: FormulaListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


