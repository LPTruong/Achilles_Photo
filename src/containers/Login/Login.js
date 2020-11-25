import React, { useEffect, useState } from 'react';

import FormLogin from '../../components/Login/FormLogin';
import FormRegister from '../../components/Login/FormRegister';

import useLogin from '../../hooks/login';

const Login = () => {

    const {
        isRegisterd,
        setIsRegisterd,
        afadf
    } = useLogin()

    return (
        <div className = "ditmemay">
            <FormLogin />
            { isRegisterd ? <FormLogin /> : <FormRegister />}
        </div>
    )
}

export default Login;