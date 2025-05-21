import { Indent } from "../../common/Indent";
import { AlignJustify, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="w-full max-w-full py-5 border-b-1 border-gray-200 bg-stone-50">
      <Indent>
        <div className="flex items-center justify-between w-full">
          <AlignJustify />
          <div>
            <h1 className="name-logo">Felipe Marcelino</h1>
          </div>
          <div className="flex items-center gap-5">
            <button>
              <ShoppingCart />
            </button>
          </div>
        </div>
      </Indent>
    </header>
  );
}
