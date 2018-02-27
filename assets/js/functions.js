/*
* Author : Design Guruji
* Template Name : Mogaly - Multipurpose Portfolio Template
* Build Date : January, 2017
* Version : 1.0
* Copyright © 2017 Design Guruji
*/
"use strict";

$(document).ready(function() {
	/* Scroll Top Arrow
	/* ------------------------------ */
	$(window).on("scroll", function() {
		var scroll = $(window).scrollTop();  
		if (scroll >= 400) {
			$(".scroll-top").fadeIn(650);
		} else {
			$(".scroll-top").fadeOut(650);  
		}       
	});
	$(".scroll-top").on("click", function() {
		$("html, body").animate({ scrollTop: 0 }, 650);
		return false; 
	});    
	/* Background Parallax Scrolling */
	/*------------------------*/
	if ($(window).width() > 1280) {
		$(".parallax").parallax({ speed: 0.60 });		
	}
	/* Header Sticky */
	/*------------------------*/
	$(window).on("load scroll", function() {
		var windowScroll = $(window).scrollTop();
		if(windowScroll > 1) {
			$("#masterHead").addClass("sticky");
		} else {
			$("#masterHead").removeClass("sticky");
		}
	});
	/* Bootstrap Scroll Spy*/
	/*------------------------*/
	$("body").scrollspy({		
		target: '#myNavbar',
		offset: 60
	});
	/* Header Navigation Scrolling*/
	/*------------------------*/
	$(".nav li a, .button a").on("click", function (e) {
		var anchor = $(this);
		$("html, body").stop().animate({
			scrollTop: $(anchor.attr("href")).offset().top - 60
			}, 1800);
		e.preventDefault();
	});
	/* Collapse Navbar in Mobile*/
	/*------------------------*/
	$(".nav li a").on('click', function() {
		$("html").removeClass("active");
	});
	/* Sliding Navigation in Mobile
	/* ------------------------------ */
	$(".navicon").on("click", function(){
		$("html").toggleClass("active");		
	});
	$(".menu-overlay, .close-wrap").on("click", function(){
		$("html").removeClass("active");		
	});
	/* Video Play Button */
	/*------------------------*/
	$(document).on("click", ".vjs-big-play-button", function() {		
		$(".promo-video").removeClass("videoPause");
	});
	$(".promo-video video").on('ended', function(){			
		$(".promo-video").addClass("videoPause");
	});
	/* Fun Facts (Counters)*/
	/*------------------------*/
	$(".text-counter").counterUp({ delay: 10, time: 2000});	
	/* Portfolio - Layout Isotope after each image loads */
	/*------------------------*/
	$(".grid").imagesLoaded().progress( function() {
		$(".grid").isotope("layout");
	});
	/*  Portfolio - Full Width */
	/*------------------------*/
	$(".grid").isotope({
		itemSelector: ".item"
	});
	/*  Portfolio - Filter Items on anchor click */
	/*------------------------*/
	$(".filters li").on("click", "a", function(e) {
		e.preventDefault();
		var filterValue = $(this).attr("data-filter");
		$(".grid").isotope({
			filter: filterValue
		});
	});
	/*  Portfolio - Toggle Active Class */
	/*------------------------*/
	$(".filters").each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "a", function() {
			$buttonGroup.find(".active").removeClass("active");
			$(this).addClass("active");
		});
	});
	/*  Portfolio Gallery Popup */
	/*------------------------*/
	$("a[data-rel^=lightcase]").lightcase({showSequenceInfo:false});
	
	/*  Google Map Tooltip */
	/*------------------------*/
	$("[data-toggle='tooltip']").tooltip({ html:true});
	$("[data-toggle='tooltip']").on("shown.bs.tooltip", function () {
		$(".tooltip").addClass("animated swing");
	});
	$(".hotspot-wrap .hotspot-item").each(function() {
		var dataTop = $(this).data("top");
		var dataLeft = $(this).data("left");
		$(this).css({"top": dataTop, "left": dataLeft });
	});
	/* Testimonials Slider */
    /*------------------------*/
	$(".testimonial-slider").slick({
		infinite: true,
		arrows: true,
		dots: false,
		autoplay: true		 	 
	});
    /* Copyright Year */
    /*------------------------*/
    var currentYear = (new Date).getFullYear();
    $("#copyright-year").text((new Date).getFullYear());
});

jQuery(window).on("load resize", function() {
    /* Preloader*/
    /*------------------------*/
    $(".preloader").fadeOut(450);		
});
