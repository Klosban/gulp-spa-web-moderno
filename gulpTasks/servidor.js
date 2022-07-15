const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, // abrir a page com a porta automaticamente no browser
            livereload: true, // reiniciar a page sempre que houver mudanças na build
        }))
}

function monitorarArquivos(callback) {
    watch('src/**/*.html', () => gulp.series('appHTML')()) // watch irá monitorar os arquivos da pasta html, se acontecer alguma mudança a função appHTML será invocada para atualizar a pasta build com o arquivo html modificado
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor,
}