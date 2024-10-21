module.exports = function toReadable (number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



    if (number < 10){
        return one[number]; 
    }
    else if (number < 20){
        return teens[number - 10];
    }
    else if (number < 100){
        if (number % 10 === 0){
            return tens[Math.floor((number / 10) - 2)];
        }
        else{
            return tens[(Math.floor(number/10)-2)] + ' ' + one[number % 10];
        }
    }
    else if (number < 1000){
        if (number % 100 === 0)
            return one[Math.floor(number / 100)] + ' ' + 'hundred';
        else if (number % 100 === 10){
            return one[Math.floor(number / 100)] + ' hundred'+ ' ' + 'ten';
        }
        else if(number % 10 === 0){
            return one[Math.floor(number / 100)] + ' hundred ' + tens [Math.floor(((number / 10) % 10)-2)];
        }
        else if (number % 100 < 10){
            return one[Math.floor(number / 100)] + ' hundred'+ ' ' + one [number % 10];
        }
        else if (number % 100 < 20){
            return one[Math.floor(number / 100)] + ' hundred'+ ' ' + teens[Math.floor(number % 100 - 10)];
        }
        else{
            return one[Math.floor(number / 100)] + ' hundred ' + tens [Math.floor(((number / 10) % 10)-2)] + ' ' + one[number % 10];
        }
    }else{
        return 'Out of range'; 
    }
}
