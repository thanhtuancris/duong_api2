module.exports = {
    add_data: function(req, res, next) {
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return 
        }
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return
        }
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return
        }
        next()
    },
    check_data: function(req, res, next) {
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return 
        }
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return
        }
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return
        }
        next()
    },
    delete_data: async function(req, res, next) {
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return 
        }
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return
        }
        if(!req.body.ProcessorId){
            res.status(400).json({
                message: "Thiếu trường dữ liệu"
            })
            return
        }
        next()
    }
}
