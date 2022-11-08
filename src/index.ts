import type {KingWorld} from "kingworld";
import { ControllerManager } from "./ControllerManager";
import { ControllersLoaderOptions } from "./types";

export const kwControllers = (app: KingWorld, options: any) => new ControllerManager(options).load(app);

export * from './decorators/Controller';
export * from './decorators/Factory';