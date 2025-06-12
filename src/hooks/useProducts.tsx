import { useQuery } from "@tanstack/react-query";
import type { ProductFilter } from "../types/product";
import { useAuth } from "./useAuth";
import { getProducts } from "../api/products";

export const useProducts = (filter?: ProductFilter) => {
    const { isAuthenticated, token } = useAuth();

    return useQuery({
        queryKey: ["sellers", filter],
        queryFn: () => getProducts(token!, filter),
        enabled: !!isAuthenticated && !!token,
    })
}