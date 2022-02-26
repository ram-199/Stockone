class receivepo{

	constructor(){
		 var Suppliername;
		 describe('Receive_PO', () => {
            it('Receive_PO', () => {
				cy.task('getUserData').then((userData) => {
                   
					    var getsup=userData;
						cy.log("getorder",getsup)
					    cy.log("......")
					    Suppliername=getsup.Suppliername
						cy.log(Suppliername)
							cy.get('[ui-sref="app.inbound.RevceivePo"]').click().wait(5000)
							cy.get('[id="DataTables_Table_4"]>tbody>tr:nth-child(1)>td:nth-child(12)').invoke('text').then(n=>{
								var a = n.replace('/',':')
								cy.log(a)
								cy.log(Suppliername)
								if(a==Suppliername){
									cy.log("Equal")
								}
								cy.get('[id="DataTables_Table_4"]>tbody>tr:nth-child(1)>td:nth-child(12)').click()
						
					})


						


					})
				
            	
				


          })
		})
	}
 }
export default receivepo


