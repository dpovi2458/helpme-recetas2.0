// En el archivo routes/web.php

Route::prefix('miapp')->group(function () {
    Route::get('/', function () {
        return view('miapp');
    });
});
