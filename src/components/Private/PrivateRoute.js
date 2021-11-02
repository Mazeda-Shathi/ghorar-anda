import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../share/hook/UseAuth';

function PrivateRoute({ children, ...rest }) {
    const { user } = UseAuth()
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/home',
                                state: { from: location }
                            }}
                        />
                    ))
            }
        />
    );
}


export default PrivateRoute;