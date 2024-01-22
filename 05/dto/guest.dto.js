export class GuestDto {

    constructor({ id, firstname, lastname }) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
}

export class GuestDetailDto {

    constructor({ id, firstname, lastname, email, hasConfirm }) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email.toLowerCasee();
        this.hasConfirm = hasConfirm;
    }

}