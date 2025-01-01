const HomeAdmin = () => {
  return (
    <div>
      <div className="flex-1 p-6 pt-5">
        <h2 className="font-quick text-lg font-bold text-gray-100 mb-1 md:mb-4 md:text-2xl lg:text-4xl">Selamat Datang di Dashboard Admin!</h2>
        <p className="text-gray-400">
          Hari ini:{" "}
          <span className="font-semibold">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </p>

        <p className="text-gray-400 mt-2">
          Anda memiliki <span className="font-semibold text-white">3</span> log tes baru untuk ditinjau.
        </p>

        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-white mb-4">Statistik</h3>
          <p className="text-gray-400">Statistik akan muncul di sini.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin
