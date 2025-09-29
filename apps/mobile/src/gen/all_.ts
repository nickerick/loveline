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
        
export namespace createAnnouncement {
    
    export class Input {
        /**
             * Create an announcement
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static fromTyped({
            message,
            author,        
        }: {
            message: string,
            author: string,        
        }): createAnnouncement.Input {
            const input: Record<string, any> = {};
            input["message"] = message;
            input["author"] = author;

            return new createAnnouncement.Input({"fn.createAnnouncement": input});
        }
        message(): string {
            return this.pseudoJson["fn.createAnnouncement"]["message"];
        }
        author(): string {
            return this.pseudoJson["fn.createAnnouncement"]["author"];
        }
    }
    
    export class Output {
        /**
             * Create an announcement
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: createAnnouncement.Output.Ok_): createAnnouncement.Output {
            return new createAnnouncement.Output({
                "Ok_": payload.pseudoJson
            });
        }
        static from_Error(payload: createAnnouncement.Output.Error): createAnnouncement.Output {
            return new createAnnouncement.Output({
                "Error": payload.pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", createAnnouncement.Output.Ok_> |
            TaggedValue_<"Error", createAnnouncement.Output.Error> | UntypedTaggedValue_ {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new createAnnouncement.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "Error") {
                return new TaggedValue_("Error", new createAnnouncement.Output.Error(this.pseudoJson["Error"]));
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
                announcement,        
            }: {
                announcement: Announcement,        
            }): createAnnouncement.Output.Ok_ {
                const input: Record<string, any> = {};
                input["announcement"] = ((d0) => d0.pseudoJson)(announcement);

                return new createAnnouncement.Output.Ok_(input);
            }
            announcement(): Announcement {
                return ((d0: any) => new Announcement(d0))(this.pseudoJson["announcement"]);
            }
        }
        
        export class Error {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static fromTyped({        
            }: {        
            }): createAnnouncement.Output.Error {
                const input: Record<string, any> = {};

                return new createAnnouncement.Output.Error(input);
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};
            
        okannouncement(): Select_ {
            const resultUnion = this.pseudoJson["->"] ?? {};

            if (!('Ok_' in resultUnion)) {
                const theseFields = resultUnion["Ok_"] ?? [];
                if (!('announcement' in theseFields)) {
                    theseFields.push('announcement');
                }
                resultUnion["Ok_"] = theseFields;
            }
            this.pseudoJson["->"] = resultUnion;
            return this;
        }Announcementauthor(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('author' in theseFields)) {
                theseFields.push('author');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                AnnouncementcreatedAt(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('createdAt' in theseFields)) {
                theseFields.push('createdAt');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                Announcementid(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('id' in theseFields)) {
                theseFields.push('id');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                Announcementmessage(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('message' in theseFields)) {
                theseFields.push('message');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                }

}

        
export namespace getAnnouncements {
    
    export class Input {
        /**
             * Fetches all announcements
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static fromTyped({        
        }: {        
        }): getAnnouncements.Input {
            const input: Record<string, any> = {};

            return new getAnnouncements.Input({"fn.getAnnouncements": input});
        }
    }
    
    export class Output {
        /**
             * Fetches all announcements
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: getAnnouncements.Output.Ok_): getAnnouncements.Output {
            return new getAnnouncements.Output({
                "Ok_": payload.pseudoJson
            });
        }
        static from_Error(payload: getAnnouncements.Output.Error): getAnnouncements.Output {
            return new getAnnouncements.Output({
                "Error": payload.pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", getAnnouncements.Output.Ok_> |
            TaggedValue_<"Error", getAnnouncements.Output.Error> | UntypedTaggedValue_ {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new getAnnouncements.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "Error") {
                return new TaggedValue_("Error", new getAnnouncements.Output.Error(this.pseudoJson["Error"]));
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
                announcements,        
            }: {
                announcements: Array<Announcement>,        
            }): getAnnouncements.Output.Ok_ {
                const input: Record<string, any> = {};
                input["announcements"] = ((d0) => d0.map((e0) => ((d1) => d1.pseudoJson)(e0)))(announcements);

                return new getAnnouncements.Output.Ok_(input);
            }
            announcements(): Array<Announcement> {
                return ((d0: Array<Announcement>) => d0.map((e0) => ((d1: any) => new Announcement(d1))(e0)))(this.pseudoJson["announcements"]);
            }
        }
        
        export class Error {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static fromTyped({        
            }: {        
            }): getAnnouncements.Output.Error {
                const input: Record<string, any> = {};

                return new getAnnouncements.Output.Error(input);
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};
            
        okannouncements(): Select_ {
            const resultUnion = this.pseudoJson["->"] ?? {};

            if (!('Ok_' in resultUnion)) {
                const theseFields = resultUnion["Ok_"] ?? [];
                if (!('announcements' in theseFields)) {
                    theseFields.push('announcements');
                }
                resultUnion["Ok_"] = theseFields;
            }
            this.pseudoJson["->"] = resultUnion;
            return this;
        }Announcementauthor(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('author' in theseFields)) {
                theseFields.push('author');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                AnnouncementcreatedAt(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('createdAt' in theseFields)) {
                theseFields.push('createdAt');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                Announcementid(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('id' in theseFields)) {
                theseFields.push('id');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                Announcementmessage(): Select_ {
            const theseFields = this.pseudoJson["struct.Announcement"] ?? [];
            if (!('message' in theseFields)) {
                theseFields.push('message');
            }
            this.pseudoJson["struct.Announcement"] = theseFields;

            return this;
        }
                }

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
        }: {        
        }): getUsers.Input {
            const input: Record<string, any> = {};

            return new getUsers.Input({"fn.getUsers": input});
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
                users,        
            }: {
                users: Array<User>,        
            }): getUsers.Output.Ok_ {
                const input: Record<string, any> = {};
                input["users"] = ((d0) => d0.map((e0) => ((d1) => d1.pseudoJson)(e0)))(users);

                return new getUsers.Output.Ok_(input);
            }
            users(): Array<User> {
                return ((d0: Array<User>) => d0.map((e0) => ((d1: any) => new User(d1))(e0)))(this.pseudoJson["users"]);
            }
        }
        
        export class Error {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static fromTyped({        
            }: {        
            }): getUsers.Output.Error {
                const input: Record<string, any> = {};

                return new getUsers.Output.Error(input);
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};
            
        okusers(): Select_ {
            const resultUnion = this.pseudoJson["->"] ?? {};

            if (!('Ok_' in resultUnion)) {
                const theseFields = resultUnion["Ok_"] ?? [];
                if (!('users' in theseFields)) {
                    theseFields.push('users');
                }
                resultUnion["Ok_"] = theseFields;
            }
            this.pseudoJson["->"] = resultUnion;
            return this;
        }Useremail(): Select_ {
            const theseFields = this.pseudoJson["struct.User"] ?? [];
            if (!('email' in theseFields)) {
                theseFields.push('email');
            }
            this.pseudoJson["struct.User"] = theseFields;

            return this;
        }
                UserfirstName(): Select_ {
            const theseFields = this.pseudoJson["struct.User"] ?? [];
            if (!('firstName' in theseFields)) {
                theseFields.push('firstName');
            }
            this.pseudoJson["struct.User"] = theseFields;

            return this;
        }
                Userid(): Select_ {
            const theseFields = this.pseudoJson["struct.User"] ?? [];
            if (!('id' in theseFields)) {
                theseFields.push('id');
            }
            this.pseudoJson["struct.User"] = theseFields;

            return this;
        }
                UserlastName(): Select_ {
            const theseFields = this.pseudoJson["struct.User"] ?? [];
            if (!('lastName' in theseFields)) {
                theseFields.push('lastName');
            }
            this.pseudoJson["struct.User"] = theseFields;

            return this;
        }
                Userusername(): Select_ {
            const theseFields = this.pseudoJson["struct.User"] ?? [];
            if (!('username' in theseFields)) {
                theseFields.push('username');
            }
            this.pseudoJson["struct.User"] = theseFields;

            return this;
        }
                }

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

        
export class Announcement {
    
    pseudoJson: Record<string, any>;

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }

    static fromTyped({
        id,
        message,
        author,
        createdAt,        
    }: {
        id: string,
        message: string,
        author: string,
        createdAt: number,        
    }): Announcement {
        const input: Record<string, any> = {};
        input["id"] = id;
        input["message"] = message;
        input["author"] = author;
        input["createdAt"] = createdAt;

        return new Announcement(input);
    }
    id(): string {
        return this.pseudoJson["id"];
    }
    message(): string {
        return this.pseudoJson["message"];
    }
    author(): string {
        return this.pseudoJson["author"];
    }
    createdAt(): number {
        return this.pseudoJson["createdAt"];
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
    }static for_createAnnouncement(select: createAnnouncement.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_ping(select: ping.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_getAnnouncements(select: getAnnouncements.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_getUsers(select: getUsers.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }}

export class ClientInterface_ {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    
    async createAnnouncement(headers: Record<string, any>, input: createAnnouncement.Input): Promise<[Record<string, any>, createAnnouncement.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new createAnnouncement.Output(message.body)];
    }
    async getAnnouncements(headers: Record<string, any>, input: getAnnouncements.Input): Promise<[Record<string, any>, getAnnouncements.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new getAnnouncements.Output(message.body)];
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
    
    async createAnnouncement(headers: Record<string, any>, input: createAnnouncement.Input): Promise<[Record<string, any>, createAnnouncement.Output]> {
        throw new Error('Not implemented');
    }
    async getAnnouncements(headers: Record<string, any>, input: getAnnouncements.Input): Promise<[Record<string, any>, getAnnouncements.Output]> {
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

        
        if (functionName === "fn.createAnnouncement") {
            const [headers, output] = await this.createAnnouncement(message.headers, new createAnnouncement.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }
        else if (functionName === "fn.getAnnouncements") {
            const [headers, output] = await this.getAnnouncements(message.headers, new getAnnouncements.Input(message.body));
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