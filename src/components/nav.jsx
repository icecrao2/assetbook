import { Small_anchor } from './atoms';

const Nav = () => {

  return (
    <nav id="nav">
      <Small_anchor to={'./'} content="자산" />
      <Small_anchor to={'./cash'} content="현금" />
      <Small_anchor to={'./chart'} content="적금" />
      <Small_anchor to={'./chart'} content="투자" />
      <Small_anchor to={'./chart'} content="부채" />
      <Small_anchor to={'./chart'} content="보고서" />
    </nav>
  )

}

export default Nav;