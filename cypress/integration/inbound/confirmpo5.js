class confirmpo5{
    constructor(rosku){
        describe('INBOUND', () => {
            var s='';
            var Suppliername;
            it('Inbound', () => {
                cy.get('[class="fa fa-dropbox"]').click()
            })
            afterEach( () => {
                cy.saveLocalStorage()
            })
            beforeEach( () => {
                cy.restoreLocalStorage()
            })

            it('Purchase_Order',()=>{
                cy.get('[ui-sref="app.inbound.RaisePo"]').click().wait(5000)
            })
            it('New Purchase_Order',()=>{
                cy.get('[class="btn btn-success pull-right ml10"]',{timeout:5000}).first().click()
            })
            it('SupplierId',()=>{
                cy.get('[class="form-control ng-scope ng-pristine ng-invalid ng-invalid-required"]').first().type('Granary').wait(1000)
                cy.contains("Granary:Granary Wholesale Pvt Ltd").click()
                cy.wait(5000)
                cy.get('[name="supplier_id_name"]').first().invoke("val").then(s=>{
                    //cy.log(s)
                    cy.task('setUserData',  {Suppliername: s});
                    cy.log(s)
                })
              
               
            })
            it('Ship to Address',()=>{
                cy.get('[class="select2-container form-control ng-pristine ng-invalid ng-invalid-required"]').first().click()
                cy.get('[class="select2-result-label"]').contains('Hoodi MDC').click()
                
            })

            it('2-SKU',()=>{
                var table=cy.get('table[class="table"]')
                for(let i=0;i<rosku.length;i++){
                cy.get("[name='wms_code']").eq(i).type(rosku[i]).wait(5000).type('{enter}')
                cy.get('[class="ng-scope fa fa-plus-square-o"]').first().click()

                }
            })
            it('Confirm PO',()=>{
                cy.get('[class="btn pop pop-green ng-scope"]').first().click()
            })
            it('Do you want to Raise PO',()=>{
                cy.get('[class="confirm"]').wait(1000).click()
            })
            it('Extracting PO number', function() {
                cy.get("[class='col-lg-6 col-md-6 col-sm-6 col-xs-6 fs14 p0']").first().find('span').first().invoke('val').as('textData')

                cy.log('dd', this.textData)

                cy.get("[class='col-lg-6 col-md-6 col-sm-6 col-xs-6 fs14 p0']").first().find('span').first().then($po_num=>{
                    let po_number =  $po_num.text().split(':')[1]
                    // cy.task('setUserData',  {po_number: po_number});
                    cy.log('inner po:', po_number)
                    cy.wrap(po_number).as('refr')
                    cy.log('inner as:', this.refr)
                })

                // cy.log('outer po:', po_number)
                var gud = cy.get('@refr')
                cy.log('outer as :', this.refr)
                cy.log('as @ ;', gud)
                // cy.task('getUserData').then((userData) => {
                //     cy.log(userData);
                //     gud = userData
                //     cy.log(gud)
                //     cy.log(gud.po_number)
                //   });
            })
                it('Close PO prompt', function() {
                    cy.log(this.textData)
                    cy.log(this.refr)
                    this.po_refr = this.refr
                    localStorage.setItem('po_num', this.po_refr)
                    cy.log('stor; ', localStorage.getItem('po_num'))
                    cy.log('one;', this.po_refr)
                    cy.get("button[class='close']").first().click()
                    //cy.get("[class='fa fa-dropbox']").click();
    
                })
    
                it('fun', function() {
                    cy.log(this.po_refr)
                    var ponumberr=localStorage.getItem('po_num')
                    cy.log(ponumberr)
                    //console.log(localStorage.getItem('po_num'))

                    cy.get('[ui-sref="app.inbound.RaisePo"]').click().wait(3000)
                    cy.get('[type="search"]').first().type(ponumberr)
                    cy.wait(5000)
                    cy.get('[class="table custom-table table-condensed datatable ng-isolate-scope dataTable no-footer"]',{timeout:1000}).first().click()
                    cy.wait(5000)
                    for(let i=0;i<2;i++){
                    cy.get('[ng-model="product.price"]').eq(i).clear().type(6)
                    cy.get('[ng-model="product.remarks"]').eq(i).type("testing")
                    }
                    cy.get('[class="btn pop pop-green ng-scope"]').first().click()

                })
                
                
            })
        }
                
            get_po_num(){
                console.log(this.po_refr)
                return this.po_refr
            }
        }


export default confirmpo5



