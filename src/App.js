import React, {Component} from 'react';

//Components
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

export default class App extends Component {
    constructor(props) {
        super(props);
        const self = this;
        this.state = {
            form: {
                first_name: "",
                last_name: "",
                age: "",
                phone: "",
            },
            validete: false,
            errors: {}
        };

        this.getInpData = this.getInpData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInpData(key, value) {
        let formData = {},
            tempForm = this.state.form;
        if(key === "age" || key === "phone") value = value.replace(/\D/g, '');

        formData[key] = value;
        Object.assign(tempForm, formData)
        this.setState({
            form: tempForm
        })
    };

    handleChange(e) {
        this.setState({
            gender: e.target.value
        },() => {
            if(this.state.gender === "male") {
                this.setState({
                    form: {
                        ...this.state.form,
                        male: true,
                        famale: false
                    }
                });
            }
            if(this.state.gender === "famale") {
                this.setState({
                    form: {
                        ...this.state.form,
                        famale: true,
                        male: false
                    }
                })
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = this.state.form,
              errors = {};
        Object.entries(form).map((item) => {
            if(item[1].length < 2) errors[item[0]] = `${item[0].toLocaleUpperCase()} - Shouldn't be empty (min is 2 symbols)`;
        });

        if(Object.entries(errors).length === 0) {
            this.setState({validate: true})
            localStorage.setItem('formData', JSON.stringify(form))
        }

        this.setState({
            errors: errors
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>Hello World</h1>
                    <div className="wrapper-flex">
                        {/*Form*/}
                        <Form {...this.state}
                              getInpData={this.getInpData}
                              handleChange={this.handleChange}
                              handleSubmit={this.handleSubmit}/>

                        <Table form={JSON.parse(localStorage.getItem('formData'))}/>

                    </div>
                </div>
            </div>
        );
    }
}
