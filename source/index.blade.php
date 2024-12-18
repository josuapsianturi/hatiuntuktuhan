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

        <img src="/assets/img/logo.png" alt="{{ $page->siteName }} large logo" class="mx-auto mb-6 hidden md:block lg:mb-0 w-80">
    </div>

    <hr class="block my-8 border lg:hidden">

    <div class="flex">
        <a href="https://www.instagram.com/hatiuntuktuhan/" target="_blank" class="mb-8 mx-auto px-2 md:w-1/3">
            <img src="/assets/img/icon-window.svg" class="w-8 h-8 md:h-12 md:w-12 mx-auto md:mx-0" alt="instagram icon">

            <h3 id="instagram" class="text-lg md:text-2xl text-blue-900 mb-0 underline">Instagram</h3>
        </a>

        <a href="https://www.youtube.com/@hatiuntuktuhan/videos" target="_blank" class="mx-auto mb-8 px-2 md:w-1/3">
            <img src="/assets/img/icon-terminal.svg" class=" h-8 w-8 md:h-12 md:w-12" alt="youtube icon">

            <h3 id="youtube" class="text-lg md:text-2xl text-blue-900 mb-0 underline">YouTube</h3>
        </a>

        <a href="https://www.tiktok.com/@hatiuntuktuhan" target="_blank" class="mx-auto px-2 md:w-1/3 text-gray-700">
            <img src="/assets/img/icon-stack.svg" class="w-8 h-8 md:h-12 md:w-12" alt="stack icon">

            <h3 id="tiktok" class="text-lg md:text-2xl text-blue-900 mb-0 underline">TikTok</h3>
        </a>
    </div>
</section>
@endsection
