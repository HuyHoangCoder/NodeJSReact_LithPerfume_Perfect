"use client"
import useSWR from "swr";
import Productlist from "../component/productlist";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
   const fetcher = (...args) =>fetch(...args).then((res) =>res.json())
   const {data:productlist,error:errorprodut,isLoading:isLoadingproduct} =useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`,fetcher);
   
   if( errorprodut) return <strong>đã có lỗi</strong>;
   if( isLoadingproduct) return(<p>Loading...</p>);
    return (
        <>
                        <Productlist data={productlist} />
        </>
    )
}