describe('Api Adopet', () =>{
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MWI4OGZkMy01MDA2LTRkZWMtYjg1NC1iMjg1ZTEwMWQ5Y2UiLCJhZG9wdGVyTmFtZSI6IlRlc3RlIGRlIHRlc3RlIiwiaWF0IjoxNzYyNjIzOTcwLCJleHAiOjE3NjI4ODMxNzB9.iSSBPRzN3SGedJlPVbquHw9-nBH-UjYjY0_MTc1nt3A'

    it('Mensagens da API', () =>{
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-777112-415b-95d2-07904b0d1a1c',
            headers: { authorization }
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})