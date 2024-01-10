const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

// Task để biên dịch Sass thành CSS
gulp.task("styles", () => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Task để nén và concatenate JavaScript

gulp.task("scripts", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Task để theo dõi thay đổi và tải lại trình duyệt
gulp.task("serve", () => {
  browserSync.init({
    server: "./",
  });

  gulp.watch("src/scss/**/*.scss", gulp.series("styles"));
  gulp.watch("src/js/**/*.js", gulp.series("scripts"));
  gulp.watch("*.html").on("change", browserSync.reload);
});

// Nhiệm vụ để theo dõi thay đổi và tải lại trình duyệt (chạy watch)
gulp.task("watch", gulp.series("serve"));

// Nhiệm vụ mặc định để chạy tất cả các nhiệm vụ
gulp.task("default", gulp.parallel("styles", "scripts", "serve"));
