import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "1869",
    title: "DNA Discovery",
    description: "Friedrich Miescher discovers nucleic acids",
    icon: "🧬"
  },
  {
    year: "1953",
    title: "Double Helix",
    description: "Watson & Crick discover DNA structure",
    icon: "🔬"
  },
  {
    year: "2003",
    title: "Human Genome",
    description: "Human Genome Project completed",
    icon: "🧪"
  },
  {
    year: "2012",
    title: "CRISPR",
    description: "CRISPR gene editing breakthrough",
    icon: "✂️"
  }
];

export default function DNATimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-500" />
      
      {/* Timeline events */}
      <div className="space-y-6">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              {event.icon}
            </div>
            
            {/* Event content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-teal-100">
              <div className="text-sm font-semibold text-teal-600 mb-1">
                {event.year}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 