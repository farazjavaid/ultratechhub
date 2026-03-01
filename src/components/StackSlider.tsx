const logos = [
  { src: '/images/stack/6891b58c1f5f40a03663ebe3_python.svg', alt: 'Python' },
  { src: '/images/stack/6891b58c28be788a001daad5_webflow.svg', alt: 'Webflow' },
  { src: '/images/stack/6891b58c2c0b356c1a58e1f3_figma.svg', alt: 'Figma' },
  { src: '/images/stack/6891b58c3d61c8517aca77ed_zaiper.svg', alt: 'Zapier' },
  { src: '/images/stack/6891b58ca8cb4ebd622c0693_flutter.svg', alt: 'Flutter' },
  { src: '/images/stack/6891b58cd25e8cfafb140a0a_make.svg', alt: 'Make' },
  { src: '/images/stack/6891b58cda35115879b44fca_wordpress.svg', alt: 'WordPress' },
  { src: '/images/stack/6891b58ce206a3ccec817a36_react-js.svg', alt: 'React JS' },
];

export default function StackSlider() {
  return (
    <div
      className="w-full overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-6"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="mx-10 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
