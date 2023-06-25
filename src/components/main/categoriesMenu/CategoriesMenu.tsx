import styles from "../categoriesMenu/CategoriesMenu.module.css";
import { PuzzleItem } from "../../../data/model";
import React from "react";

type CategoriesProps = {
    items: PuzzleItem[];
    onChangeCat: (id: string) => void;
};

function CategoriesMenu({ items, onChangeCat }: CategoriesProps) {
    const categories = Array.from(new Set(items.map((item) => item.theme)));
    console.log(categories);

    return (
        <div className={styles["categories-wrapper"]}>
            <ul className={styles.list}>
                {categories.map((elem, index) => (
                    <li key={`${elem}_${index}`}>
                        <button
                            className={styles.item}
                            onClick={() => onChangeCat(elem)}
                        >
                            {elem}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesMenu;
