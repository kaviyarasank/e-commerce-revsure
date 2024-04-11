import React from "react";
import { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "@/components/layouts/layout";
import "../app/globals.css";
import { Provider } from "react-redux";
import { store } from "@/services/store";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp;