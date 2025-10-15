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

        static from({
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
        static from_Ok_(payload: {
            announcement: Announcement,        
        }): createAnnouncement.Output {
            return new createAnnouncement.Output({
                "Ok_": createAnnouncement.Output.Ok_.from(payload).pseudoJson
            });
        }
        static from_Error(payload: {        
        }): createAnnouncement.Output {
            return new createAnnouncement.Output({
                "Error": createAnnouncement.Output.Error.from(payload).pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", createAnnouncement.Output.Ok_> |
            TaggedValue_<"Error", createAnnouncement.Output.Error> | TaggedValue_<"NoMatch_", UntypedTaggedValue_> {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new createAnnouncement.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "Error") {
                return new TaggedValue_("Error", new createAnnouncement.Output.Error(this.pseudoJson["Error"]));
            }
            return new TaggedValue_("NoMatch_", new UntypedTaggedValue_(tag, this.pseudoJson[tag]));
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
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

            static from({        
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

        
export namespace createUser {
    
    export class Input {
        /**
             * Create a user
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static from({
            username,
            email,
            firstName,
            lastName,
            password,        
        }: {
            username: string,
            email: string,
            firstName: string,
            lastName: string,
            password: string,        
        }): createUser.Input {
            const input: Record<string, any> = {};
            input["username"] = username;
            input["email"] = email;
            input["firstName"] = firstName;
            input["lastName"] = lastName;
            input["password"] = password;

            return new createUser.Input({"fn.createUser": input});
        }
        username(): string {
            return this.pseudoJson["fn.createUser"]["username"];
        }
        email(): string {
            return this.pseudoJson["fn.createUser"]["email"];
        }
        firstName(): string {
            return this.pseudoJson["fn.createUser"]["firstName"];
        }
        lastName(): string {
            return this.pseudoJson["fn.createUser"]["lastName"];
        }
        password(): string {
            return this.pseudoJson["fn.createUser"]["password"];
        }
    }
    
    export class Output {
        /**
             * Create a user
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: {
            user: User,        
        }): createUser.Output {
            return new createUser.Output({
                "Ok_": createUser.Output.Ok_.from(payload).pseudoJson
            });
        }
        static from_InvalidUsername(payload: {
            reason: string,        
        }): createUser.Output {
            return new createUser.Output({
                "InvalidUsername": createUser.Output.InvalidUsername.from(payload).pseudoJson
            });
        }
        static from_InvalidEmail(payload: {
            reason: string,        
        }): createUser.Output {
            return new createUser.Output({
                "InvalidEmail": createUser.Output.InvalidEmail.from(payload).pseudoJson
            });
        }
        static from_InvalidPassword(payload: {
            reason: string,        
        }): createUser.Output {
            return new createUser.Output({
                "InvalidPassword": createUser.Output.InvalidPassword.from(payload).pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", createUser.Output.Ok_> |
            TaggedValue_<"InvalidUsername", createUser.Output.InvalidUsername> |
            TaggedValue_<"InvalidEmail", createUser.Output.InvalidEmail> |
            TaggedValue_<"InvalidPassword", createUser.Output.InvalidPassword> | TaggedValue_<"NoMatch_", UntypedTaggedValue_> {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new createUser.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "InvalidUsername") {
                return new TaggedValue_("InvalidUsername", new createUser.Output.InvalidUsername(this.pseudoJson["InvalidUsername"]));
            }
            if (tag === "InvalidEmail") {
                return new TaggedValue_("InvalidEmail", new createUser.Output.InvalidEmail(this.pseudoJson["InvalidEmail"]));
            }
            if (tag === "InvalidPassword") {
                return new TaggedValue_("InvalidPassword", new createUser.Output.InvalidPassword(this.pseudoJson["InvalidPassword"]));
            }
            return new TaggedValue_("NoMatch_", new UntypedTaggedValue_(tag, this.pseudoJson[tag]));
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                user,        
            }: {
                user: User,        
            }): createUser.Output.Ok_ {
                const input: Record<string, any> = {};
                input["user"] = ((d0) => d0.pseudoJson)(user);

                return new createUser.Output.Ok_(input);
            }
            user(): User {
                return ((d0: any) => new User(d0))(this.pseudoJson["user"]);
            }
        }
        
        export class InvalidUsername {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                reason,        
            }: {
                reason: string,        
            }): createUser.Output.InvalidUsername {
                const input: Record<string, any> = {};
                input["reason"] = reason;

                return new createUser.Output.InvalidUsername(input);
            }
            reason(): string {
                return this.pseudoJson["reason"];
            }
        }
        
        export class InvalidEmail {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                reason,        
            }: {
                reason: string,        
            }): createUser.Output.InvalidEmail {
                const input: Record<string, any> = {};
                input["reason"] = reason;

                return new createUser.Output.InvalidEmail(input);
            }
            reason(): string {
                return this.pseudoJson["reason"];
            }
        }
        
        export class InvalidPassword {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                reason,        
            }: {
                reason: string,        
            }): createUser.Output.InvalidPassword {
                const input: Record<string, any> = {};
                input["reason"] = reason;

                return new createUser.Output.InvalidPassword(input);
            }
            reason(): string {
                return this.pseudoJson["reason"];
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};
            
        okuser(): Select_ {
            const resultUnion = this.pseudoJson["->"] ?? {};

            if (!('Ok_' in resultUnion)) {
                const theseFields = resultUnion["Ok_"] ?? [];
                if (!('user' in theseFields)) {
                    theseFields.push('user');
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

        
export namespace getAnnouncements {
    
    export class Input {
        /**
             * Fetches all announcements
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static from({        
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
        static from_Ok_(payload: {
            announcements: Array<Announcement>,        
        }): getAnnouncements.Output {
            return new getAnnouncements.Output({
                "Ok_": getAnnouncements.Output.Ok_.from(payload).pseudoJson
            });
        }
        static from_Error(payload: {        
        }): getAnnouncements.Output {
            return new getAnnouncements.Output({
                "Error": getAnnouncements.Output.Error.from(payload).pseudoJson
            });
        }
        static from_ErrorUnauthenticated__(payload: {
            message?: string | undefined,        
        }): getAnnouncements.Output {
            return new getAnnouncements.Output({
                "ErrorUnauthenticated__": getAnnouncements.Output.ErrorUnauthenticated__.from(payload).pseudoJson
            });
        }
        static from_ErrorUnauthorized__(payload: {
            message?: string | undefined,        
        }): getAnnouncements.Output {
            return new getAnnouncements.Output({
                "ErrorUnauthorized__": getAnnouncements.Output.ErrorUnauthorized__.from(payload).pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", getAnnouncements.Output.Ok_> |
            TaggedValue_<"Error", getAnnouncements.Output.Error> |
            TaggedValue_<"ErrorUnauthenticated__", getAnnouncements.Output.ErrorUnauthenticated__> |
            TaggedValue_<"ErrorUnauthorized__", getAnnouncements.Output.ErrorUnauthorized__> | TaggedValue_<"NoMatch_", UntypedTaggedValue_> {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new getAnnouncements.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "Error") {
                return new TaggedValue_("Error", new getAnnouncements.Output.Error(this.pseudoJson["Error"]));
            }
            if (tag === "ErrorUnauthenticated__") {
                return new TaggedValue_("ErrorUnauthenticated__", new getAnnouncements.Output.ErrorUnauthenticated__(this.pseudoJson["ErrorUnauthenticated__"]));
            }
            if (tag === "ErrorUnauthorized__") {
                return new TaggedValue_("ErrorUnauthorized__", new getAnnouncements.Output.ErrorUnauthorized__(this.pseudoJson["ErrorUnauthorized__"]));
            }
            return new TaggedValue_("NoMatch_", new UntypedTaggedValue_(tag, this.pseudoJson[tag]));
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
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

            static from({        
            }: {        
            }): getAnnouncements.Output.Error {
                const input: Record<string, any> = {};

                return new getAnnouncements.Output.Error(input);
            }
        }
        
        export class ErrorUnauthenticated__ {
            /**
                 *  The credentials in the `_auth` header were missing or invalid. 
                 */
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                message,        
            }: {
                message?: string | undefined,        
            }): getAnnouncements.Output.ErrorUnauthenticated__ {
                const input: Record<string, any> = {};
                if (message !== undefined) {
                    input["message!"] = message;
                }

                return new getAnnouncements.Output.ErrorUnauthenticated__(input);
            }
            message(): string | undefined {
                return !("message!" in this.pseudoJson) ? undefined :this.pseudoJson["message!"];
            }
        }
        
        export class ErrorUnauthorized__ {
            /**
                 *  The credentials in the `_auth` header were insufficient to run the function. 
                 */
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                message,        
            }: {
                message?: string | undefined,        
            }): getAnnouncements.Output.ErrorUnauthorized__ {
                const input: Record<string, any> = {};
                if (message !== undefined) {
                    input["message!"] = message;
                }

                return new getAnnouncements.Output.ErrorUnauthorized__(input);
            }
            message(): string | undefined {
                return !("message!" in this.pseudoJson) ? undefined :this.pseudoJson["message!"];
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
             * Get a list of all users
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static from({        
        }: {        
        }): getUsers.Input {
            const input: Record<string, any> = {};

            return new getUsers.Input({"fn.getUsers": input});
        }
    }
    
    export class Output {
        /**
             * Get a list of all users
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: {
            users: Array<User>,        
        }): getUsers.Output {
            return new getUsers.Output({
                "Ok_": getUsers.Output.Ok_.from(payload).pseudoJson
            });
        }
        static from_ErrorUnauthenticated__(payload: {
            message?: string | undefined,        
        }): getUsers.Output {
            return new getUsers.Output({
                "ErrorUnauthenticated__": getUsers.Output.ErrorUnauthenticated__.from(payload).pseudoJson
            });
        }
        static from_ErrorUnauthorized__(payload: {
            message?: string | undefined,        
        }): getUsers.Output {
            return new getUsers.Output({
                "ErrorUnauthorized__": getUsers.Output.ErrorUnauthorized__.from(payload).pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", getUsers.Output.Ok_> |
            TaggedValue_<"ErrorUnauthenticated__", getUsers.Output.ErrorUnauthenticated__> |
            TaggedValue_<"ErrorUnauthorized__", getUsers.Output.ErrorUnauthorized__> | TaggedValue_<"NoMatch_", UntypedTaggedValue_> {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new getUsers.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "ErrorUnauthenticated__") {
                return new TaggedValue_("ErrorUnauthenticated__", new getUsers.Output.ErrorUnauthenticated__(this.pseudoJson["ErrorUnauthenticated__"]));
            }
            if (tag === "ErrorUnauthorized__") {
                return new TaggedValue_("ErrorUnauthorized__", new getUsers.Output.ErrorUnauthorized__(this.pseudoJson["ErrorUnauthorized__"]));
            }
            return new TaggedValue_("NoMatch_", new UntypedTaggedValue_(tag, this.pseudoJson[tag]));
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
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
        
        export class ErrorUnauthenticated__ {
            /**
                 *  The credentials in the `_auth` header were missing or invalid. 
                 */
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                message,        
            }: {
                message?: string | undefined,        
            }): getUsers.Output.ErrorUnauthenticated__ {
                const input: Record<string, any> = {};
                if (message !== undefined) {
                    input["message!"] = message;
                }

                return new getUsers.Output.ErrorUnauthenticated__(input);
            }
            message(): string | undefined {
                return !("message!" in this.pseudoJson) ? undefined :this.pseudoJson["message!"];
            }
        }
        
        export class ErrorUnauthorized__ {
            /**
                 *  The credentials in the `_auth` header were insufficient to run the function. 
                 */
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                message,        
            }: {
                message?: string | undefined,        
            }): getUsers.Output.ErrorUnauthorized__ {
                const input: Record<string, any> = {};
                if (message !== undefined) {
                    input["message!"] = message;
                }

                return new getUsers.Output.ErrorUnauthorized__(input);
            }
            message(): string | undefined {
                return !("message!" in this.pseudoJson) ? undefined :this.pseudoJson["message!"];
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

        
export namespace login {
    
    export class Input {
        /**
             * Authenticate a user with username and password and receive an auth token
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static from({
            username,
            password,        
        }: {
            username: string,
            password: string,        
        }): login.Input {
            const input: Record<string, any> = {};
            input["username"] = username;
            input["password"] = password;

            return new login.Input({"fn.login": input});
        }
        username(): string {
            return this.pseudoJson["fn.login"]["username"];
        }
        password(): string {
            return this.pseudoJson["fn.login"]["password"];
        }
    }
    
    export class Output {
        /**
             * Authenticate a user with username and password and receive an auth token
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: {
            accessToken: string,
            refreshToken: string,        
        }): login.Output {
            return new login.Output({
                "Ok_": login.Output.Ok_.from(payload).pseudoJson
            });
        }
        static from_InvalidCredentials(payload: {        
        }): login.Output {
            return new login.Output({
                "InvalidCredentials": login.Output.InvalidCredentials.from(payload).pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", login.Output.Ok_> |
            TaggedValue_<"InvalidCredentials", login.Output.InvalidCredentials> | TaggedValue_<"NoMatch_", UntypedTaggedValue_> {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new login.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "InvalidCredentials") {
                return new TaggedValue_("InvalidCredentials", new login.Output.InvalidCredentials(this.pseudoJson["InvalidCredentials"]));
            }
            return new TaggedValue_("NoMatch_", new UntypedTaggedValue_(tag, this.pseudoJson[tag]));
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                accessToken,
                refreshToken,        
            }: {
                accessToken: string,
                refreshToken: string,        
            }): login.Output.Ok_ {
                const input: Record<string, any> = {};
                input["accessToken"] = accessToken;
                input["refreshToken"] = refreshToken;

                return new login.Output.Ok_(input);
            }
            accessToken(): string {
                return this.pseudoJson["accessToken"];
            }
            refreshToken(): string {
                return this.pseudoJson["refreshToken"];
            }
        }
        
        export class InvalidCredentials {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({        
            }: {        
            }): login.Output.InvalidCredentials {
                const input: Record<string, any> = {};

                return new login.Output.InvalidCredentials(input);
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};
            
        okaccessToken(): Select_ {
            const resultUnion = this.pseudoJson["->"] ?? {};

            if (!('Ok_' in resultUnion)) {
                const theseFields = resultUnion["Ok_"] ?? [];
                if (!('accessToken' in theseFields)) {
                    theseFields.push('accessToken');
                }
                resultUnion["Ok_"] = theseFields;
            }
            this.pseudoJson["->"] = resultUnion;
            return this;
        }
            
        okrefreshToken(): Select_ {
            const resultUnion = this.pseudoJson["->"] ?? {};

            if (!('Ok_' in resultUnion)) {
                const theseFields = resultUnion["Ok_"] ?? [];
                if (!('refreshToken' in theseFields)) {
                    theseFields.push('refreshToken');
                }
                resultUnion["Ok_"] = theseFields;
            }
            this.pseudoJson["->"] = resultUnion;
            return this;
        }}

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

        static from({        
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
        static from_Ok_(payload: {        
        }): ping.Output {
            return new ping.Output({
                "Ok_": ping.Output.Ok_.from(payload).pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", ping.Output.Ok_> | TaggedValue_<"NoMatch_", UntypedTaggedValue_> {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new ping.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            return new TaggedValue_("NoMatch_", new UntypedTaggedValue_(tag, this.pseudoJson[tag]));
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({        
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

        
export namespace refresh {
    
    export class Input {
        /**
             * Retrieves a new access token with a valid refresh token
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }

        static from({
            refreshToken,        
        }: {
            refreshToken: string,        
        }): refresh.Input {
            const input: Record<string, any> = {};
            input["refreshToken"] = refreshToken;

            return new refresh.Input({"fn.refresh": input});
        }
        refreshToken(): string {
            return this.pseudoJson["fn.refresh"]["refreshToken"];
        }
    }
    
    export class Output {
        /**
             * Retrieves a new access token with a valid refresh token
             */
        pseudoJson: Record<string, any>;

        constructor(pseudoJson: Record<string, any>) {
            this.pseudoJson = pseudoJson;
        }
        static from_Ok_(payload: {
            accessToken: string,        
        }): refresh.Output {
            return new refresh.Output({
                "Ok_": refresh.Output.Ok_.from(payload).pseudoJson
            });
        }
        static from_InvalidCredentials(payload: {        
        }): refresh.Output {
            return new refresh.Output({
                "InvalidCredentials": refresh.Output.InvalidCredentials.from(payload).pseudoJson
            });
        }

        getTaggedValue():
            TaggedValue_<"Ok_", refresh.Output.Ok_> |
            TaggedValue_<"InvalidCredentials", refresh.Output.InvalidCredentials> | TaggedValue_<"NoMatch_", UntypedTaggedValue_> {
            const tag = Object.keys(this.pseudoJson)[0]!;
            if (tag === "Ok_") {
                return new TaggedValue_("Ok_", new refresh.Output.Ok_(this.pseudoJson["Ok_"]));
            }
            if (tag === "InvalidCredentials") {
                return new TaggedValue_("InvalidCredentials", new refresh.Output.InvalidCredentials(this.pseudoJson["InvalidCredentials"]));
            }
            return new TaggedValue_("NoMatch_", new UntypedTaggedValue_(tag, this.pseudoJson[tag]));
        }
    }

    export namespace Output {
        
        export class Ok_ {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({
                accessToken,        
            }: {
                accessToken: string,        
            }): refresh.Output.Ok_ {
                const input: Record<string, any> = {};
                input["accessToken"] = accessToken;

                return new refresh.Output.Ok_(input);
            }
            accessToken(): string {
                return this.pseudoJson["accessToken"];
            }
        }
        
        export class InvalidCredentials {
            
            pseudoJson: Record<string, any>;

            constructor(pseudoJson: Record<string, any>) {
                this.pseudoJson = pseudoJson;
            }

            static from({        
            }: {        
            }): refresh.Output.InvalidCredentials {
                const input: Record<string, any> = {};

                return new refresh.Output.InvalidCredentials(input);
            }
        }
    }

    export class Select_ {

        pseudoJson: Record<string, any> = {};
            
        okaccessToken(): Select_ {
            const resultUnion = this.pseudoJson["->"] ?? {};

            if (!('Ok_' in resultUnion)) {
                const theseFields = resultUnion["Ok_"] ?? [];
                if (!('accessToken' in theseFields)) {
                    theseFields.push('accessToken');
                }
                resultUnion["Ok_"] = theseFields;
            }
            this.pseudoJson["->"] = resultUnion;
            return this;
        }}

}


        
export class Announcement {
    
    pseudoJson: Record<string, any>;

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }

    static from({
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

        
export class Auth__ {
    
    pseudoJson: Record<string, any>;

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }

    static from({
        token,        
    }: {
        token: string,        
    }): Auth__ {
        const input: Record<string, any> = {};
        input["token"] = token;

        return new Auth__(input);
    }
    token(): string {
        return this.pseudoJson["token"];
    }
}

        
export class User {
    
    pseudoJson: Record<string, any>;

    constructor(pseudoJson: Record<string, any>) {
        this.pseudoJson = pseudoJson;
    }

    static from({
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
    }static for_getUsers(select: getUsers.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_createAnnouncement(select: createAnnouncement.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_refresh(select: refresh.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_ping(select: ping.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_login(select: login.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_createUser(select: createUser.Select_): Select_ {
        return new Select_(select.pseudoJson);
    }static for_getAnnouncements(select: getAnnouncements.Select_): Select_ {
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
    async createUser(headers: Record<string, any>, input: createUser.Input): Promise<[Record<string, any>, createUser.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new createUser.Output(message.body)];
    }
    async getAnnouncements(headers: Record<string, any>, input: getAnnouncements.Input): Promise<[Record<string, any>, getAnnouncements.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new getAnnouncements.Output(message.body)];
    }
    async getUsers(headers: Record<string, any>, input: getUsers.Input): Promise<[Record<string, any>, getUsers.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new getUsers.Output(message.body)];
    }
    async login(headers: Record<string, any>, input: login.Input): Promise<[Record<string, any>, login.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new login.Output(message.body)];
    }
    async ping(headers: Record<string, any>, input: ping.Input): Promise<[Record<string, any>, ping.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new ping.Output(message.body)];
    }
    async refresh(headers: Record<string, any>, input: refresh.Input): Promise<[Record<string, any>, refresh.Output]> {
        const message = await this.client.request(new Message(headers, input.pseudoJson));
        return [message.headers, new refresh.Output(message.body)];
    }
}

export class ServerHandler_ {
    
    async createAnnouncement(headers: Record<string, any>, input: createAnnouncement.Input): Promise<[Record<string, any>, createAnnouncement.Output]> {
        throw new Error('Not implemented');
    }
    async createUser(headers: Record<string, any>, input: createUser.Input): Promise<[Record<string, any>, createUser.Output]> {
        throw new Error('Not implemented');
    }
    async getAnnouncements(headers: Record<string, any>, input: getAnnouncements.Input): Promise<[Record<string, any>, getAnnouncements.Output]> {
        throw new Error('Not implemented');
    }
    async getUsers(headers: Record<string, any>, input: getUsers.Input): Promise<[Record<string, any>, getUsers.Output]> {
        throw new Error('Not implemented');
    }
    async login(headers: Record<string, any>, input: login.Input): Promise<[Record<string, any>, login.Output]> {
        throw new Error('Not implemented');
    }
    async ping(headers: Record<string, any>, input: ping.Input): Promise<[Record<string, any>, ping.Output]> {
        throw new Error('Not implemented');
    }
    async refresh(headers: Record<string, any>, input: refresh.Input): Promise<[Record<string, any>, refresh.Output]> {
        throw new Error('Not implemented');
    }

    async handler(message: Message): Promise<Message> {
        const functionName = Object.keys(message.body)[0];

        
        if (functionName === "fn.createAnnouncement") {
            const [headers, output] = await this.createAnnouncement(message.headers, new createAnnouncement.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }
        else if (functionName === "fn.createUser") {
            const [headers, output] = await this.createUser(message.headers, new createUser.Input(message.body));
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
        else if (functionName === "fn.login") {
            const [headers, output] = await this.login(message.headers, new login.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }
        else if (functionName === "fn.ping") {
            const [headers, output] = await this.ping(message.headers, new ping.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }
        else if (functionName === "fn.refresh") {
            const [headers, output] = await this.refresh(message.headers, new refresh.Input(message.body));
            return new Message(headers, output.pseudoJson);
        }

        throw new Error("Unknown function: " + functionName);
    }
}