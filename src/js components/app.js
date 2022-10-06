export class App {
  render() {
    return `
      <header>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./src/img/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </header>
        <main>
            <h1>Australian investors<br>
            -<br>
            real estate investing </h1>
            <p class="main-text">Where great businesses and great people meet. We bring together businesses looking for investment and investors with the capital, contacts and knowledge to help them succeed</p>
        </main>
      <section>
        <h2>INVESTMENTS FOR AMATEURS - INVESTMENT OPTIONS</h2>
        <div class="row">
            <div class="col-9 row-left">
                <h3>Mutual Funds and Exchange-Traded Funds</h3>
                <p>Some investors might want to utilize mutual funds or exchange-traded funds (ETFs) to gain exposure to certain asset classes.</p>
                <p>A fund is essentially a basket of investments — stocks, bonds, another investment type, or a combination thereof. Funds are helpful because they provide immediate diversification: safety against the risk of having too much money invested in one stock, sector, or any other single asset.</p>
                <p>Funds are either actively or passively managed. A fund that is passively managed is attempting to track a specific index. An actively managed fund is maintained with a hands-on approach to determine investments in a portfolio. ETFs tend to be passively managed, but there are many actively managed ETFs funds on the market. Mutual funds can be either passively or actively managed.</p>
            </div>
            <div class="col-9 row-right">
                <h3>Individual Stocks</h3>
                <p>Although the rewards can be greater with individual stocks, the risks are as well. However, they allow you to invest in companies you believe in and give you options in creating a diversified portfolio with an asset allocation that can help you reach your investment goals.</p>
               </div>
            <div class="col-9 row-left">
                <h3>Term Deposits</h3>
                <p>When you invest in a term deposit through either a bank, credit union or building society, you are agreeing to setting aside an amount of money for a set time period (a term), and during this time you will earn interest on your investment. Term deposits are popular with investors who prefer guaranteed returns over the fluctuations of the stock market. However, the investment returns from term deposits are typically lower than the potential gains of other more risky investments and if you need to access the money before the term is up, you will likely face some hefty fines.</p>
            </div>
        </div>
      </section>
      `;
  }
}
