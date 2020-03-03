import React, {Component} from "react";

export default class Table extends Component {
    render() {
        const {form, remove} = this.props;
        return(
            <div className="Table">
                <div className="wrapper">
                    <ul className="collection">
                        {
                            (form != null) ?
                                Object.entries(form).map((item,i)=>{
                                    return(
                                        <li className="collection-item" key={i}>
                                            {
                                                (item[1] === true) ? `${item[0]} - Yes` : item[1] === false ? `${item[0]} - No` : item[1]
                                            }
                                            <span className="right" style={{cursor: 'pointer', color: 'blue'}} onClick={()=> remove(item[0])}>
                                                <i className="material-icons" style={{color: '#26a69a'}}>delete_forever</i>
                                            </span>
                                        </li>
                                    )
                                })
                            : []
                        }
                    </ul>
                </div>
            </div>
        )
    }
}