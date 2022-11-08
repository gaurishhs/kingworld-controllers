import { Controller } from "../../src";
import { Get } from "../../src";

@Controller()
export class TestController {
    @Get('/')
    public index() {
        return 'Hello World!';
    }
}