import JWT from 'jsonwebtoken'

export const createTokenPair = async (payload: object, _publicKey: any, privateKey: any) => {
   try {
      // access token
      const accessToken = await JWT.sign(payload, privateKey, {
         algorithm: 'RS256',
         expiresIn: '1 days',
      })
      //refrash token
      const refreshToken = await JWT.sign(payload, privateKey, {
         algorithm: 'RS256',
         expiresIn: '30 days',
      })
      //
      return { accessToken, refreshToken }
   } catch (error) {
      return Error('Error Genarate Token')
   }
}
