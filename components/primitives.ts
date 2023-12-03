import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
			yellow: "from-[#FF705B] to-[#FFB457]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#FFFFFF]",
		},
		size: {
			sm: "text-3xl lg:text-4xl",
			md: "text-[2.3rem] lg:text-5xl leading-9",
			lg: "text-4xl lg:text-6xl",
			xlg: "text-5xl lg:text-7xl",
			xxlg: "text-6xl lg:text-8xl",
			xxxlg: "text-7xl lg:text-9xl",
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "md",
	},
	compoundVariants: [
		{
			color: [
				"yellow",
				"blue",
				"foreground",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

