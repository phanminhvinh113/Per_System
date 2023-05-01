export const ROLES = Object.freeze({
   ADMIN: '0000_',
   USER: '1111_',
   SELLER: '2222_',
})

export const STATE_USER = Object.freeze({
   ACTIVE: 'active',
   UN_ACTIVE: 'unactive',
})

export const StatusCode = Object.freeze({
   //ERROR STATUS CODE
   BAD_REQUEST: 400,
   UNATHORIZED: 401,
   FORBIDDEN: 403,
   NOT_FOUND: 404,
   CONFLICT: 409,
   NOT_ACCEPTABLE: 406,
   TOO_MANY_REQUEST: 429,
   //SUCCESS STATUS CODE
   SUCCESS: 200,
   COMPLETED: 201,
})
export const ReasonStatusCode = Object.freeze({
   //ERRROR
   BAD_REQUEST: '	Bad Request',
   UNATHORIZED: 'Unauthorized',
   FORBIDDEN: 'Forbidden',
   NOT_FOUND: 'Not Found',
   CONFLICT: 'Conflict Error',
   NOT_ACCEPTABLE: 'Not Acceptable',
   TOO_MANY_REQUEST: 'Too Many Requests',
   // SUCCESS
   SUCCESS: 'OK!',
   COMPLETED: 'Completed!',
})

export const FindUserByField = Object.freeze({
   EMAIL: 'email',
   PHONE: 'phone',
})
export const Track_Device = Object.freeze({
   IP_OLD: 'O_0000_ip',
   IP_NEW: 'N_1111_ip',
   DEVICE_OLD: 'O_0000_d',
   DEVICE_NEW: 'N_1111_d',
})

export const HEADER = Object.freeze({
   API_KEY: 'x-api-key',
   CLIENT_ID: 'x-client-id',
   AUTHORIZATION: 'authorization',
})
export const Enum_Type_Products = ['Electronic', 'Clothing', 'Furniture', 'Sport', 'Food', 'Cosmetics', 'Fashion']

export const TypeProduct = Object.freeze({
   Electronic: 'Electronic',
   Clothing: 'Clothing',
   Furniture: 'Furniture',
   Sport: 'Sport',
   Food: 'Food',
   Cosmetics: 'Cosmetics',
   Fashion: 'Fashion',
})
