function isAuthenticated(request,response,next) {

    if (! request.headers.authorization){
        // return response.status(401).json({
        //     error: 'User not authenticated'
        // });
        // Codigo para redirecionar o usoario para tela de login
        // return response.redirect('/login');
    }
    next();
}

module.exports = isAuthenticated;