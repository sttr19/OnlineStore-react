import { PuzzleItem } from "../data/model";


function Goods({theme,price,previewImg}:PuzzleItem){
	return (
		<div className="goods-block">
			<img src={previewImg} alt="" />
			<p>{theme}</p>
			<p>{price}</p>
		</div>
	);
}
export default Goods;