import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./reducer/authReducer"

export const rootReducer = combineReducers({
  auth: authReducer
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store
