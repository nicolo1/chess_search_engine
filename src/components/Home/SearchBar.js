import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import { isValidString } from "../../service/search.service";

const SearchBar = ({ size = 400 }) => {
    const [error, setError] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(text);

        if (isValidString(text)) {
            setError(false);
        } else {
            setError(true);
        }
    }, [text]);

    return (
        <form action="/search">
            <Box
                id="searchbar-container"
                sx={{ display: "flex", alignItems: "flex-end" }}
            >
                <AccountCircle
                    id="searchbar-icon"
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                    error={error}
                    helperText={error ? "Invalid entry." : ""}
                    onKeyPress={
                        error
                            ? (e) => e.key === "Enter" && e.preventDefault()
                            : () => {} // empty function
                    }
                    id="searchbar-textfield"
                    name="q"
                    label="Search"
                    variant="standard"
                    autoComplete="off"
                    sx={{
                        width: `${size}px`,
                    }}
                    inputProps={{ style: { fontSize: 14 } }}
                    InputLabelProps={{
                        style: {
                            fontSize: 14,
                            fontFamily: `'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'`,
                        },
                    }}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </Box>
        </form>
    );
};

export default SearchBar;
