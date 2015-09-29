var button;
//var text_box; ------------- Never called
//var ul;  ------------------ Never called
//var html_body; ------------ Never called
var br;
var input;
//var input_value; ------------ Never called
var list_elements;
var list_element;
var current_list_element;
var this_list_element;
var add_list_element;
var update_list_elements;
var ol;
//var rename; ----------------Never called
var generate_random_color;
//var click_enter; ----------No such variable
//var timed_background_change = setInterval(back_change, 1000);
var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];



var lower_case_list = list_of_colors.map(function(value) {// new list with lower case only
    return value.toLowerCase();
});

function click_enter(){ // simulates a click on button
          	document.getElementById('input').addEventListener('keydown', function(){
                 if(event.keyCode === 13) {
                         document.getElementById('button_left').click();
                	}
         	});
    }

function random_color(){ // generates a slot from array
            return generate_random_color = list_of_colors[
                Math.floor(
                        Math.random()*list_of_colors.length
                    )
            ];

}
function add_list_element(){ // adds an li to ol
        current_list_element = document.createElement('li');
        ol.appendChild(current_list_element);
}

function update_list_elements(){ // updates li list
      //  list_elements = ol.childNodes; -- change to children
    list_elements = ol.children;
    }

function attach_element(element_name){ // adds elements to the page
    document.getElementById('content_container').appendChild(document.createElement(element_name) );
}
function button_code() {
    add_list_element();
    update_list_elements();
    this_list_element = list_elements[(list_elements.length - 1)];
    if (lower_case_list.indexOf(input.value.toLowerCase()) > -1) {
        this_list_element.textContent = list_of_colors[lower_case_list.indexOf(input.value.toLowerCase())];

    } else {
        this_list_element.textContent = random_color();
    }
    //input.textContent = random_color();  Never called variable;
    this_list_element.style.backgroundColor = this_list_element.textContent;
    // this_list_element.id = this_list_element.textContent; -------- li doesnt need id can cause multiple id
    this_list_element.addEventListener('dblclick', function () {
        this.remove();
    })
}

function back_change() {

                    ol.style.backgroundColor = random_color();
            }


function delete_color(){
    update_list_elements();
    if (Number(input.value) >-1 ){
        ol.children[Number(input.value)-1].remove()
    }
    for (var i=0;i<list_elements.length;i++){
        if (list_elements[i].textContent.toLowerCase() == input.value.toLowerCase()){
            list_elements[i].remove();
        }
    }

}
document.addEventListener('DOMContentLoaded', function(){
    attach_element('button');
    button = document.getElementsByTagName('button');
    button = button[0];
    button.textContent = 'Click to Add a Color';
    button.id = 'button_left';
    attach_element('button');
    button = document.getElementsByTagName('button');
    button = button[1];
    button.textContent = 'Delete Color';
    button.id = 'button_delete';
    document.getElementById('button_left').addEventListener('click',function(){
        button_code();

    });
    document.getElementById('button_delete').addEventListener('click',function(){
        delete_color()
    });
    attach_element('br');
    //br = document.getElementsByTagName('br'); --- removed does not need to be id'd
    //br = br[0];
    //br.class = 'clear';
    attach_element('input');
    input = document.getElementsByTagName('input');
    input = input[0];
    input.id = 'input';
    //br = document.getElementsByTagName('br'); ---- does not need to be referenced;
    //br = br[0];
    //br.class = 'clear';
    attach_element('ol');
    ol = document.getElementsByTagName('ol');
    ol = ol[0];
    //ol.id = 'list'; ------------- id is never referenced
    ol.style.backgroundColor = random_color();
});
