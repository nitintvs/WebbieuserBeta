import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { SnackbarProvider } from 'notistack';
import Routes from "routes/route";
import store from "store/store";
import { ColorProvider } from "utils/UIContext";
import { LoaderProvider } from "Context/LoaderContext";
import FullScreenLoader from "Context/FullScreenLoader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ColorProvider>
            <LoaderProvider>
            <SnackbarProvider autoHideDuration={3000} maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <BrowserRouter>
                <FullScreenLoader/>
                    <Routes />
                </BrowserRouter>
            </SnackbarProvider>
            </LoaderProvider>
            </ColorProvider>
        </Provider>
    </React.StrictMode>
);
