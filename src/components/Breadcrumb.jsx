import { Link } from 'react-router-dom';
import chevronright from '../assets/Vector.svg';

function Breadcrumb({ name }){
  return(
    <nav className="breadcrumb">
          <Link to="/">Inicio</Link> <span className="contains-chevron" aria-hidden="true"><img src={chevronright} className='chevron-right' /></span>{' '}
          <span>{name}</span>
        </nav>
  )
}
export default Breadcrumb;