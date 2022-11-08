import KingWorld from "kingworld";
import { ControllerManager } from "./src/ControllerManager";
import { Controller } from "./src/decorators/Controller";
import { Get } from "./src/decorators/Factory";

@Controller()
class TestController {
    @Get('/')
    index() {
        return 'Hello World!';
    }
}

const kw = new KingWorld()

new ControllerManager({
    controllers: [TestController],
}).load(kw)

kw.listen(3000)