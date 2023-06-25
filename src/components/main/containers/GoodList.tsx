import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {setCategory}  from "../../../redux/catalog/filterSlice";
import Goods from "../Goods";
import styles from "../../main/Goods.module.css";
import CategoriesMenu from "../categoriesMenu/CategoriesMenu";
import { RootState } from "../../../redux/store";

export function GoodList() {
    const goods=useSelector((state: RootState) => state.filter.products);
    const filteredGoods = useSelector((state:RootState) => state.filter.filteredProducts);
    console.log("redux state", goods);
    const dispatch = useDispatch();

    const onChangeCategory = (nameCategory: string) => {
        console.log(nameCategory);
        dispatch(setCategory(nameCategory));
    };

    return (
        <main className={styles.main}>
            <div className={styles["main-wrapper"]}>
                <section className={styles["catalog-wrapper"]}>
                    <CategoriesMenu
                        items={goods}
                        onChangeCat={onChangeCategory}
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
