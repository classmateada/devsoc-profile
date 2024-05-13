import { h2, h3, paragraph, title } from '@/components/primitives'
import { Chip } from '@nextui-org/chip'

export const Experience = () => {
  return (
    <div className="inline-block max-w-7xl text-center justify-center mt-8">
      <h1 className={title()}>Professional Experience</h1>
      <h2 className={h2()}>Domestic</h2>
      <h3 className={h3()}>Junior Software, Infrastructure & Network
        Engineer</h3>
      <div className={paragraph()}>
        <span className="font-semibold">Openmesh&nbsp;</span>
        / Sydney NSW
        <div className="flex justify-center mt-2 mb-3 gap-x-2">
          <Chip color="primary">Part-Time</Chip>
          <Chip color="secondary">Jan 2024 - May 2024</Chip>
        </div>
        <ul>
          <li>
            • Contributed to the design and development of high-performance
            low-level services like the Xnode overlay network and Openmesh Core
            using C++ and Go, completing 50% of architectural design tasks.
          </li>
          <li>
            • Designed and implemented effective decentralised real-time data
            processing and verification, enhanced system performance and
            reliability by 50%.
          </li>
          <li>
            • Implemented 5+ seamless integration solutions using Terraform and
            Kubernetes, ensuring consistent interaction between Xnode systems
            and third-party services, enhancing system compatibility.
          </li>
          <li>
            • Completed 10+ technology research projects with open-source
            solutions related to performance and scalability.
          </li>
        </ul>
      </div>

      <h2 className={h2()}>International</h2>
      <h3 className={h3()}>Software Engineer</h3>
      <div className={paragraph()}>
        <span className="font-semibold">Huawei Technologies&nbsp;</span>
        (Contracted via Career International) / Hangzhou, Zhejiang, China
        <div className="flex justify-center mt-2 mb-3 gap-x-2">
          <Chip color="danger">Full-Time</Chip>
          <Chip color="secondary">Jan 2023 - May 2023</Chip>
        </div>
        <ul>
          <li>
            • Contributed to the development and maintenance of the HarmonyOS
            NEXT and OpenHarmony operating systems using C, C++, and Assembly
            Language.
          </li>
          <li>
            • Strengthened team troubleshooting capabilities by providing
            consistent technical support and collaborating with different teams,
            such as testing teams and hardware teams, and resolved 50+
            reliability defects in OpenHarmony, significantly reducing memory
            leaks, freezes, and crashes.
          </li>
          <li>
            • Developed synchronization tools enhancing integration between
            open-source and private repositories; resolved 100+ synchronization
            issues.
          </li>
          <li>
            • Streamlined the automation testing process, achieving a 60%
            reduction in testing time.
          </li>
        </ul>
      </div>
      <h3 className={h3()}>Game Reliability Engineer</h3>
      <div className={paragraph()}>
        <span className="font-semibold">Garena&nbsp;</span>
        / Xuhui, Shanghai, China
        <div className="flex justify-center mt-2 mb-3 gap-x-2">
          <Chip color="danger">Full-Time</Chip>
          <Chip color="secondary">Aug 2022 - Nov 2022</Chip>
        </div>
        <div className="flex justify-center mt-2 mb-3 gap-x-2">
          <Chip color="primary">Internship</Chip>
          <Chip color="secondary">Mar 2022 - Aug 2022</Chip>
        </div>
        <ul>
          <li>
            • Led the development of various automation tools using Go,
            including the operations script management system, asset management
            system, operations system, and jump server.
          </li>
          <li>
            • Independently pinpointed and resolved 30+ defects related to
            concurrency and caching, significantly enhancing the systems&rsquo;
            reliability and integrity.
          </li>
          <li>
            • Collaborated with game development teams and developed operation
            tools using Go and gRPC to automate GCP-based game server scaling,
            resulting in a 70% reduction in operational costs.
          </li>
          <li>
            • Promoted the adoption of Site Reliability Engineering principles
            within the department.
          </li>
        </ul>
      </div>
    </div>
  )
}