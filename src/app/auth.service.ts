export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise (
            (resolve, reject) => {
                setTimeout(()=> resolve(this.loggedIn), 1000); // simulate async operation
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
        console.log("in")
    }

    logout() {
        this.loggedIn = false;
        console.log("out")
    }
}