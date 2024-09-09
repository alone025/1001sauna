import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Liked from "../pages/liked";
import Category from "../pages/category";
import Product from "../pages/product";
import PageLayout from "../layout/pageLayout";
import About from "../pages/about";
import AdvertimentPage from "../pages/advertiment";
import Vacancies from "../pages/vacancies";
import PrivatePolicy from "../pages/private-policy";
import Contact from "../pages/contact";
import Payment from "../pages/payment";
import KartaSayta from "../pages/kartaSayta";
function Main(): JSX.Element {
 const pathName = useLocation()
 const liok = pathName.pathname.includes('product')

  return (
    <div  className={`main-content ${liok ? "mx-0":"mx-4"} sm:mx-[20px] 2xl:mx-0`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked-card" element={<Liked />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route
          path="/category/:categoryName/product/:productName"
          element={<Product />}
        />

        <Route
          path="/about"
          element={
            <PageLayout>
              <About />
            </PageLayout>
          }
        />
        <Route
          path="/advertising"
          element={
            <PageLayout>
              <AdvertimentPage />
            </PageLayout>
          }
        />
        <Route
          path="/vacancies"
          element={
            <PageLayout>
              <Vacancies />
            </PageLayout>
          }
        />

        <Route
          path="/private-policy"
          element={
            <PageLayout>
              <PrivatePolicy />
            </PageLayout>
          }
        />

        <Route
          path="/our-contacts"
          element={
            <PageLayout>
              <Contact />
            </PageLayout>
          }
        />

<Route
          path="/payment-policy"
          element={
            <PageLayout>
              <Payment />
            </PageLayout>
          }
        />

<Route
          path="/site-map"
          element={
            <PageLayout>
              <KartaSayta />
            </PageLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
