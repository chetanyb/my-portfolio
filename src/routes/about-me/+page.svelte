<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
</script>

<div class="w-full flex-col items-center justify-center">
	<div class="flex items-center justify-center">
		<h1 class="h1 p-4 pb-2 gradient-animation">Profile</h1>
	</div>

	<div class="m-2 px-4 py-2 pt-0">
		<div class="flex-col">
			<p class="text-justify">
				Hi, I’m <strong>Chetany Bhardwaj</strong>, aka <strong>chethack</strong>—a passionate
				software engineer and creative thinker dedicated to building solutions that drive innovation
				and inclusivity. My journey in computer science is fueled by curiosity, a love for solving
				complex problems, and a desire to make a meaningful impact through technology. ✨
			</p>
			<br />
			<p class="text-justify">
				With hands-on experience in blockchain, cloud computing, and GRID technologies, I’ve honed
				my skills through impactful internships at <strong>Polygon Labs</strong> and
				<strong>KEK</strong>. From optimizing high-performance systems to leading award-winning
				hackathon projects like <strong>SITA</strong>, a blockchain-based agricultural lending
				platform, I’m committed to delivering scalable and ethical solutions. 🚀
			</p>
			<br />
			<p class="text-justify">
				Currently, I’m a final-year <strong>Computer Science Engineering</strong> student majoring
				in <strong>Cloud Computation and Virtualization Technology</strong>, with dual minors in
				<strong>DevOps Practices</strong>
				and <strong>Design Principles</strong>. My academic journey, combined with certifications
				like <strong>AWS Solutions Architect</strong>, equips me with the expertise to tackle
				challenges in cloud computing, DevOps, and distributed systems. 🖥️
			</p>
			<br />
			<p class="text-justify">
				Beyond technology, I channel my creativity into <strong>music production</strong>,
				<strong>songwriting</strong>, and <strong>rapping</strong>—expressing ideas and emotions
				through rhythm and lyrics. 🎵🎤
			</p>
			<br />
			<p class="text-justify">
				Let’s connect and collaborate to build a future where innovation meets social good. 🌍🤝
			</p>
		</div>
	</div>

	<hr class="!border-t-2 !border-yellow-400 my-1" />

	<div class="flex-col">
		<h3 class="h3 bg-gradient-to-r from-yellow-400 to-yellow-700 px-4 py-1 text-orange-800">
			Experience
		</h3>
		<div class="m-2">
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><img src="/images/groww.svg" class="h-12" alt="groww logo" /></svelte:fragment
					>
					<svelte:fragment slot="summary">
						<div class="flex-col">
							<div>Groww | DevOps Intern</div>
							<div class="text-blue-300 text-sm">Jan 2025-Ongoing</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list-disc ml-6">
							<li>
								Working on InfraPlatform and Observability for the biggest stock broker, with over
								50 million users, in India
							</li>
							<li>
								Implemented application change event notifications via Argo CD and canary deployment
								notifications via Argo Rollouts for internal tools.
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><img src="/images/kek.png" class="w-12" alt="kek logo" />
					</svelte:fragment>
					<svelte:fragment slot="summary">
						<div class="flex-col">
							<div>KEK | GRID Computing R&D Intern</div>
							<div class="text-blue-300 text-sm">Feb 2024 - Ongoing</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list-disc ml-6">
							<li>
								Developed a uniform job execution environment using Apptainer, an HPC specialized
								containerization engine, addressing varied GRID infrastructure and diverse job
								requirements
							</li>
							<li>
								Documented deployment procedures, ensuring consistent and efficient use of the GRID
								infrastructure
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><img src="/images/polygon.svg" class="h-12" alt="polygon-labs logo" /></svelte:fragment
					>
					<svelte:fragment slot="summary">
						<div class="flex-col">
							<div>Polygon Labs | Protocol Software Engineering Intern</div>
							<div class="text-blue-300 text-sm">Sep 2024 - Dec 2024</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list-disc ml-6">
							<li>Worked with the Polygon PoS team</li>
							<li>
								Developed and optimized client efficiency by writing scripts to test multiple
								versions of execution and consensus clients simultaneously, reducing the time to
								identify faulty commits and versions
							</li>
							<li>
								Migrated encoding protocols to gogoproto standards while maintaining compatibility
								with older amino proto
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	</div>

	<hr class="!border-t-2 !border-yellow-400 my-1" />

	<div class="flex-col">
		<h3 class="h3 bg-gradient-to-r from-yellow-400 to-yellow-700 px-4 py-1 text-orange-800">
			Education
		</h3>
		<div class="m-2">
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><img src="/images/UPES.png" class="h-12" alt="UPES logo" /></svelte:fragment
					>
					<svelte:fragment slot="summary">
						<div class="flex-col">
							<div>UPES | B.Tech in Computer Science and Engineering</div>
							<div class="text-blue-300 text-sm">2021-Ongoing</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list-disc ml-6">
							<li>Major in Cloud Computation and Virtualization Technology</li>
							<li>Minors in DevOps Practices and Design Principles</li>
							<li>Current GPA: 8.48/10</li>
							<li>
								Dean's List for Academic Excellence Award: Recognised for outstanding academic
								performance during the academic year 2021-2022
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><img src="/images/pba.png" class="h-12" alt="pba logo" /></svelte:fragment
					>
					<svelte:fragment slot="summary">
						<div class="flex-col">
							<div>Polkadot Blockchain Academy | Graduate</div>
							<div class="text-blue-300 text-sm">May 2024 - Jun 2024</div>
						</div>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list-disc ml-6">
							<li>Graduated from PBA Singapore cohort at NUS.</li>
							<li>
								Learnt about:
								<ul class="list-disc ml-6">
									<li>Cryptography Basics</li>
									<li>Economics & Game Theory</li>
									<li>Decentralized Governance</li>
									<li>Blockchain Basics</li>
									<li>Polkadot and Substrate</li>
								</ul>
							</li>
						</ul>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	</div>

	<hr class="!border-t-2 !border-yellow-400 my-1" />

	<div class="flex-col">
		<h3 class="h3 bg-gradient-to-r from-yellow-400 to-yellow-700 px-4 py-1 text-orange-800">
			Skills and Tools
		</h3>
		<div class="flex-col m-2 items-center justify-center">
			<h4 class="h4 text-center">Languages</h4>
			<div class="flex items-center justify-center">
				<Icon icon="skill-icons:javascript" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:c" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:rust" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:golang" class="h-12 w-12 m-2" />
			</div>
		</div>
		<div class="flex-col m-2 items-center justify-center">
			<h4 class="h4 text-center">Frameworks and Libraries</h4>
			<div class="flex items-center justify-center">
				<Icon icon="skill-icons:svelte" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:react-dark" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:expressjs-light" class="h-12 w-12 m-2" />
			</div>
		</div>
		<div class="flex-col m-2 items-center justify-center">
			<h4 class="h4 text-center">Databases</h4>
			<div class="flex items-center justify-center">
				<Icon icon="skill-icons:mysql-dark" class="h-12 w-12 m-2" />
				<Icon icon="simple-icons:cockroachlabs" class="bg-gray-700 h-12 w-12 m-2 p-1 rounded-xl" />
				<Icon icon="simple-icons:influxdb" class="bg-blue-950 h-12 w-12 m-2 p-1 rounded-xl" />
			</div>
		</div>
		<div class="flex-col m-2 items-center justify-center">
			<h4 class="h4 text-center">Tools and Technologies</h4>
			<div class="flex items-center justify-center">
				<Icon icon="skill-icons:aws-light" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:git" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:kubernetes" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:arduino" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:raspberrypi-light" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:linux-light" class="h-12 w-12 m-2" />
			</div>
		</div>
		<div class="flex-col m-2 items-center justify-center">
			<h4 class="h4 text-center">Media</h4>
			<div class="flex items-center justify-center">
				<Icon icon="fad:logo-fl" class="bg-orange-600 rounded-xl h-11 w-11 m-2" />
				<Icon icon="skill-icons:premiere" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:audition" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:aftereffects" class="h-12 w-12 m-2" />
				<Icon icon="skill-icons:photoshop" class="h-12 w-12 m-2" />
			</div>
		</div>
	</div>

	<hr class="!border-t-2 !border-yellow-400 my-1" />
</div>

<div class="fixed bottom-4 right-4 z-50">
	<a
		href="/resume.pdf"
		download
		class="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-700 text-white py-3 px-4 rounded-full shadow-lg hover:shadow-2xl transition ease-in-out duration-300"
		aria-label="Download Resume"
	>
		<Icon icon="fa:download" class="h-5 w-5 mr-2" />
		Resume
	</a>
</div>

<style>
	.h1 {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(90deg, #b0e555, #ef9232, #ffdd00);
		background-size: 400%;
		animation: gradient-animation 2s infinite alternate linear;
	}

	@keyframes gradient-animation {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 100%;
		}
	}
</style>
