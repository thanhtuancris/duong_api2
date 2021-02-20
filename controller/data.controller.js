
let Data = require('../model/data')
module.exports = {
    add_data: async function(req, res){
        let ProcessorId = req.body.ProcessorId.trim()
        let HDDSerialNo = req.body.HDDSerialNo.trim()
        let MACAddress = req.body.MACAddress.trim()
        let data = Data({
            ProcessorId: ProcessorId,
            HDDSerialNo: HDDSerialNo,
            MACAddress: MACAddress,
        })
        let check_process = await Data.findOne({
            ProcessorId: ProcessorId
        });
        let check_HDD = await Data.findOne({
            HDDSerialNo: HDDSerialNo
        });
        let check_MAC = await Data.findOne({
            MACAddress: MACAddress
        });
        if(check_process != null && check_HDD != null && check_MAC != null){
            res.status(400).json({
                message: "Dữ liệu đã tồn tại"
            });
        }else{
            let rs_save = await data.save()
            if(rs_save != null){
                res.status(200).json({
                    message: "Thêm dữ liệu thành công",
                    data: rs_save
                })
            }else{
                res.status(400).json({
                    message: "Thêm dữ liệu thất bại"
                });
            }
        }
       
    },
    check_data: async function(req, res){
        let ProcessorId = req.body.ProcessorId.trim()
        let HDDSerialNo = req.body.HDDSerialNo.trim()
        let MACAddress = req.body.MACAddress.trim()
        let check_process = await Data.findOne({
            ProcessorId: ProcessorId
        });
        let check_HDD = await Data.findOne({
            HDDSerialNo: HDDSerialNo
        });
        let check_MAC = await Data.findOne({
            MACAddress: MACAddress
        });
        if(check_process != null && check_HDD != null && check_MAC != null){
            res.status(200).json({
                message: "True"
            });
        }else{
            res.status(400).json({
                message: "False"
            });
        }
    },
    delete_data: async function(req, res){
        let ProcessorId = req.body.ProcessorId.trim()
        let HDDSerialNo = req.body.HDDSerialNo.trim()
        let MACAddress = req.body.MACAddress.trim()
        let check_process = await Data.findOne({
            ProcessorId: ProcessorId
        });
        let check_HDD = await Data.findOne({
            HDDSerialNo: HDDSerialNo
        });
        let check_MAC = await Data.findOne({
            MACAddress: MACAddress
        });
        if(check_process != null && check_HDD != null && check_MAC != null){
            let rs_del = await Data.deleteOne({ProcessorId: ProcessorId, HDDSerialNo: HDDSerialNo, MACAddress: MACAddress})
            // let rs_del_HDD = await Data.deleteOne({HDDSerialNo: HDDSerialNo})
            // let rs_del_MAC = await Data.deleteOne({MACAddress: MACAddress})
            if(rs_del != null){
                res.status(200).json({
                    message: "Xóa dữ liệu thành công"
                })
            }else{
                res.status(400).json({
                    message: "Xóa dữ liệu thất bại"
                })
            }
        }else{
            res.status(400).json({
                message: "Không khớp dữ liệu, vui lòng thử lại"
            });
        }
    }
}
