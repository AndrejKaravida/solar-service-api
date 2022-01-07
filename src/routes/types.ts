import * as core from "express-serve-static-core";
import { Request } from "express";

export interface Query extends core.Query {}

export interface Params extends core.ParamsDictionary {}

export interface ExtendedRequest<
  ReqBody = any,
  ReqQuery = Query,
  URLParams extends Params = core.ParamsDictionary
> extends Request<URLParams, any, ReqBody, ReqQuery> {}
