import { handleActions } from 'redux-actions'
import { SET, ADD, REMOVE, REMOVEALL } from '../types/order'
import util from '../../utils/utils'

export default handleActions({
  [SET] (state) {
    return {
      ...state,
      orderData: state.orderData.push()
    }
  },
  [ADD] (state, action) {
    util.success('已加入购物车')
    return {
      ...state,
      orderData: [...state.orderData, action.payload]
    }
  },
  [REMOVE] (state, action) {
    let orderData = [...state.orderData]
    orderData.splice(action.payload, 1)
    return {
      ...state,
      orderData: orderData
    }
  },
  [REMOVEALL] (state) {
    return {
      ...state,
      orderData: []
    }
  },
}, {
  orderData: [],
  orderData2: [
    {cname:'1', iprice:'dd', capplyaddr:'上海'},
      {cname:'2', iprice:'dd', capplyaddr:'上海'},
  ]
    
  
})