import { RiSofaLine } from "react-icons/ri";
import { FaChair } from "react-icons/fa";
import { TbFridge } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { LiaToiletSolid } from "react-icons/lia";
import { GiFlowerPot } from "react-icons/gi";

export function ForumLateralMenu() {
    return (
        <div className="menu">
            <div className="section">
                <RiSofaLine className="icon"/>
                <p>SALON</p>
            </div>
            <div className="section">
                <FaChair className="icon"/>
                <p>SALLE À MANGER</p>
            </div>
            <div className="section">
                <TbFridge className="icon"/>
                <p>CUISINE</p>
            </div>
            <div className="section">
                <IoBedOutline className="icon"/>
                <p>CHAMBRE</p>
            </div>
            <div className="section">
                <PiBathtub className="icon"/>
                <p>SALLE DE BAIN</p>
            </div>
            <div className="section">
                <LiaToiletSolid className="icon"/>
                <p>TOILETTES</p>
            </div>
            <div className="section">
                <GiFlowerPot className="icon"/>
                <p>EXTÉRIEUR</p>
            </div>
        </div>
    )
}