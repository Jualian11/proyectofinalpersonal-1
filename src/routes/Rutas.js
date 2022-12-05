import { Route, Routes } from "react-router-dom"

import {Home} from '../Home/Home'
import {Menu} from '../shared/Menu/Menu'
import {Historia} from '../Historia/Historia'
import {Integrantes} from '../Integrantes/Integrantes'

export function Rutas(){
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/integrantes" element={<Integrantes />} />
            </Routes>
        </>
        
    )
}