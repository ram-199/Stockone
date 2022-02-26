class adding_to_saved_po{
    constructor(skud,sup_name){
        describe('INBOUND', () => {
            let sup
            it('Inbound', () => {
                cy.get('[class="fa fa-dropbox"]').click()
            })
            it('Purchase_Order',()=>{
                cy.get('[ui-sref="app.inbound.RaisePo"]').click().wait(3000)
            })
            it('New Purchase_Order',()=>{
                cy.get('[class="btn btn-success pull-right ml10"]',{timeout:7000}).first().click()
            })
            it('SupplierId',()=>{
                cy.get('[class="form-control ng-scope ng-pristine ng-invalid ng-invalid-required"]').first().type(sup_name)
                cy.contains("Granary:Granary Wholesale Pvt Ltd").click()
            })

            it('Ship to Address',()=>{
                cy.get('[class="select2-container form-control ng-pristine ng-invalid ng-invalid-required"]').first().click()
                cy.get('[class="select2-result-label"]').contains('Tech Shore').click()
            })
            it('adding one SKU ',()=>{
                cy.get("[name='wms_code']").eq(0).type(skud[0]).wait(3000).type('{enter}')
                cy.get('[class="ng-scope fa fa-plus-square-o"]').first().click()
            })
            it('Save',()=>{
                cy.get('[class="btn pop pop-normal"]').first().click().wait(3000)
                
            })
            it('Check Supplier Name',()=>{
                cy.get('tbody > :nth-child(1) > :nth-child(10)').invoke('text').then((name)=>{
                    if(name==sup_name){
                        cy.log("Supplier Name is Equal")
                    }
                    else{
                        cy.log("Supplier name not equal")
                    }
                })
            })
            it('Select Supplier Id',()=>{
                cy.contains(sup_name,{timeout:2000}).click()

            })

            it('adding More',()=>{
                
                for (let i = 1; i < 4; i++) {
                    cy.get('[class="ng-scope fa fa-plus-square-o"]').first().click()
                    cy.get("[name='wms_code']").eq(i).wait(1000).type(skud[i]).wait(3000).type('{enter}')
                  }
                  
            })
            it('Confirm PO',()=>{
                cy.get('[class="btn pop pop-green ng-scope"]').first().click()
            })
            it('Do you want to Raise PO',()=>{
                cy.get('.confirm').wait(5000).click()
                
            })
        })
    }
}
export default adding_to_saved_po