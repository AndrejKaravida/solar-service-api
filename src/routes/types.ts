import * as core from "express-serve-static-core";
import { Request } from "express";

interface Query extends core.Query {}

interface Params extends core.ParamsDictionary {}

export interface ExtRequest<
  ReqBody = any,
  ReqQuery = Query,
  URLParams extends Params = core.ParamsDictionary
> extends Request<URLParams, any, ReqBody, ReqQuery> {}

export interface RequestBody {}

export interface RequestQuery extends Query {}

export interface RequestParams extends Params {
  userId: string;
}

export type ExtendedRequest = ExtRequest<
  RequestBody,
  RequestQuery,
  RequestParams
>;
