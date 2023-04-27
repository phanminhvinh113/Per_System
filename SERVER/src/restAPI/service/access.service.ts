import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { User } from '../interface/index.interface'
import { UserModel } from '../../models.mongo/User.model'
import { ROLES, STATE_USER } from '../../utils/constant'
import KeyTokenService from './keyToken.service'
import { createTokenPair } from '../../auth/auth.ultils'
import { token } from 'morgan'
import { getInfoData } from '../../utils/index.utils'
//
const checkExistUser = async (email: string) => {
   const user = await UserModel.findOne({
      email,
   }).lean()
   return user ? true : false
}
//
const generateKeyPair = async () => {
   const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 4096, // the length of the key in bits
      publicKeyEncoding: {
         type: 'spki', // recommended to be 'spki' by the Node.js docs
         format: 'pem', // also recommended to be 'pem'
      },
      privateKeyEncoding: {
         type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
         format: 'pem', // also recommended to be 'pem'
      },
   })
   return { publicKey, privateKey }
}
//
class accessService {
   //
   registerService = ({ email, password, name }: User) =>
      new Promise(async (resolve, reject) => {
         try {
            if (!email || !password || !name)
               return resolve({
                  code: -1,
                  status: 204,
                  messgae: 'Missing Parameters',
               })
            if (await checkExistUser(email))
               return resolve({
                  code: 1,
                  status: 406,
                  message: 'Email already!',
               })
            // ADD NEW USER
            const hashPassword = bcrypt.hashSync(password, 10)
            const new_user = await UserModel.create({
               name,
               email,
               password: hashPassword,
               status: STATE_USER.ACTIVE,
               roles: [ROLES.USER],
            })
            // ERROR CREATE NEW USER
            if (!new_user) {
               return resolve({
                  code: 1,
                  status: 200,
                  message: 'FAIILED!',
               })
            }
            // CREATE TOKEN
            const { privateKey, publicKey } = await generateKeyPair()
            const publicKeyString = await KeyTokenService.createKeyToken({
               userId: new_user._id,
               publicKey,
            })
            console.log(publicKeyString)
            if (!publicKeyString) {
               return resolve({
                  code: -2,
                  message: 'publicKey error!',
               })
            }

            //
            const tokens = await createTokenPair({ userId: new_user._id, roles: new_user.roles }, publicKey, privateKey)
            if (tokens) {
               return resolve({
                  code: 0,
                  status: 201,
                  message: 'OK!',
                  data: {
                     user: getInfoData(['name', 'roles', 'email', 'verify', 'status'], new_user),
                     tokens,
                  },
               })
            }
            if (!token) {
               return resolve({
                  code: 0,
                  status: 200,
                  message: 'Failed!',
                  data: null,
               })
            }
            //
         } catch (error) {
            return reject({
               code: -1,
               status: 400,
               message: 'Server Error!',
            })
         }
      })
}
export default new accessService()
