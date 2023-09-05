export const server = (done) => {
    app.plugins.browsersync.init({
        server:{
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        post: 3000,
    });
}