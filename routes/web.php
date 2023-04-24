<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::namespace('App\Http\Controllers\web')->group(function(){
    Route::get('/', [HomeController::class, 'home'])->name('home');
    Route::get('/services', [HomeController::class, 'services'])->name('services');
    Route::get('/about', [HomeController::class, 'about'])->name('about');
    Route::get('/blog', [HomeController::class, 'blog'])->name('blog');
    Route::get('/categories', [HomeController::class, 'categories'])->name('categories');
    Route::get('/testimonials', [HomeController::class, 'testimonials'])->name('testimonials');
    Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

    // Auth Routes
    Route::get('/login', [HomeController::class, 'login'])->name('login');
    Route::get('/register', [HomeController::class, 'register'])->name('register');
    Route::post('/register/process', [AuthController::class, 'registerUser'])->name('reg.process');
    Route::post('/login/process', [AuthController::class, 'loginUser'])->name('login.process');
    Route::post('/logout/user', [UserController::class, 'logout'])->name('logout');

});
