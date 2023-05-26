import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { copyFiles } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { plugins } from "./gulp/config/plugins.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js"
import { scss } from "./gulp/tasks/scss.js";
import { copyConfig } from "./gulp/tasks/copy.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watcher() {
    gulp.watch(path.watch.files, copyFiles);
    gulp.watch(path.watch.img, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.scss, scss);
}

const mainTasks = gulp.parallel(copyFiles, copy, html, scss, js);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev }
export { build }

gulp.task('default', dev);