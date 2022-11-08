import { HTTPMethod, LocalHandler, LocalHook, TypedSchema } from "kingworld";

interface Container {
    get(identifier: string | symbol): Function;
}

export interface ControllersLoaderOptions {
    controllers: Function[] | string[];
    container?: Container;
}

export const SupportedMethodFunctions = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options', 'custom'];

export interface KWCRoute<Schema extends TypedSchema = {}, Path extends string = string> {
    method: HTTPMethod;
    path: string;
    methodName: string | symbol;
    hook?: LocalHook;
}