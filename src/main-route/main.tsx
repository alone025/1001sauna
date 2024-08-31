import { Route, Routes } from "react-router-dom";
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
function Main(): JSX.Element {
  return (
    <div className="main-content mx-4 sm:mx-[20px] 2xl:mx-0">
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
      </Routes>
    </div>
  );
}

export default Main;
