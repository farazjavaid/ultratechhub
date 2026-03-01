'use client';

export default function ContactButton() {
  return (
    <a
      href="https://www.xmethod.de/contact-us"
      target="_blank"
      rel="noopener noreferrer"
      className="group absolute bottom-6 right-6 z-20 flex flex-col justify-between items-stretch overflow-hidden rounded-[0.28rem] bg-white no-underline"
      style={{
        padding: '2px 2px 2px 1.39rem',
        gap: '1.39rem',
        fontFamily: 'Outfit, sans-serif',
        fontSize: '1.1rem',
        fontWeight: 400,
        color: '#070707',
      }}
    >
      {/* Hover background overlay */}
      <div
        className="absolute inset-0 bg-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* Content row */}
      <div className="relative flex items-center gap-6">
        <div>Contact us</div>

        {/* Arrow square */}
        <div
          className="flex items-center justify-center w-10 h-10 rounded-[0.2rem] flex-shrink-0 group-hover:bg-zinc-800 transition-colors duration-300"
          style={{ backgroundColor: '#070707', color: '#fff' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M11.0032 3.41421L2.39663 12.0208L0.982422 10.6066L9.58901 2H2.00324V0H13.0032V11H11.0032V3.41421Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
