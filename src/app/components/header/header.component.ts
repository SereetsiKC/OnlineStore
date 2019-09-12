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
            <li><a  routerLink="/index/home" routerLinkActive="active">Home</a></li>
            <li class="dropdown"><a target="_self" href="#">Shop<i class="fas fa-angle-down"></i></a>
              <ul role="menu" class="sub-menu">
                <li><a routerLink="/index/Products" routerLinkActive="active">Products</a></li>
                <li><a routerLink="/index/CheckOut" routerLinkActive="active">Checkout</a></li>
                <li><a routerLink="/index/Cart" routerLinkActive="active">Cart</a></li>
              </ul>
            </li>
            <li class="dropdown"><a href="#" target="_self">Suppliers<i class="fas fa-angle-down"></i></a>
              <ul role="menu" class="sub-menu">
                <li><a routerLink="/index/Suppliers" routerLinkActive="active">Suppliers</a></li>
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
