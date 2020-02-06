function greeting(name) {
    console.log(`Hello ${name}`)

    // Add a time delay of 5 seconds (5000m/s)
    setTimeout(function(){
        console.log("Today is Wednesday");
    }, 5000)

}

greeting("Danny");

// type 'window' in chrome console to see window object of the browser