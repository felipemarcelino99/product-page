export function Images() {
  return (
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
  );
}
