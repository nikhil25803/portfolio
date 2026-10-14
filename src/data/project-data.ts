import IMAGES from "../images/Images";
import type { Project } from "../types";

const kafkaesqueImage = new URL(
  "../assets/project-kafkaesque.png",
  import.meta.url,
).href;
const wordlyImage = new URL("../assets/project-wordly.png", import.meta.url).href;
const purrpeekImage = new URL(
  "../assets/project-purrpeek.png",
  import.meta.url,
).href;

export const PROJECTS: Project[] = [
  {
    slug: "kafkaesque",
    name: "Kafkaesque",
    tagline: "A read only Kafka inspector built for understanding a cluster before it becomes an incident.",
    githubUrl: "https://github.com/nikhil25803/kafkaesque",
    image: kafkaesqueImage,
    imageAlt: "Kafkaesque product banner",
    tech: ["Go", "Kafka", "HTMX", "PostgreSQL", "Docker"],
    featured: true,
    commands: [
      {
        label: "Install the CLI",
        code: "curl -fsSL https://raw.githubusercontent.com/nikhil25803/kafkaesque/main/install.sh | sh",
      },
      {
        label: "Inspect a cluster",
        code: "kafkaesque --health\nkafkaesque --brokers\nkafkaesque --consumer --group order-processor",
      },
      {
        label: "Run the web interface with Docker",
        code: "docker run --rm -p 8085:8085 \\\n  -e KAFKAESQUE_KAFKA_BOOTSTRAP_SERVERS=kafka-1:9092,kafka-2:9092 \\\n  -e KAFKAESQUE_DATABASE_URL='postgres://kafkaesque:password@postgres:5432/kafkaesque?sslmode=require' \\\n  -e KAFKAESQUE_AUTHENTICATION_SUPER_ADMIN_USERNAME=super_admin \\\n  -e KAFKAESQUE_AUTHENTICATION_SUPER_ADMIN_PASSWORD='replace-with-a-long-secret' \\\n  -e KAFKAESQUE_AUTHENTICATION_COOKIE_SECURE=false \\\n  ghcr.io/nikhil25803/kafkaesque:v0.6.0",
      },
    ],
    gallery: [
      { src: IMAGES.kafkaesqueDashboard, alt: "Kafkaesque dashboard with cluster totals and health", caption: "Cluster dashboard" },
      { src: IMAGES.kafkaesqueConsumers, alt: "Kafkaesque consumer groups with lag status", caption: "Consumer groups and lag status" },
      { src: IMAGES.kafkaesqueLag, alt: "Kafkaesque partition lag and topic summary", caption: "Partition lag and topic summary" },
      { src: IMAGES.kafkaesqueHealth, alt: "Kafkaesque cluster health diagnostics", caption: "Cluster health diagnostics" },
    ],
    overview: [
      "Kafkaesque is a lightweight Kafka observability tool for engineers who need a fast, safe picture of a cluster. It exposes brokers, topics, partitions, consumer groups, lag, assignments, and health information without mutating the cluster. The project began as a command line inspector and grew into a server with a read only HTTP API and an embedded responsive interface.",
      "The core idea is operational safety. Kafka tooling is often either too shallow for diagnosis or powerful enough to make an accidental change. Kafkaesque deliberately stays on the inspection side of that boundary. Stable text and JSON output make it useful in a terminal or script, while the web interface gives the same information to people who prefer a visual path through consumer lag and cluster health.",
    ],
    architecture: [
      "The application is written in Go and shares Kafka metadata work across compatible inspections. Configuration can come from YAML, environment variables, or explicit server flags, with validation applied before a connection is attempted. The server keeps the API and HTMX interface in the same distributable binary. Docker images, release archives, checksum verifying installers, and a disposable local Kafka environment make it practical to evaluate without touching a production deployment.",
      "Health views combine cluster, partition, and consumer signals. Consumer inspection can narrow results by group or topic and expose partition offsets, lag, active members, and assignments. TLS, mutual TLS, and common SASL mechanisms cover secured clusters, while broker address overrides help with environments whose advertised listeners are not reachable from the inspector.",
    ],
    usage: [
      "Install a published binary with the repository installer or run the container image. The installer places the executable in the user's local binary directory and verifies the release checksum before installation.",
      "Point Kafkaesque at one or more bootstrap servers through its YAML file or environment variables. Start with the connection check, then inspect metadata, brokers, topics, consumers, or health from the CLI. JSON output is available when another tool needs to consume the result.",
      "For the browser experience, start the server command and open the embedded UI. Use the dashboard for a cluster summary, then move into consumer groups, partition lag, topics, brokers, or health. The interface remains read only, so authentication and network placement should still follow the deployment guidance in the repository.",
    ],
  },
  {
    slug: "wordly",
    name: "Wordly",
    tagline: "One word, one day, one terminal: a persistent daily word game for the command line.",
    githubUrl: "https://github.com/nikhil25803/wordly",
    image: wordlyImage,
    imageAlt: "Wordly terminal game banner",
    tech: ["Go", "Bubble Tea", "Lip Gloss", "Cobra", "SQLite"],
    featured: true,
    commands: [
      {
        label: "Install Wordly",
        code: "curl -fsSL https://raw.githubusercontent.com/nikhil25803/wordly/main/install.sh | sh",
      },
      {
        label: "Play and inspect statistics",
        code: "wordly\nwordly --stats",
      },
    ],
    gallery: [
      { src: IMAGES.wordlyHome, alt: "Wordly home menu in a terminal", caption: "Home menu" },
      { src: IMAGES.wordlyGameplay, alt: "Wordly daily game board and keyboard", caption: "Daily game" },
      { src: IMAGES.wordlyResult, alt: "Completed Wordly result screen", caption: "Completed result" },
      { src: IMAGES.wordlyStats, alt: "Wordly command line statistics", caption: "Player statistics" },
    ],
    overview: [
      "Wordly brings a daily five letter word puzzle into the terminal without reducing it to a plain stream of prompts. It has a responsive terminal interface, keyboard feedback, statistics, saved games, and spoiler free result sharing. A single daily board is selected by UTC date, making the challenge consistent for players in different time zones.",
      "The game is designed to feel native in both large and compact terminals. It retains the strongest feedback for each keyboard letter, handles repeated letters correctly, and validates guesses before consuming an attempt. Submitted guesses and completed boards are persisted, so closing the terminal does not lose the day's progress.",
    ],
    architecture: [
      "The application is written in Go using Bubble Tea for the state driven terminal interface, Lip Gloss for presentation, and Cobra for command handling. SQLite stores the current user's puzzle history, attempts, streaks, and guess distribution in the operating system's standard configuration directory. The word lists and application resources ship with the binary, keeping normal gameplay independent from a remote service.",
      "Separate commands expose help, version information, statistics, dictionary size, and a scoped reset operation. Result sharing uses OSC52 clipboard support and generates a compact grid without revealing the answer. Accessibility is considered in the terminal itself: correct letters combine bold and green, present letters combine underline and yellow, and absent letters use dimmed text, so state is not conveyed by color alone.",
    ],
    usage: [
      "Install Wordly through the repository's shell or PowerShell installer. Both installers detect the operating system and architecture, download the latest matching archive, verify its SHA256 checksum, and place the binary in the selected installation directory.",
      "Run `wordly` with no flags to open or resume the current daily puzzle. Enter letters, use Backspace to edit, and press Enter to submit a valid word. Arrow keys or j/k navigate menus, Escape returns to the previous screen, and Ctrl+C exits without discarding submitted guesses.",
      "After completing a board, open the result screen and copy the spoiler free grid. Use the statistics command to review wins, streaks, and guess distribution without launching the interface. The reset command removes gameplay history while preserving the local user and bundled dictionary data.",
    ],
  },
  {
    slug: "purrpeek",
    name: "Purrpeek",
    tagline: "System information from a cat's perspective, across every major platform. Purr approved.",
    githubUrl: "https://github.com/nikhil25803/purrpeek",
    image: purrpeekImage,
    imageAlt: "Purrpeek rendering system information in a terminal",
    tech: ["Go", "Cobra", "YAML", "Terminal Graphics", "Cross platform"],
    featured: true,
    commands: [
      {
        label: "Install with Homebrew",
        code: "brew install nikhil25803/tap/purrpeek",
      },
      {
        label: "Render a report",
        code: "purrpeek\npurrpeek --json",
      },
    ],
    gallery: [
      { src: IMAGES.purrpeekGhosttyMongo, alt: "Purrpeek system report in Ghostty with Mongo artwork", caption: "Ghostty with image rendering" },
      { src: IMAGES.purrpeekGhosttySnow, alt: "Purrpeek system report in Ghostty with Snow artwork", caption: "A second bundled artwork" },
      { src: IMAGES.purrpeekTerminalMongo, alt: "Purrpeek Braille report in macOS Terminal", caption: "Braille fallback in macOS Terminal" },
      { src: IMAGES.purrpeekTerminalSnow, alt: "Purrpeek Braille report with Snow artwork", caption: "Fallback output with another image" },
    ],
    overview: [
      "Purrpeek is a system information CLI with a playful presentation. It collects operating system, hardware, storage, network, battery, shell, and terminal information, then pairs the report with cat artwork. The project supports macOS, Linux, and Windows and uses a best effort approach. One unavailable metric does not prevent the rest of the report from rendering.",
      "The visual layer adapts to terminal capability. Supported terminals can display bundled images, while other environments receive a Braille fallback. The result is useful as a quick machine summary while still having enough personality to be something people enjoy running and sharing.",
    ],
    architecture: [
      "Purrpeek is written in Go and splits system collection into code paths for each platform. Normal output is easy to read, while JSON output exposes the complete report for scripts. Collection warnings stay quiet by default and can be enabled with a verbose flag, which keeps JSON output clean for downstream consumers. The report covers CPU, GPU, memory, mounted volumes, network interfaces, batteries, shell details, and terminal dimensions where each platform makes that information available.",
      "Optional YAML configuration controls which bundled images may be selected and which report fields are shown. User configuration merges over embedded defaults on each invocation, so changing a preference does not require rebuilding. A separate localization file can add or replace greetings by language and time of day. Invalid configuration is rejected with a concise error instead of silently producing a misleading report.",
    ],
    usage: [
      "Install Purrpeek through Homebrew, Nix, Scoop, WinGet, the Linux installer, or a release archive. Package availability differs by platform, and the repository documents the exact supported commands and architectures.",
      "Run `purrpeek` for the normal illustrated report. Add the JSON flag when another program needs the machine data, and combine it with verbose mode only when collection diagnostics are also useful. Help documents the small set of runtime flags.",
      "To personalize the output, create the optional YAML file in the platform configuration directory and select images or report fields. Add a greetings JSON file to extend messages based on the time of day. Because both files are loaded on every run, changes appear immediately.",
    ],
  },
  {
    slug: "review-it",
    name: "Review It",
    tagline: "An open platform for receiving focused résumé feedback from a chosen mentor.",
    githubUrl: "https://github.com/nikhil25803/ReviewIt",
    image: IMAGES.projectReviewIt,
    imageAlt: "Review It résumé feedback platform",
    tech: ["Python", "Django REST Framework", "React", "PostgreSQL", "Firebase", "AWS S3"],
    overview: [
      "Review It connects job seekers with mentors who can review a résumé in context. Instead of treating feedback as an anonymous score, the platform centers the relationship between a person preparing for a role and someone with relevant experience. Users can submit a résumé, choose a mentor, and receive practical guidance through a free and open source workflow.",
      "The project covers both sides of a modern web application: identity and file handling at the boundary, structured API behavior in the backend, and a focused review experience in the frontend. It was built to be useful to people entering the job market as well as professionals repositioning their experience for a career change.",
    ],
    architecture: [
      "The backend uses Python, Django, and Django REST Framework to model users, review requests, and feedback. PostgreSQL provides relational storage, while object storage handles uploaded résumé files. Firebase authentication supports the sign in flow, and the React interface consumes the API through clear user and mentor journeys.",
      "The repository separates frontend and backend concerns so each can be developed and deployed independently. API validation protects uploaded metadata and review state, while the interface keeps the actions around requesting, tracking, and responding to feedback visible. Tailwind CSS supplies the presentation without introducing a separate component framework.",
    ],
    usage: [
      "Clone the repository and follow its environment setup for the Django API and React client. Configure the database, authentication provider, and object storage credentials before starting either application.",
      "Run backend migrations, create the required local user or administrative data, and start the API. Then configure the frontend with the API and Firebase values and launch the development client.",
      "As a user, authenticate, prepare a résumé submission, and select the relevant review path. As a mentor, open assigned requests and return actionable feedback. Deployment should keep storage credentials on the server and restrict uploaded document access to authorized users.",
    ],
  },
  {
    slug: "nutri-vista",
    name: "Nutri Vista",
    tagline: "Nutrition analysis that turns everyday meal notes into trackable insights.",
    githubUrl: "https://github.com/nikhil25803/nutri-vista",
    image: IMAGES.projectNutriVista,
    imageAlt: "Nutri Vista nutrition dashboard",
    tech: ["TypeScript", "Next.js", "MongoDB", "NextAuth", "Browser Cache"],
    overview: [
      "Nutri Vista is a nutrition analysis and meal tracking application designed to reduce the friction of recording food. Instead of forcing every ingredient through a dense form, it accepts natural meal descriptions and turns the result into structured nutrition information. A personal dashboard then helps users monitor their choices and progress over time.",
      "The experience focuses on the loop between logging, understanding, and adjusting. Users can enter what they ate, inspect the resulting nutritional breakdown, and return to a visual history rather than treating each analysis as a disposable lookup. That makes the project both a text processing interface and a small personal data product.",
    ],
    architecture: [
      "The application is built with TypeScript and Next.js, combining routes rendered on the server and application APIs in one project. MongoDB stores user and meal records, while NextAuth manages authenticated sessions. Browser caching reduces repeated work and keeps commonly accessed results responsive.",
      "The data model separates the original meal description from the structured analysis so the interface can show both what the user entered and what the system derived. Dashboard views aggregate saved meals into graphical summaries. Validation at the API boundary protects data for each user and keeps malformed nutrition records out of the history.",
    ],
    usage: [
      "Clone the repository, install its JavaScript dependencies, and create the documented environment file. Configure MongoDB, the authentication provider, and any nutrition analysis service required by the current repository version.",
      "Start the Next.js development server and authenticate through the configured provider. Enter a meal as ordinary text, review the returned nutrients, and save the result when it accurately represents the meal.",
      "Use the dashboard to browse previous entries and observe trends. For deployment, provide the same environment values through the hosting platform, keep service credentials private, and use a persistent MongoDB database rather than local development storage.",
    ],
  },
  {
    slug: "blogging-platform",
    name: "Microservice Blogging API",
    tagline: "A blogging backend built around services, with search, recommendations, caching, and tests.",
    githubUrl: "https://github.com/nikhil25803/blogging-platform",
    image: IMAGES.prjectBloggingPlatform,
    imageAlt: "Microservice Blogging API preview",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Prisma", "Docker"],
    commands: [
      { label: "Run with Docker", code: "docker-compose up" },
      { label: "Run manually", code: "npm i\nnpx prisma migrate dev --name init\nnpm run test\nnpm run dev" },
    ],
    gallery: [
      { src: IMAGES.bloggingArchitecture, alt: "Blogging platform microservice architecture", caption: "API, PostgreSQL, and Redis service architecture" },
    ],
    overview: [
      "The Microservice Blogging API explores how a familiar content product changes when responsibilities are split across services. It covers account and content workflows, CRUD operations, authentication, keyword search, and recommendations while keeping performance and operational behavior visible.",
      "Blogging is intentionally used as the domain because the concepts are easy to understand. That leaves the project free to concentrate on service boundaries, data ownership, caching, orchestration, security, and testing instead of spending its complexity budget on an unfamiliar business model.",
    ],
    architecture: [
      "Services are implemented with Node.js and Express. PostgreSQL provides durable relational storage through Prisma, while Redis supports caching and coordination where faster access matters. Docker and Docker Compose define a reproducible environment with multiple services for local development.",
      "Authentication protects write operations and behavior for each user. Search turns stored posts into a discoverable collection, while the recommendation path demonstrates how a separate concern can evolve without crowding the core content API. Unit tests cover service behavior and help validate changes across the distributed setup. The service boundaries also make failure handling and data flow easier to study than they would be inside one large application.",
    ],
    usage: [
      "Clone the repository and review its environment template before starting the stack. Provide database, Redis, authentication, and service configuration values without committing secrets.",
      "Use the documented Docker Compose workflow to start the supporting services and application containers. Apply Prisma migrations or generate the client where the repository setup requires it, then use the health or API routes to confirm that each service is ready.",
      "Create an account, authenticate, and exercise post creation, updates, search, and recommendation endpoints with an API client. During development, run the unit suite before changing a service contract and inspect container logs when a request crosses service boundaries.",
    ],
  },
  {
    slug: "fastapi-microservice",
    name: "FastAPI Microservices",
    tagline: "A warehouse and store system connected through Redis Streams.",
    githubUrl: "https://github.com/nikhil25803/fastapi-microservice",
    image: IMAGES.projectMicroservice,
    imageAlt: "FastAPI microservice warehouse and store interface",
    tech: ["Python", "FastAPI", "Redis Streams", "React", "SQLite", "Shell"],
    overview: [
      "This project models a warehouse and storefront as separate services. The warehouse manages products and inventory, while the store accepts orders through its own API and interface. Redis Streams carries events between the two sides, demonstrating asynchronous communication without requiring both applications to complete the same synchronous request.",
      "The domain makes service ownership concrete: product administration belongs to one boundary and ordering belongs to another. A React interface exposes the workflows so the architecture can be explored as a working system rather than only through API calls.",
    ],
    architecture: [
      "Python and FastAPI provide typed HTTP endpoints for the backend services. Each service owns its local persistence, while Redis Streams transports product and order events. Consumers respond to those events and update local state, keeping the services loosely coupled around their external contracts.",
      "The React client communicates with the appropriate service for warehouse or store actions. Shell scripts automate repeated setup and execution tasks. The result is a compact example of eventual consistency, event processing, and independent service development without introducing a large orchestration layer.",
    ],
    usage: [
      "Clone the repository and install the dependencies for each Python service and the React client. Start Redis first because the event producers and consumers depend on its stream infrastructure.",
      "Run the warehouse and store APIs using the repository's documented commands or automation scripts. Start their event consumers where those are separate processes, then launch the frontend with the configured service URLs.",
      "Create products through the warehouse flow and confirm that the store receives the relevant updates. Place an order in the store and observe the corresponding inventory behavior driven by events. Redis stream inspection and service logs are the most useful tools when tracing a message across the system.",
    ],
  },
  {
    slug: "jobs-api",
    name: "Jobs API",
    tagline: "A backend for job listings, applications, recruiters, and candidate selection.",
    githubUrl: "https://github.com/nikhil25803/jobs-api",
    image: IMAGES.projectJobsapi,
    imageAlt: "Jobs API project preview",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "AWS S3", "SendGrid"],
    commands: [
      { label: "Install and start", code: "npm i\nnpm start" },
    ],
    overview: [
      "Jobs API implements the backend workflows behind a hiring platform. Candidates can browse jobs and apply, while recruiters can publish positions, inspect applicants, and select candidates. The project goes beyond isolated CRUD endpoints by modeling the relationships between roles, listings, applications, uploaded material, and recruitment decisions.",
      "The API is intended to be consumed by a separate client, so consistent authentication, authorization, validation, and response shapes are central to the design. Population of related records gives recruiters useful application context without requiring the client to manually assemble every relationship.",
    ],
    architecture: [
      "Node.js and Express provide the HTTP layer, with MongoDB storing users, jobs, and application records. JWT authentication identifies callers and role checks separate candidate actions from recruiter capabilities. AWS S3 supports file storage, while SendGrid covers transactional email where the workflow needs to notify a user.",
      "Routes are grouped around the domain rather than a single oversized controller. Validation rejects incomplete or malformed requests before database work, and centralized error handling keeps failures predictable for clients. Postman documentation or collections make the endpoint sequence easier to exercise during development.",
    ],
    usage: [
      "Clone the repository, install dependencies, and create the required environment variables for MongoDB, JWT signing, S3, and SendGrid. Use development credentials and an isolated storage bucket while evaluating the project.",
      "Start the API and create accounts for the supported roles. Authenticate to receive a token, then pass it with protected requests. Recruiters can create listings. Candidates can query them and submit applications with the required profile or file information.",
      "Continue through the recruiter flow by listing applicants and updating a candidate's status. Test forbidden requests across roles as well as the successful path. Before deployment, restrict bucket access, rotate development secrets, and configure the client origin explicitly.",
    ],
  },
  {
    slug: "fund-raisers",
    name: "Fund Raisers",
    tagline: "An open fundraising platform for projects, communities, and startup ideas.",
    githubUrl: "https://github.com/nikhil25803/fundRaiser",
    image: IMAGES.projectFundsraiser,
    imageAlt: "Fund Raisers crowdfunding platform",
    tech: ["Python", "Django", "Bootstrap", "SQLite", "JavaScript", "Razorpay"],
    commands: [
      {
        label: "Prepare and run",
        code: "pip install -r requirements.txt\npython manage.py makemigrations\npython manage.py migrate\npython manage.py runserver",
      },
    ],
    gallery: [
      { src: IMAGES.fundRaisersHome, alt: "Fund Raisers landing illustration", caption: "Fundraising landing experience" },
      { src: IMAGES.fundRaisersFeatures, alt: "Fund Raisers feature overview", caption: "Platform features" },
      { src: IMAGES.fundRaisersCampaign, alt: "Fund Raisers campaign interface", caption: "Campaign discovery" },
    ],
    overview: [
      "Fund Raisers is a crowdfunding application where people can present a project, community need, or startup idea and ask others to support it. Visitors can discover active campaigns, understand why funds are needed, and contribute through an integrated payment flow. Campaign owners can publish their own requests instead of relying on a centrally curated catalog.",
      "The project combines content, accounts, campaign state, and payments in one complete Django application. It is designed as an approachable open source implementation of the basic mechanics behind community fundraising rather than a replacement for a regulated commercial platform.",
    ],
    architecture: [
      "Django handles routing, templates, authentication, forms, and persistence. SQLite keeps local setup small, while Bootstrap and JavaScript provide responsive presentation and interaction. Campaign models hold the funding goal, story, ownership, and progress information required by the public pages.",
      "Razorpay supplies the payment boundary. The application creates payment intent information on the server and handles the resulting status through the configured workflow. As with any payment integration, secrets stay on the server and confirmed payment state must come from trusted provider data rather than browser input alone.",
    ],
    usage: [
      "Clone the repository, create a Python environment, install dependencies, and configure Django plus Razorpay test credentials. Apply database migrations and create an administrative account for local management.",
      "Run the development server, register as a user, and create a campaign with its description and target. Browse campaigns from another session to verify the public discovery and detail flows.",
      "Use the payment provider's test mode to exercise a contribution without real money. Confirm successful and failed outcomes and inspect the recorded campaign progress. A production deployment would require a production database, HTTPS, verified payment callbacks, and a fuller review of financial and abuse controls.",
    ],
  },
  {
    slug: "scrape-up",
    name: "Scrape Up",
    tagline: "A Python package for extracting useful public data when a formal API is unavailable.",
    githubUrl: "https://github.com/nikhil25803/scrape-up",
    image: IMAGES.projectScrapeup,
    imageAlt: "Scrape Up Python package preview",
    tech: ["Python", "Beautiful Soup", "Requests", "PyPI", "Web Scraping"],
    commands: [
      { label: "Install from PyPI", code: "pip install scrape-up --upgrade" },
    ],
    overview: [
      "Scrape Up packages reusable web scraping workflows behind Python interfaces. It targets public information on platforms such as GitHub, Twitter, Instagram, and other useful sites, offering an alternative for experiments where an official API is unavailable or does not expose the required data.",
      "The project grew as an open source package rather than a disposable script. That means contributors can add a scraper, document its inputs and outputs, and reuse common request and parsing behavior. Consumers receive structured Python data instead of having to understand each site's markup for every small task.",
    ],
    architecture: [
      "Python modules organize scraping behavior by source. HTTP requests retrieve public pages and Beautiful Soup helps locate and normalize the relevant elements. Package interfaces keep the calling style consistent even when the underlying websites differ.",
      "Because scraping depends on external markup, each source remains isolated enough to be repaired without destabilizing unrelated integrations. Documentation and examples are important parts of the contract. They show which public URL or identifier is expected and what structured result a caller receives. Publishing through PyPI makes the package available without cloning the repository.",
    ],
    usage: [
      "Install the published package or clone the repository for development. Choose the documented module for the target platform and provide the public identifier or URL expected by that scraper.",
      "Call the scraper from a small Python program and handle network failures or missing fields as normal external data conditions. Cache results when repeated requests would otherwise place unnecessary load on the source website.",
      "Before using scraped data, review the source site's terms, robots guidance, privacy expectations, and applicable law. Website markup can change without notice, so pin a known package version for important workflows and contribute a focused fixture or parser update when a source changes.",
    ],
  },
  {
    slug: "food-vision",
    name: "Food Vision",
    tagline: "A multiclass food image classifier with command line and desktop interfaces.",
    githubUrl: "https://github.com/nikhil25803/FoodVision",
    image: IMAGES.projectFoodvision,
    imageAlt: "Food Vision classifier preview",
    tech: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Tkinter"],
    commands: [
      {
        label: "Prepare the environment",
        code: "python -m venv env\npip install -r requirements.txt",
      },
      {
        label: "Run the CLI or desktop app",
        code: "python prediction.py --model 1 --food pizza\npython GUI.py",
      },
    ],
    gallery: [
      { src: IMAGES.foodVisionAccuracy, alt: "Food Vision model accuracy chart", caption: "Training and validation accuracy" },
      { src: IMAGES.foodVisionLoss, alt: "Food Vision model loss chart", caption: "Training and validation loss" },
      { src: IMAGES.foodVisionCli, alt: "Food Vision command line prediction result", caption: "Command line prediction" },
      { src: IMAGES.foodVisionGui, alt: "Food Vision desktop prediction interface", caption: "Desktop interface" },
    ],
    overview: [
      "Food Vision explores multiclass image classification in the concrete domain of food recognition. A convolutional neural network learns visual features from labeled examples and predicts the category of an unseen food image. The repository treats the model as part of a usable application rather than stopping at a training notebook.",
      "Both command line and graphical paths make inference accessible after training. Supporting scripts automate repeated setup and execution work, while charts and tabular tooling help inspect the model's behavior. The project is a practical introduction to the full loop of preparing data, training, evaluating, saving, and serving a computer vision model.",
    ],
    architecture: [
      "TensorFlow and Keras define and train the convolutional network. NumPy and Pandas support data preparation and analysis, while Matplotlib visualizes training and evaluation results. Saved model artifacts separate the expensive training phase from normal inference.",
      "The inference layer loads a trained model, applies the same image resizing and normalization expected during training, and maps output probabilities back to class names. Tkinter provides the desktop interface, while the CLI offers a simpler path suitable for scripts or environments without a graphical session.",
    ],
    usage: [
      "Clone the repository, create a Python environment, and install the pinned machine learning dependencies. Follow the repository's data preparation instructions if retraining. Otherwise, obtain or generate the expected saved model artifact.",
      "Run the training workflow to fit the classifier and inspect the resulting metrics and plots. Keep preprocessing identical across training and validation so evaluation reflects the model rather than a mismatched input pipeline.",
      "For prediction, supply an image through the CLI or open it in the desktop interface. The application prepares the image, runs inference, and displays the predicted class. Treat the result as a model estimate: performance depends on the training classes and how closely new images resemble that data.",
    ],
  },
  {
    slug: "count-reps",
    name: "Count Reps",
    tagline: "A customizable computer vision exercise counter with local progress tracking.",
    githubUrl: "https://github.com/nikhil25803/count-reps",
    image: IMAGES.projectCountreps,
    imageAlt: "Count Reps exercise tracking application",
    tech: ["Python", "OpenCV", "MediaPipe", "SQLite", "Computer Vision"],
    commands: [
      {
        label: "Install and run",
        code: "python -m venv env\npip install -r requirements.txt\npython main.py",
      },
    ],
    gallery: [
      { src: IMAGES.countRepsDemo, alt: "Count Reps camera view tracking an exercise", caption: "Live pose tracking and repetition count" },
      { src: IMAGES.countRepsLandmarks, alt: "MediaPipe body landmark reference", caption: "The landmarks used to define an exercise" },
    ],
    overview: [
      "Count Reps uses pose estimation to count exercise repetitions from a camera feed. It is designed to support movements such as sit ups, push ups, and dumbbell presses while allowing the counting logic to be adapted for other exercises. A local database stores session information so the tool can track progress instead of losing the count when the camera closes.",
      "The central challenge is translating a noisy stream of body landmarks into a stable exercise state. Rather than counting every small movement, the application observes relevant joints, derives angles or positions, and waits for a complete transition between configured stages before adding a repetition.",
    ],
    architecture: [
      "OpenCV captures frames and handles the live display. MediaPipe supplies pose landmarks, which the application converts into measurements for each exercise. A small state machine distinguishes the starting and finishing phases of a repetition and prevents the same motion from being counted repeatedly while the user remains near a threshold.",
      "SQLite stores workout or repetition history locally. Keeping persistence on the same machine makes the project easy to run without an account or hosted service. Exercise rules remain customizable because different movements require different landmarks, angle ranges, and direction changes.",
    ],
    usage: [
      "Clone the repository, create a Python environment, install its computer vision dependencies, and confirm that OpenCV can access the intended camera. Good lighting and a view that keeps the required joints visible improve landmark stability.",
      "Start the application and select or configure the exercise. Move through the full range of motion while watching the landmark overlay and stage indicator. The counter increases only after the configured start and finish conditions have both been observed.",
      "Review saved session data to compare workouts over time. When adding a new exercise, identify the most reliable landmarks, calculate an appropriate measurement, and calibrate thresholds using several body positions and camera angles before treating the count as dependable.",
    ],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
