import { FaGasPump, FaTruckMoving, FaSatelliteDish, FaWarehouse } from "react-icons/fa";

const challenges = [
  { icon: <FaGasPump className="text-orange-500 text-3xl mb-2" />, label: "High fuel & logistics costs" },
  { icon: <FaTruckMoving className="text-indigo-500 text-3xl mb-2" />, label: "Inefficient fleet management" },
  { icon: <FaSatelliteDish className="text-teal-500 text-3xl mb-2" />, label: "Lack of real-time tracking" },
  { icon: <FaWarehouse className="text-yellow-500 text-3xl mb-2" />, label: "Warehouse & supply chain bottlenecks" }
];

export default function ChallengeCards() {
  return (
    <section className="px-6 py-16 bg-[#f6f7f9]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 leading-tight">
        Key Challenges In The <br /> Industry
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {challenges.map((c, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center p-8 min-h-[140px] text-center hover:shadow-2xl transition"
          >
            {c.icon}
            <span className="font-medium text-lg text-gray-900 mt-2">{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
