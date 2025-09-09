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

        
export namespace getUsers {
    
    export class Input {
        /**
             * Get list of users
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static fromTyped({
            request,        
        }: {
            request: GetUsersRequest,        
        }): getUsers.Input {
            const input: Record<string, any> = {};
            input["request"] = ((d0) => d0.pseudoJson)(request);

            return new getUsers.Input({"fn.getUsers": input});
        }
        request(): GetUsersRequest {
            return ((d0: any) => new GetUsersRequest(d0))(this.pseudoJson["fn.getUsers"]["request"]);
        }
    }
    
    export class Output {
        /**
             * Get list of users
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: getUsers.Output.Ok_): getUsers.Output {
            return new getUsers.Output({
                "Ok_": payload.pseudoJson
            });
        }
        static from_Error(payload: getUsers.Output.Error): getUsers.Output {
            return new getUsers.Output({
                "Error": payload.pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", getUsers.Output.Ok_> |
            TaggedValue_<"Error", getUsers.Output.Error> | UntypedTaggedValue_ {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new getUsers.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "Error") {
                return new TaggedValue_("Error", new getUsers.Output.Error(this.pseudoJson["Error"]));
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
            }): getUsers.Output.Ok_ {
                const input: Record<string, any> = {};

                return new getUsers.Output.Ok_(input);
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
            }): getUsers.Output.Error {
                const input: Record<string, any> = {};
                input["field"] = field;

                return new getUsers.Output.Error(input);
            }
            field(): string {
                return this.pseudoJson["field"];
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};}

}

        
export namespace ping {
    
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
        }): ping.Input {
            const input: Record<string, any> = {};

            return new ping.Input({"fn.ping": input});
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
        static from_Ok_(payload: ping.Output.Ok_): ping.Output {
            return new ping.Output({
                "Ok_": payload.pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", ping.Output.Ok_> | UntypedTaggedValue_ {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new ping.Output.Ok_(this.pseudoJson["Ok_"]));
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
            }): ping.Output.Ok_ {
                const input: Record<string, any> = {};

                return new ping.Output.Ok_(input);
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};}

}

        
export class GetUsersRequest {
    
    pseudoJson: Record<string, any>;

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }

    static fromTyped({        
    }: {        
    }): GetUsersRequest {
        const input: Record<string, any> = {};

        return new GetUsersRequest(input);
    }
}

        
export class GetUsersResponse {
    
    pseudoJson: Record<string, any>;

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }

    static fromTyped({
        users,        
    }: {
        users: Array<User>,        
    }): GetUsersResponse {
        const input: Record<string, any> = {};
        input["users"] = ((d0) => d0.map((e0) => ((d1) => d1.pseudoJson)(e0)))(users);

        return new GetUsersResponse(input);
    }
    users(): Array<User> {
        return ((d0: Array<User>) => d0.map((e0) => ((d1: any) => new User(d1))(e0)))(this.pseudoJson["users"]);
    }
}

        
export class User {
    
    pseudoJson: Record<string, any>;

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }

    static fromTyped({
        id,
        email,
        username,
        firstName,
        lastName,        
    }: {
        id: string,
        email: string,
        username: string,
        firstName: string,
        lastName: string,        
    }): User {
        const input: Record<string, any> = {};
        input["id"] = id;
        input["email"] = email;
        input["username"] = username;
        input["firstName"] = firstName;
        input["lastName"] = lastName;

        return new User(input);
    }
    id(): string {
        return this.pseudoJson["id"];
    }
    email(): string {
        return this.pseudoJson["email"];
    }
    username(): string {
        return this.pseudoJson["username"];
    }
    firstName(): string {
        return this.pseudoJson["firstName"];
    }
    lastName(): string {
        return this.pseudoJson["lastName"];
    }
}


 

export class Select_ {
    pseudoJson: Record<string, any> = {};

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }static for_ping(select: ping.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_exampleFunction2(select: exampleFunction2.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_getUsers(select: getUsers.Select_): Select_ {
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
    async getUsers(headers: Record<string, any>, input: getUsers.Input): Promise<[Record<string, any>, getUsers.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new getUsers.Output(message.body)];
    }
    async ping(headers: Record<string, any>, input: ping.Input): Promise<[Record<string, any>, ping.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new ping.Output(message.body)];
    }
}

export class ServerHandler_ {
    
    async exampleFunction2(headers: Record<string, any>, input: exampleFunction2.Input): Promise<[Record<string, any>, exampleFunction2.Output]> {
        throw new Error('Not implemented');
    }
    async getUsers(headers: Record<string, any>, input: getUsers.Input): Promise<[Record<string, any>, getUsers.Output]> {
        throw new Error('Not implemented');
    }
    async ping(headers: Record<string, any>, input: ping.Input): Promise<[Record<string, any>, ping.Output]> {
        throw new Error('Not implemented');
    }

    async handler(message: Message): Promise<Message> {
        const functionName = Object.keys(message.body)[0];

        
        if (functionName === "fn.exampleFunction2") {
            const [headers, output] = await this.exampleFunction2(message.headers, new exampleFunction2.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }
        else if (functionName === "fn.getUsers") {
            const [headers, output] = await this.getUsers(message.headers, new getUsers.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }
        else if (functionName === "fn.ping") {
            const [headers, output] = await this.ping(message.headers, new ping.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }

        throw new Error("Unknown function: " + functionName);
    }
}