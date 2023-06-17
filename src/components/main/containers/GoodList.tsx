import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../../../redux/catalog/catalogSlice";
import Goods from "../Goods";
import styles from "../../main/Goods.module.css";

export function GoodList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();
    return (
        <main className={styles.main}>
            <div className={styles["main-wrapper"]}>
                <section className={styles["goods-wrapper"]}>
                    {goods.map((item) => (
                        <Goods {...item} />
                    ))}
                </section>
            </div>
        </main>
    );
}
