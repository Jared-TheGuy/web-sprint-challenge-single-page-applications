import { Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';


export default function PizzaForm(props) {

    const history= useHistory();

    const routeToHome = () => {
        history.push('/');
    }

    return (
        
            <div className="formContainer">
                <form>
                    <label>Name
                        <input
                        />
                    </label> <br/>
                    <label>Size
                        <select>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                    </label><br/>
                    <label>Mushrooms
                        <input type="checkbox"/>
                    </label>
                    <label>Peppers
                        <input type="checkbox"/>
                    </label>
                    <label>Olives
                        <input type="checkbox"/>
                    </label>
                    <label>Pepperoni
                        <input type="checkbox"/>
                    </label><br/>
                    <label>Special Instructions
                        <input
                        />
                    </label><br/>
                    
                    <button onClick={routeToHome}>Submit</button>
                    
                </form>
            </div>
        
    )
}