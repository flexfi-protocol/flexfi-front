import { motion } from "framer-motion";
import {
  LuArrowUpDown,
  LuFileText,
  LuDollarSign,
  LuTrendingUp,
} from "react-icons/lu";

const FeaturesSection = () => {
  const features = [
    {
      icon: <LuArrowUpDown />,
      title: "Crypto-natives cards",
      description:
        "Spend on stablecoins, earn FlexYield with the protocol of your choice, debt-free.",
    },
    {
      icon: <LuFileText />,
      title: "Smart BNPL",
      description: "Pay in installments, responsible scoring, frictionless.",
    },
    {
      icon: <LuDollarSign />,
      title: "FlexYield",
      description: "Your cashback turns into passive yield.",
    },
    {
      icon: <LuTrendingUp />,
      title: "FlexBoost",
      description: "A BNPL tool reinvented for merchants.",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 xl:px-50 text-white mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-start mb-16 font-days-one"
      >
        Why choose FlexFi ?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#0C1D26] rounded-xl p-6 text-center border border-[#1E2E36] hover:border-[#00FEFB] transition duration-300 shadow-none hover:shadow-[0_0_15px_#00FEFB] hover:scale-105"
          >
            <div className="text-4xl text-accent mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 font-days-one">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
