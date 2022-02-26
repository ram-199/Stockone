
class createorder{
        constructor(sku){
            var order= '';
            var order_reference;
            describe('OutboundSO', () => {
                it('Outbound', () => {
                    cy.get('.ps-container').contains('span','Outbound', {timeout: 30000}).should('be.visible').click()
                })

                it('Createorder', () =>{
                    cy.get('.sidebar-panel').contains('span','Create Orders').click()
                })
                it('Customer_ID',()=>{
                    cy.get('[placeholder="Search Customer ID/Name/Number"]', {timeout: 30000}).should('be.visible').type(8500728347)
                    cy.contains('123 : pavithra : 8500728347').click()
                })
                it('Exp. Delivery Date',()=>{
                    cy.get('#shipment_date').type('{enter}',{force: true})
                }) 
                it('Order_Type',()=>{
                    cy.get('[ng-model="showCase.model_data.order_type"]').select('Express')
                })   
                it('Tax_Type',()=>{
                    cy.get('[ng-model="showCase.model_data.tax_type"]').select('Intra State')
                })  
                it('SKUCODE',()=>{
                    cy.get('.detectTab').type(sku).wait(3000).type('{enter}')
                })   
                it('Quantity>0',()=>{
                    cy.get('[ng-model="data.quantity"]').clear().type(10)
                })
                it('OrderCreate',()=>{
                    cy.get('[ng-click="showCase.insert_order_data($event, form)"]').click()
                })
                it('Extract Order_Reference',()=>{
                    cy.get('p[style="display: block;"]').invoke('text').then(text => text.split(': ')).then(text => {
                        this.order=text[1];
                        cy.log(this.order)
                        cy.task('setUserData',  {order_reference: this.order});
                })   
                cy.get('[class="noty_text"]').click()
                cy.get('.confirm').click()
                cy.log('Order Created Successfully')
    
               })
            })

        }
    
    }
    export default createorder