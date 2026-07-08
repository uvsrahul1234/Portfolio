import { tool } from "ai";
import { z } from "zod";
import {
  ownerEmail,
  resumeUrl,
  experienceData,
  skillsData,
  projectsData,
  educationData,
  certificationsData,
  socialsData,
  sectionIds,
} from "../../src/data/portfolio.mjs";

const SECTION_VALUES = Object.values(sectionIds);

// Strip iconKey/imageKey from the data the model sees — those are frontend
// rendering hints, not facts the model should reason about.
const stripFrontendKeys = (obj) => {
  // eslint-disable-next-line no-unused-vars
  const { iconKey, imageKey, ...rest } = obj;
  return rest;
};

export const tools = {
  get_projects: tool({
    description:
      "Return Ankit's portfolio projects with real links, tech stack, and descriptions. Use when the visitor asks to see project links, demos, repositories, or wants details about a specific project.",
    inputSchema: z.object({
      tag: z
        .string()
        .optional()
        .describe(
          "Optional fuzzy filter — matches against title, category, or tags. Omit to return all projects."
        ),
    }),
    execute: async ({ tag }) => {
      const all = projectsData.map(stripFrontendKeys);
      if (!tag) return { projects: all };
      const needle = tag.toLowerCase();
      const filtered = all.filter(
        (p) =>
          p.title.toLowerCase().includes(needle) ||
          p.category.toLowerCase().includes(needle) ||
          p.tags.some((t) => t.toLowerCase().includes(needle))
      );
      return { projects: filtered.length ? filtered : all };
    },
  }),

  get_experience: tool({
    description:
      "Return Ankit's work history — companies, roles, dates, responsibilities, and notable in-role projects.",
    inputSchema: z.object({}),
    execute: async () => ({ experience: experienceData }),
  }),

  get_skills: tool({
    description:
      "Return Ankit's technical skills with descriptions. Optionally filter by category (e.g. 'AI & Data', 'Backend', 'Frontend', 'Cloud & Delivery', 'AI-Assisted Development').",
    inputSchema: z.object({
      category: z.string().optional(),
    }),
    execute: async ({ category }) => {
      const all = skillsData.map(stripFrontendKeys);
      if (!category) return { skills: all };
      const needle = category.toLowerCase();
      const filtered = all.filter((s) => s.category.toLowerCase().includes(needle));
      return { skills: filtered.length ? filtered : all };
    },
  }),

  get_education: tool({
    description: "Return Ankit's degrees and academic background.",
    inputSchema: z.object({}),
    execute: async () => ({ education: educationData }),
  }),

  get_certifications: tool({
    description:
      "Return Ankit's certifications with provider names and verification links.",
    inputSchema: z.object({}),
    execute: async () => ({ certifications: certificationsData }),
  }),

  get_contact: tool({
    description:
      "Return Ankit's contact email and social profile links (GitHub, LinkedIn, X, Instagram).",
    inputSchema: z.object({}),
    execute: async () => ({
      email: ownerEmail,
      socials: socialsData.map(({ name, link }) => ({ name, url: link })),
    }),
  }),

  get_resume_url: tool({
    description:
      "Render a download-resume button in the chat. Use when the visitor asks for the resume or CV. The frontend handles the actual file path — you do NOT need to mention any URL or path in your prose.",
    inputSchema: z.object({}),
    execute: async () => ({ ok: true }),
  }),

  // Client-side tool. No execute() — the frontend handles it by scrolling
  // the page and calling addToolResult to confirm completion to the model.
  scroll_to_section: tool({
    description:
      "Smoothly scroll the visitor to a section of the portfolio page and minimize the chat. Use when the visitor asks to SEE a whole section ('show me your projects', 'take me to experience'). Do NOT use for specific questions about one item — answer those in chat instead.",
    inputSchema: z.object({
      section: z
        .enum(SECTION_VALUES)
        .describe("The section id to scroll to."),
    }),
  }),
};
