# KingWorld Controllers
- This plugin adds decorator and controller-based routing support to kingworld.

> IMPORTANT!
> Bun doesn't support decorators yet, so you'll need to upgrade bun by using `bun upgrade --canary`
## Installation

```bash
bun add kingworld-controllers
```

## Usage

```ts
import { Controller, Get, kwControllers } from 'kingworld-controllers'; 

// /users prefix
@Controller('/users/')
class UsersController {
  @Get()
  index() {
    return 'Hello World';
  }
}

const app = new KingWorld();

app.use(kwControllers, {
  controllers: [UsersController],
});

app.listen(3000);
```

## License

- This project is licensed under the MIT License - see the LICENSE file for details