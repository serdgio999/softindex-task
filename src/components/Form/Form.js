import React, {Component} from "react";

export default class Form extends Component {


    render() {
        const {
                name,
                last_name,
                age,
                phone,
            } = this.props.form,
            errorMsgs = (this.props.errors) ? Object.keys(this.props.errors).map(key => this.props.errors[key]) : []
        return (
            <div className="Form">
                <form>

                    <div className="row">
                        <form className="col s12">
                            {errorMsgs.map((error, i) => <div key={i} className="errors">{error}</div>)}
                            <div className="row">
                                <div className="input-field">
                                    <input type="text"
                                           id="first_name"
                                           name="first_name"
                                           placeholder="Your Name"
                                           className="validate"
                                           value={name}
                                           onChange={(e) => this.props.getInpData(e.target.name, e.target.value)}/>
                                </div>
                                <div className="input-field">
                                    <input type="text"
                                           id="last_name"
                                           name="last_name"
                                           placeholder="Last Name"
                                           className="validate"
                                           value={last_name}
                                           onChange={(e) => this.props.getInpData(e.target.name, e.target.value)}/>
                                </div>
                                <div className="input-field">
                                    <input type="text"
                                           id="age"
                                           name="age"
                                           placeholder="Age"
                                           maxLength="3"
                                           className="validate"
                                           value={age}
                                           onChange={(e) => this.props.getInpData(e.target.name, e.target.value)}/>
                                </div>
                                <input type="tel"
                                       name="phone"
                                       placeholder="Phone"
                                       className="validate"
                                       value={phone}
                                       onChange={(e) => this.props.getInpData(e.target.name, e.target.value)}/>
                                <div className="form-group">
                                    <label>
                                        <input
                                            type="radio"
                                            value="male"
                                            checked={this.props.gender === "male"}
                                            onChange={this.props.handleChange}
                                            required={true}
                                        />
                                        <span>Male</span>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="famale"
                                            checked={this.props.gender === "famale"}
                                            onChange={this.props.handleChange}
                                            required={true}
                                        />
                                        <span>Famale</span>
                                    </label>
                                </div>
                                <br/>
                                <button className="btn waves-effect waves-light"
                                        onClick={this.props.handleSubmit}>Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </form>

            </div>
        )
    }
}