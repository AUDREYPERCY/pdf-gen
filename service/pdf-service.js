PDFDocument = require('pdfkit')


function buildPDF(dataCallback, endCallback){

    const doc = new PDFDocument()
      doc.on('data', dataCallback)
      doc.end('end', endCallback)
      doc.frontSize(255).text('some heading!')
    doc.end()
}

module.exports = {buildPDF}