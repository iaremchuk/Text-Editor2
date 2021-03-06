$(function () {
// text style,position and size
// Making text bold
$('.bold').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.main').toggleClass('boldText');
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Making text italic
$('.italic').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.main').toggleClass('italicText');
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Making text underline
$('.underline').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.main').toggleClass('underlineText');
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Making text strike-through
$('.strike-through').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.main').toggleClass('strike-throughText');
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Positioning text to the left
$('.align-left').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.main').addClass('align-leftText');
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Positioning text in the center
$('.align-center').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.main').toggleClass('align-centerText');
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Positioning text to the right
$('.align-right').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.main').toggleClass('align-rightText');
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Font-family options, fontFamilyBlock appears
$('.font-family').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.fontFamilyBlock').toggleClass('hidden');
    // Applying font-family Arial to the text
    $('.arial').click(function(){
        $('.main').css('font-family', 'Arial');
        $('.fontFamilyBlock').addClass('hidden');
    })
    // Applying font-family Georgia to the text
    $('.georgia').click(function(){
        $('.main').css('font-family', 'Georgia');
        $('.fontFamilyBlock').addClass('hidden');
    })
    // Applying font-family Impact to the text
    $('.impact').click(function(){
        $('.main').css('font-family', 'Impact');
        $('.fontFamilyBlock').addClass('hidden');
    })
    // Applying font-family Tahoma to the text
    $('.tahoma').click(function(){
        $('.main').css('font-family', 'Tahoma');
        $('.fontFamilyBlock').addClass('hidden');
    })
    // Applying font-family Times New Roman to the text
    $('.times').click(function(){
        $('.main').css('font-family', 'Times New Roman');
        $('.fontFamilyBlock').addClass('hidden');
    })
    // Applying font-family Verdana to the text
    $('.verdana').click(function(){
        $('.main').css('font-family', 'Verdana');
        $('.fontFamilyBlock').addClass('hidden');
    })
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Font-size options, fontSizeBlock appears
$('.font-size').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.fontSizeBlock').toggleClass('hidden');
    // Applying size 12px to the text
    $('.size12').click(function(){
        $('.main').css('font-size', '12px');
        $('.fontSizeBlock').addClass('hidden');
    })
    // Applying size 14px to the text
    $('.size14').click(function(){
        $('.main').css('font-size', '14px');
        $('.fontSizeBlock').addClass('hidden');
    })
    // Applying size 16px to the text
    $('.size16').click(function(){
        $('.main').css('font-size', '16px');
        $('.fontSizeBlock').addClass('hidden');
    })
    // Applying size 18px to the text
    $('.size18').click(function(){
        $('.main').css('font-size', '18px');
        $('.fontSizeBlock').addClass('hidden');
    })
    // Applying size 20px to the text
    $('.size20').click(function(){
        $('.main').css('font-size', '20px');
        $('.fontSizeBlock').addClass('hidden');
    })
    // Applying size 22px to the text
    $('.size22').click(function(){
        $('.main').css('font-size', '22px');
        $('.fontSizeBlock').addClass('hidden');
    })
    // Applying size 25px to the text
    $('.size25').click(function(){
        $('.main').css('font-size', '25px');
        $('.fontSizeBlock').addClass('hidden');
    })
    // Applying size 30px to the text
    $('.size30').click(function(){
        $('.main').css('font-size', '30px');
        $('.fontSizeBlock').addClass('hidden');
    })
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
//  Block with color options for the text appears
$('.palette').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.container').css('opacity', '0.5');
    $('.color').show();
    $('.color_close').mouseover(function(){
        $(this).css('cursor', 'pointer');
    // Hiding color block
    $('.color_close').click(function(){
        $('.color').hide();
        $('.container').css('opacity', '1');
    })
    })
    $('.lightseagreen').click(function(){
        $('.main').css('color', 'lightseagreen');
    })
    $('.teal').click(function(){
        $('.main').css('color', 'teal');
    })
    $('.spring').click(function(){
        $('.main').css('color', 'springgreen');
    })
    $('.green').click(function(){
        $('.main').css('color', 'green');
    })
    $('.lightblue').click(function(){
        $('.main').css('color', 'lightblue');
    })
    $('.blue').click(function(){
        $('.main').css('color', 'blue');
    })
    $('.purple').click(function(){
        $('.main').css('color', 'purple');
    })
    $('.rebeccapurple').click(function(){
        $('.main').css('color', 'rebeccapurple');
    })
    $('.steelblue').click(function(){
        $('.main').css('color', 'steelblue');
    })
    $('.midnightblue').click(function(){
        $('.main').css('color', 'midnightblue');
    })
    $('.yellow').click(function(){
        $('.main').css('color', 'yellow');
    })
    $('.orange').click(function(){
        $('.main').css('color', 'orange');
    })
    $('.peru').click(function(){
        $('.main').css('color', 'peru');
    })
    $('.orangered').click(function(){
        $('.main').css('color', 'orangered');
    })
    $('.tomato').click(function(){
        $('.main').css('color', 'tomato');
    })
    $('.red').click(function(){
        $('.main').css('color', 'red');
    })
    $('.white').click(function(){
        $('.main').css('color', 'white');
    })
    $('.lightgray').click(function(){
        $('.main').css('color', 'lightgray');
    })
    $('.lightslategrey').click(function(){
        $('.main').css('color', 'lightslategrey');
    })
    $('.gray').click(function(){
        $('.main').css('color', 'gray');
    })
    $('.black').click(function(){
        $('.main').css('color', 'black');
    })
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
//  Applying background color for an element 
function colorChange(){
    $('.background-lightseagreen').click(function(){
        $('.main').css('background', 'lightseagreen');
    })
    $('.background-teal').click(function(){
        $('.main').css('background', 'teal');
    })
    $('.background-spring').click(function(){
        $('.main').css('background', 'springgreen');
    })
    $('.background-green').click(function(){
        $('.main').css('background', 'green');
    })
    $('.background-lightblue').click(function(){
        $('.main').css('background', 'lightblue');
    })
    $('.background-blue').click(function(){
        $('.main').css('background', 'blue');
    })
    $('.background-purple').click(function(){
        $('.main').css('background', 'purple');
    })
    $('.background-rebeccapurple').click(function(){
        $('.main').css('background', 'rebeccapurple');
    })
    $('.background-steelblue').click(function(){
        $('.main').css('background', 'steelblue');
    })
    $('.background-midnightblue').click(function(){
        $('.main').css('background', 'midnightblue');
    })
    $('.background-yellow').click(function(){
        $('.main').css('background', 'yellow');
    })
    $('.background-orange').click(function(){
        $('.main').css('background', 'orange');
    })
    $('.background-peru').click(function(){
        $('.main').css('background', 'peru');
    })
    $('.background-orangered').click(function(){
        $('.main').css('background', 'orangered');
    })
    $('.background-tomato').click(function(){
        $('.main').css('background', 'tomato');
    })
    $('.background-red').click(function(){
        $('.main').css('background', 'red');
    })
    $('.background-white').click(function(){
        $('.main').css('background', 'white');
    })
    $('.background-lightgray').click(function(){
        $('.main').css('background', 'lightgray');
    })
    $('.background-lightslategrey').click(function(){
        $('.main').css('background', 'lightslategrey');
    })
    $('.background-gray').click(function(){
        $('.main').css('background', 'gray');
    })
    $('.background-black').click(function(){
        $('.main').css('background', 'black');
    })
}
//  Applying background image for an element 
function imageChange(){
    $('.background-image1').click(function(){
        $('.main').css('background', 'url(Images/image1.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image2').click(function(){
        $('.main').css('background', 'url(Images/image2.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image3').click(function(){
        $('.main').css('background', 'url(Images/image3.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image4').click(function(){
        $('.main').css('background', 'url(Images/image4.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image5').click(function(){
        $('.main').css('background', 'url(Images/image5.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image6').click(function(){
        $('.main').css('background', 'url(Images/image6.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image7').click(function(){
        $('.main').css('background', 'url(Images/image7.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image8').click(function(){
        $('.main').css('background', 'url(Images/image8.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
    $('.background-image9').click(function(){
        $('.main').css('background', 'url(Images/image9.jpg)');
        $('.main').css('background-repeat', 'no-repeat');
        $('.main').css('background-size', 'cover');
        $('.main').css('background-position', 'center');
    })
}
//  Block with  background color options for an element appears
$('.image').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.container').css('opacity', '0.5');
    $('.background').show();
    $('.background_color').css('display', 'flex');
    $('.colors').css('border-right', '1px solid lightgrey');
    $('.colors').css('border-bottom', 'none');
    $('.colors').css('border-top-right-radius', '5px');
    $('.colors').css('color', 'gray');
    colorChange();
    $('.background_close').mouseover(function(){
        $(this).css('cursor', 'pointer');
    })
    // Hiding background color options 
    $('.background_close').click(function(){
        $('.background').hide();
        $('.background_color').css('display', 'none');
        $('.background_image').css('display', 'none');
        $('.background_file').addClass('hidden');
        $('.container').css('opacity', '1');
    })
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
    // Adding cursor when mouse over colors, images and files blocks
    $('.colors').mouseover(function(){
        $(this).css('cursor', 'pointer');
    })
    $('.images').mouseover(function(){
        $(this).css('cursor', 'pointer');
    })
    $('.files').mouseover(function(){
        $(this).css('cursor', 'pointer');
    })
    // Panel, that has three options to choose for background : colors, images and files
    // Style of colors option when choosen
    $('.colors').click(function () {
        colorChange();
        $('.background_color').css('display', 'flex');
        $('.background_image').css('display', 'none');
        $('.background_file').addClass('hidden');
        $('.colors').css('border-right', '1px solid lightgrey');
        $('.colors').css('border-bottom', 'none');
        $('.colors').css('border-top-right-radius', '5px');
        $('.colors').css('color', 'blue');
        $('.images').css('border-right', 'none');
        $('.images').css('border-left', 'none');
        $('.images').css('border-bottom', '1px solid lightgrey');
        $('.images').css('border-top-right-radius', 'none');
        $('.images').css('border-top-left-radius', 'none');
        $('.images').css('color', 'gray');
        $('.files').css('color', 'gray');
        $('.files').css('border-right', 'none');
        $('.files').css('border-left', 'none');
        $('.files').css('border-bottom', '1px solid lightgrey');
        $('.files').css('border-top-right-radius', 'none');
        $('.files').css('border-top-left-radius', 'none');
    })
    // Style of images option when choosen
    $('.images').click(function () {
        $('.background_color').css('display', 'none');
        $('.background_image').css('display', 'flex');
        $('.background_file').addClass('hidden');
        $('.images').css('border-right', '1px solid lightgrey');
        $('.images').css('border-left', '1px solid lightgrey');
        $('.images').css('border-bottom', 'none');
        $('.images').css('border-top-right-radius', '5px');
        $('.images').css('border-top-left-radius', '5px');
        $('.images').css('color', 'blue');
        $('.colors').css('border-right', 'none');
        $('.colors').css('border-bottom', '1px solid lightgrey');
        $('.colors').css('border-top-right-radius', 'none');
        $('.colors').css('color', 'gray');
        $('.files').css('color', 'gray');
        $('.files').css('border-right', 'none');
        $('.files').css('border-left', 'none');
        $('.files').css('border-bottom', '1px solid lightgrey');
        $('.files').css('border-top-right-radius', 'none');
        $('.files').css('border-top-left-radius', 'none');
        imageChange();
    })
    // Style of files option when choosen
    $('.files').click(function () {
        $('.background_color').css('display', 'none');
        $('.background_image').css('display', 'none');
        $('.background_file').removeClass('hidden');
        $('.upload-btn-wrapper').click(function(){
        $('.btn').css('box-shadow', '0 0 2px 2px lightblue');
        $('.upload-btn-wrapper').mouseout(function(){
            $('.btn').css('box-shadow', 'none');
        })
        })
        $('.images').css('border-right', 'none');
        $('.images').css('border-left', 'none');
        $('.images').css('border-bottom', '1px solid lightgrey');
        $('.images').css('border-top-right-radius', 'none');
        $('.images').css('border-top-left-radius', 'none');
        $('.images').css('color', 'gray');
        $('.colors').css('border-right', 'none');
        $('.colors').css('border-bottom', '1px solid lightgrey');
        $('.colors').css('border-top-right-radius', 'none');
        $('.colors').css('color', 'gray');
        $('.files').css('color', 'blue');
        $('.files').css('border-right', '1px solid lightgrey');
        $('.files').css('border-left', '1px solid lightgrey');
        $('.files').css('border-bottom', 'none');
        $('.files').css('border-top-right-radius', '5px');
        $('.files').css('border-top-left-radius', '5px');
        imageChange();
    })
    $('.inp').change(function upload(){
        let url = URL.createObjectURL(event.target.files[0]);
        $('.main').css('background', `url(${url})`);
    })
// Sign in block appears
$('.padlock').click(function(){
    $(this).css('box-shadow', '0 0 3px 3px lightgray');
    $('.container').css('opacity', '0.5');
    $('.signIn').show();
    $(".form").trigger("reset");
    $('.login').css('border', '1px solid lightgray');
    $('.password').css('border', '1px solid lightgray');
    $('.sign_btn').css('margin-top', '15px');
    $('.input-wrong').hide();
    $('.input-empty').hide();
    $(this).mouseout(function(){
        $(this).css('box-shadow', 'none');
    })
})
// Sign in form style and validation  using regular expression
    $('.sign_btn').click(function(){
        $('.sign_btn').css('box-shadow', '0 0 3px 3px lightgray');
        let regExpLogin = /^admin$/.test($('.login').val());
        let regExpPassword = /^\w{4,8}$/.test($('.password').val());
        if(regExpLogin && regExpPassword){
            $('.signIn').hide();
            $('.container').css('opacity', '1');
            $('.sign').css('background-color', 'white');
            $('.sign').mouseover(function(){
            $('.sign').css('background-color', 'lightgray');
            })
            $('.sign').mouseout(function(){
                $('.sign').css('background-color', 'white');
                $('.sign').css('box-shadow', 'none');
                })
            $('.sign').click(function(){
                $('.sign').css('box-shadow', '0 0 3px 3px lightgray');
                $('.container2').show();
                $('.container').hide();
                $('.area').text($('.main').html());
            })
            $('.save').click(function(){
                $('.save').css('box-shadow', '0 0 3px 3px lightgray');
                $('.container2').hide();
                $('.container').show();
                $('.main').html($('.area').val());
            })
            $('.save').mouseout(function(){
                $('.save').css('box-shadow', 'none');
        })
        
        // Create table block appears
            $('.grid').click(function(){
                $('.grid').css('box-shadow', '0 0 3px 3px lightgray');
                $('.create-table').show();
                $('.container2').css('opacity', '0.3');
            })
            // Hiding create table block and form resetting
            $('.create-table_close').click(function(){
                $('.create-table').hide();
                $('.container2').css('opacity', '1');
                $(".form1").trigger("reset");
                $(".form2").trigger("reset");
                $('.tableCreate').css('margin-top', '15px');
                $('.tableReset').css('margin-top', '15px');
                $('.table-invalid').hide();
                $('.tdWidth').css('border', '1px solid lightgray');
                $('.tdCount').css('border', '1px solid lightgray');
                $('.borderWidth').css('border', '1px solid lightgray');
                $('.tdHeight').css('border', '1px solid lightgray');
                $('.tdBorderStyle').css('border', '1px solid lightgray');
                $('.tdBorderColor').css('border', '1px solid lightgray');
                $('.trCount').css('border', '1px solid lightgray');
                $('.tdBorderStyle').val('');
                $('.tdBorderColor').val('');
            })
            // Create table forms style and validation  using regular expression
            $('.tableCreate').click(function(){
                let regExpTrCount = /^\d{1,4}$/.test($('.trCount').val());
                let regExpTdCount = /^\d{1,4}$/.test($('.tdCount').val());
                let regExpTdWidth = /^\d{1,4}$/.test($('.tdWidth').val());
                let regExpTdHeight = /^\d{1,4}$/.test($('.tdHeight').val());
                let regExpTdBorder = /^\d{1,4}$/.test($('.borderWidth').val());
                let regExpBorderColor = /^\w{1,7}$/.test($('.tdBorderStyle').val());
                let regExpBorderStyle = /^\w{1,7}$/.test($('.tdBorderColor').val());
                function chooseBorderStyle() {
                    let result = $('.tdBorderStyle').val();
                    return result;
                }
                function chooseBorderColor() {
                    let result = $('.tdBorderColor').val();
                    return result;
                }
                if(regExpTrCount && regExpTdCount && regExpTdWidth && regExpTdHeight && regExpTdBorder && regExpBorderColor && regExpBorderStyle){
                    let widthTd = $('.tdWidth').val();
                    let heightTd = $('.tdHeight').val();
                    let widthBorder = $('.borderWidth').val();
                    let borderStyle = chooseBorderStyle();
                    let borderColor = chooseBorderColor();
                    let styleTd = `width: ${widthTd}px; height: ${heightTd}px; border: ${widthBorder}px ${borderStyle} ${borderColor}`;
                    let curValue = $('.area').val();
                    let newValue = curValue + '<table>';
                    for(let i = 1; i<$('.trCount').val(); i++ ){
                         newValue += '<tr>';
                        for(let j =1; j<$('.tdCount').val(); j++){
                            newValue += `<td style="${styleTd}">TD</td>`;
                        }
                        newValue += '</tr>';
                    }
                    newValue += '</table>';
                    $('.area').val(newValue);
                    $('.create-table').hide();
                    $(".form1").trigger("reset");
                    $(".form2").trigger("reset");
                    $('.container2').css('opacity', '1');
                    $('.tableCreate').css('margin-top', '15px');
                    $('.tableReset').css('margin-top', '15px');
                    $('.table-invalid').hide();
                }
                else{
                    $('.tableCreate').css('margin-top', '30px');
                    $('.tableReset').css('margin-top', '30px');
                    $('.table-invalid').show();
                    $('.tdWidth').css('border', '1px solid red');
                    $('.tdCount').css('border', '1px solid red');
                    $('.borderWidth').css('border', '1px solid red');
                    $('.tdHeight').css('border', '1px solid red');
                    $('.tdBorderStyle').css('border', '1px solid red');
                    $('.tdBorderColor').css('border', '1px solid red');
                    $('.trCount').css('border', '1px solid red');
                    $(".form1").trigger("reset");
                    $(".form2").trigger("reset");
                }
                // Resetting forms in create table block
                $('.tableReset').click(function(){
                    $(".form1").trigger("reset");
                    $(".form2").trigger("reset");
                    $('.tableCreate').css('margin-top', '15px');
                    $('.table-invalid').hide();
                    $('.tableReset').css('margin-top', '15px');
                    $('.tdWidth').css('border', '1px solid lightgray');
                    $('.tdCount').css('border', '1px solid lightgray');
                    $('.borderWidth').css('border', '1px solid lightgray');
                    $('.tdHeight').css('border', '1px solid lightgray');
                    $('.tdBorderStyle').css('border', '1px solid lightgray');
                    $('.tdBorderColor').css('border', '1px solid lightgray');
                    $('.trCount').css('border', '1px solid lightgray');
                    $('.tdBorderStyle').val('');
                    $('.tdBorderColor').val('');
                })
                })
            $('.create-table_close').mouseover(function(){
                $('.create-table_close').css('cursor', 'pointer');
            })
            $('.grid').mouseout(function(){
                $('.grid').css('box-shadow', 'none');
            })
            // Create ol block appears
            $('.list-ol').click(function(){
                $('.list-ol').css('box-shadow', '0 0 3px 3px lightgray');
                $('.create-ol').show();
                $('.container2').css('opacity', '0.3');
            })
            $('.list-ol').mouseout(function(){
                $('.list-ol').css('box-shadow', 'none');
            })
            // hiding create ol block
            $('.create-ol_close').click(function(){
                $('.create-ol').hide();
                $('.container2').css('opacity', '1');
                $(".form3").trigger("reset");
                $('.createOl').css('margin-top', '30px');
                $('.olReset').css('margin-top', '30px');
                $('.ol-invalid').hide();
                $('.countOlLi').css('border', '1px solid lightgray');
                $('.typeMarkOl').css('border', '1px solid lightgray');
                $('.typeMarkOl').val('');
            })
            $('.create-ol_close').mouseover(function(){
                $('.create-ol_close').css('cursor', 'pointer');
            })
            // Creating ol and ol block forms validation  using regular expression
            $('.createOl').click(function(){
                let regExpCountOlLi = /^\d{1,7}$/.test($('.countOlLi').val());
                let regExpTypeMarkOl = /[-]+/.test($('.typeMarkOl').val());
                function chooseOlMarkType() {
                    let result = $('.typeMarkOl').val();
                    return result;
                }
                if(regExpCountOlLi && regExpTypeMarkOl){
                    let typeMarkOl = chooseOlMarkType();
                    let styleOlLi = `list-style-type: ${typeMarkOl}`;
                    let curValue = $('.area').val();
                    let newValue = curValue + `<ol style="${styleOlLi}">`;
                    for(let i = 1; i<$('.countOlLi').val(); i++ ){
                         newValue += `<li>item${i}</li>`;
                    }
                    newValue += '</ol>';
                    $('.area').val(newValue);
                    $('.create-ol').hide();
                    $(".form3").trigger("reset");
                    $('.container2').css('opacity', '1');
                    $('.createOl').css('margin-top', '30px');
                    $('.olReset').css('margin-top', '30px');
                    $('.ol-invalid').hide();
                }
                else{
                    $('.olReset').css('margin-top', '40px');
                    $('.createOl').css('margin-top', '40px');
                    $('.ol-invalid').show();
                    $('.countOlLi').css('border', '1px solid red');
                    $('.typeMarkOl').css('border', '1px solid red');
                    $(".form3").trigger("reset");
                }
                // Resetting forms in ol block
                $('.olReset').click(function(){
                    $(".form3").trigger("reset");
                    $('.ol-invalid').hide();
                    $('.createOl').css('margin-top', '30px');
                    $('.olReset').css('margin-top', '30px');
                    $('.countOlLi').css('border', '1px solid lightgray');
                    $('.typeMarkOl').css('border', '1px solid lightgray');
                    $('.typeMarkOl').val('');
                })
            })
            // Create ul block appears
            $('.list-ul').click(function(){
                $('.list-ul').css('box-shadow', '0 0 3px 3px lightgray');
                $('.create-ul').show();
                $('.container2').css('opacity', '0.3');
            })
            $('.list-ul').mouseout(function(){
                $('.list-ul').css('box-shadow', 'none');
            })
            // Hiding ul block
            $('.create-ul_close').click(function(){
                $('.create-ul').hide();
                $('.container2').css('opacity', '1');
                $(".form4").trigger("reset");
                $('.createUl').css('margin-top', '30px');
                $('.ulReset').css('margin-top', '30px');
                $('.ul-invalid').hide();
                $('.countUlLi').css('border', '1px solid lightgray');
                $('.typeMarkUl').css('border', '1px solid lightgray');
                $('.typeMarkUl').val('');
            })
            $('.create-ul_close').mouseover(function(){
                $('.create-ul_close').css('cursor', 'pointer');
            })
            // Creating ul and ul block forms validation  using regular expression
            $('.createUl').click(function(){
                let regExpCountUlLi = /^\d{1,7}$/.test($('.countUlLi').val());
                let regExpTypeMarkUl = /^\w{1,7}$/.test($('.typeMarkUl').val());
                function chooseUlMarkType() {
                    let result = $('.typeMarkUl').val();
                    return result;
                }
                if(regExpCountUlLi && regExpTypeMarkUl){
                    let typeMarkUl = chooseUlMarkType();
                    let styleUlLi = `list-style-type: ${typeMarkUl}`;
                    let curValue = $('.area').val();
                    let newValue = curValue + `<ul style="${styleUlLi}">`;
                    for(let i = 1; i<$('.countUlLi').val(); i++ ){
                         newValue += `<li>item${i}</li>`;
                    }
                    newValue += '</ul>';
                    $('.area').val(newValue);
                    $('.create-ul').hide();
                    $(".form4").trigger("reset");
                    $('.container2').css('opacity', '1');
                    $('.createUl').css('margin-top', '30px');
                    $('.ulReset').css('margin-top', '30px');
                    $('.ul-invalid').hide();
                }
                else{
                    $('.ulReset').css('margin-top', '40px');
                    $('.createUl').css('margin-top', '40px');
                    $('.ul-invalid').show();
                    $('.countUlLi').css('border', '1px solid red');
                    $('.typeMarkUl').css('border', '1px solid red');
                    $(".form4").trigger("reset");
                }
                // Resetting forms in ul block
                $('.ulReset').click(function(){
                    $(".form4").trigger("reset");
                    $('.ul-invalid').hide();
                    $('.createUl').css('margin-top', '30px');
                    $('.ulReset').css('margin-top', '30px');
                    $('.countUlLi').css('border', '1px solid lightgray');
                    $('.typeMarkUl').css('border', '1px solid lightgray');
                    $('.typeMarkUl').val('');
                })
            })
            // Sign out block appears
            $('.padlock').click(function(){
                $('.signOutContainer').show();
                $('.signIn').hide();
                $('.padlock').css('box-shadow', '0 0 3px 3px lightgray');
                $('.container').css('opacity', '0.5');
            })
            $('.padlock').mouseout(function(){
                $('.padlock').css('box-shadow', 'none');
            })
            $('.cancel').click(function(){
                $('.signIn').hide();
                $('.signOutContainer').hide();
                $('.container').css('opacity', '1');
            })
            $('.signOut').click(function(){
                $('.signIn').hide();
                $('.signOutContainer').hide();
                $('.container').css('opacity', '1');
                $('.sign').css('background-color', 'lightgray');
                $('.sign').click(function(){
                    $('.sign').css('background-color', 'lightgray');
                    $('.container2').hide();
                    $('.container').show();
                    $('.sign').css('box-shadow', 'none');
                })
            })
        }
        else if ($('.login').val() == '' | $('.password').val() == ''){
            $('.login').css('border', '1px solid red');
            $('.password').css('border', '1px solid red');
            $('.sign_btn').css('margin-top', '25px');
            $('.input-empty').show();
        }
        else{
            $('.login').css('border', '1px solid red');
            $('.password').css('border', '1px solid red');
            $('.sign_btn').css('margin-top', '25px');
            $('.input-wrong').show();
            $('.input-empty').hide();
        }
        $(".login").click(function(){
            $(".form").trigger("reset");
        });

        $('.sign_btn').mouseout(function(){
            $('.sign_btn').css('box-shadow', 'none');
        }) 
})
    
})