import './styles/aboutme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const IconPage = () => {
  return (
    <div>
      <div className='textBox'>
        <a href='https://github.com/claireyy16'>        
          <FontAwesomeIcon className='icon' icon={faGithubAlt}/>
        </a>
        <p>my GitHub</p>
      </div>
      <div className='textBox'>
        <a href='https://github.com/claireyy16/ecommerce-site'>        
          <FontAwesomeIcon className='icon' icon={faGithubAlt}/>
        </a>        
        <p>this repo</p>
      </div>
      <div className='textBox'>
        <a href='https://www.linkedin.com/in/claire21c16/'>        
          <FontAwesomeIcon className='icon' icon={faGithubAlt}/>
        </a>
        <p>my LinkedIn</p>
      </div>
      <div className='textBox'>
        <a href='clairecui16@gmail.com'>        
          <FontAwesomeIcon className='icon' icon={faGithubAlt}/>
        </a>
        <p>email me</p>
      </div>
    </div>
  )
}

export default IconPage