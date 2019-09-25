import React, { Component } from "react";
import { Button, Form, Grid, Header, Icon, Segment, Dimmer, Loader } from "semantic-ui-react";
import {COLORS, ROUTES, SIZES} from "../../constants";
import apiHelper from "../../utils/UiApiHelper";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            password: "",

            isLoading: false
        };
    }

    handleInputChange = (e, prop) => {
        const {value} = e.target;
        this.setState({[prop]: value});
    };

    handleRegisterUser = () => {
        const { firstName, lastName, company, email, password } = this.state;

        if(!firstName || !lastName || !company || !email || !password) {
            console.error("fill in all params");
            return;
        }

        this.setState({ isLoading: true });

        apiHelper.registerUser(firstName, lastName, company, email, password).then(
            res => {
                this.props.history.push(ROUTES.HOME);
                // TODO add notification that user is stored!
            },
            err => {
                console.log(err);
            },
        ).finally(() => {
            this.setState({
                isLoading: false
            });
        });
    };

    render(){
        const { history } = this.props;
        const { firstName, lastName, company, email, password, isLoading } = this.state;
        return (
            <section className="standard-wrapper">
                <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color={COLORS.TEAL} textAlign="center">
                            <Icon name="share square" /> Log-in to your account
                        </Header>
                        <Form size="large">
                            <Segment stacked>
                                {isLoading && (
                                    <Dimmer active inverted>
                                        <Loader inverted content="Saving" />
                                    </Dimmer>
                                )}

                                <Form.Input
                                    value={firstName}
                                    fluid icon="user"
                                    iconPosition="left"
                                    placeholder="Name"
                                    onChange={e => this.handleInputChange(e, "firstName")} />
                                <Form.Input
                                    value={lastName}
                                    fluid icon="user"
                                    iconPosition="left"
                                    placeholder="Second name"
                                    onChange={e => this.handleInputChange(e, "lastName")} />
                                <Form.Input
                                    value={company}
                                    fluid icon="user"
                                    iconPosition="left"
                                    placeholder="Company"
                                    onChange={e => this.handleInputChange(e, "company")} />
                                <Form.Input
                                    value={email}
                                    fluid icon="user"
                                    iconPosition="left"
                                    placeholder="E-mail address"
                                    onChange={e => this.handleInputChange(e, "email")} />
                                <Form.Input
                                    value={password}
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    onChange={e => this.handleInputChange(e, "password")} />

                                <Button color={COLORS.TEAL} fluid size={SIZES.BIG} onClick={this.handleRegisterUser}>
                                    Create user
                                </Button>

                                <Button color={COLORS.YELLOW} onClick={() => history.push(ROUTES.SIGNIN)}>
                                    Back to login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </section>
        );
    }
};

export default Signup;