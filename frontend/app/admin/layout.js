"use clinet"
import "@/public/css/bootstrap.min.css";
import "@/public/css/style.css";
import "@/public/css/fontawesome.css";
import Leftbar from "./component/leftbar";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body style={{background:"#eff8ff"}}>
  <div class="d-flex min-vh-100">
      <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-primary" style={{maxWidth: 280+"px"}} data-bs-theme="dark">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none justify-content-center">
       {/* <img src="/img/logo.svg"></img> */}
        <span class="fs-4 d-none d-sm-inline-block">BS ADMIN</span>
      </a>
      <hr/>
      {/* chổ nàu leftBar */}
      <Leftbar></Leftbar>
    </div>
    <div class="w-100">
      <nav class="navbar navbar-expand-md text-bg-primary" data-bs-theme="dark">
        <div class="container-fluid ps-0">
          <div class="d-flex justify-content-between w-100">
            <form class="d-flex w-100" role="search" data-bs-theme="light">
              <div class="input-group">
                <button type="submit" class="btn btn-primary rounded-0 border-white">
                  <i class="far fa-search"></i>
                </button>
                <input class="form-control me-2 rounded-0 border-white" type="search" placeholder="Search"/>
              </div>
            </form>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto" data-bs-theme="light">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <strong><i class="fas fa-bell"></i></strong>
                </a>
                <ul class="dropdown-menu rounded-0 dropdown-menu-md-end">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                  <strong>Bebi</strong>
                </a>
                <ul class="dropdown-menu rounded-0 dropdown-menu-md-end">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <div class="container-fluid p-4">
        <div class="row">
          {children}

        </div>
        <div class="row">

        </div>
      </div>
    </div>
  </div>
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="/js/google.chart.js"></script>
  <script src="/js/bootstrap.bundle.min.js"></script>
</body>
      
      {/* <script src="https://kit.fontawesome.com/7b8b40ab0a.js" crossOrigin="anonymous"></script> */}
    </html>
  )
}
