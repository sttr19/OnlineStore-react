import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectGoods } from "../redux/catalog/catalogSlice";
import Goods from "../components/Goods";
import styles from "../components/Goods.module.css"

export function GoodList(){
	const goods=useSelector(selectGoods);
	const dispatch=useDispatch();
	return (
		<div className={styles["goods-wrapper"]}>
			{goods.map(item=><Goods {...item}/>)}
		</div>
	)
}