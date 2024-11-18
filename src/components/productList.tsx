import React from "react";

const productData = [
  {
    image: "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/tg.png?v=1512029445597",
    name: "Căn hộ 2PN tại Pearl Plaza",
    price: "250.000.000₫",
  },
  {
    image: "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/rge-b994e80f-21ee-45ef-acbd-621b3371c0e4.png?v=1512029796233",
    name: "Căn hộ 3PN ở Pearl Plaza",
    price: "3.000.000.000₫",
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/ss.png?v=1512029733193",
    name: "Bán căn hộ SSG Tower 3PN",
    price: "3.300.000.000₫",
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/8.jpg?v=1458792918940",
    name: "Bán căn hộ SSG Tower 2 PN",
    price: "3.000.000.000₫",
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/16.jpg?v=1458793722490",
    name: "Nhà phố đẹp 3 tầng khắc phục nắng hướng tây",
    price: "4.100.000.000₫",
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/069/071/products/fgre.png?v=1512029420260",
    name: "Nhà đẹp 2 tầng với thiết kế gần gũi thiên nhiên",
    price: "5.000.000.000₫",
  }
  // Thêm các sản phẩm khác...
];

const ProductList = () => {
  return (
    <div className="row">
      {productData.map((data, index) => (
        <div key={index} className="col-md-4">
          <div className="product">
            <img src={data.image} alt={data.name} className="img-fluid" />
            <div className="name">{data.name}</div>
            <div className="price">{data.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
