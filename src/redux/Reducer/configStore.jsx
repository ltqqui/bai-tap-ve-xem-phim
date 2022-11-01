import {configureStore} from '@reduxjs/toolkit'
import BaiTapVeReducer from './BaiTapVeReducer'

export const store=configureStore({
    reducer:{ 
        BaiTapVeReducer:BaiTapVeReducer
    }
})