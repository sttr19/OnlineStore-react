import { PuzzleItem } from "../data/model";

function Goods({theme,price,previewImg}:PuzzleItem){
	return (
		<div className="goods-block">
			<p>{theme}</p>
			<p>{price}</p>
			<img src={previewImg} alt="" />
		</div>
	);
}
export default Goods;