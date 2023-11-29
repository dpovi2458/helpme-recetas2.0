Route::group(['prefix' => 'api'], function () {
    Route::post('/register', 'API\AuthController@register');
    Route::post('/login', 'API\AuthController@login');
    
    Route::get('/images', 'API\ImageController@index');
    
    Route::resource('/users', 'API\UserController')->only(['index', 'store']);
});
