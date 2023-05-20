import { menuData } from "../data/menu"
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { useContext } from "react";
import { OpenMenuContext } from "../App";


function LeftMenu() {
const {showMenu}= useContext(OpenMenuContext)

    return (
        <div className="p-4">
            <div>Logo</div>
            <h4 className={`${showMenu ? "opacity-100" : "opacity-0"} transition-all delay-500 duration-200 w-24`} >News Feed</h4>
            <div >
                {
                    menuData.map(item => {
                        return <Button label={item.label} key={item.label}> <Icon name={item.icon} size={24} color="#111" /></Button>
                    })
                }
            </div>
        </div>)
}

export default LeftMenu;