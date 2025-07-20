<script lang="ts">
	export let data;
</script>

<div class="min-h-screen flex flex-col justify-center items-center px-6">

	<!-- Header -->
	<div class="text-center mb-12">
		<h1 class="text-5xl md:text-7xl font-bold mb-4">
			<span class="text-gradient">Let's Connect</span>
		</h1>
		<p class="text-gray-300 text-lg">Choose your preferred way to reach out</p>
	</div>

	<!-- Contact Options -->
	<div class="grid gap-6 w-full max-w-2xl">

		<!-- Email -->
		<button
			class="connect-card group"
			on:click={() => window.open('mailto:chetany@sita.farm')}
		>
			<div class="flex items-center space-x-4">
				<div class="icon-container">
					<span class="text-2xl">✉️</span>
				</div>
				<div class="flex-1 text-left">
					<h3 class="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
						Email
					</h3>
					<p class="text-gray-400 text-sm">chetany@sita.farm</p>
				</div>
				<div class="arrow">→</div>
			</div>
		</button>

		<!-- Twitter -->
		<button
			class="connect-card group"
			on:click={() => window.open('https://twitter.com/BRUHDWAJ', '_blank')}
		>
			<div class="flex items-center space-x-4">
				<div class="icon-container">
					<span class="text-2xl">🐦</span>
				</div>
				<div class="flex-1 text-left">
					<h3 class="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
						Twitter
					</h3>
					<p class="text-gray-400 text-sm">@BRUHDWAJ</p>
				</div>
				<div class="arrow">→</div>
			</div>
		</button>

		<!-- LinkedIn -->
		<button
			class="connect-card group"
			on:click={() => window.open('https://www.linkedin.com/in/chetanybhardwaj/', '_blank')}
		>
			<div class="flex items-center space-x-4">
				<div class="icon-container">
					<span class="text-2xl">💼</span>
				</div>
				<div class="flex-1 text-left">
					<h3 class="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
						LinkedIn
					</h3>
					<p class="text-gray-400 text-sm">Chetany Bhardwaj</p>
				</div>
				<div class="arrow">→</div>
			</div>
		</button>

		<!-- GitHub -->
		<button
			class="connect-card group"
			on:click={() => window.open('https://github.com/chetanyb', '_blank')}
		>
			<div class="flex items-center space-x-4">
				<div class="icon-container">
					<span class="text-2xl">💻</span>
				</div>
				<div class="flex-1 text-left">
					<h3 class="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
						GitHub
					</h3>
					<p class="text-gray-400 text-sm">chetanyb</p>
				</div>
				<div class="arrow">→</div>
			</div>
		</button>

	</div>

	<!-- Footer -->
	<div class="mt-12 text-center">
		<p class="text-gray-500 text-sm">Always open to interesting conversations</p>
	</div>

</div>

<style>
    .text-gradient {
        background: linear-gradient(135deg, #fbbf24, #f59e0b, #eab308);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: gradient-shift 3s ease-in-out infinite;
    }

    @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    .connect-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 24px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .connect-card:hover {
        background: rgba(251, 191, 36, 0.1);
        border-color: rgba(251, 191, 36, 0.3);
        transform: translateY(-2px);
    }

    .icon-container {
        width: 50px;
        height: 50px;
        background: rgba(251, 191, 36, 0.1);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .connect-card:hover .icon-container {
        background: rgba(251, 191, 36, 0.2);
        transform: scale(1.1);
    }

    .arrow {
        color: #6b7280;
        font-size: 18px;
        transition: all 0.3s ease;
    }

    .connect-card:hover .arrow {
        color: #fbbf24;
        transform: translateX(4px);
    }
</style>