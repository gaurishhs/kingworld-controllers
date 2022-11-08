import type KingWorld from 'kingworld';
import 'reflect-metadata';
import { ControllersLoaderOptions, KWCRoute } from './types';
import { importClassesFromDirectories } from './utils';

export class ControllerManager {
    constructor(
        protected readonly options: ControllersLoaderOptions
    ) { }

    load(app: KingWorld) {
        for (const controller of this.getControllers()) {
            const instance = this.getInstance(controller);

            console.log(Reflect.getMetadata('routes', controller));
            const prefix = Reflect.getMetadata('prefix', controller);
            const routes: Array<KWCRoute> = Reflect.getMetadata('routes', controller);
            routes.forEach((route) => {
                // @ts-ignore
                app[route.method.toLowerCase() as any](`${prefix}${route.path}`, (ctx: any) => Promise.resolve(instance[route.methodName](ctx)), route.hook);
            })
        }
    }

    protected getInstance(identifier: any) {
        if (this.options.container) {
            return this.options.container.get(identifier);
        }

        return new identifier();
    }

    protected getControllers(): Function[] {
        const controllerClasses: Function[] = (this.options.controllers as any[])
            .filter(controller => controller instanceof Function);

        return [
            ...controllerClasses,
            ...this.getControllersFromDirs(),
        ];
    }

    protected getControllersFromDirs(): Function[] {
        const controllerDirs = (this.options.controllers as any[])
            .filter(controller => typeof controller === 'string');

        return importClassesFromDirectories(controllerDirs);
    }
}