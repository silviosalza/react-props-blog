import style from "../css/modules/TheFooter.module.css"


function TheFooter(){
    return(
        <footer>
        <ul className={style.ul}>
            <li className={style.li}>About us</li>
            <li className={style.li}>Chi siamo</li>
            <li className={style.li}>Contattaci</li>
            <li className={style.li}>Social</li>
        </ul>
        </footer>
    )
}

export default TheFooter