// Đường dẫn tới file dữ liệu

import { brandImages2 } from "./Services";

export default function Clients() {
  return (
    <section className="brands-carousel container">
      <h5 className="">Company Partners</h5>
      <div className="brand-list">
        {brandImages2.map((brand, index) => (
          <div key={index} className="brand-item">
            <img 
              src={brand.src} 
              alt={`Brand ${index + 1}`} 
              width={brand.width} 
              height={brand.height} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
