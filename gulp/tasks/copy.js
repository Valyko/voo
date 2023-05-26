export const copy = () => {
    return app.gulp.src(app.path.src.img)
    .pipe(app.gulp.dest(app.path.build.img))
}

export const copyFiles = () => {
    return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}

export const copyConfig = () => {
    return app.gulp.src(app.path.src)
    .pipe(app.gulp.dest(app.path.build))
}