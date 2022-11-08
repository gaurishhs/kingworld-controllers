import { HTTPMethod, LocalHandler, LocalHook } from "kingworld";
import { KWCRoute } from "../types";

const getMethodFunction = (method: HTTPMethod, path: string, hook?: LocalHook) => {
    return (target: { constructor: Object; }, propertyKey: any): void => {
        if (!Reflect.hasMetadata('routes', target.constructor)) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }

        const routes = Reflect.getMetadata('routes', target.constructor) as Array<KWCRoute>;

        routes.push({
            path,
            method,
            methodName: propertyKey,
            hook: hook
        });

        Reflect.defineMetadata('routes', routes, target.constructor);
    };
}

export const Get = (path: string,  hook?: LocalHook) => getMethodFunction('GET', path, hook);
// export const Post = (path: string, handler: LocalHandler, hook?: LocalHook) => getMethodFunction('POST', path, handler, hook);
// export const Put = (path: string, handler: LocalHandler, hook?: LocalHook) => getMethodFunction('PUT', path, handler, hook);
// export const Delete = (path: string, handler: LocalHandler, hook?: LocalHook) => getMethodFunction('DELETE', path, handler, hook);
// export const Patch = (path: string, handler: LocalHandler, hook?: LocalHook) => getMethodFunction('PATCH', path, handler, hook);
// export const Head = (path: string, handler: LocalHandler, hook?: LocalHook) => getMethodFunction('HEAD', path, handler, hook);
// export const Options = (path: string, handler: LocalHandler, hook?: LocalHook) => getMethodFunction('OPTIONS', path, handler, hook);
// export const Custom = (method: HTTPMethod, path: string, handler: LocalHandler, hook?: LocalHook) => getMethodFunction(method, path, handler, hook);