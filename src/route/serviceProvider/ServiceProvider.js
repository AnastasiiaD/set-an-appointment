import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderBar } from "../../common";


export default class ServiceProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState){

    }

    render() {
        const {  } = this.props;
        const {  } = this.state;
        const name = "John Smith";
        const company = "Mrs Tooth";
        return (
            <section className="service-provider-wrapper standard-wrapper">
                <HeaderBar />
                <div>
                    <div>
                        <p>{name}</p>
                        <p>{company}</p>
                    </div>
                </div>
            </section>
        );
    }
}

