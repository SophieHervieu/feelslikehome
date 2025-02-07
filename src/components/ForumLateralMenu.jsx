import { RiSofaLine } from "react-icons/ri";
import { FaChair } from "react-icons/fa";
import { TbFridge } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LiaToiletSolid } from "react-icons/lia";

export function ForumLateralMenu() {
    return (
        <div className="menu">
            <div className="section">
                <RiSofaLine className="icon"/>
                SALON
            </div>
            <div className="section">
                <FaChair className="icon"/>
                SALLE À MANGER
            </div>
            <div className="section">
                <TbFridge className="icon"/>
                CUISINE
            </div>
            <div className="section">
                <IoBedOutline className="icon"/>
                CHAMBRE
            </div>
            <div className="section">
                <PiBathtub className="icon"/>
                SALLE DE BAIN
            </div>
            <div className="section">
                <LiaToiletSolid className="icon"/>
                TOILETTES
            </div>
        </div>
    )
}