module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/**/*.{jpg,png,svg,gif,ico,js}");
  eleventyConfig.addPassthroughCopy("src/assets/css/styles.css");
  eleventyConfig.addPassthroughCopy("r/parks/parks.html");
  eleventyConfig.addPassthroughCopy("pandas/bikeshare");

  eleventyConfig.addWatchTarget("./src/**/*/styles.css");
  eleventyConfig.addWatchTarget("tailwind.config.js");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
