Route::post('/register', 'API\AuthController@register');
Route::post('/login', 'API\AuthController@login');

Route::get('/images', 'API\ImageController@index');
Route::get('/users', 'API\UserController@index');
Route::post('/users', 'API\UserController@store');
