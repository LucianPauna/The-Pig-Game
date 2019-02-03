var gulp = require('gulp'),
spritesmith = require('gulp.spritesmith'),
rename = require('gulp-rename');

gulp.task('sprite', function() {
  var spriteData = gulp.src('./app/assets/images/icons/*.png')
    .pipe(spritesmith({
      imgName: '../app/assets/images/sprites/sprite.png',
      cssName: '../app/assets/styles/modules/_sprite.css',
      imgPath: '../../assets/images/sprites/sprite.png',
      padding: 2
    }));
    spriteData.img.pipe(gulp.dest('img'));
    spriteData.css.pipe(gulp.dest('css'));
});