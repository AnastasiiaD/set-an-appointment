import React, { memo } from "react";
import { Button, Icon } from "semantic-ui-react";
import { ROUTES, SIZES } from "./../../constants";
import apiHelper from "./../../utils/UiApiHelper";

const shouldShowBtn = (path) => {
    return path !== window.location.pathname;
};

const handleLogOut = (history) => {
    apiHelper.logoutUser().then(
        () => history.push(ROUTES.SIGNIN),
        err => console.error(err)
    );
};

const headerBar = ({ history }) => {
    return (
        <section className="header-bar">
            {shouldShowBtn(ROUTES.HOME) && (
                <Button animated size={SIZES.LARGE} onClick={() => history.push(ROUTES.HOME)}>
                    <Button.Content visible>Add URL</Button.Content>
                    <Button.Content hidden>
                        <Icon name="save" />
                    </Button.Content>
                </Button>
            )}

            {shouldShowBtn(ROUTES.LIST) && (
                <Button animated size={SIZES.LARGE} onClick={() => history.push(ROUTES.LIST)}>
                    <Button.Content visible>List of URLs</Button.Content>
                    <Button.Content hidden>
                        <Icon name="arrow right" />
                    </Button.Content>
                </Button>
            )}

            {shouldShowBtn(ROUTES.SERVICE_PROVIDER) && (
                <Button animated="fade" size={SIZES.LARGE} onClick={() => history.push(ROUTES.SERVICE_PROVIDER)}>
                    <Button.Content visible>Stored Worlds</Button.Content>
                    <Button.Content hidden>
                        <Icon name="bullhorn" />
                    </Button.Content>
                </Button>
            )}

            <Button animated="fade" size={SIZES.LARGE} onClick={() => handleLogOut(history)}>
                <Button.Content visible>Log out</Button.Content>
                <Button.Content hidden>
                    <Icon name="log out" />
                </Button.Content>
            </Button>

        </section>
    );
};

export default memo(headerBar);