"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function navbar(){
 
  const patname=usePathname();
  const cart =useSelector((state)=>state.cart)
  const totalitem= useMemo(()=>{ return cart.reduce((total,item)=>total+item.quantity,0);
},[cart]);
 
 
    return (<>
   <nav className="navbar navbar-expand-lg bg-dark   pt-10" data-bs-theme="dark">
      <div className="container-fluid">
      <a class="navbar-brand offset-md-1" href="#">
            <i class="fa-solid fa-mug-hot"></i> Lith Perfume
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${patname=="/"?"active":" "}`} href="/">Trang Chủ</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/menu">Menu </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control " type="search" placeholder="Tìm kiếm ?" aria-label="Search"/>
          </form>
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
          <li className="nav-item d-flex">
            <Link className="nav-link" href="/cart">Giỏ hàng  <span className="badge bg-danger">{totalitem}</span></Link>
        
             
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tài Khoản
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" href="/login">Đăng Nhập</Link>
                <Link className="dropdown-item" href="/register">Đăng Kí</Link>
              </ul>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    
    </>)
}