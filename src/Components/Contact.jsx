import { motion as Motion } from "framer-motion";
import { Mail, PhoneCall, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-secondary"
        >
          🌐 Get In <span className="text-primary">Touch</span>
        </Motion.h2>

        {/* Subtitle */}
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-muted-foreground mb-12 max-w-2xl mx-auto  text-secondary"
        >
          Have a project or want to collaborate? I'm always open to new opportunities and creative ideas.
        </Motion.p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          
          {/* Email */}
        <Motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sakshibisen108@gmail.com&su=Let's%20Connect&body=Hi%20Sakshi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.05 }}
  className="flex flex-col items-center justify-center bg-card p-6 rounded-xl shadow-lg hover:shadow-pink-500/40 transition-all border border-pink-400/20"
>
  {/* Mail Icon */}
  <Mail className="h-10 w-10 text-pink-500 mb-3 animate-bounce" />

  {/* Title + Email */}
  <h4 className="font-semibold text-secondary">Email</h4>
  <p className="text-sm text-secondary text-muted-foreground ">
    sakshibisen108@gmail.com
  </p>
</Motion.a>

          <Motion.a href="https://x.com/SakshiBise56146" target="_blank" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} whileHover={{ scale: 1.05 }} className="flex flex-col items-center justify-center bg-card p-6 rounded-xl shadow-lg hover:shadow-sky-400/40 transition-all border text-secondary   border-sky-400/20" >
            <Twitter className="h-10 w-10 text-sky-400 mb-3 animate-bounce" /> <h4 className="font-semibold text-secondar">Twitter</h4>
            <p className="text-sm text-muted-foreground text-secondary ">Follow my updates 🪄</p> </Motion.a>

          {/* GitHub */}
          <Motion.a
            href="https://github.com/SakshiBisen"
            target="_blank"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center bg-card p-6 rounded-xl shadow-lg hover:shadow-gray-500/40 transition-all border border-gray-400/20"
          >
            <Github className="h-10 w-10 text-gray-400 mb-3 animate-bounce" />
            <h4 className="font-semibold text-secondary ">GitHub</h4>
            <p className="text-sm text-muted-foreground text-secondary ">
              View my work 🧑‍💻
            </p>
          </Motion.a>

          {/* LinkedIn */}
          <Motion.a
            href="https://www.linkedin.com/in/sakshi-bisen-48a731307/"
            target="_blank"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center bg-card p-6 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all border border-blue-400/20"
          >
            <Linkedin className="h-10 w-10 text-secondary  mb-3 animate-bounce" />
            <h4 className="font-semibold text-secondary ">LinkedIn</h4>
            <p className="text-sm text-muted-foreground text-secondary ">
              Let’s connect 🤝
            </p>
          </Motion.a>

        </div>
      </div>
    </section>
  );
};
