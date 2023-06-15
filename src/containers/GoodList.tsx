import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectGoods } from "../redux/catalog/catalogSlice";
import Goods from "../components/Goods";

export function GoodList(){
	const goods=useSelector(selectGoods);
	const dispatch=useDispatch();
	return (
		<div className="goods-field">
			{goods.map(item=><Goods {...item}/>)}
		</div>
	)
}