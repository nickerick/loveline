import { ServerHandler_, ping2 } from './gen/all_.js';

export class ServerHandler extends ServerHandler_ {

    override async ping2(headers: Record<string, any>, input: ping2.Input): Promise<[Record<string, any>, ping2.Output]> {
        console.log('here1');

        let output = ping2.Output.from_Ok_(ping2.Output.Ok_.fromTyped({}));
        return [{}, output];
    }
}