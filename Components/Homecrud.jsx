import React  from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css"
const HomeCrud=()=>{
    return(
        <section id={style.nav}>
            < Link to="/">CREATE-USERS</Link>
            <Link to="/user">USERS</Link>
            
        </section>
    )
}
export default HomeCrud