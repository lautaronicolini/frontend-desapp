import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';

function NavbarResponsive() {
    const { t, i18n } = useTranslation();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Crypto P2P</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/login"><Trans i18nKey="login.loginText">Login</Trans></Nav.Link>
                    <Nav.Link href="/users"><Trans i18nKey="navbar.users">Users</Trans></Nav.Link>
                    <Nav.Link href="/transaction/all"><Trans i18nKey="navbar.transactions">Active Transactions</Trans></Nav.Link>
                    <Nav.Link href="/crypto"><Trans i18nKey="navbar.createTransactions">Create Transaction</Trans></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarResponsive;