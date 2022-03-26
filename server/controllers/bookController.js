const uuid=require('uuid')
const path = require('path')
const {Book, BookInfo}= require('../models/models')
const ApiError=require('../error/ApiError')
class BookController{
    async create(req, res,next){
        try{
            let {name, autorId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))


            const {pdf} = req.files
            let fileNamePdf = uuid.v4() + ".pdf"
            pdf.mv(path.resolve(__dirname, '..', 'static', fileNamePdf))

            
            const book= await Book.create({name, autorId, typeId, img:fileName, pdf:fileNamePdf})
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    BookInfo.create({
                        title: i.title,
                        description: i.description,
                        bookId: book.id
                    })
                )
            }
            return res.json(book)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }
       
    }
    async getAll(req, res,) {
        let {autorId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let books;
        if (!autorId && !typeId) {
            books = await Book.findAndCountAll({limit, offset})
        }
        if (autorId && !typeId) {
            books = await Book.findAndCountAll({where:{autorId}, limit, offset})
        }
        if (!autorId && typeId) {   
            books = await Book.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (autorId && typeId) {
            books = await Book.findAndCountAll({where:{typeId, autorId}, limit, offset})
        }
        return res.json(books)
    }
   async getOne(req,res){
    const {id} = req.params
    const book = await Book.findOne(
        {
            where: {id},
            include: [{model: BookInfo, as: 'info'}]
        },
    )
    return res.json(book)
}
    

}
module.exports = new BookController()