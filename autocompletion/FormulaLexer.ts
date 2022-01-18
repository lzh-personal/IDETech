// Generated from Formula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FormulaLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "PI", "I", "NUMBER", "VARIABLE", "VALID_ID_START", "VALID_ID_CHAR", 
		"WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FormulaLexer._LITERAL_NAMES, FormulaLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FormulaLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FormulaLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Formula.g4"; }

	// @Override
	public get ruleNames(): string[] { return FormulaLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FormulaLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FormulaLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FormulaLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x13]\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x06\x0E@\n\x0E\r\x0E\x0E\x0E" +
		"A\x03\x0E\x03\x0E\x06\x0EF\n\x0E\r\x0E\x0E\x0EG\x05\x0EJ\n\x0E\x03\x0F" +
		"\x03\x0F\x07\x0FN\n\x0F\f\x0F\x0E\x0FQ\v\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x12\x06\x12X\n\x12\r\x12\x0E\x12Y\x03\x12\x03\x12\x02\x02\x02" +
		"\x13\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
		"\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13\x03\x02\x05\x05\x02C\\aac|" +
		"\x06\x022;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02a\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x05\'\x03\x02\x02\x02\x07)\x03" +
		"\x02\x02\x02\t+\x03\x02\x02\x02\v-\x03\x02\x02\x02\r/\x03\x02\x02\x02" +
		"\x0F1\x03\x02\x02\x02\x113\x03\x02\x02\x02\x135\x03\x02\x02\x02\x157\x03" +
		"\x02\x02\x02\x179\x03\x02\x02\x02\x19<\x03\x02\x02\x02\x1B?\x03\x02\x02" +
		"\x02\x1DK\x03\x02\x02\x02\x1FR\x03\x02\x02\x02!T\x03\x02\x02\x02#W\x03" +
		"\x02\x02\x02%&\x07*\x02\x02&\x04\x03\x02\x02\x02\'(\x07+\x02\x02(\x06" +
		"\x03\x02\x02\x02)*\x07/\x02\x02*\b\x03\x02\x02\x02+,\x07`\x02\x02,\n\x03" +
		"\x02\x02\x02-.\x07,\x02\x02.\f\x03\x02\x02\x02/0\x071\x02\x020\x0E\x03" +
		"\x02\x02\x0212\x07-\x02\x022\x10\x03\x02\x02\x0234\x07.\x02\x024\x12\x03" +
		"\x02\x02\x0256\x07$\x02\x026\x14\x03\x02\x02\x0278\x07)\x02\x028\x16\x03" +
		"\x02\x02\x029:\x07r\x02\x02:;\x07k\x02\x02;\x18\x03\x02\x02\x02<=\x07" +
		"k\x02\x02=\x1A\x03\x02\x02\x02>@\x042;\x02?>\x03\x02\x02\x02@A\x03\x02" +
		"\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BI\x03\x02\x02\x02CE\x070" +
		"\x02\x02DF\x042;\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02" +
		"\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IC\x03\x02\x02\x02IJ\x03\x02\x02" +
		"\x02J\x1C\x03\x02\x02\x02KO\x05\x1F\x10\x02LN\x05!\x11\x02ML\x03\x02\x02" +
		"\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\x1E\x03\x02" +
		"\x02\x02QO\x03\x02\x02\x02RS\t\x02\x02\x02S \x03\x02\x02\x02TU\t\x03\x02" +
		"\x02U\"\x03\x02\x02\x02VX\t\x04\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02" +
		"\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\b\x12\x02" +
		"\x02\\$\x03\x02\x02\x02\b\x02AGIOY\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FormulaLexer.__ATN) {
			FormulaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FormulaLexer._serializedATN));
		}

		return FormulaLexer.__ATN;
	}

}

