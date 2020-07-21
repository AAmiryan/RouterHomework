import React, { useEffect } from 'react';

const Home = (props) => {

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(!user, !!user.login, !!user.password, "!user && !user.login && !user.password");
        if (!user ||( user && !user.login && !user.password)) {
            props.history.push("/login")
        }
    }, []);

    const logout = () => {
        localStorage.clear("user");
        setTimeout(() => {
            props.history.push("/login")
        }, 200)
    }
    return (
        <div>
            welcome {JSON.parse(localStorage.getItem("user")).login}
            <button onClick={logout}>Log out </button>
        </div>

    );
}

export default Home;