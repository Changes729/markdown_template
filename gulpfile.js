var gulp = require("gulp");
var markdown = require("gulp-markdown-github-style");
var less = require("gulp-less");

gulp.task("markdown", function () {
  return gulp
    .src("doc/**/*.md")
    .pipe(markdown({ xhtmlOut: true, html: true, typographer: true }))
    .pipe(gulp.dest("dist/html/"));
});

gulp.task("less", function (cb) {
  gulp.src("less/**/*.less").pipe(less()).pipe(gulp.dest("dist/css/"));
  cb();
});

gulp.task("default", function () {
  gulp.watch("less/**/*.less", gulp.series("less"));
  gulp.watch("doc/**/*.md", gulp.series(["markdown"]));
});
