import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Startup Sphere - Entrepreneurial Excellence",
  description: "Resources and insights for entrepreneurs and startup founders.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "URL Utilities",
    slug: "url-tools",
    tools: [
      {
        title: "QR Code Generator",
        desc: "Generate custom QR codes for any URL to make sharing easier.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "Shorten URL",
        desc: "Create short URLs for easy sharing and tracking.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "Link Analytics",
        desc: "Track and analyze the performance of your shortened links.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
  {
    title: "Text Processing Tools",
    slug: "text-processing",
    tools: [
      {
        title: "Text Comparison Tool",
        desc: "Compare and highlight differences between two pieces of text.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Count Tool",
        desc: "Count the number of words, characters, and sentences in your text.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "Image Tools",
    slug: "image-editing",
    tools: [
      {
        title: "Resize Images Online",
        desc: "Resize your images to any dimension for different platforms.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Crop Images",
        desc: "Trim images to the perfect size for your design.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Add Watermark",
        desc: "Insert watermarks to protect your images from unauthorized use.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Compress Images",
        desc: "Reduce the file size of your images without losing quality.",
        href: "https://review360.info",
      },
      {
        title: "Convert Image Formats",
        desc: "Convert images to different formats like JPEG, PNG, or WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Upload your images to a cloud storage service for easier access.",
        href: "https://review360.info/upload-image",
      },
    ],
  },
  {
    title: "Web Tools",
    slug: "web-utilities",
    tools: [
      {
        title: "Meta Tags Analyzer",
        desc: "Optimize the meta tags of your website for SEO.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Security Test",
        desc: "Scan your website for security vulnerabilities.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "Google Index Checker",
        desc: "Check whether your website is indexed by Google.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Google Cache Viewer",
        desc: "View the cached version of your site from Google’s index.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "URL Redirect Checker",
        desc: "Examine the redirect paths of your URLs for SEO health.",
        href: "https://tools360s.com/redirect-checker",
      },
    ],
  },
  {
    title: "Miscellaneous Tools",
    slug: "general-tools",
    tools: [
      {
        title: "Invoice Generator",
        desc: "Create invoices for your business transactions.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Public IP Finder",
        desc: "Find out your device’s public IP address.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Password Generator",
        desc: "Generate strong and secure passwords for online safety.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Browser Update Check",
        desc: "Check if your browser is up to date for better security.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Code Formatter",
        desc: "Format your HTML, CSS, and JavaScript code for readability.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
];
