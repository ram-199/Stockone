class difsku_difunit_diftax_sumprice{
    constructor(sku1_unitprice,cgst,skud){

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
            it('Ship to Address',()=>{
                cy.get('[class="select2-container form-control ng-pristine ng-invalid ng-invalid-required"]').first().click()
                cy.get('[class="select2-result-label"]').contains('Tech Shore').click()
            })
            // it('togle',()=>{
            //     //cy.get('[class="handle"]').eq(1).click()
            //     cy.get('[class="btn pop pop-normal"]').first().click()
                

            // })
            
            it('10-Same-SKUs',()=>{
                var table=cy.get('table[class="table"]')
                let sum=0;
                let sum2=0;
                for (let i = 0; i < sku1_unitprice.length; i++) {
                    cy.get("[name='wms_code']").eq(i).type(skud[i]).wait(3000).type('{enter}')
                    cy.get('[ng-model="product.fields.price"]').eq(i).clear().clear().type(sku1_unitprice[i])
                    sum=sum+(sku1_unitprice[i]*cgst[i]/100)+sku1_unitprice[i]
                    sum2=sum2+sku1_unitprice[i]
                    cy.get('[ng-model="product.fields.cgst_tax"]').eq(i).type(cgst[i])

                    //cy.get('[ng-model="product.fields.igst_tax"]').eq(i).type(igst[i])
                    cy.get('[class="ng-scope fa fa-plus-square-o"]').first().click()
                  }
                  cy.log("Total Price",sum2)
                  cy.log("Subtotal",sum)
                  
            })
            it('Confirm PO',()=>{
                cy.get('[class="btn pop pop-green ng-scope"]').first().click()
            })
            it('Do you want to Raise PO',()=>{
                cy.get('[class="confirm"]').wait(1000).click()
            })

        })
    }
}
export default difsku_difunit_diftax_sumprice