import "./App.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Indent } from "./components/common/Indent";
import Title from "./components/common/Title";
import Tag from "./components/common/Tag";
import Breadcrumb from "./components/common/Breadcrumb";
import { Prices } from "./components/layout/Prices";
import { Variants } from "./components/layout/Variants";
import { PRODUCTS } from "./mock";
import { Sizes } from "./components/layout/Sizes";
import { Select } from "./components/common/Select";
import Button from "./components/common/Button";

function App() {
  return (
    <>
      <Header />
      <main className="bg-stone-50 min-h-dvh py-14">
        <section>
          <Indent>
            <div className="flex items-start justify-between gap-20">
              <div className="flex items-start gap-1.5 max-w-[47%] flex-1">
                <div className="max-w-20 flex flex-col items-center gap-1.5">
                  <img
                    src="/images/model-black.avif"
                    alt="Calcça na cor preta"
                    width={80}
                    height={80}
                  />
                  <img
                    src="/images/model-blue.avif"
                    alt="Calcça na cor azul"
                    width={80}
                    height={80}
                  />
                  <img
                    src="/images/model-white.avif"
                    alt="Calcça na cor branca"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/images/model-black.avif"
                    alt="Calcça na cor preta"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <Breadcrumb label="Jeans | +1mil vendidas" />

                  <Tag label="Mais vendido" />

                  <Title
                    tag="h2"
                    label="Casual Comfortable Jeans"
                    className="mt-1"
                  />

                  <Prices />
                </div>

                <Variants items={Object.values(PRODUCTS[0].variants)} />

                <Sizes items={Object.values(PRODUCTS[0].sizes)} />

                <div className="mt-4">
                  <div className="mb-10">
                    <p>Selecione a quantidade</p>
                    <Select inventory={2} value={2} onChange={() => {}} />
                  </div>

                  <Button label="Comprar agora" className="mb-2.5" />

                  <Button label="Adicionar ao carrinho" variant="border" />
                </div>
              </div>
            </div>
          </Indent>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
