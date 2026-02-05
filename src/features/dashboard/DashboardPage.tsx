import React from "react";
import { Container, Typography, Button } from "@mui/material";

const DashboardPage: React.FC = () => {
    const token = localStorage.getItem("token");

    return (
        <Container>
            <Typography variant="h3">
                Admin Dashboard
            </Typography>
            { token ? (
                <Typography>
                    Welcome! You are logged in.
                </Typography>
            ) : (
                <Typography>
                    Please login to access the dashboard.
                </Typography>
            )}
            <Button
                variant="outlined"
                color="error"
                onClick={() => {
                    localStorage.removeItem("token");
                    alert("Logged out!");
                }}
            >
                Logout
            </Button>
        </Container>
    );
};

export default DashboardPage;
