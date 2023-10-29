import { useMemo } from "react";


export const useSortedProducts = (products, filter) => {
    const sortedProducts = useMemo(() => {
        return products.filter(product => {
            const isCategoryMatch =
                filter.category.includes(product.category);
            const isPriceMatch =
                product.newPrice >= parseFloat(filter.priceMin) &&
                product.newPrice <= parseFloat(filter.priceMax);
            return isCategoryMatch && isPriceMatch;
        });
    }, [products, filter]);

    return sortedProducts;
}