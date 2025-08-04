import Link from '@docusaurus/Link';

type TopicInfoProps = {
  speaker: string;
  category: string;
  title: string;
  bio: React.ReactNode;
  abstract: React.ReactNode;
  url?: string;
};

export const BioAndAbstract: TopicInfoProps[] = [
  {
    speaker: 'Wojtek Aleksander',
    category: 'UX writing',
    title: 'Three voices, one feature. How words turn options into actions',
    bio: 'Wojtek has been shaping the digital world for almost 25 years, giving it an increasingly human dimension. Whether he supports the complex tech products, banking, or healthcare, he erases the technological dryness of the services and products. His professional radar always pings when it spots inclusion and accessibility issues. In his product career, he has worked in many specialties and at various levels - from an individual contributor to a content team leader. In December 2023, he published the book “UX writing. The power of language in digital products” (in Polish). He is a philologist and IT expert by training. After hours, you will find him strolling by the sea, reading a comic book, or playing air guitar with his headphones on.',
    abstract:
      "In content design, words don't just inform — they shape decisions. This talk explores three core linguistic strategies that guide user behavior: the language of features, the language of benefits, and the language of loss. You’ll learn how each “narrative” influences perception, motivation, and trust. Is any of the three strategies superior? Where is the border between persuasion and manipulation? Can one feature tell three different stories — and should it? Packed with real-world examples, insights from psychology, and ethical design, this session will attempt to answer those questions for anyone who shapes digital conversations. ",
    url: '/agenda/wojtek-aleksander',
  },
  {
    speaker: 'Tomek Prus',
    category: 'UX writing',
    title: 'Collaborative content design with a user in mind',
    bio: 'Tomek has been in TechComm for over 15 years, actively building the Polish content community and holding various roles across the software industry. Tomek is passionate about fostering a culture of collaboration, autonomy, and inclusivity — both within teams and across organizations.',
    abstract: (
      <>
        <p>
          Great content doesn’t happen in isolation. In this talk, we’ll explore
          how to design user-centered content through close collaboration
          between content and design professionals — and with users themselves.
        </p>
        <p>
          You’ll learn practical methods for co-creating content in
          cross-functional teams, aligning tone and structure with user needs,
          and treating content as an integral part of the user experience — not
          an afterthought. We’ll cover tools like content crits, co-writing
          sessions, and selected content testing methods that bring real user
          feedback into the process.
        </p>
        <p>
          If you want to make content work with your team and for your users,
          this talk is for you.
        </p>
      </>
    ),
    url: '/agenda/tomek-prus',
  },
  {
    speaker: 'Pieterjan Benoit',
    category: 'UX writing',
    title:
      'Content design for onboarding - Only one chance to make a first impression',
    bio: 'Content designer at Docplanner. Belgian in Kraków. Fan of billiards, long-form podcast interviews, and the Oxford comma.',
    abstract:
      'Our lives have become increasingly digital and for nearly every problem you now have a wide range of different digital solutions. For a product to stand out and create a bond with the user, you have to show the value of your product and show it fast. To get off on the right foot and nail that first impression, onboarding is a crucial and decisive step that can make or break it. In this talk, I’ll connect a few dots and share some thoughts about the importance of content design and UX writing in the development of an onboarding experience that will be the start of a long and healthy relationship with your users.',
    url: '/agenda/pieterjan-benoit',
  },
  {
    speaker: 'Wojtek Kutyła',
    category: 'Accessibility',
    title: 'Accessible web content: things you might not have thought about',
    bio: (
      <>
        Wojtek Kutyła is a consultant specializing in digital accessibility and
        UX. Under the Human Thing Ltd brand, he leads workshops and supports the
        development of inclusive digital products. Based in Edinburgh, he
        collaborates with a wide range of international organizations. He is the
        author of "Web accessibility. Wprowadzenie do dostępności cyfrowej" and{' '}
        <Link to="https://wojtekkutyla.pl">wojtekkutyla.blog</Link>, where he
        writes about accessibility in software development.
      </>
    ),
    abstract:
      "Contrary to popular belief, web accessibility is not something reserved for web developers or UX folks. It's paramount to write good, accessible content, from tiny messages to large, elaborate pieces of copy. To have a fulfilling and pleasant dialogue with our users, regardless of who or where they are. What does this even mean? How can we do it? And what are some of the things related to this subject that you might not have thought about before? Let's focus on creating accessible, fulfilling experiences in the context of how we write for the web. ",
    url: '/agenda/wojtek-kutyla',
  },
  {
    speaker: 'Łukasz Górnicki',
    category: 'Documentation',
    title: 'Open source for technical writers: does it even make sense?',
    bio: 'Łukasz Górnicki is a consultant, speaker, trainer, and recognized expert in AsyncAPI. He’s one of maintainers of AsyncAPI specification and the core lead of AsyncAPI generator. As the founder of Brain Fart Services, he dedicates his career to full-time involvement in open-source projects, emphasizing community-driven initiatives.',
    abstract:
      "I began my career as a technical writer in 2011, my first active interaction with open source was in 2014, and for the past five years, I’ve been working full time on open source. In this session, I will draw directly from my own experience to ask whether contributing to open source really makes sense for technical writers. I want to give you a clear, practical picture of what open source can and cannot do for a technical writing journey. I'll start by explaining what open source is, as many still misunderstand it.",
    url: '/agenda/lukasz-gornicki',
  },
  {
    speaker: 'Katarzyna Kołtun',
    category: 'Documentation',
    title: 'Docs-as-code vs. DITA - methodologies and processes',
    bio: "I've been a technical writer since 2007, working primarily for software companies. My favourite aspect of the job is transforming chaos into order by designing well-considered information architecture for my content.",
    abstract:
      "In many ways, DITA and docs-as-code are polar opposites - one a highly structured, semantic methodology, the other a more flexible, developer-driven approach. When faced with the question of choosing the right approach for their use case, technical writing teams sometimes struggle to meaningfully compare the two. In this presentation, I'll share my experiences from working with two similar yet different organizations: Company A, which uses DITA, and Company B, which uses docs-as-code. We'll look at the costs and benefits of each approach, and how their respective implementations can shape your documentation process.",
    url: '/agenda/katarzyna-koltun',
  },
  {
    speaker: 'Aleksandra Wieczorek-Konieczko',
    category: 'Management',
    title: 'Feedback is everything',
    bio: (
      <>
        <p>
          Tech writer who believes docs reveal the ultimate truth about who you
          are, language is a neurosurgical tool, and writers are the single
          underutilized resource in IT. Full of hot takes, she spent the last 9
          years writing docs, structuring docs, strategizing docs, leading teams
          who write docs and looking for the best way to do docs in IT, only to
          discover that it's not about the tooling nor the process, but a secret
          third thing.
        </p>
        <Link to="https://www.doc-doctor.org/">doc-doctor.org</Link>
      </>
    ),
    abstract: (
      <>
        <p>Let's talk about how we talk about each other's work.</p>
        <p>
          In the content world, feedback is currency. In the workplace, it's the
          force that fuels careers, for better or worse. For content
          professionals, it's everything.
        </p>
        <p>
          In my talk, I'll skip the usual technical review guidelines to explore
          the subtle ways feedback can shape human brains and reinforce the
          unspoken workplace dynamics. I'll share my personal feedback
          manifesto, grounded in neuroscience, psychology, philosophy, and some
          hard-won experience, to start the conversation about what the 'F' word
          really means.
        </p>
        <p>
          Together, we'll look at how to support clarity without triggering
          defensiveness, build others up without posturing, and create trust in
          place of fear.
        </p>
      </>
    ),
    url: '/agenda/aleksandra-wieczorek-konieczko',
  },
  {
    speaker: 'Lance Cummings',
    category: 'AI',
    title:
      'Beyond prompts: how content professionals are preparing content for AI integration',
    bio: 'Lance Cummings is a professor of English in the Professional Writing program at the University of North Carolina Wilmington. Dr. Cummings explores content and information development in technologically and culturally diverse contexts both in his research and teaching. His most recent work looks at how to leverage structured content with rhetorical strategies to improve the performance of generative AI technologies and shares his explorations in his newsletter, Cyborgs Writing.',
    abstract: (
      <>
        <p>
          Technical writing teams across industries are quietly revolutionizing
          how they prepare content for AI integration—but these innovations
          remain largely undocumented and untested.
        </p>
        <p>
          This presentation shares early findings from an ongoing research study
          investigating documentation strategies that technical writers are
          developing to optimize content for AI model consumption. Through
          ethnographic interviews with technical writing professionals across
          diverse industries, we're creating the first comprehensive catalog of
          these emerging practices.
        </p>
        <p>
          While organizations experiment with everything from structured content
          formats to prompt-ready documentation, competitive concerns keep
          effective techniques siloed while less effective approaches
          proliferate unchecked. This research serves as a neutral academic
          intermediary to collect and systematically document these strategies.
        </p>
        <p>Key insights include:</p>
        <ul>
          <li>
            A taxonomic framework for categorizing AI-preparation techniques
            based on implementation complexity and intended applications
          </li>
          <li>
            Patterns emerging across different industries and organizational
            contexts
          </li>
          <li>
            Early identification of variables that determine strategy
            effectiveness
          </li>
          <li>
            Practical protocols for testing and validating documentation
            approaches
          </li>
        </ul>
        <p>What attendees will gain:</p>
        <ul>
          <li>
            A systematic understanding of current AI-ready documentation
            practices
          </li>
          <li>
            Frameworks for evaluating and selecting appropriate strategies for
            their contexts
          </li>
          <li>
            Insights into how documentation structure influences AI performance
          </li>
          <li>
            Actionable approaches for preparing content that works for both
            human readers and AI systems
          </li>
        </ul>
        <p>
          This session bridges the critical gap between rapidly evolving
          industry practices and academic understanding, offering content
          strategists proven frameworks rather than experimental guesswork.
        </p>
      </>
    ),
    url: '/agenda/lance-cummings',
  },
  {
    speaker: 'Sergio Valero Notari',
    category: 'Management',
    title:
      'Metrics in Content Design. Numbers are probably the most important words',
    bio: (
      <>
        <p>
          Sergio has spent the past 9 years practicing, teaching, and advocating
          for Content Design. He began as the sole UX Writer at ZnanyLekarz,
          later leading a team of 10 Content Designers. Along the way, he's also
          taught at universities and design schools in Barcelona.
        </p>
        <p>
          After taking a 6-month sabbatical to prioritize mental health, he's
          now building the Content Design discipline from the ground up once
          again, this time at Kave Home, where products aren't just pixels on a
          screen, but real objects that spark joy. Just like those, numbers can
          shine, especially when we treat them as words that speak and align:
          something we'll explore together.
        </p>
      </>
    ),
    abstract: `Metrics are a core part of how Content Designers make smarter decisions, not just tools for analysts. In this talk, we'll explore how to define, gather, interpret and own your own metrics, even without complete access to data tools. We'll also cover counter metrics, common testing pitfalls, and how to work with analysts to get the full story. You’ll also learn how to design your metrics for each and every new project. Because great content isn't just about words. It's about results.`,
    url: '/agenda/sergio-valero-notari',
  },
  {
    speaker: 'Anna Dulny-Leszczyńska',
    category: 'Accessibility',
    title: 'How can content design support accessibility?',
    bio: (
      <>
        <p>
          A UX geek, an accessibility advocate, a certified trainer, and UX
          educator.
        </p>
        <p>
          With 5 years of experience as a designer, I've worked across agencies
          and corporations on projects such as mobile apps, web applications,
          websites, and enterprise products. I'm also involved in accessibility
          initiatives and enjoy sharing knowledge about creating more inclusive
          design solutions.
        </p>
      </>
    ),
    abstract:
      'Ensuring the accessibility of a digital product is the responsibility of the entire team. However, much can be achieved through well-crafted content design. In this power talk, you’ll learn how small changes in content can enhance your product’s accessibility. The presentation will explore various use cases that benefit from clear writing and offer actionable guidelines that you can apply to your everyday work.',
    url: '/agenda/anna-dulny-leszczynska',
  },
  {
    speaker: 'Magdalena Michalak',
    category: 'AI',
    title: 'The readers you never see',
    bio: 'Technical and UX writer and AI enthusiast',
    abstract:
      "Your users aren't browsing docs anymore — they're asking AI for instant answers. It's time to prepare your content for this new audience: Large Language Models.",
    url: '/agenda/magadalena-michalak',
  },
  {
    speaker: 'Nachu Herrera',
    category: 'UX writing',
    title:
      'From local voice to global choice: Challenges of designing content across borders',
    bio: 'Nachu is a Content Designer with nearly five years of experience. Currently working at Docplanner, she was previously the first UX Writer at Movistar Argentina, one of the biggest telecom companies in the country, where she helped shape a more consistent voice across the mobile app. Born in a small town on the outskirts of Buenos Aires, she traded the comfort of familiar streets and a single language for the vibrant noise of Barcelona, where life and work flow in many accents. Today, she collaborates with teammates from over seven countries, building bridges through content in a company that never speaks just one way.',
    abstract: (
      <>
        <p>
          What happens when a Content Designer from a small town near Buenos
          Aires, who used to design content in one language for one audience,
          suddenly finds herself creating English copies, keeping in mind they
          will be localized into many languages?
        </p>
        <p>
          In this talk, Nachu will share her journey from being the first UX
          Writer at Movistar Argentina — one of the country's largest
          telecommunications companies — to working at Docplanner, an
          international digital healthcare company present in over 13 markets
          across Europe and Latin America.
        </p>
        <p>
          At Movistar, she focused on shaping a consistent voice in Rioplatense
          Spanish. Now, she designs content in English that is localized into
          12+ languages.
        </p>
        <p>
          She will explore the challenges, trade-offs, and lessons from moving
          between these two worlds — from local voice ownership to
          localization-ready writing, and from speed and comfort to process
          maturity and adventure!
        </p>
      </>
    ),
    url: '/agenda/nachu-herrera',
  },
  {
    speaker: 'Dagmara Szol',
    category: 'Storytelling',
    title:
      'How to tell the stories about your creative brand? 5 rules of brand communication in 2025',
    bio: (
      <>
        <p>
          Creative Brand Management and CEO of Creative Mess – a guide to the
          world of technology and its creative application in building a brand.
          For over 10 years, I have been combining my knowledge of IT, design,
          and communication in international startups and large corporations.
          Now, I am translating my experience into managing online chaos for
          online creators, personal brands, and small and medium-sized
          businesses.
        </p>
        <p>
          As Creative Mess, I help companies create space for growth and promote
          it in the online world.
        </p>
        <p>
          When I'm not sitting at my laptop, I'm probably reading books,
          drinking specialty coffee, or riding my bike. Or traveling the world
          with my book and laptop.
        </p>
      </>
    ),
    abstract:
      'In 2025 your portfolio is not enough to build the trust about your work and get new clients. Discover 5 tips of building your creative brand based on my own story.',
    url: '/agenda/dagmara-szol',
  },
  {
    speaker: 'Dariusz Drezno',
    category: 'Accessibility',
    title: 'Dostępność dokumentacji - nieoczywiste pułapki 🇵🇱',
    bio: (
      <>
        Dariusz is the co-creator of{' '}
        <Link to="https://techwriter.pl">techwriter.pl</Link> and technical
        communication postgraduate studies. For twenty years, he has been
        optimizing content and training in large corporations, startups, and his
        own companies, with accessibility being his focus for the last five
        years. He develops accessibility standards within the Standard
        Accessibility Reporting and W3C organizations. As a hobby, he runs a 3x3
        basketball portal with his son.
      </>
    ),
    abstract: (
      <>
        <p>
          1. Jak szybko znaleźć najbardziej problematyczne elementy? - wspólnie
          przetestujemy Waszą dokumentację popularnymi narzędziami, sprawdzimy
          zarówno dokumenty w formacie pdf jak i html. Efektem tej części będzie
          lista dostępnościowych bugów wymagających poprawek, chyba że niczego
          nie znajdziemy :)
        </p>
        <p>
          2. Dlaczego poprawki w Twojej dokumentacji mogą nie wystarczyć? -
          pokażemy kilka miejsc, w których często czają się poważne problemy
          dostępności, niweczące całą pracę techwriterów w obszarze dostępności.
          Sprawdzicie czy przypadkiem tego samego typu problemy nie pojawiają
          się również w Waszej firmie. Ta część zostawi Was z listą tematów dla
          przyjaciół z innych działów Waszej organizacji :)
        </p>
      </>
    ),
    url: '/agenda/dariusz-drezno',
  },
  {
    speaker: 'Michał Skowron',
    category: 'Documentation',
    title: 'Git for docs: basics, not only for beginners',
    bio: (
      <>
        He began his technical communication journey in 2012, after abandoning a
        never-started modeling career. Together with his colleagues, he strives
        to rock the Polish tech comm scene. Currently, he is a coding Tech
        Writer at the Polish branch of Guidewire Software, co-creator of the{' '}
        <Link to="https://techwriterkoduje.pl">techwriterkoduje.pl</Link>{' '}
        podcast and co-admin of the{' '}
        <Link to="https://techwriter.pl">techwriter.pl</Link> portal. He is
        interested in not-so-popular sports, such as running and cycling. Had he
        not become involved in documentation, he would have become a
        firefighter.
      </>
    ),
    abstract: (
      <>
        <p>
          During this workshop you will learn the basics of Git. Together, we
          will explore this amazing tool by not only getting our hands dirty
          with the most useful commands but also by digging into the philosophy
          behind it and the way it works. Mixing theory with practice will allow
          you to bridge gaps in your knowledge about Git and build solid
          foundations for further development. That's why we believe that not
          only beginners but also people who already have some Git skills can
          benefit from this workshop.
        </p>
        <p>
          If you attend, you will:
          <ul>
            <li>
              Learn the basics of Git which is a fundamental skill in docs as
              code
            </li>
            <li>
              Get a skill that you can use in countless setups and environments
            </li>
            <li>Stop being scared of the terminal</li>
            <li>Make a step towards being more technical</li>
          </ul>
        </p>
        <p>
          What you will learn:
          <ul>
            <li>What version control is and why you should care</li>
            <li>
              What is Git and how is it different from other version control
              systems
            </li>
            <li>Why people use Git</li>
            <li>Where people use Git</li>
            <li>How to manage docs using Git</li>
          </ul>
        </p>
        <p>
          Practical exercises:
          <ul>
            <li>Git config</li>
            <li>Pull changes from remote</li>
            <li>Amend</li>
            <li>Create a branch</li>
            <li>Create a tag</li>
            <li>Stage, commit, and push changes</li>
            <li>Create a PR</li>
            <li>Merge vs rebase</li>
            <li>Revert</li>
            <li>Git history</li>
          </ul>
        </p>
        <p>
          Advanced concepts (theoretical):
          <ul>
            <li>Reset</li>
            <li>Force push</li>
            <li>Squash</li>
          </ul>
        </p>
        <p>
          What you will need:
          <ul>
            <li>A laptop with Git installed</li>
            <li>VS Code</li>
            <li>A GitHub account</li>
          </ul>
        </p>
      </>
    ),
    url: '/agenda/michal-skowron-pawel-kowaluk',
  },
  {
    speaker: 'Paweł Kowaluk',
    category: 'Documentation',
    title: 'Workshop',
    bio: (
      <>
        Paweł Kowaluk has been in tech content since 2008. He's worked as a tech
        writer, product owner, team leader, programmer, technical director,
        consultant, information architect, and more. His focus right now is on
        ContentOps and the various interactions that go into it. He works as a
        tool developer at Guidewire Software. He is also a co-owner of{' '}
        <Link to="https://techwriter.pl">techwriter.pl</Link> and{' '}
        <Link to="https://techwriterkoduje.pl">techwriterkoduje.pl</Link>.
      </>
    ),
    abstract: 'Details coming soon',
    url: '/agenda/michal-skowron-pawel-kowaluk',
  },
  {
    speaker: 'Andrzej Niewiarowski',
    category: 'Documentation',
    title: 'Elevate your visual communication with Snagit',
    bio: 'Andrzej Niewiarowski is the Chief Software Technical Writer at Hitachi Energy. He has a considerable experience in technical writing and a keen interest in visual communication.',
    abstract: (
      <>
        <p>
          Take part in a practical, 2-hour workshop on Snagit, a powerful tool
          for screen capture and image editing. If you create technical
          documentation, give feedback, do research and visual analysis, or need
          to share clear instructions, this session is for you.
        </p>
        <p>
          Andrzej, an experienced Technical Writer, will guide you through
          Snagit's key features. You'll learn how to take precise screen
          captures, add clear annotations, manage your images efficiently, and
          use time-saving presets. We'll look at real-world examples, discuss
          common visual communication problems, and find out how Snagit can
          help.
        </p>
        <p>
          You'll get hands-on experience during an exercise, applying what you
          learn right away. You'll see how you can use Snagit to make your work
          with screenshots faster, and your visual communication more effective.
          You'll leave with practical skills to use Snagit for your visual
          needs.
        </p>
      </>
    ),
    url: '/agenda/andrzej-niewiarowski',
  },
  {
    speaker: 'Marcin Krzanicki',
    category: 'Accessibility',
    title: 'Hurt your persona',
    bio: 'Marcin is a UX designer with over a decade of experience in implementing user-centered design principles. He worked in the public sector, aviation industry, fintech, data tool development, and, most recently, the defense sector. As a lecturer, Marcin uses his proprietary curriculum to familiarize students of digital product design with digital accessibility. Marcin is also a known speaker and mentor, presenting at conferences such as UX Poland, WaysConf, and the Sensorycznie i na serio accessibility hackathon.',
    abstract: (
      <>
        <p>
          This workshop focuses on accessibility in product development, using
          the original "persona permutation canvas" method. Participants will
          learn how to integrate accessibility into their workflow—not just as a
          checklist of requirements (such as WCAG), but as an essential and
          integral part of product design. The session offers practical tools
          and a new perspective on treating accessibility as a core product
          value.
        </p>
        <p>
          You will leave the workshop with knowledge and skills to start
          addressing accessibility in your product, understanding it not only as
          a set of standards, but as a vital and conscious element of product
          integrity.
        </p>
      </>
    ),
    url: '/agenda/marcin-krzanicki',
  },
  {
    speaker: 'Adam Turlej',
    category: 'Documentation',
    title: 'Release note: A technical writing genre of its own?',
    bio: 'I have worked as a software technical writer since 2020. I first came across technical writing at the Institute of English Studies of the Jagiellonian University, where I learned about DITA. When it comes to creating and managing content, I advocate minimalism and modularization. I am also a musician.',
    abstract: (
      <>
        <p>
          What comes to mind when we talk about technical writing genres? In
          this context, a technical writer usually thinks of various topic types
          or API reference standards. At least, that was the case for me a few
          months ago. Then, I became heavily involved in producing release
          notes.
        </p>
        <p>
          In this talk, I'm going to identify and discuss the main formal and
          stylistic traits of release notes. To this end, I'm going to compare
          various release notes produced by various companies and targeted at
          various audiences. I'm also going to compare release notes with other
          types of content that technical writers create on a daily basis.
        </p>
      </>
    ),
    url: '/agenda/adam-turlej',
  },
  {
    speaker: 'Sara Grądziel',
    category: 'Accessibility',
    title: 'Instant accessibility: what happens when AI automates inclusion',
    bio: 'UX/UI designer, accessibility advocate, digital inclusion specialist',
    abstract: (
      <>
        <p>
          Accessibility doesn't have to be slow, complicated, or reserved for
          specialists. What if making your website inclusive could be as simple,
          and fast, as running a spellcheck? In this session, we’ll explore how
          AI transforms accessibility from a checkbox chore into an intuitive,
          real-time partner that empowers teams and protects users.
        </p>
        <p>
          With real-time audits, smart code suggestions, and seamless
          integration into existing workflows, modern tools are making it easier
          than ever for teams to build accessible experiences from the start.
          We’ll share how automation can reduce costs, remove bottlenecks, and
          empower designers and developers - proving that accessibility can be
          fast, affordable, and part of everyone’s life.
        </p>
        <p>
          Together, we’ll uncover how automation makes inclusion scalable,
          affordable, and precise - so teams of any size, from nimble startups
          to global enterprises, can truly embed accessibility into their DNA.
        </p>
      </>
    ),
    url: '/agenda/sara-gradziel',
  },
];
