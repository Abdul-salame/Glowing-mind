
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { page, fadeUp, stagger } from "../../animations/variants";
import { PlayCircle, FileText, Share2 } from "lucide-react";
import Footer from "../../components/layout/Footer";

export default function GMINews() {
 const mediaChannels = [
    {
      category: "Broadcast Media",
      icon: <PlayCircle className="w-5 h-5" />,
      items: [
        { name: "TV – Features", link: "/media/tv-features", internal: true },
        { name: "Radio Features", link: "/media/radio-features", internal: true },
        {
          name: "GMI TV – YouTube",
          link: "https://www.youtube.com/@glowingmindsinitiatives",
           internal: false,
        },
        { name: "Podcast", link: "/media/podcast", internal: true },
      ],
    },
    {
      category: "Print & Digital Press",
      icon: <FileText className="w-5 h-5" />,
      items: [
        { name: "Newspaper Features", link: "/media/newspaper", internal: true }, 
        { name: "Press Release Features", link: "/media/press-releases", internal: true }, 
        { name: "Blog", link: "/blog", internal: true },
        { name: "Infographics", link: "/media/infographics", internal: true },
      ],
    },
    {
      category: "Direct Outreach",
      icon: <Share2 className="w-5 h-5" />,
      items: [
        { name: "Email Newsletter", link: "/media/newsletter", internal: true },
        { name: "Video Library", link: "/media/video-library", internal: true }, 
        { name: "Photo Gallery", link: "https://www.flickr.com/photos/204223329@N06/", internal: true }, 
      ],
    },
  ];

  return (
    <>
      <motion.main
        variants={page}
        initial="initial"
        animate="animate"
        exit="exit"
        className="pt-28 pb-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold text-primary mb-8"
            >
              
              GMI in the News
              
            </motion.h1>

<div className="relative rounded-xl overflow-hidden mb-10 h-72 w-full">
  <motion.img
    variants={fadeUp}
    src="/images/impact/news.jpg"
    /* object-[center_25%] focuses on the upper-middle area */
    className="h-full w-full object-cover object-[center_25%]"
    alt="GMI in the News"
  />


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />
</div>

            

            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-3 gap-8"
            >
              {mediaChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-6 border-b border-primary/10 pb-3">
                    <span className="text-primary">{channel.icon}</span>
                    <h2 className="text-xl font-bold text-primary">
                      {channel.category}
                    </h2>
                  </div>

                  <ul className="space-y-4">
                    {channel.items.map((item, i) => (
                      <li key={i}>
                        {item.internal ? (
                          <Link
                            to={item.link}
                            className="flex items-center group text-gray-700 hover:text-blue-600 transition-colors duration-200"
                          >
                            <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary rounded-full mr-3 transition-colors" />
                            <span className="font-medium group-hover:underline decoration-blue-600 underline-offset-4">
                              {item.name}
                            </span>
                          </Link>
                        ) : (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center group text-gray-700 hover:text-blue-600 transition-colors duration-200"
                          >
                            <span className="w-2 h-2 bg-primary/40 group-hover:bg-primary rounded-full mr-3 transition-colors" />
                            <span className="font-medium group-hover:underline decoration-blue-600 underline-offset-4">
                              {item.name}
                            </span>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-12 text-gray-600 italic text-center max-w-2xl mx-auto"
            >
              We drive organizational visibility, branding, and storytelling
              through digital media, publications, and strategic stakeholder
              engagement.
            </motion.p>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </>
  );
}
