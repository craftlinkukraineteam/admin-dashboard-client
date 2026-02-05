import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useLoginMutation } from "../authApi.tsx";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await login({ username: username, password: password }).unwrap();
            localStorage.setItem("token", result.token);
            alert("You have been logged in successfully!");
        } catch(err) {
            alert("You haven't been logged in successfully!");
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">
                CraftLink Ukraine - Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                >
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;