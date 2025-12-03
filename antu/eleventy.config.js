import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("readableDate", (value) => {
    if (!value) return "";
    return DateTime.fromJSDate(value, { zone: "utc" }).toFormat("LLL dd, yyyy");
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    return DateTime.fromJSDate(value, { zone: "utc" }).toISODate();
  });

  eleventyConfig.addCollection("featuredPosts", (collection) => {
    return collection
      .getFilteredByGlob("src/posts/*.md")
      .filter((item) => item.data.featured)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => a.date - b.date);
  });

  eleventyConfig.addFilter("uniqueCategories", (collection) => {
    const categories = new Set();
    collection.forEach((item) => {
      if (item.data && item.data.category) {
        categories.add(item.data.category);
      }
    });
    return Array.from(categories);
  });

  eleventyConfig.addFilter("relatedPosts", (collection, currentUrl, limit = 3) => {
    if (!Array.isArray(collection)) return [];
    return collection.filter((item) => item.url !== currentUrl).slice(0, limit);
  });

  eleventyConfig.addFilter("latestPosts", (collection, currentUrl, limit = 5) => {
    if (!Array.isArray(collection)) return [];
    return collection
      .filter((item) => item.url !== currentUrl)
      .sort((a, b) => b.date - a.date)
      .slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
