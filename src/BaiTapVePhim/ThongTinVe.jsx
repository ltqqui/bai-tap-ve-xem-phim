import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { huyGhe } from '../redux/actions/BaiTapVeAction'

export default function ThongTinVe() {
    const dispatch=useDispatch()
    const arrGheDangDat=useSelector(state=>state.BaiTapVeReducer.danhSachGheDangDat)
    const renderThongTin=()=>{
        return arrGheDangDat.map((ghe,index)=>{
            return <tr key={index} className='text-primary' >
            <td>{ghe.soGhe}</td>
            <td>{ghe.gia.toLocaleString()}</td>
            <td>
                <button className='btn btn-danger'onClick={()=>{
                    dispatch(huyGhe(ghe.soGhe))
                }}>Hủy</button>
            </td>
            </tr>
        }) 
        
    }
    return (
        <div>
            <div className='mt-4'>
                <button className='gheDuocChon'></button><span style={{ fontSize: '25px' }} className='text-light'> Ghế đã đặt</span>
                <br />
                <button className='gheDangChon'></button><span style={{ fontSize: '25px' }} className='text-light'> Ghế đang đặt</span>
                <br />
                <button className='ghe mx-0'></button><span style={{ fontSize: '25px' }} className='text-light'> Ghế đang đặt</span>
            </div>
            <div className='mt-5'>
                <table className="table" border="2">
                    <thead>
                        <tr className='text-light' style={{fontSize:'30px'}}>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderThongTin()}
                    </tbody>
                    <tfoot>
                        <td></td>
                        <td style={{color:'pink'}}>Tổng tiền</td>
                        <td style={{color:'pink'}}>
                            {arrGheDangDat.reduce((tongTien,ghe,index)=>{
                                return tongTien+=ghe.gia
                            },0).toLocaleString()}
                        </td>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

