export interface Studentdto{
    id? : number,
    email: string,
    name: string,
    age: number,
    lname: string,
    isAlive: true
}

export interface OneUser {
    id : number
}

export type method = "params" | "body" | "query"

