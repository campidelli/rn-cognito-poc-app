import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { checkPermissions } from "./Permissions";
import { getSession } from "./Auth";
import Login from "./Login";
import UserInfo from "./UserInfo";

export default () => {
    const [grantedPermissions, setGrantedPermissions] = useState(false);
    const [logged, setLogged] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        checkPermissions()
            .then(granted => {
                setGrantedPermissions(granted);
            })
            .catch(err => {
                console.error('Failed to check permissions!', err);
            });
    }, []);

    const onLogin = ({ email, phone_number : phoneNumber }) => {
        setEmail(email);
        setPhoneNumber(phoneNumber);
        setLogged(true);
    };

    const render = () => {
        return logged
            ? <UserInfo email={email} phoneNumber={phoneNumber} />
            : <Login onLogin={onLogin} />;
    };

    return (
        <>
            {
                grantedPermissions
                    ? render()
                    : <Text>Unable to load. Please allow both read and write access to the mobile's storage.</Text>
            }
        </>
    );
};
