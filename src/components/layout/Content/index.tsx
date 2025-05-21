import { Indent } from "../../common/Indent";
import { Images } from "../Images";
import { AsideContent } from "../AsideContent";

export function Content() {
  return (
    <main className="bg-stone-50 min-h-dvh py-14">
      <section>
        <Indent>
          <div className="flex items-start justify-between gap-20">
            <Images />
            <AsideContent />
          </div>
        </Indent>
      </section>
    </main>
  );
}
