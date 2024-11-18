'use client'
import Link from "next/link";
import React from "react";
import ProductList from "@/components/productList";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="top-header">
        <div className="container d-flex justify-content-between">
          <div className="auth-actions">
          <Link href="/auth/login">Đăng nhập</Link>
          <Link href="/auth/register">Đăng ký</Link>
          </div>
          <div className="shop-actions">
            <a href="#">
              <i className="ti-zoom-in"></i>
            </a>
            <a href="#">
              <i className="ti-shopping-cart"></i> Giỏ hàng: (0) sản phẩm
            </a>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="#" className="logo">
            <img
              src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/logo.png?1697775911374"
              alt="Logo"
            />
          </a>
          <nav>
            <ul className="nav-list d-flex">
              <li>
                <a href="#">TRANG CHỦ</a>
              </li>
              <li>
                <a href="#">GIỚI THIỆU</a>
              </li>
              <li>
                <a href="#">SẢN PHẨM</a>
              </li>
              <li>
                <a href="#">TIN TỨC</a>
              </li>
              <li>
                <a href="#">LIÊN HỆ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Slider */}
      <div id="sliders"></div>

      {/* Advertisement */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/layer-46.png?1697775911374"
              className="img-fluid"
              alt="Ảnh 1"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/layer-45.png?1697775911374"
              className="img-fluid"
              alt="Ảnh 2"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://bizweb.dktcdn.net/100/069/071/themes/895058/assets/layer-47.png?1697775911374"
              className="img-fluid"
              alt="Ảnh 3"
            />
          </div>
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="sell-products text-center">
        <h2>SẢN PHẨM BÁN CHẠY</h2>
      </div>
      <div className="container mt-4">
        <ProductList />
      </div>

      {/* See More Button */}
      <div className="container text-center mt-4">
        <a href="#" className="btn btn-primary">
          XEM THÊM
        </a>
      </div>

      {/* Slider */}
      <div id="slider"></div>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Giới thiệu</h5>
              <p>
                Memdover là nơi cung cấp các căn hộ, nhà và biệt thự chất lượng
                cao và dịch vụ tốt nhất cho khách hàng.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Liên hệ</h5>
              <p>Email: taitnt@kaopiz.com</p>
              <p>Điện thoại: 0941165002</p>
            </div>
            <div className="col-md-4">
              <h5>Theo dõi chúng tôi</h5>
              <a href="#" className="text-white me-2">
                <i className="ti-facebook"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="ti-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="ti-instagram"></i>
              </a>
            </div>
          </div>
          <div className="mt-3">
            <p>&copy; 2024 Memdover. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

