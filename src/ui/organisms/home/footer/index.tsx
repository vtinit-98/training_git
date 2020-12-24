import React, { useRef, useState } from 'react'
import './style.css'
export default function Footer(): JSX.Element {
  const btnRef = useRef<HTMLButtonElement>(null)
  function scrollTop(): void {
    const tin = document.getElementById("")
    function scrollFunction() {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        if(btnRef.current) btnRef.current.style.display = "block"
      } else {
        if(btnRef.current) btnRef.current.style.display = "none"
      }
    }
    window.onscroll = function () { scrollFunction() };
      if(tin) tin.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
    const onHandleClick = ():void =>{
    console.log('document.documentElement.style', document.documentElement.style)
    document.documentElement.scrollTop = 0;
  }
scrollTop()
return (
<div>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <span className="widget-title">LIÊN HỆ</span><br />
          <div className="is-divider small"></div>
          <ul className="contact">
            <li><span><strong>Công ty TNHH Thực Phẩm Plaza</strong></span></li>
            <li><span><strong>Mã số thuế:</strong> 0105041966</span></li>
            <li><span><strong>Địa chỉ:</strong> Số 56 Linh Lang, Ba Đình, Hà Nội</span></li>
            <li><span className="percent"><strong>Hotline 1: 0989.330.683 (Ms. Hương)</strong></span></li>
            <li><span className="percent"><strong>Hotline 2: 0969.789.683 (Ms. Chi)</strong></span></li>
            <li><span className="percent"><strong>Hotline 3: 0983.631.015 (Ms. Thúy)</strong></span></li>
            <li><span className="percent"><strong>Hotline </strong><strong>4</strong><strong>:
                </strong><strong>0971.988.783 (Ms. Nhung) - </strong>Thucphamplaza ngõ 35 Cự Lộc, Thanh Xuân, Hà
                Nội</span></li>
            <li><span className="percent"><strong>Phòng Sale Online: </strong>0243.244.4304</span></li>
            <li><span className="percent"><strong>Máy bàn CH Linh Lang :</strong> 0243.846.2288 - 0243.846.5279</span>
            </li>
            <li><span className="percent"><strong>Customer Care: 0967.388.718</strong></span></li>
            <div><span><strong>Email:</strong><a href="mailto:support@thucphamplaza.com"
                  className="link">support@thucphamplaza.com</a></span></div>
          </ul>
          <a href="" className="logo">
            <img src="https://thucphamplaza.com/tpplaza_content/uploads/products_img/dathongbao.png" alt="" />
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <span className="widget-title">TIN MỚI</span><br />
          <div className="is-divider small"></div>
          <ul className="widget">
            <li className="recent-blog-posts-li li">
              <div className="badge-inner bg-fill">
                <span className="post-date-day">17</span>
                <span className="post-date-month is-xsmall">Th12</span>
              </div>
              <div className="title">
                <a className="title-a"
                  href="https://thucphamplaza.com/tiem-thu-nghiem-vaccine-phong-covid-19-cho-3-tinh-nguyen-vien-tai-viet-nam/"
                  title="">Tiêm thử nghiệm
                  vaccine phòng COVID-19 cho 3 tình nguyện viên tại Việt Nam</a>
              </div>
            </li><br />
            <li className="recent-blog-posts-li li">
              <div className="badge-inner bg-fill fill1">
                <span className="post-date-day">16</span>
                <span className="post-date-month is-xsmall">Th12</span>
              </div>
              <div className="title">
                <a className="title-a"
                  href="https://thucphamplaza.com/dot-ret-dam-ret-hai-dau-tien-cua-mua-dong-2020-keo-dai-bao-lau/"
                  title="">Đợt rét đậm, rét hại đầu tiên của mùa đông 2020 kéo dài bao lâu?</a>
              </div>
            </li><br />
            <li className="recent-blog-posts-li li">
              <div className="badge-inner bg-fill fill2">
                <span className="post-date-day">02</span>
                <span className="post-date-month is-xsmall">Th12</span>
              </div>
              <div className="title">
                <a className="title-a"
                  href="https://thucphamplaza.com/tiem-thu-nghiem-vaccine-phong-covid-19-cho-3-tinh-nguyen-vien-tai-viet-nam/"
                  title="">
                  Chương trình khuyến mãi tháng 12/2020</a>
              </div>
            </li><br />
            <li className="recent-blog-posts-li">
              <div className="badge-inner bg-fill fill3">
                <span className="post-date-day">27</span>
                <span className="post-date-month is-xsmall">Th11</span>
              </div>
              <div className="title">
                <a className="title-a"
                  href="https://thucphamplaza.com/tiem-thu-nghiem-vaccine-phong-covid-19-cho-3-tinh-nguyen-vien-tai-viet-nam/"
                  title="">

                  Tặng quà Tết – Tết 2021 nên tặng quà gì cho người thân?</a>
              </div>
            </li><br />
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <span className="widget-title">TAGS</span><br />
          <div className="is-divider small"></div>
          <div className="tagcloud">
            <a href="https://thucphamplaza.com/tu-khoa/bia-bi/" className="">Bia Bỉ</a>
            <a href="https://thucphamplaza.com/tu-khoa/bia-chimay/" className="">Bia Chimay</a>
            <a href="https://thucphamplaza.com/tu-khoa/siro-monin/" className="">Siro Monin</a>
            <a href="https://thucphamplaza.com/tu-khoa/tra-ahmad/" className="">Tra Ahmad</a>
          </div>
        </div>
        <div className="col-xs-6 col-md-3">
          <span className="widget-title">ĐĂNG KÍ NHẬN TIN</span><br />
          <div className="is-divider small"></div>
          <div className="form-flat">
            <input type="email" name="your-email" placeholder="Email của bạn (required)" />
            <input type="submit" value="ĐĂNG KÝ" />
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer>
    <div className="heater">
      <ul className="footer-nav uppercase">
        <li className=""><a href="https://thucphamplaza.com/ve-chung-toi/">Giới thiệu</a></li>
        <li className=""><a href="https://thucphamplaza.com/">Thực Phẩm Plaza</a></li>
        <li className=""><a href="https://thucphamplaza.com/chuyen-muc/tin-tuc/">Tin tức</a></li>
        <li className=""><a href="https://thucphamplaza.com/lien-he/">Liên hệ</a></li>
        <li className=""><a href="https://thucphamplaza.com/chinh-sach-doitra-hang-va-hoan-tien/">Đặt hàng, đổi trả
            &amp; hoàn tiền</a></li>
        <li className=""><a href="https://thucphamplaza.com/chinh-sach-bao-mat-thong-tin-khach-hang/">Bảo mật thông tin
            khách hàng</a></li>
        <li className=""><a href="https://thucphamplaza.com/huong-dan-mua-hang-2/">Hướng dẫn mua hàng</a></li>
      </ul>
      <div className="copyright-footer">
        Copyright 2020 © <strong>thucphamplaza.com</strong>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 fontlogo">
        <ul className="social-icons">
          <li><i className="fab fa-cc-visa"></i></li>
          <li><i className="fab fa-cc-paypal"></i></li>
          <li><i className="fab fa-cc-stripe"></i></li>
          <li><i className="fab fa-cc-mastercard"></i></li>
          <li><i className="fab fa-cc-apple-pay"></i></li>
        </ul>
      </div>
    </div>
  </footer>
  <button id="myBtn" title="Go to top"  onClick={onHandleClick} ref={btnRef}><i className="fas fa-angle-up"></i></button>
</div>
)
}