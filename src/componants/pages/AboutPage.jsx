import Card from '../Card'
import {BrowserRouter as Router , Link} from 'react-router-dom'


function AboutPage() {
  return (
    <div style={{padding : '0rem 2rem'}}>
      <Card>
        <h2>About US</h2>
        <p>this is my first React js app ,it is simple feedback app that clients can rate our service .<br /> 
          Hope you like it !
        </p>
        <a>version 1.0.0</a>
        <Link to="/">
          Back to the main page    
        </Link>
      </Card>
    </div>
  )
}

export default AboutPage
