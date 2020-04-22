import React, { Component } from 'react'
import todoservice from '../lib/todo'

class CrearToDo extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        listToDo: [],
        title: "",
        body: "",
    };
}
    handleChange = (event) => {
        const { name, value } = event.target;
        console.log('event.target :>> ', event.target);
        this.setState({ [name]: value });
    };

    getInfo = () => {
        todoservice
            .getToDo()
            .then((listToDo) => {
                this.setState({ listToDo: listToDo.data });
            })
            .catch((err) =>
                console.log("Este error pertenece a pagina ocio.js:", err)
            );
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { title, body } = this.state;
        todoservice.createToDo({ title, body });
        await this.getInfo();
        this.props.history.push("/todos");
    };
    componentDidMount() {
        this.getInfo();
    }

    render() {
        const { title, description } = this.state;
        const listadoToDo = this.state.listToDo.map((detalle) => {
            return (
                <div>
                    <h1>{detalle.title}</h1>
                    <h3>{detalle.description}</h3>
                </div>

            );
        });

        return (
            <>
                <div>

                    {listadoToDo}
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title to do"
                            value={title}
                            onChange={e => this.handleChange(e)}
                        />

                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter description"
                            value={description}
                            onChange={e => this.handleChange(e)}
                        />
                        <input
                            type="submit"
                            value="Crear Evento"
                            className="buttontosubmit"
                        />
                    </form>
                </div>

            </>

        )
    }
}

export default CrearToDo;