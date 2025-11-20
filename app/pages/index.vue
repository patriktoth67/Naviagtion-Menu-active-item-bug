<script setup lang="ts">
const activeValue = ref("communication");

const navItems = [
	// Communication Group
	[
		{ label: "Communication", type: "label" },
		{
			label: "Inbox",
			icon: "i-heroicons-chat-bubble-left-right",
			value: "communication",
			children: [
				{
					label: "My Inbox",
					to: "#",
				},
				{
					label: "All",
					to: "#",
				},
			],
		},
		{
			label: "Tickets",
			icon: "i-heroicons-ticket",
			value: "tickets", // Different value to avoid overlap
			children: [
				{
					label: "Board 1",
					to: "#",
				},
			],
		},
	],

	// Platform Tools Group
	[
		{ label: "Platform Tools", type: "label" },
		{
			label: "Automation",
			icon: "i-heroicons-bolt",
			value: "platform-tools",
			children: [
				{
					label: "AI",
					to: "#",
				},
				{
					label: "Custom",
					to: "#",
				},
			],
		},
		{
			label: "Widgets",
			icon: "i-heroicons-square-2-stack",
			to: "#",
		},
	],

	// Content & Marketing Group
	[
		{ label: "Content & Marketing", type: "label" },
		{
			label: "Newsletter",
			icon: "i-heroicons-envelope-open",
			value: "content-marketing",
			children: [
				{
					label: "Subscribers",
					to: "#",
				},
			],
		},
	],

	// Administration Group
	[
		{ label: "Administration", type: "label" },
		{
			label: "Settings",
			icon: "i-heroicons-cog",
			value: "administration",
			children: [
				{
					label: "General",
					to: "#",
				},
			],
		},
	],
];
</script>

<template>
	<div
		class="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-8 px-4">
		<div class="max-w-7xl mx-auto space-y-8">
			<!-- Header Section -->
			<div
				class="text-center bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
				<div
					class="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mb-6">
					<svg
						class="w-8 h-8 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
					</svg>
				</div>
				<h1 class="text-4xl font-bold text-slate-800 mb-4">
					UNavigationMenu v-model Bug Reproduction
				</h1>
				<p class="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
					This demonstrates that v-model works with horizontal orientation but
					not vertical when using array-of-arrays structure.
				</p>
				<div
					class="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full border border-amber-200">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							clip-rule="evenodd"></path>
					</svg>
					<span class="text-sm font-medium">Bug Reproduction Environment</span>
				</div>
			</div>

			<!-- Control Panel -->
			<div class="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
				<div class="flex items-center gap-3 mb-6">
					<div
						class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
						<svg
							class="w-5 h-5 text-blue-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
						</svg>
					</div>
					<h2 class="text-xl font-semibold text-slate-800">Control Panel</h2>
				</div>

				<div class="space-y-4">
					<div>
						<label class="block text-sm font-medium text-slate-700 mb-3"
							>Change Active Value:</label
						>
						<div class="flex flex-wrap gap-3">
							<button
								v-for="value in [
									'communication',
									'tickets',
									'platform-tools',
									'content-marketing',
									'administration',
								]"
								:key="value"
								@click="activeValue = value"
								class="px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg capitalize"
								:class="{
									'from-blue-700 to-blue-800 shadow-xl scale-105 ring-2 ring-blue-300':
										activeValue === value,
								}">
								{{ value.replace("-", " ") }}
								<svg
									v-if="activeValue === value"
									class="w-4 h-4 inline ml-2"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
							</button>
						</div>
					</div>

					<!-- Current active value display -->
					<div
						class="bg-linear-to-r from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
						<div class="flex items-center gap-3">
							<div
								class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
								<svg
									class="w-4 h-4 text-slate-600"
									fill="currentColor"
									viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clip-rule="evenodd"></path>
								</svg>
							</div>
							<div>
								<span class="text-sm font-medium text-slate-600"
									>Current Active Value:</span
								>
								<span class="ml-2 text-lg font-semibold text-slate-800">{{
									activeValue || "none"
								}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Navigation Menus Comparison -->
			<div class="space-y-8">
				<!-- Horizontal (Working) -->
				<div
					class="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
					<div
						class="bg-linear-to-r from-green-50 to-green-100 px-6 py-4 border-b border-green-200">
						<div class="flex items-center gap-3">
							<div
								class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
								<svg
									class="w-5 h-5 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
								</svg>
							</div>
							<div>
								<h2 class="text-xl font-bold text-green-800">
									Horizontal Orientation
								</h2>
								<p class="text-sm text-green-600 font-medium">
									Working - v-model functional
								</p>
							</div>
						</div>
					</div>
					<div class="p-6 pb-16 bg-slate-800">
						<UNavigationMenu
							v-model="activeValue"
							orientation="horizontal"
							variant="pill"
							:items="navItems"
							type="single" />
					</div>
				</div>
			</div>

			<!-- Vertical (Broken) -->
			<div
				class="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
				<div
					class="bg-linear-to-r from-red-50 to-red-100 px-6 py-4 border-b border-red-200">
					<div class="flex items-center gap-3">
						<div
							class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
							<svg
								class="w-5 h-5 text-red-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
							</svg>
						</div>
						<div>
							<h2 class="text-xl font-bold text-red-800">
								Vertical Orientation
							</h2>
							<p class="text-sm text-red-600 font-medium">
								Broken - v-model not working
							</p>
						</div>
					</div>
				</div>
				<div class="p-6 bg-slate-800">
					<UNavigationMenu
						:model-value="activeValue"
						orientation="vertical"
						variant="pill"
						:items="navItems"
						type="single" />
				</div>
			</div>

			<!-- Debug Info -->
			<div
				class="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
				<div
					class="bg-linear-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200">
					<div class="flex items-center gap-3">
						<div
							class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
							<svg
								class="w-5 h-5 text-slate-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<h3 class="text-lg font-semibold text-slate-800">
							Debug Information
						</h3>
					</div>
				</div>
				<div class="p-6">
					<div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
						<pre class="text-xs text-slate-700 overflow-x-auto">{{
							JSON.stringify(navItems, null, 2)
						}}</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
