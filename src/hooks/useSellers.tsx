import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth"
import { getSellers } from "../api/users";

export const useSellers = () => {
    const { isAuthenticated, token } = useAuth();

    return useQuery({
        queryKey: ["sellers"],
        queryFn: () => getSellers(token!),
        enabled: !!isAuthenticated && !!token,
    })
}