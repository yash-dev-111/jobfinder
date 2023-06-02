import logo from '../assets/images/jobfinder-logo.png'
 import './logo.css'

const Logo = () => {
  const logoStyle = {
    
    top: '10px',
    left: '10px',
    maxWidth: '70%',
    height: '100px',
    
  };
  return <img src={logo} alt='jobifinder' className='logo' style={logoStyle} />
}

export default Logo
