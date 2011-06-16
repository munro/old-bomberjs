({
    baseUrl: '../',
    dir: 'build',
    optimize: 'uglify',

    modules: [
        {
            name: 'external-libraries',
            create: true,
            include: ['libs/jquery-1.6.min', 'libs/events'/*, '../geometry.js/geometry'*/]
        }
    ]
})
