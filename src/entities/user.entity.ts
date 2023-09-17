type IUser = {
    name:string,
    password:string,
    username:string,
}


export class User {
    name:string,
    password:string,
    username:string,
    id:string,
    isAdmin: boolean


    constructor(props: IUser) {
        this.name = props.name
    }

}