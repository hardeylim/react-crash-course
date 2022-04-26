import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title}) => {
  const onClick = () => {
    console.log('click')
  }
  return (
      <header className='header'>
        <h1>{title}</h1>
        <Button text={'Add'} color={'green'} onClick={onClick}></Button>
      </header>

  )
}

Header.defaultProps = {
  title: 'Default Title'
}

Header.propTypes =  {
  title: PropTypes.string
}


export default Header;
