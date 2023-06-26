import styles from "../categoriesMenu/CategoriesMenu.module.css";
import { PuzzleItem } from "../../../data/model";
import cn from "classnames";

type CategoriesProps = {
    items: PuzzleItem[];
    onChangeCategory: (nameCategory: string) => void;
    categoryName: string;
};

function CategoriesMenu({
    items,
    onChangeCategory,
    categoryName,
}: CategoriesProps) {
    const categories = Array.from(new Set(items.map((item) => item.theme)));
    //console.log(categories);

    return (
        <div className={styles["categories-wrapper"]}>
            <ul className={styles.list}>
                {categories.map((elem, index) => (
                    <li key={`${elem}_${index}`}>
                        <button
                            className={cn(styles.item,{[styles.active]:elem===categoryName})}
                            onClick={() => {
                                onChangeCategory(elem);
                            }}
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
