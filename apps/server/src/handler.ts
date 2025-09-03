import { ServerHandler_, exampleFunction2 } from './gen/all_.js';

export class ServerHandler extends ServerHandler_ {

    override async exampleFunction2(headers: Record<string, any>, input: exampleFunction2.Input): Promise<[Record<string, any>, exampleFunction2.Output]> {
        let output = exampleFunction2.Output.from_Ok_(exampleFunction2.Output.Ok_.fromTyped({}));
        return [{}, output];
        }
}