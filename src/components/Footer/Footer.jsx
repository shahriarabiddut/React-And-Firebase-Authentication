import React from 'react'

export default function Footer() {
  return (
    <div className='bg-white'>
        <footer className="footer footer-center py-24 px-10 w-11/12 md:w-10/12 mx-auto">
  <aside className=' '>
    <h2 className="font-bold text-4xl">
      Firebase React
    </h2>
    <p className="text-gray-400">Leading the way in cutting-edge technology and innovation.</p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
    <div className="flex w-full flex-col">
        <div className="divider"></div>
    </div>
  <div className="footer px-10">
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracing</a>
            <a className="link link-hover">Shipping Delivery</a>
            <a className="link link-hover">Returns</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
        </nav>
</div>
</footer>
    </div>
  )
}
