$(function() {
    // search icon
    let searchIcon = $('.searchIcon')
    let bar = $('.bar')
    let cancel = $('.cross')
    let button = $('.btn')
    let sideBar = $('.sidebar')

    //  Side Bar 

    button.click(function() {
        sideBar.toggleClass('active')
    })




    // Search Bar 
    searchIcon.click(function() {
        bar.fadeIn(500)
    })

    cancel.click(function() {
        bar.fadeOut(500)
    })

})