const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers;
        })
    }
    writing() {
        const templates = [
            '.gitignore',
            'package.json',
            'postcss.config.js',
            'README.md',
            'webpack.dll.config.js',
            'template/index.html',
            'src/app.js',
            'src/index.js',
            'src/styles.less',
            'src/components/index.js',
            'src/containers/index.js',
            'src/layouts/Frame.js',
            'src/layouts/Nav.js',
            'src/redux/index.js',
            'src/routers/index.js',
            'src/views/home/Home.js',
            'src/views/home/Home.less'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}