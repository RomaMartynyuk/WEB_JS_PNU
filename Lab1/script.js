function triangle(value1 = 0, type1 = "", value2 = 0, type2 = ""){

    let types = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];

    if(typeof value1 != 'number' || typeof value2 != 'number'){
        return "error with value";
    }

    if(value1 <= 0 || value2 <= 0){
        return "error with value";
    }

    if(type1 === type2 && type1 != "leg"){
        return "error with incompatible types";
    }

    if(types.includes(type1) && types.includes(type2)){

        let a, b, c, alpha, beta;

        if(type1 === "leg" && type2 === "leg"){
            a = Math.min(value1, value2);
            b = Math.max(value1, value2);
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            beta = Math.atan(a / b) * (180 / Math.PI);
            alpha = 90 - beta;
        }
        else if(type1 === "leg" || type2 === "leg"){
            a = type1 === "leg" ? value1 : value2;
            if(type1 === "hypotenuse" || type2 === "hypotenuse"){
                c = type1 === "hypotenuse" ? value1 : value2;

                if(c < a){
                    console.log("The leg is greater than the hypotenuse!");
                    return "error";
                }

                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                beta = Math.asin(a / c) * (180 / Math.PI);
                alpha = 90 / beta;
            }
            else if(type1 === "opposite angle" || type2 === "opposite angle"){
                beta = type1 === "opposite angle" ? value1 : value2;
                c = a / Math.sin(beta * (Math.PI / 180));
                b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
                alpha = 90 - beta;
            }
            else if(type1 === "adjacent angle" || type2 === "adjacent angle"){
                alpha = type1 === "adjacent angle" ? value1 : value2;
                b = a * Math.tan(alpha * (Math.PI / 180));
                c = a / Math.cos(alpha * (Math.PI / 180));
                beta = 90 - alpha;
            }
        }
        else if((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")){
            c = type1 === "hypotenuse" ? value1 : value2;
            alpha = type1 === "angle" ? value1 : value2;
            a = c * Math.cos(alpha * (Math.PI / 180));
            b = c * Math.sin(alpha * (Math.PI / 180));
            beta = 90 - alpha;
        }

        console.log(`
            a = ${a}
            b = ${b}
            c = ${c}
            alpha = ${alpha}
            beta = ${beta}
        `);

        return "success";
    }
    return "error with types";
}