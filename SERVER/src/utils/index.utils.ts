import _ from 'lodash'
//
export const getInfoData = (fileds: any, object: object = {}) => {
   return _.pick(object, fileds)
}
