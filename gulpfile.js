import gulp from "gulp"
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path,
  gulp,
  plugins
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js"
import { image } from "./gulp/tasks/image.js";
import { otfToTtf, fontStyle, ttfToWoff } from "./gulp/tasks/fonts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.scss, js);
  gulp.watch(path.watch.scss, image);
}

export { svgSprite }
export { fonts }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(html, copy, scss, js, image));

const dev =  gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)

