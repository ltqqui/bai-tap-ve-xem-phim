import danhSachGheData from '../../Data/danhSachGhe.json'
import { HUY_GHE, THEM_GHE } from "../types/BaiTapVeType" 
const stateDefault={
    danhSachGheData,
    danhSachGheDangDat:[

    ]
}

const BaiTapVeReducer=(state=stateDefault, action )=>{
    switch(action.type){
        case THEM_GHE:{
            const danhSachGheUpdate=[...state.danhSachGheDangDat];
            let indexGheDangChon=state.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===action.ghe.soGhe)
            if(indexGheDangChon!==-1){//nếu tìm thấy vị trí của ghế thì xóa nó đi 
                danhSachGheUpdate.splice(indexGheDangChon,1)
            }
            else {
                danhSachGheUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat=danhSachGheUpdate
            return {...state}
        }
        case HUY_GHE:{
            const danhSachGheUpdate=[...state.danhSachGheDangDat];
            let indexGheDangChon=state.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===action.soGhe)
            if(indexGheDangChon!==-1){//nếu tìm thấy vị trí của ghế thì xóa nó đi 
                danhSachGheUpdate.splice(indexGheDangChon,1)
            }
            else {
                danhSachGheUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat=danhSachGheUpdate
            return {...state}
        }
        default:return {...state}
    }
    
     
}

export default BaiTapVeReducer;