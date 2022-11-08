/**
 * @IMPORTANT: Requires Glob to be installed, run `bun add glob` to install
 */

import KingWorld from "kingworld";
import { kwControllers } from "../src";

const app = new KingWorld();

app.use(kwControllers, {
    controllers: [process.cwd() + "/controllers/*.ts"],
});

app.listen(3000)