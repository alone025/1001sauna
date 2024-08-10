import Main from "./main-route/main";
import Navbar from "./components/navbar/navbar";
import Wrapper from "./layout/wrapper";
import Main_banner from "./ui/banner/main_banner";

function App(): JSX.Element {
  return (
    <>
      <Navbar />

      <Wrapper>
        <div className="sm:mt-[32px] sm:mx-[20px] xl:mx-0">
          <Main_banner />
        </div>
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
