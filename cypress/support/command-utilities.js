
//get browser width in string value
const get_browser_width = () => {
    if(window.innerWidth < 768){
        // Extra Small Device
        return "xs";
    } else if(window.innerWidth < 991){
        // Small Device
        return "sm"
    } else if(window.innerWidth < 1199){
        // Medium Device
        return "md"
    } else {
        // Large Device
        return "lg"
    }
};

//get random number in given interval
function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//set first letter of string to upper case
function cap_first_letter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export {get_browser_width, get_random_int, cap_first_letter };