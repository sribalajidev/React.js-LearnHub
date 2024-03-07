import pageLogo from '../../assets/investment-calculator-logo.png';

function Header() {
  return (
    <header id="header">
      <img src={pageLogo} alt="Investment Calculator Logo"/>
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;