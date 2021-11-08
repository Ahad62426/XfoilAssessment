import { useState } from "react";
import { Button, Card, Input,Typography } from "antd";
import axios from 'axios';

import { BASE_URL, END_POINTS } from "../constants/APIS";

const LoginPage = ({ setInfo }) => {

    const { Text } = Typography;

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // function sum(array, age) {
    //     if (!array || (!age && age !== 0))
    //         return "Invalid input"
    //     return array.reduce((a, b) => a + b, 0) > age ? "Sum greater than age" : "Sum is is not greater than age"
    // }

    function login() {
        setLoading(true)
        setError(null)
        axios.post(BASE_URL + END_POINTS.login, { username, password })
            .then(function (response) {
                setLoading(false)
                setInfo(response.data)
            })
            .catch(function (error) {
                setLoading(false)
                if (error.response.status === 401) {
                    setError("Invalid Credentials");
                }
            });
    }

    return (
        <Card title="Login Page" bordered={false} style={{ width: '30%' }}>
            <Input
                placeholder="Enter Email"
                value={username}
                onChange={({ target: { value } }) => setUsername(value)}
                style={{
                    padding: '5px 10px',
                    marginBottom: '15px'
                }}
            />
            <Input.Password
                placeholder="Enter Password"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                style={{
                    padding: '5px 10px',
                    marginBottom: '15px'
                }}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Button
                    type="primary"
                    size="middle"
                    loading={loading}
                    onClick={() => login()}>
                    Login
                </Button>
                {!!error
                    ? <Text type="danger" style={{
                        marginTop: '15px'
                    }}>{error}</Text>
                    : null
                }
            </div>
        </Card>
    )
}

export default LoginPage