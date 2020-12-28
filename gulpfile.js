var gulp = require("gulp");
var markdown = require("gulp-markdown-it");

gulp.task("markdown", function () {
  return gulp.src("doc/**/*.md").pipe(markdown()).pipe(gulp.dest("dist/"));
});

gulp.task("default", function () {
  return gulp.watch("doc/**/*.md", gulp.series(["markdown"]));
});
