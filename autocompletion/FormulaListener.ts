// Generated from Formula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FunctionAtomContext } from "./FormulaParser";
import { ConstantAtomContext } from "./FormulaParser";
import { NumberAtomContext } from "./FormulaParser";
import { VariableAtomContext } from "./FormulaParser";
import { StartContext } from "./FormulaParser";
import { ExpressionContext } from "./FormulaParser";
import { AtomContext } from "./FormulaParser";
import { ConstantContext } from "./FormulaParser";
import { FunctionContext } from "./FormulaParser";
import { ParamContext } from "./FormulaParser";
import { StringContext } from "./FormulaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FormulaParser`.
 */
export interface FormulaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `functionAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	enterFunctionAtom?: (ctx: FunctionAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `functionAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	exitFunctionAtom?: (ctx: FunctionAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `constantAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	enterConstantAtom?: (ctx: ConstantAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `constantAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	exitConstantAtom?: (ctx: ConstantAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `numberAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	enterNumberAtom?: (ctx: NumberAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `numberAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	exitNumberAtom?: (ctx: NumberAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `variableAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	enterVariableAtom?: (ctx: VariableAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `variableAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	exitVariableAtom?: (ctx: VariableAtomContext) => void;

	/**
	 * Enter a parse tree produced by `FormulaParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `FormulaParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `FormulaParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `FormulaParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `FormulaParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

