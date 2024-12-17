@extends('_layouts.master')

@section('body')
<section class="container max-w-6xl mx-auto px-6 py-10 md:py-12">
    <div class="flex flex-col-reverse mb-10 lg:flex-row lg:mb-24">
        <div class="mt-8">
            <h1 id="intro-template">{{ $page->siteName }}</h1>

            <p class="text-2xl"> 
                dan kamu akan mengetahui kebenaran, dan kebenaran itu akan memerdekakan kamu 
                ( Yoh 8:32 ) 
            </p>
        </div>

        <img src="/assets/img/logo.png" alt="{{ $page->siteName }} large logo" class="mx-auto mb-6 lg:mb-0 ">
    </div>

    <hr class="block my-8 border lg:hidden">

    <div class="md:flex -mx-2 -mx-4">
        <a href="https://www.instagram.com/hatiuntuktuhan/" class="mb-8 mx-3 px-2 md:w-1/3">
            <img src="/assets/img/icon-window.svg" class="h-12 w-12" alt="instagram icon">

            <h3 id="instagram" class="text-2xl text-blue-900 mb-0">Instagram</h3>
        </a>

        <a href="https://www.youtube.com/@hatiuntuktuhan/videos" class="mb-8 mx-3 px-2 md:w-1/3">
            <img src="/assets/img/icon-terminal.svg" class="h-12 w-12" alt="youtube icon">

            <h3 id="youtube" class="text-2xl text-blue-900 mb-0">YouTube</h3>
        </a>

        <a href="https://www.tiktok.com/@hatiuntuktuhan" class="mx-3 px-2 md:w-1/3 text-gray-700">
            <img src="/assets/img/icon-stack.svg" class="h-12 w-12" alt="stack icon">

            <h3 id="tiktok" class="text-2xl text-blue-900 mb-0">TikTok</h3>
        </a>
    </div>
</section>
@endsection
