import { title, h2, paragraph, h3 } from '@/components/primitives'

let parseEmoji = (unicode: string) => {
  return String.fromCodePoint(parseInt(unicode, 16))
}

export const About = () => {
  return (
    <div id="about"
         className="inline-block max-w-7xl text-center justify-center mt-8"
    >
      <h1 className={title()}>
        About Me
      </h1>

      <h2 className={h2()}>
        Basic Information
      </h2>
      <div className="mt-4 text-lg">
        <p>
          <span className="font-bold">Name:&nbsp;</span>
          Ada Mu
        </p>
        <p>
          <span className="font-bold">Degree:&nbsp;</span>
          Master of Information Technology (Internetworking)
        </p>
        <p>
          <span className="font-bold">Professional Experience:&nbsp;</span>
          1.5
        </p>
        <p>
          <span className="font-bold">Experience:&nbsp;</span>
          6
        </p>
        <p>
          <span className="font-bold">Email:&nbsp;</span>
          classmateada@gmail.com
        </p>
        <p>
          <span className="font-bold">Freelance:&nbsp;</span>
          Available
        </p>
      </div>

      <h2 className={h2()}>
        Technical Skills
      </h2>
      <h3 className={h3()}>Programming Language</h3>
      <div className={paragraph()}>
        <div>
          <span className="font-bold">Proficient:&nbsp;</span>
          C/C++, Assembly (ARM, AVR), Go, Java, Shell
        </div>
        <div>
          <span className="font-bold">Know:&nbsp;</span>
          TypeScript, Python 3, Verilog, VHDL
        </div>
        <div>
          <span className="font-bold">Beginner:&nbsp;</span>
          Rust, C#
        </div>
      </div>
      <h3 className={h3()}>Back-end Development</h3>
      <div className={paragraph()}>
        <div>
          <span className="font-bold">Platform:&nbsp;</span>
          Node.js, Docker, Kubernetes, Istio, GitLab
        </div>
        <div>
          <span className="font-bold">Framework:&nbsp;</span>
          Spring Boot, Spring Cloud, gRPC, Terraform
        </div>
      </div>
      <h3 className={h3()}>Middleware & Database</h3>
      <div className={paragraph()}>
        MySQL, MongoDB, Redis, SQLite, Kafka, Zookeeper, Consul
      </div>
      <h3 className={h3()}>Embedded & FPGA</h3>
      <div className={paragraph()}>
        <div>
          <span className="font-bold">Controller:&nbsp;</span>
          STM32, Altera
        </div>
      </div>
      <h3 className={h3()}>Development Tools</h3>
      <div className={paragraph()}>
        <div>
          <span className="font-bold">IDEs:&nbsp;</span>
          Visual Studio Code (most commonly used), IntelliJ IDEA, WebStorm,
          GoLand, CLion, Quartus
        </div>
        <div>
          <span className="font-bold">OS:&nbsp;</span>
          MacOS (most commonly used), Windows 11, Arch Linux, RT-Thread,
          FreeRTOS, OpenHarmony
        </div>
        <div>
          <span className="font-bold">Other:&nbsp;</span>
          GDB, Git, QEMU
        </div>
      </div>

      <h2 className={h2()}>Topics of Interest</h2>
      <div className={paragraph()}>
        <p>Software Design & Software Architecture</p>
        <p>Site Reliability Engineering</p>
        <p>Cloud infrastructure</p>
        <p>Distributed Systems</p>
        <p>Concurrency and Synchronisation Problems</p>
        <p>Internet of Things (IoT)</p>
        <p>FPGA Engineering (mainly Verilog and Altera)</p>
        <p>Embedded Software Development (mainly STM32 and ARMv5)</p>
        <p>Low-level Systems</p>
      </div>

      <h2 className={h2()}>
        Hobbies
      </h2>
      <div className={paragraph()}>
        <p>{parseEmoji('1F6EB')} Planespotting</p>
        <p>{parseEmoji('1F684')} Trainspotting</p>
        <p>{parseEmoji('1F4F8')} Photography</p>
        <p>{parseEmoji('1F68C')} Travel by public transport</p>
        <p>{parseEmoji('2615')} Coffee-making</p>
        <p>{parseEmoji('1F4BB')} Open-source software development</p>
      </div>

      <h2 className={h2()}>
        Fun Facts
      </h2>
      <div className={paragraph()}>
        <p>Actually, I have almost 6 years of experience in back-end development
          because I started working on outsourcing projects since my first year
          of undergraduate (i.e., 2018)</p>
        <p>Besides being a software engineer, my dream careers are pilot, train
          driver, and air traffic controller</p>
        <p>I&rsquo;m struggling with UI/UX design because I have a really bad
          sense of art</p>
        <p>I&rsquo;m learning hardware engineering because I want to design some
          customised IoT devices</p>
        <p>I prefer monolithic than microservice</p>
      </div>
    </div>
  )
}
