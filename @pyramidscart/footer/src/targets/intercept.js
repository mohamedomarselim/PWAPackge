const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin');
const componentOverrideMapping = {
    '@magento/venia-ui/lib/components/Footer/sampleData.js': '@pyramidscart/footer/src/override/venia-ui/lib/components/Footer/sampleData.js',
    // add comma-separated files
};


module.exports = (targets) => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap((flags) => {
        flags[targets.name] = {
            esModules: true,
            cssModules: true,
            graphqlQueries: true
        };
    });

    targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
        new moduleOverridePlugin(componentOverrideMapping).apply(compiler);
    });
};






