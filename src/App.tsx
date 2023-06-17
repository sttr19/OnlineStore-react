import React from "react";
import logo from "./logo.svg";

import { GoodList } from "./components/main/containers/GoodList";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header />
            <GoodList />
            <Footer />
        </>
    );
}

export default App;
