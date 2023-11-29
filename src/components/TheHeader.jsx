import style from "../css/modules/TheHeader.module.css"


function TheHeader(){
    return(
        <header className="flex items-center justify-center">
        <h1 className={style.h1}>
            IL MIO BLOG
        </h1>

        </header>
    )
}

export default TheHeader