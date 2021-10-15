import { Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';


export default function PizzaForm(props) {

    const history= useHistory();

    const routeToHome = () => {
        history.push('/');
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        props.change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        props.submit()
    }

    return (
        
            <div className="formContainer" onSubmit={onSubmit}>
                <form id="pizza-form" >
                    <div>
                        <div>{props.stateSpace.formErrors.name}</div>
                    </div>
                    <label>Name
                        <input
                        id="name-input"
                        name="name"
                        onChange={onChange}
                        />
                    </label> <br/>
                    <label>Size
                        <select 
                        id="size-dropdown"
                        name="dropdown"
                        type="text"
                        onChange={onChange}
                        >
                            <option>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                    </label><br/>
                    <label>Mushrooms
                        <input 
                        type="checkbox"
                        name="mushrooms"
                        onChange={onChange}
                        />
                    </label>
                    <label>Peppers
                        <input 
                        type="checkbox"
                        name="peppers"
                        onChange={onChange}
                        />
                    </label>
                    <label>Olives
                        <input 
                        type="checkbox"
                        name="olives"
                        onChange={onChange}
                        />
                    </label>
                    <label>Pepperoni
                        <input 
                        type="checkbox"
                        name="pepperoni"
                        onChange={onChange}
                        />
                    </label><br/>
                    <label>Special Instructions
                        <input
                        id="special-text"
                        name="instructions"
                        type="text"
                        onChange={onChange}
                        />
                    </label><br/>
                    
                    <button 
                    type="button"
                    onClick={routeToHome}
                    id="order-button"
                    >Submit</button>
                    
                </form>
            </div>
        
    )
}