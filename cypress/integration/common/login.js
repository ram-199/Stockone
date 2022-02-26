class login{
    constructor(app,uname,pswd){
        this.app = app;
        this.uname = uname;
        this.pswd = pswd;

        describe('Stockone app', () => {
            it('Staging..', () => {
                //log_in.navigate();

                cy.visit(this.app+'login');
            })

            it('Login', () => {
                cy.get("[type='username']").type(this.uname);
                cy.get("[type='password']").type(this.pswd);
                cy.get("[type='password']").type('{enter}');
                cy.contains('REFRESH', {timeout: 30000}).should('be.visible');
                cy.log('Lgged in succesfully');
            })
            Cypress.Cookies.defaults({  preserve: 'sessionid' });
        })

    }

}
export default login
