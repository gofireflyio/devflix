export const movies = [
    {
        id: 1,
        contributor: 'eran-infralight',
        title: 'Cost', 
        poster: `${process.env.PUBLIC_URL}/posters/cost.jpg`, 
        description: `After a freak cloud migration accident strands a group of DevOps engineers on an uncharted digital island of spiraling cloud costs, they must band together to survive in a wild world of runaway budgets, resource sprawl, and unexpected charges. Led by the conflicted but resourceful Jack Terraform, the team navigates through treacherous vendor pricing, hidden fees lurking in the jungle, and the relentless threat of legacy system "Others." Each episode reveals more about the mysterious "Cost Island" and its dark secrets, testing their mettle as they battle to regain control of their cloud environment—and themselves. As they dig deeper, the line blurs between friend and foe, while the ultimate question looms: can they escape the mounting costs, or will they be consumed by the endless cycle of overruns and waste?`
    },
    { 
        id: 2, 
        contributor: 'GibliX',
        title: 'The Walking Devs', 
        poster: `${process.env.PUBLIC_URL}/posters/walking_devs.jpg`, 
        description: 'In a world ravaged by a cataclysmic event known as "The Deprecation," where legacy systems have risen from their decommissioned graves to overwhelm modern infrastructure, a small group of surviving developers fight to keep their agile, cloud-native practices alive. Led by the battle-hardened Rick Grimes, a former scrum master, the group scavenges for precious resources like cloud credits and API keys while fending off hordes of zombie COBOL programs and undead mainframes. As they journey through the desolate landscape of abandoned data centers and ruined tech campuses, they search for the rumored safe haven: a fully-functioning, air-gapped Kubernetes cluster known as Alexandria. But with each passing day, the line between maintaining humanity and embracing the cold efficiency needed to survive in this new world grows ever thinner. In this gripping post-apocalyptic drama, our heroes must confront not only the external threats but also the darkness within themselves as they fight to rebuild civilization one microservice at a time.'
    },
    { 
        id: 3, 
        contributor: 'GibliX',
        title: 'Breaking Build', 
        poster: `${process.env.PUBLIC_URL}/posters/breaking_build.jpg`, 
        description: 'In this high-stakes drama, a talented team of DevOps engineers races against time to fix a catastrophic build failure in their CI/CD pipeline. With a critical product release looming and millions of dollars on the line, they must navigate through layers of legacy code, misconfigurations, and internal politics. As the clock ticks down, team lead Jesse Buildman must confront his own past mistakes and push the boundaries of cloud technology to save the company from disaster.'
        },
        { 
        id: 4, 
        contributor: 'eran-infralight',
        title: 'Fast & Ferious - IaC Drift', 
        poster: `${process.env.PUBLIC_URL}/posters/fast_ferious_iac.jpg`, 
        description: 'Buckle up for this high-octane thrill ride through the world of Infrastructure as Code. Dominic Terraeto and his crew of elite cloud engineers face their greatest challenge yet: a massive configuration drift threatening to tear apart their carefully crafted multi-cloud empire. With rival tech giants and shadowy hackers hot on their heels, the team must execute daring heists of legacy systems, perform death-defying refactors, and push their terraform skills to the limit. It\'s a race against time to bring their infrastructure back into sync before everything they\'ve built comes crashing down.'
        },
        { 
        id: 5, 
        contributor: 'GibliX',
        title: 'Brooklyn Five-Nines', 
        poster: `${process.env.PUBLIC_URL}/posters/brookly_five_nines.jpg`, 
        description: 'Welcome to the 99th precinct of the cloud, where a ragtag group of SREs (Site Reliability Engineers) work tirelessly to maintain 99.999% uptime in their corner of the digital world. Led by the brilliant but immature Jake Peralta-Ping and the straight-laced Captain Raymond Holt-Packet, the team tackles perp walks through server rooms, chases down rogue APIs, and deals with the shenanigans of the mysterious Vulture, a cloud cost optimization specialist with a knack for swooping in and taking credit for their hard work. It\'s a hilarious and heartwarming look at the everyday heroes keeping the internet running.'
        },
        { 
        id: 6, 
        contributor: 'GibliX',
        title: 'Call Of (Pager) Duty - CLICK OPS', 
        poster: `${process.env.PUBLIC_URL}/posters/call_of_pager_duty.jpg`, 
        description: 'In this gritty, action-packed series, we follow John "Soapbox" MacTavish, a lone wolf sysadmin turned automation specialist. Haunted by memories of fallen servers and endless ticket queues, Soapbox embarks on a daring mission to eliminate click-ops warfare once and for all. Armed with nothing but his trusty mechanical keyboard and an arsenal of Ansible playbooks, he must infiltrate heavily fortified data centers, outmaneuver devious vendor lock-ins, and face off against the ultimate enemy: corporate bureaucracy. The fate of IT operations hangs in the balance as Soapbox fights to usher in a new era of infrastructure automation.'
        },
        { 
        id: 7, 
        contributor: 'eran-infralight',
        title: 'CSI - Container Storage Interface', 
        poster: `${process.env.PUBLIC_URL}/posters/container_storage_interface.jpg`, 
        description: 'Dive into the gritty underworld of container orchestration with the elite CSI unit. Detective Horatio Kubelet and his team of forensic DevOps experts investigate the most puzzling cases of data loss and storage corruption in the cutthroat world of cloud-native computing. From the seedy back alleys of local volumes to the glittering high-rises of distributed storage systems, no cluster is safe from scrutiny. Watch as they unravel the mysteries of persistent volumes, crack the code of storage classes, and bring rogue sidecars to justice. In this world, the most dangerous criminals leave no traces – only pod logs.'
        },
        { 
        id: 8, 
        contributor: 'davidfrid02',
        title: 'Game Of Nodes', 
        poster: `${process.env.PUBLIC_URL}/posters/game_of_nodes.jpg`, 
        description: 'In a land where summer can last for decades and winter can last a lifetime, trouble is brewing. From the scheming south and the savage eastern lands, to the frozen north and the ancient Wall that protects the realm from the darkness beyond, powerful families are engaged in a deadly cat-and-mouse game for control of the Seven Kingdoms of Kubernetes. As two great houses clash, ordinary IT peasants face a terrifying truth – winter is coming. But the true danger comes from beyond the Wall, as a long-forgotten enemy returns, bringing with it the chaos of monolithic architectures and the terrifying specters of tightly coupled services. Amidst the power struggles, betrayals, and mysteries, who will emerge victorious in the Game of Nodes?'
        },
        { 
        id: 9, 
        contributor: 'gilcoh33',
        title: 'Leaky Blinders', 
        poster: `${process.env.PUBLIC_URL}/posters/leaky_blinders.jpg`, 
        description: 'Set in the lawless frontier of public clouds in the aftermath of the Great Migration, Leaky Blinders follows the exploits of the Shelby family, a gang of cloud security experts of Romany origin. Led by the cunning and ambitious Tommy Shelby, the family seeks to move up in the world, transitioning from their small-time data protection racket to becoming legitimate masters of multi-cloud security. But as they face off against rival gangs, corrupt cloud providers, and zealous compliance officers, the Shelbys must use all their wits and cutting-edge security practices to plug the leaks in their expanding empire. With each season, the stakes get higher, the adversaries more dangerous, and the encryption keys more complex.'
        },
        { 
        id: 10, 
        contributor: 'GibliX',
        title: 'Portal Combat', 
        poster: `${process.env.PUBLIC_URL}/posters/portal_kombat.jpg`, 
        description: 'Welcome to Portal Combat, where legendary warriors from different cloud realms converge to battle for supremacy in the ultimate multi-cloud tournament. Watch as AWS\'s Raiden, the God of Thunder and Lambdas, faces off against Azure\'s Sub-Zero, master of cold storage and data freezes. Google Cloud\'s Scorpion, with his razor-sharp Kubernetes clusters, seeks vengeance against Oracle\'s shape-shifting T-1000 database. Each fighter brings unique abilities from their native cloud, but only one can be crowned champion of the hybrid cloud world. With each bone-crushing match, alliances are forged and broken, while the mysterious tournament host, Shang Tsung of VMware, plots to absorb the powers of all clouds for himself. Get ready for the most electrifying cloud showdown in history!'
        },
        { 
        id: 11, 
        contributor: 'radomarina',
        title: 'Saving Private Subnet', 
        poster: `${process.env.PUBLIC_URL}/posters/saving_private_subnet.jpg`, 
        description: 'In the chaos of a massive cloud migration, one subnet goes missing behind enemy lines of legacy infrastructure. Captain John H. Miller, a seasoned cloud architect, receives a mission of utmost importance: assemble a team of elite DevOps specialists and venture deep into the heart of the old data center to find and safely extract Private Subnet Ryan. As the team battles through layers of outdated firewalls, tangles of spaghetti code, and ambushes by fierce change management boards, they question the cost of the mission against the larger cloud transformation effort. With time running out and resources dwindling, Miller and his team must summon all their DevOps prowess to secure the subnet and turn the tide of the migration war.'
        },
        { 
        id: 12, 
        contributor: 'YuvalFireFly',
        title: 'Shell-ock Holmes', 
        poster: `${process.env.PUBLIC_URL}/posters/shell_ock_holmes.jpg`, 
        description: 'Meet Shellock Holmes, the world\'s only consulting DevOps detective, and his faithful companion, Dr. Watson.py. From their home base at 221B Baker Street Data Center, they solve the most perplexing cloud infrastructure mysteries that leave Scotland Yard\'s IT department baffled. Armed with his legendary power of deduction and mastery of shell scripting, Holmes unravels the most cryptic of cloud conundrums. Whether it\'s The Adventure of the Blue Kubernetes, A Scandal in Amazon, or The Hound of the PostgreSQL, no case is too complex for Shellock\'s razor-sharp intellect. But as he matches wits with the nefarious Professor Moriarty, a criminal mastermind of cloud chaos, Holmes faces his greatest challenge yet. Will his command-line wizardry be enough to solve The Final Problem?'
        },
        { 
        id: 13, 
        contributor: 'GibliX',
        title: 'Silence of The LANs', 
        poster: `${process.env.PUBLIC_URL}/posters/slience_of_lans.jpg`, 
        description: 'Clarice Starling, a young FBI trainee, is thrust into a terrifying cat-and-mouse game with two diabolical geniuses. To catch Buffalo Bill, a twisted hacker leaving a trail of compromised nodes across the corporate network, Clarice must seek the help of Dr. Hannibal Lecter, an imprisoned former network architect with a taste for devouring vulnerable systems. As Clarice delves deeper into the dark web of interconnected threats, she uncovers a plot more sinister than she ever imagined. With time running out and lives at stake, Clarice must confront her own demons and navigate the psychological labyrinth created by Lecter to stop Buffalo Bill before the entire LAN falls silent. In this heart-pounding thriller, the line between ally and enemy blurs, and the only way out of the darkness may be to embrace it.'
        },
        { 
        id: 14, 
        contributor: 'GibliX',
        title: 'The Social Network Administrator', 
        poster: `${process.env.PUBLIC_URL}/posters/social_network_administrator.jpg`, 
        description: 'In the fall of 2003, brilliant but socially awkward Harvard student Mark Zuckerberg sits down at his computer and begins furiously coding. In a alcohol-fueled burst of programming, he creates "Facemash," a website that spreads like wildfire across campus. But this is just the beginning. As Mark\'s creation evolves into Facebook, the world\'s largest social network, we follow the tumultuous journey of the unsung hero behind the scenes: Eduardo Saverin, the network administrator. While Mark battles lawsuits and betrayal, Eduardo fights tirelessly to scale the infrastructure, fend off relentless DDoS attacks, and keep the rapidly growing platform online. Through boardroom battles, all-night coding sessions, and Silicon Valley excess, "The Social Network Administrator" tells the gripping tale of friendship, ambition, and the birth of a tech giant from the perspective of the admin who held it all together.'
        },
        { 
        id: 15,
        title: 'Firefly.ai', 
        poster: `${process.env.PUBLIC_URL}/posters/firefly.jpg`, 
        description: `Get ready for the most thrilling cinematic experience you'll ever witness! *Cloud Control: The Ultimate Adventure* takes you on an exhilarating journey into the heart of cloud infrastructure management like never before. In a world where digital empires rise and fall, one team stands against the chaos, ensuring that every cloud asset is accounted for, every drift is detected and remediated, and governance reigns supreme.
        Witness the unparalleled power of cutting-edge technology as our heroes navigate through the complexities of cloud environments, wielding the ultimate tools of inventory management and automated workflows. With each challenge, they not only maintain order but push the boundaries of what's possible in cloud management.
        This is not just another tech movie—*Cloud Control* is a relentless, edge-of-your-seat experience that showcases the real essence of agility and innovation. If you thought you knew what it meant to be 'in control,' think again. This is the best movie you'll ever see, where the stakes are sky-high, and the future of cloud management is in your hands!
        Prepare to be amazed, because *Cloud Control: The Ultimate Adventure* is the blockbuster event that redefines the genre, one drift at a time.
        [Learn more about Firefly.ai](https://firefly.ai)`,
        thumbnails: [
          `${process.env.PUBLIC_URL}/thumbnails/firefly_t1.jpg`,
          `${process.env.PUBLIC_URL}/thumbnails/firefly_t2.jpg`,
          `${process.env.PUBLIC_URL}/thumbnails/firefly_t3.jpg`
        ],
        videoUrl: 'https://youtu.be/Q3ft49cSlY4?si=48dQK3UcaEfqnPAT',
        contributor: 'GibliX'
        },
    ];