import { User } from './user';
import { browser } from 'protractor';

export class UserBuilder {

    private email: string;
    private password: string;

    constructor() {
        this.email = browser.params.user.email;
        this.password = browser.params.user.password;
    }

    withEmail(email: string): UserBuilder {
        this.email = email;
        return this;
    }

    withPassword(password: string): UserBuilder {
        this.password = password;
        return this;
    }
    
    build(): User {
        return new User(this.email, this.password);
    }
}
