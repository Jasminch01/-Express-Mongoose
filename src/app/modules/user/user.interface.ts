export interface Iuser {
    id : string,
    password : string,
    needsPasswordChange : boolean,
    role : "admin" | "student" | "faculty",
    status : 'bolcked' | "in-progress"
    isDeleted : boolean,
}