class allpo_fields{
    constructor(skud){
        describe('INBOUND', () => {
            it('Inbound', () => {
                cy.get('[class="fa fa-dropbox"]').click()
            })
            it('Purchase_Order',()=>{
                cy.get('[ui-sref="app.inbound.RaisePo"]').click().wait(3000)
            })
            it('New Purchase_Order',()=>{
                cy.get('[class="btn btn-success pull-right ml10"]',{timeout:5000}).first().click()
            })
            it('SupplierId',()=>{
                cy.get('[class="form-control ng-scope ng-pristine ng-invalid ng-invalid-required"]').first().type('granary')
                cy.contains("Granary:Granary Wholesale Pvt Ltd").click()
            })
            // it('vendorid',()=>{
            //     cy.get('[ng-model="showCase.model_data.vendor_id"]')
            // })
            it('po_reference',()=>{
                cy.get('[ng-model="showCase.model_data.po_name"]').first().type('HDI1271')
            })
            
            it('Ship to Address',()=>{
                cy.get('[class="select2-container form-control ng-pristine ng-invalid ng-invalid-required"]').first().click()
                cy.get('[class="select2-result-label"]').contains('Tech Shore').click()
            })
            it('po_deliverydate',()=>{
                cy.get('[name="po_delivery_date"]').first().type('{enter}')
            })
            it('togle',()=>{
                    cy.get('[class="handle"]').eq(1).click()
                    cy.get('[class="btn pop pop-normal"]').first().click()
            })
            it('10-SKUs',()=>{
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
            it("Terms&Conditions",()=>{
                cy.get('[name="terms_condition"]').first().type('ok')
            })
            it('Save',()=>{
                cy.get('[class="btn pop pop-normal"]',{timeout:1000}).first().click()
            })
            it('datatable',()=>{
                cy.get('[class="table custom-table table-condensed datatable ng-isolate-scope dataTable no-footer"]',{timeout:1000}).first().contains("td","Saved").click()
            })
            it('Confirm_PO',()=>{
                cy.get('[class="modal-footer ng-scope"]').contains("Confirm PO").wait(2000).click()
            })
            it('Raise_PO',()=>{
                cy.get('.confirm').wait(5000).click()
            })
            // it('print',()=>{
            //     cy.get('[class="modal-footer ng-scope"]').contains('Print').click()
            // })
            
        })

    }
}
export default allpo_fields