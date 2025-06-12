import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { getOwnProducts } from "../api/services/products";

export const useOwnProducts = () => {
    const { isAuthenticated, token } = useAuth();

    return useQuery({
        queryKey: ["sellers-products"],
        queryFn: () => getOwnProducts(token!),
        enabled: !!isAuthenticated && !!token,
    })
}