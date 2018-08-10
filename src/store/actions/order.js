import { createAction } from 'redux-actions'
import { ADD, REMOVE, REMOVEALL } from '../types/order'


export const addOrder = createAction(ADD, (data) => {
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(1)
  //   }, 1000)
  // })
  return data
})

export const removeOrder = createAction(REMOVE, (index) => {

  return index
})


export const removeOrderAll = createAction(REMOVEALL, () => {

  return ''
})
