"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./component/slider";
import Link from "next/link";
import Productlist from "./component/productlist";
import useSWR from "swr";

export default function Home() {
  const fetcher = (...agrs) => fetch(...agrs).then((res) => res.json());
  const { data: productList,
    error,
    isLoading
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`, fetcher)
  if (error) return <strong>lỗi r</strong>
  if (isLoading) return <strong>Loading...</strong>

  return (<>
    <Slider></Slider>
    <div className="d-flex justify-content-center my-5 gap-3">
      <Link href="/" className="text-center  text-decoration-none text-dark fw-bold ">
        <img style={{ width: 60 + "px" }} src="/img/h1.png"></img> <br />
       Jean Paul
      </Link>
      <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h2.png"></img><br />
        SERSACE</Link>
      <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h3.png"></img><br />
        VALENTINO</Link>
      <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h4.png"></img><br />
        Ralph Lauren</Link>
        <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h5.png"></img><br />
        Chloẻ</Link>
        <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h6.png"></img><br />
        BURBERRY</Link>
        <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h7.png"></img><br />
        NARCISO RODRIGUEZ</Link>
        <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h8.png"></img><br />
        GUCCI</Link>
        <Link href="/" className="text-center text-decoration-none text-dark fw-bold">
        <img style={{ width: 60 + "px" }} src="/img/h9.png"></img><br />
        TOM FORD</Link>
    </div>
    <h2 className="text-center">SẢN PHẨM NỔI BẬT</h2>
    <Productlist data={productList}></Productlist>
    <br/>
    <h2 className="text-center">SẢN PHẨM BÁN CHẠY</h2>
    <Productlist data={productList}></Productlist>
  </>)
}
