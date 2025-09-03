import { Message, Client } from 'telepact';

export class TaggedValue_<T, U> {
    tag: T;
    value: U;

    constructor(tag: T, value: U) {
        this.tag = tag;
        this.value = value;
    }
}

export class UntypedTaggedValue_ {
    tag: string;
    value: Record<string, any>;

    constructor(tag: string, value: Record<string, any>) {
        this.tag = tag;
        this.value = value;
    }
}
        
export namespace exampleFunction2 {
    
    export class Input {
        
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static fromTyped({
            field,        
        }: {
            field: number,        
        }): exampleFunction2.Input {
            const input: Record<string, any> = {};
            input["field"] = field;

            return new exampleFunction2.Input({"fn.exampleFunction2": input});
        }
        field(): number {
            return this.pseudoJson["fn.exampleFunction2"]["field"];
        }
    }
    
    export class Output {
        
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: exampleFunction2.Output.Ok_): exampleFunction2.Output {
            return new exampleFunction2.Output({
                "Ok_": payload.pseudoJson
            });
        }
        static from_Error(payload: exampleFunction2.Output.Error): exampleFunction2.Output {
            return new exampleFunction2.Output({
                "Error": payload.pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", exampleFunction2.Output.Ok_> |
            TaggedValue_<"Error", exampleFunction2.Output.Error> | UntypedTaggedValue_ {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new exampleFunction2.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "Error") {
                return new TaggedValue_("Error", new exampleFunction2.Output.Error(this.pseudoJson["Error"]));
            }
            return new UntypedTaggedValue_(tag, this.pseudoJson[tag]);
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static fromTyped({        
            }: {        
            }): exampleFunction2.Output.Ok_ {
                const input: Record<string, any> = {};

                return new exampleFunction2.Output.Ok_(input);
            }
        }
        
        export class Error {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static fromTyped({
                field,        
            }: {
                field: string,        
            }): exampleFunction2.Output.Error {
                const input: Record<string, any> = {};
                input["field"] = field;

                return new exampleFunction2.Output.Error(input);
            }
            field(): string {
                return this.pseudoJson["field"];
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};}

}

        
export namespace ping2f {
    
    export class Input {
        /**
             *  Ping the server. 
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static fromTyped({        
        }: {        
        }): ping2f.Input {
            const input: Record<string, any> = {};

            return new ping2f.Input({"fn.ping2f": input});
        }
    }
    
    export class Output {
        /**
             *  Ping the server. 
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: ping2f.Output.Ok_): ping2f.Output {
            return new ping2f.Output({
                "Ok_": payload.pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", ping2f.Output.Ok_> | UntypedTaggedValue_ {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new ping2f.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            return new UntypedTaggedValue_(tag, this.pseudoJson[tag]);
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static fromTyped({        
            }: {        
            }): ping2f.Output.Ok_ {
                const input: Record<string, any> = {};

                return new ping2f.Output.Ok_(input);
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};}

}


 

export class Select_ {
    pseudoJson: Record<string, any> = {};

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }static for_ping2f(select: ping2f.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_exampleFunction2(select: exampleFunction2.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }}

export class ClientInterface_ {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    
    async exampleFunction2(headers: Record<string, any>, input: exampleFunction2.Input): Promise<[Record<string, any>, exampleFunction2.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new exampleFunction2.Output(message.body)];
    }
    async ping2f(headers: Record<string, any>, input: ping2f.Input): Promise<[Record<string, any>, ping2f.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new ping2f.Output(message.body)];
    }
}

export class ServerHandler_ {
    
    async exampleFunction2(headers: Record<string, any>, input: exampleFunction2.Input): Promise<[Record<string, any>, exampleFunction2.Output]> {
        throw new Error('Not implemented');
    }
    async ping2f(headers: Record<string, any>, input: ping2f.Input): Promise<[Record<string, any>, ping2f.Output]> {
        throw new Error('Not implemented');
    }

    async handler(message: Message): Promise<Message> {
        const functionName = Object.keys(message.body)[0];

        
        if (functionName === "fn.exampleFunction2") {
            const [headers, output] = await this.exampleFunction2(message.headers, new exampleFunction2.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }
        else if (functionName === "fn.ping2f") {
            const [headers, output] = await this.ping2f(message.headers, new ping2f.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }

        throw new Error("Unknown function: " + functionName);
    }
}