import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component{

    render(){

        return(

            <div>
                <h1>Bienvenido a la Home</h1>

                <Link to='/todos'>Go to create to do!</Link>
            </div>
        )
    }
}

export default Home;