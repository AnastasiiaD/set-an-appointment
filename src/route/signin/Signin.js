import React, { Component } from "react";
import { Button, Form, Grid, Header, Icon, Message, Segment, Dimmer, Loader } from "semantic-ui-react";
import {COLORS, ROUTES, SIZES} from "../../constants";
import apiHelper from "../../utils/UiApiHelper";
import { connect } from "react-redux";
import { setWhetherIsValid } from "./../../actions/tokenActions";

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",

            isLoading: false,
        };
    }

    handleLogin = () => {
        const { email, password } = this.state;

        if(!email || !password) {
            console.error("put info in fields");
            return;
        }
        this.setState({isLoading: true});

        apiHelper.loginUser(email, password)
            .then(res => {
                const { history } = this.props;
                history.push(ROUTES.HOME);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                this.setState({ isLoading: false });
                this.props.checkToken();
            });
    };

    handleFieldChange = (e, type) => {
        const { value } = e.target;
        this.setState({ [type]: value});
    };

    render() {
        const { history } = this.props;
        const { email, password, isLoading } = this.state;

        return (
            <section className="standard-wrapper">
                <Grid textAlign="center" style={{height: "100vh"}} verticalAlign="middle">
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as="h2" color={COLORS.TEAL} textAlign="center">
                            <Icon name="share square"/> Log-in to your account
                        </Header>
                        <Form size="large">
                            <Segment stacked>
                                {isLoading && (
                                    <Dimmer active inverted>
                                        <Loader inverted>Loading</Loader>
                                    </Dimmer>
                                )}
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="E-mail address"
                                    value={email}
                                    onChange={e => this.handleFieldChange(e, "email")} />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={e => this.handleFieldChange(e, "password")} />

                                <Button color={COLORS.TEAL} fluid size={SIZES.BIG} onClick={this.handleLogin}>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message warning>
                            New to us?
                            <Button
                                color={COLORS.TEAL}
                                size={SIZES.SMALL}
                                onClick={() => history.push(ROUTES.SIGNUP)}>
                                Sign Up
                            </Button>
                        </Message>
                    </Grid.Column>
                </Grid>
            </section>
        );
    }
}

const mapStateToProps = ({token}) => ({
    token,
});
const mapDispatchToProps = dispatch => ({
    checkToken: () => dispatch(setWhetherIsValid())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
