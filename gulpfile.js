const { task } = require('gulp');
var gulp = require('gulp');

gulp.task('mytask', done => {
    console.log('Привет, я таск!');
    done();
});

