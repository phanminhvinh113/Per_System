export interface User {
   email: string
   password: string
   name: string
}
export interface ResponseType {
   code: number | string
   status: number
   message: string | undefined
   data?: object | undefined
}

export interface ApiKeyModel {
   key: string | null
   status: boolean
   permission: string[]
}
