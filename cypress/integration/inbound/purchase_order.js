class purchase_order{
    constructor(skud){
        describe('INBOUND', () => {
            it('Inbound', () => {
                cy.get('[class="fa fa-dropbox"]').click()
            })
            it('Purchase_Order',()=>{
                cy.get('[ui-sref="app.inbound.RaisePo"]').click()
            })
            it('New Purchase_Order',()=>{
                cy.get('[class="btn btn-success pull-right ml10"]',{timeout:7000}).first().click()
            })
            it('SupplierId',()=>{
                cy.get('[class="form-control ng-scope ng-pristine ng-invalid ng-invalid-required"]').first().type('granary')
                cy.contains("Granary:Granary Wholesale Pvt Ltd").click()
            })

            it('Ship to Address',()=>{
                cy.get('[class="select2-container form-control ng-pristine ng-invalid ng-invalid-required"]').first().click()
                cy.get('[class="select2-result-label"]').contains('Tech Shore').click()
            })
            
            it('8-Different-SKUs',()=>{
                var table=cy.get('table[class="table"]')
                for (let i = 0; i < skud.length; i++) {
                    if(i==0){
                        cy.get("[name='wms_code']").eq(i).type(skud[i]).wait(3000).type('{enter}')
                    }
                    else{
                        cy.get("[name='wms_code']").eq(i).wait(1000).type(skud[i]).wait(3000).type('{enter}')
                    }
                    cy.get('[class="ng-scope fa fa-plus-square-o"]').first().click()
                  }
                  
            })
            it('Confirm PO',()=>{
                cy.get('[class="btn pop pop-green ng-scope"]').first().click()
            })
            it('Do you want to Raise PO',()=>{
                cy.get('[class="confirm"]').wait(5000).click()
            })

        })
    }
}
export default purchase_order