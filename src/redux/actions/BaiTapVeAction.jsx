import { THEM_GHE, HUY_GHE } from "../types/BaiTapVeType"
export const datGheAction=(ghe)=>{
    return {
        type:THEM_GHE,
            ghe
    }
}

export const huyGhe=(soGhe)=>{
    return {
        type:HUY_GHE,
        soGhe
    }
}