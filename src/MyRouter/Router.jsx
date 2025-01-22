import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../menu/Menu";
import { Shop } from "../contener/Shop/Shop";
import { About } from "../contener/About/About";
import { Contact } from "../contener/Contact/Contact";
import { Homee } from "../contener/Homee/Homee";

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Homee />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;
