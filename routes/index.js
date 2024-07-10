const express = require('express')
const pdfService = require('../service/pdf-service')


const router = express.Router()
router.get('/invoice', (req,res) =>{
    const stress = res.writeHead(200,{
        'content-type': 'application/pdf',
        'content-disposition':'attachment;filename=invoice.pdf'
    })

    pdfService.buildPDF(
        (chunk) => Stream.write(chunk),
        ()=> Stream.end
    )

})
module.exports = router