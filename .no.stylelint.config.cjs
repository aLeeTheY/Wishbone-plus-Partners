module.exports = {
    plugins: ["stylelint-no-unsupported-browser-features"],
    rules: {
        "plugin/no-unsupported-browser-features": [
            true,
            {
                //* used .browserslistrc instead
                // browsers: ["> 1%", "Last 2 versions"],

                // ignore: ["rem"],
                severity: "warning",
                ignorePartialSupport: true,
            },
        ],
    },
};
