import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";
import {setWhetherIsValid} from "./../../actions/tokenActions";

export function renderWithAuth(ComponentToProtect, isPrivatePath) {
    class PageComponent extends Component {
        constructor() {
            super();
            this.state = {
                isTokenValid: false,
            };

        }

        componentWillMount() {
            if (isPrivatePath) {
                this.props.checkToken()
                    .then(() => {
                        this.setState({isTokenValid: true})
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        };

        render() {
            const {token} = this.props;
            if (!isPrivatePath || (token.isChecked && token.isTokenValid)) {
                return (
                    <ComponentToProtect {...this.props} />
                );
            } else if (!token.isChecked && isPrivatePath) {
                return null;
            } else if (!token.isTokenValid && isPrivatePath && token.isChecked) {
                return <Redirect to="/signin"/>;
            }
        }
    }

    const mapStateToProps = ({token}) => ({
        token,
    });

    const mapDispatchToProps = dispatch => ({
        checkToken: () => dispatch(setWhetherIsValid()),
    });

    return connect(mapStateToProps, mapDispatchToProps)(PageComponent);
}

export function renderRoutes(routes) {
    return routes.map((route) => {
        return <Route path={route.path} component={renderWithAuth(route.component, route.isPrivatePath)} exact />;
    });
}
