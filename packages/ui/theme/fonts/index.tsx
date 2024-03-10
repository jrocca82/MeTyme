import { Montserrat, EB_Garamond } from "next/font/google";

export const montserrat = Montserrat({
	subsets: ["latin", "latin-ext"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Woo hoo! Since we didn't actually make any changes, we don't need to deploy. But if we did have changes, we can do:
// Control+C to exit
export const garamond = EB_Garamond({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "700", "800"],
});

export const fonts = {
	heading: montserrat.style.fontFamily,
	body: garamond.style.fontFamily,
};
