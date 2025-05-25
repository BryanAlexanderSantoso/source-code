import React from 'react';
import { Calendar, Gift, Trophy, Film } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const giveaways = [
    {
      title: "Discord Nitro Giveaway",
      description: "Dapatkan kesempatan untuk memenangkan Discord Nitro 1 hingga 3 bulan!",
      icon: <Gift className="h-6 w-6 text-pink-500" />,
      prize: "Discord Nitro",
      style: "bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-300 dark:border-pink-800"
    },
    {
      title: "E-Wallet Giveaway",
      description: "Dapatkan kesempatan untuk memenangkan saldo E-Wallet!",
      icon: <Gift className="h-6 w-6 text-blue-500" />,
      prize: "E-Wallet Balance",
      style: "bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-300 dark:border-blue-800"
    },
    {
      title: "Dan masih banyak lagi!",
      description: "Ikuti giveaway kami untuk kesempatan memenangkan hadiah menarik lainnya!",
      icon: <Gift className="h-6 w-6 text-green-500" />,
      prize: "Join Discord info lanjut!",
      style: "bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 border-green-300 dark:border-green-800"
    }
  ];

  const events = [
    {
      title: "Game Tournament",
      description: "Ikuti turnamen game untuk memenangkan hadiah menarik!",
      date: "Info Lengkap Discord",
      icon: <Trophy className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Night Podcast",
      description: "Dengarkan podcast malam yang menarik dengan tamu spesial!",
      date: "Info Lengkap Discord",
      icon: <Film className="h-6 w-6 text-indigo-500" />
    },
    {
      title: "Community Game Night",
      description: "Play party games with other members in a casual, fun environment",
      date: "Info Lengkap Discord",
      icon: <Calendar className="h-6 w-6 text-purple-500" />
    }
  ];

  const testimonials = [
    {
      quote: "Cobalah untuk fokus terhadap mimpi mu sendiri. Nothing to lose, or nothing to be. (you're on your own).",
      name: "Near_Developer Website Server & Owner Server",
      avatar: "https://tenor.com/view/teq-ultimate-gohan-teen-gohan-adult-gohan-dragon-ball-dragon-ball-z-gif-10877208784244583300.gif"
    },
    {
      quote: "Kami membangun komunitas yang positif dan suportif di sini. Sangat menyenangkan!",
      name: "Meepo_CO Owner Server",
      avatar: "https://cdn.discordapp.com/avatars/1116236451244421182/a_dfdc8097dc86df4575558e8dc6ece2b6.gif?size=4096"
    },
    {
      quote: "usahamu adalah hasilmu, ubah kelemahanmu menjadi kekuatanmu.",
      name: "ERr_Staff Server",
      avatar: "https://cdn.discordapp.com/attachments/1363370386531680366/1363406989434290226/AIEASE_2025-04-20-15-19-29-931.webp?ex=683366f5&is=68321575&hm=01f90e835455c5bac26f2d32909f2ae68e0c001815992b49e16da86a6de4b900&"
    },
    {
      quote: "you don't have to search for love outside, because you already have it inside you",
      name: "Bryan_Developer Website Server & Staff Server ",
      avatar: "https://media1.tenor.com/m/mDnIiloFauUAAAAd/fujii-kaze-matsuri.gif"
    },
    {
      quote: "Kalau memang boleh mencintai, kenapa harus aku yang terjatuh terlalu dalam.",
      name: "Ryrii_Staff Server",
      avatar: "https://cdn.discordapp.com/attachments/1363370386531680366/1363379007546196128/IMG_20250420_120112.jpg?ex=68334ce5&is=6831fb65&hm=11126b9bf0c34a829e1a6f86c23668eb19d95b26b8b81ce6737ac29a99da1dfc&"
    },
    {
      quote: "Aku nak es krim.",
      name: "Alex Xian Kenzo_Staff Server",
      avatar: "https://cdn.discordapp.com/attachments/1363370386531680366/1363384782939095050/file_00000000783462308be75288fd57e03b_conversation_id67ffab75-41bc-800a-b78f-c822bbb12323message_idca372601-aec0-43a7-b031-d134e4ce483d.png?ex=68335246&is=683200c6&hm=ed656e7beae09abc471ad55f6e61cb5f5cff6e678e0b2b2ec322e3748a1735fe&"
    },
    {
      quote: "tidak ada yang mustahil jika kita mau berusaha.",
      name: "Rae_Staff Server",
      avatar: "https://cdn.discordapp.com/attachments/1363370386531680366/1363421100985290832/9137b8a95edb1f80fe44aac58c6b98c8.jpg?ex=68337419&is=68322299&hm=a18363e431dc1844976b2d2ba3c5d917a63fe651e98b75d980683742cb14f65e&"
    },
    {
      quote: "jangan ragu untuk melangkah maju, ambil resikonya, nikmati prosesnya, dan nantikan hasilnyaa.",
      name: "Tyaa-chan_Staff Server",
      avatar: "https://cdn.discordapp.com/attachments/1363370386531680366/1363429379430154310/IMG_20250420_133704.png?ex=68337bcf&is=68322a4f&hm=1b1ae2836d19330b8e89547974e36ff5a798ef0a385feb4998732cff1424e43f&"
    },
    {
      quote: "Jika mata adalah cahaya, Maka hati adalah permata, Jika senyum adalah ibadah, Maka mengenalmu adalah anugerah",
      name: "Haru_Staff Server",
      avatar: "https://media1.tenor.com/m/r-bKDCFZ_w4AAAAd/leon-kennedy-resident-evil-4.gif"
    },
    {
      quote: "If loving you is a sin, Then I'll gladly become a sinner. Jiee, My beloved",
      name: "Eumzaa_Staff Server",
      avatar: "https://cdn.discordapp.com/attachments/1363370386531680366/1376033063393558641/1748140051896.jpg?ex=6833da27&is=683288a7&hm=493458a64a52fff78738f235db72d02c2dc26ce71b41dc281fc000716fadc076&"
    }
  ];

  return (
    <section ref={ref} id="events" className="py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Events & Giveaways</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "5rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"
          />
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Kami menyelenggarakan acara rutin dan memberikan hadiah menarik untuk menjaga komunitas kami tetap menarik dan bermanfaat.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6"
        >
          Giveaway
        </motion.h3>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {giveaways.map((giveaway, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`rounded-xl border p-6 transition-all duration-300 hover:shadow-md ${giveaway.style}`}
            >
              <div className="flex justify-between items-start mb-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm"
                >
                  {giveaway.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{giveaway.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{giveaway.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium bg-white dark:bg-gray-800 px-3 py-1 rounded-full dark:text-gray-300">
                  Prize: {giveaway.prize}
                </span>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://discord.gg/kazeindo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium"
                >
                  Enter Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ?  { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6"
        >
          Regular Events
        </motion.h3>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="flex justify-center mb-4"
              >
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  {event.icon}
                </div>
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">{event.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{event.description}</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium text-center">{event.date}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-10"
        >
          <h3 className="text-2xl font-bold text-center text-indigo-800 dark:text-indigo-300 mb-8">Staff-Staff Kami</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex space-x-4"
              >
                <div className="flex-shrink-0">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-gray-600 dark:text-gray-300 italic mb-2">"{testimonial.quote}"</blockquote>
                  <p className="font-medium text-indigo-600 dark:text-indigo-400">- {testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Jangan lewatkan acara dan hadiah menarik ini!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.gg/kazeindo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Join Our Discord
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;