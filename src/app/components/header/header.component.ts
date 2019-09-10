import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header id="header">
    <div class="header_top">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="header_top_separator"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-middle">
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="logo pull-left">
          <a href="/">
            <img src="./../../assets/images/logo-cash-crusaders.png" alt="">
          </a>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="shop-menu pull-right">
          <ul class="nav navbar-nav">
            <li>
              <a href="">
                <i class="fa fa-"></i>
                Checkout
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-"></i>
                Cart
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-"></i>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="header-bottom">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="mainmenu pull-left">
          <ul class="nav navbar-nav collapse navbar-collapse">
            <li><a href="index.html" class="active">Home</a></li>
            <li class="dropdown"><a target="_self" class="pointer">Shop<i class="fas fa-angle-down"></i></a>
              <ul role="menu" class="sub-menu">
                <li><a href="shop.html">Products</a></li>
                <li><a href="product-details.html">Product Details</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="login.html">Login</a></li>
              </ul>
            </li>
            <li class="dropdown"><a href="#">Blog<i class="fas fa-angle-down"></i></a>
              <ul role="menu" class="sub-menu">
                <li><a href="blog.html">Blog List</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
