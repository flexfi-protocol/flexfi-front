import JoinWaitlistButton from "../components/JoinWaitlistButton";

const AboutUs = () => {
  return (
    <main className="min-h-screen text-white flex flex-col items-start">
      <div className="px-6 py-6 md:px-16 lg:px-24 xl:px-50">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 mt-22">
          About <span className="text-[#00FEFB]">Us</span>.
        </h1>
        <p className="text-gray-300 mb-15">
          FlexFi is not just a product. <br /> It's a mission.
        </p>
      </div>

      <img
        loading="lazy"
        src="/images/MacBook-flexfi.webp"
        alt="computer"
        className="w-full object-cover"
      />

      <div className="px-6 md:px-16 lg:px-24 xl:px-50">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-20 mt-22 font-days-one">
          <span className="text-[#00FEFB]">"</span>A new way to approach <br />
          payments, free from the <br /> traditional constraints of the <br />{" "}
          banking system.
          <span className="text-[#00FEFB]">"</span>
        </h2>

        <p className="text-gray-300 mb-15 text-2xl text-end">
          We are driven by a simple vision: to make cryptocurrencies accessible
          to everyone. We believe that blockchain technology can improve
          everyday life by enabling more flexible, secure, and affordable
          transactions.
        </p>

        <p className="text-gray-300 mb-15 text-2xl text-end">
          Our team is made up of technology and innovation enthusiasts, all
          united by the same mission: to offer consumers and merchants a new way
          to approach payments, free from the traditional constraints of the
          banking system.
        </p>

        <p className="text-gray-300 mb-30 text-2xl text-end">
          Together, we push boundaries to provide you with an intuitive,
          transparent platform that meets the needs of today and tomorrow.
        </p>

        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-10 mt-22 font-days-one">
          From Colosseum's Radar
        </h3>
        <div className="flex flex-col items-end">
          <a
            href="https://www.colosseum.org/radar"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              loading="lazy"
              className="rounded-3xl"
              src="/images/radar.webp"
              alt="Radar Colloseum"
            />
          </a>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-20 mt-22 text-end font-days-one">
          To <span className="text-[#00FEFB]">Breakout</span>.
        </h3>
        <div className="flex flex-col items-start">
          <a
            href="https://www.colosseum.org/breakout"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              loading="lazy"
              className="rounded-3xl"
              src="/images/breakOut.webp"
              alt="Radar Colloseum"
            />
          </a>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-5 mt-22 font-days-one">
          From Superteam <span className="text-[#00FEFB]">France</span>.
        </h3>
        <div className="flex flex-col items-center">
          <a
            href="https://fr.superteam.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              loading="lazy"
              className="rounded-3xl"
              src="/logo/logo-STF-1.webp"
              alt="Superteam France logo"
            />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-20 mt-22 font-days-one">
            to pitching in front of global VCs
            <span className="text-[#00FEFB]">.</span>
          </h3>

          <img
            loading="lazy"
            className="mb-24 rounded-3xl"
            src="/images/demo-day.webp"
            alt="Radar Colloseum"
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="mb-15 text-2xl text-center text-[#001A22] font-bold">
            FlexFi wasn't created in a meeting room — it was forged in
            competition. <br /> <br /> We faced liquidity challenges. We solved
            them. <br /> We faced traction doubts. We conquered them. <br />{" "}
            <br /> Now, we're ready to lead the next generation of payments.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto gap-5 mt-20 mb-20 font-days-one">
        <h4 className="text-[#001A22] font-bold text-2xl md:text-4xl">
          With you.
        </h4>

        <JoinWaitlistButton />
      </div>
    </main>
  );
};

export default AboutUs;
