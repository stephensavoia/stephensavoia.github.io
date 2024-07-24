module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/r/parks");
  eleventyConfig.addPassthroughCopy("src/pandas/bikeshare");

  eleventyConfig.addWatchTarget("src/assets/css/");

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
