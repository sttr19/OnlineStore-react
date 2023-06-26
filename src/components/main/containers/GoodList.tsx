import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../redux/catalog/filterSlice";
import Goods from "../Goods";
import styles from "../../main/Goods.module.css";
import CategoriesMenu from "../categoriesMenu/CategoriesMenu";
import { RootState } from "../../../redux/store";

export function GoodList() {
    const goods = useSelector((state: RootState) => state.filter.products);
    const filteredGoods = useSelector(
        (state: RootState) => state.filter.filteredProducts
    );
    const valueOfCategory = useSelector(
        (state: RootState) => state.filter.value
    );
    
    //console.log("redux state", valueOfCategory);
    const dispatch = useDispatch();
    //let f: string = "";


    const onChangeCategory = (nameCategory: string) => {
        //console.log("onchange", nameCategory);
        //f = nameCategory;
        dispatch(setCategory(nameCategory));
    };



    //console.log("value onclick", f);



    return (
        <main className={styles.main}>
            <div className={styles["main-wrapper"]}>
                <section className={styles["catalog-wrapper"]}>
                    <CategoriesMenu
                        items={goods}
                        onChangeCategory={onChangeCategory} categoryName={valueOfCategory}
                    />
                    <div className={styles["goods-wrapper"]}>
                        {filteredGoods.map((item, index) => (
                            <Goods key={`${item}_${index}`} {...item} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
