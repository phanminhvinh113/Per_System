import { NextFunction, Request, Response } from 'express'
import JWT from 'jsonwebtoken'
import { asyncHandler } from '../helpers/asyncHandler'
import { AuthFailedError, NotFoundError } from '../core/error.response'
import { HEADER } from '../utils/constant'
import keyTokenService from '../restAPI/service/keyToken.service'

export const createTokenPair = async (payload: object, _publicKey: string, privateKey: string) => {
   try {
      // access token
      const accessToken = JWT.sign(payload, privateKey, {
         algorithm: 'RS256',
         expiresIn: '1 days',
      })
      //refrash token
      const refreshToken = JWT.sign({ ...payload, privateKey }, privateKey, {
         algorithm: 'RS256',
         expiresIn: '30 days',
      })
      //
      return accessToken && refreshToken ? { accessToken, refreshToken } : { accessToken: null, refreshToken: null }
      //
   } catch (error) {
      return Error('Error Genarate Token')
   }
}

export const VerifyToken = async (token: string, publicKey: string) => {
   try {
      const decode = await JWT.verify(token, publicKey, {
         algorithms: ['RS256'],
         maxAge: '1 days',
      })
      return decode
   } catch (error) {
      return error
   }
}

export const Authentication = asyncHandler(async (req: Request, _res: Response, next: NextFunction) => {
   //1
   const userId: any = req.headers[HEADER.CLIENT_ID]
   if (!userId) throw new AuthFailedError('Invalid Request')
   //2
   const keyStore: any = await keyTokenService.findByUserId(userId)
   if (!keyStore) throw new NotFoundError('Invalid Key Store!')
   //3
   const accessToken = req.headers[HEADER.AUTHORIZATION]
   if (!accessToken) throw new AuthFailedError('Invalid Request')
   //4
   try {
      const decodeJWT = await VerifyToken(accessToken, keyStore.publicKey)
      if (decodeJWT.userId === userId) {
         //
         req.keyStore = keyStore
         req.User = decodeJWT
         //
         return next()
      } else throw new AuthFailedError(decodeJWT.message || 'Unauthorized User')
      //
   } catch (error) {
      throw error
   }
   //
})
