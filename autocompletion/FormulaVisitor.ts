// Generated from Formula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FormulaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FormulaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `functionAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionAtom?: (ctx: FunctionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantAtom?: (ctx: ConstantAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberAtom?: (ctx: NumberAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableAtom`
	 * labeled alternative in `FormulaParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAtom?: (ctx: VariableAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `FormulaParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `FormulaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FormulaParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `FormulaParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `FormulaParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `FormulaParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `FormulaParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

