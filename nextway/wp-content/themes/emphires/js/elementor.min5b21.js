"use strict";var cspt_rearrange_stretched_col=function(model_id){if(jQuery('body').hasClass('elementor-editor-active')){jQuery('*[data-id="'+model_id+'"]').each(function(){jQuery('.cspt-stretched-div',this).remove();jQuery('.elementor-widget-wrap',this).removeAttr('style');setTimeout(function(){cspt_stretched_col()},50)})}}
var cspt_stretched_col=function(){jQuery('.elementor-section.elementor-top-section').each(function(){if(jQuery(this).hasClass('cspt-col-stretched-left')||jQuery(this).hasClass('cspt-col-stretched-right')||jQuery(this).hasClass('cspt-col-stretched-both')){jQuery(this).addClass('cspt-col-stretched-yes').removeClass('cspt-col-stretched-no')}else{jQuery(this).addClass('cspt-col-stretched-no').removeClass('cspt-col-stretched-yes')}});jQuery('.elementor-section.elementor-top-section').each(function(){var ThisSection=jQuery(this);var ThisColumn='';jQuery('.elementor-column.elementor-top-column',ThisSection).each(function(){ThisColumn=jQuery(this);jQuery('.cspt-stretched-div',ThisColumn).remove();ThisColumn.removeClass('cspt-col-stretched-yes cspt-col-stretched-left cspt-col-stretched-right cspt-col-stretched-content-yes')})});jQuery('.elementor-section.elementor-top-section').each(function(){jQuery('.elementor-column.elementor-top-column',jQuery(this)).each(function(){if(jQuery(this).children('.elementor-column-wrap').length>0){jQuery(this).children('.elementor-column-wrap').removeAttr('style')}else{jQuery(this).children('.elementor-widget-wrap').removeAttr('style')}})});jQuery('.elementor-section.elementor-top-section.cspt-col-stretched-yes').each(function(){var ThisSection=jQuery(this);var ThisColumn='';var ColWrapper='';var StretchedEle='';if(ThisSection.hasClass('cspt-col-stretched-left')||ThisSection.hasClass('cspt-col-stretched-both')){ThisColumn=jQuery('.elementor-column.elementor-top-column',ThisSection).first();if(jQuery('.cspt-stretched-div',ThisColumn).length==0){if(ThisColumn.children('.elementor-column-wrap').length>0){ColWrapper=ThisColumn.children('.elementor-column-wrap')}else{ColWrapper=ThisColumn.children('.elementor-widget-wrap')}
ColWrapper.prepend('<div class="cspt-stretched-div"></div>');StretchedEle=ColWrapper.children('.cspt-stretched-div');StretchedEle.addClass('cspt-stretched-left');ThisColumn.addClass('cspt-col-stretched-yes cspt-col-stretched-left');if(ThisSection.hasClass('cspt-left-col-stretched-content-yes')){ThisColumn.addClass('cspt-col-stretched-content-yes')}else{ThisColumn.removeClass('cspt-col-stretched-content-yes')}
ColWrapper.removeAttr('style');var bgImage=ColWrapper.css('background-image');if(bgImage!='none'&&bgImage!=''){StretchedEle.css('background-image',bgImage);ColWrapper.css('background-image','none')}
ColWrapper.css('border-top-left-radius','');ColWrapper.css('border-top-right-radius','');ColWrapper.css('border-bottom-left-radius','');ColWrapper.css('border-bottom-right-radius','');var radius_t_left=ColWrapper.css('border-top-left-radius');var radius_t_right=ColWrapper.css('border-top-right-radius');var radius_b_left=ColWrapper.css('border-bottom-left-radius');var radius_b_right=ColWrapper.css('border-bottom-right-radius');if(radius_t_left!='0'&&radius_t_left!=''){StretchedEle.css('border-top-left-radius',radius_t_left);ColWrapper.css('border-top-left-radius','0')}
if(radius_t_right!='0'&&radius_t_right!=''){StretchedEle.css('border-top-right-radius',radius_t_right);ColWrapper.css('border-top-right-radius','0')}
if(radius_b_left!='0'&&radius_b_left!=''){StretchedEle.css('border-bottom-left-radius',radius_b_left);ColWrapper.css('border-bottom-left-radius','0')}
if(radius_b_right!='0'&&radius_b_right!=''){StretchedEle.css('border-bottom-right-radius',radius_b_right);ColWrapper.css('border-bottom-right-radius','0')}
var bgColor=ColWrapper.css('background-color');if(bgColor&&bgColor!=''){if(bgColor.indexOf('rgba')!=-1){var bgColorArray=bgColor.split(',');var colors=[];jQuery(bgColorArray).each(function(x,y){y=y.replace('rgba','');y=y.replace('(','');y=y.replace(')','');y=y.trim();colors.push(y)});bgColor='rgb(';var loopx=1;var opacity='n'
jQuery.each(colors,function(index,value){if(loopx==1){bgColor+=value}else if(loopx==2||loopx==3){bgColor+=','+value}else if(loopx==4&&(value=='0'||value==0)){opacity='y'}
loopx=loopx+1});bgColor+=')';if(opacity=='y'){bgColor='transparent'}}
StretchedEle.css('background-color',bgColor);ColWrapper.css('background-color','transparent')}
var bgPosition=ColWrapper.css('background-position');if(bgPosition!=''){StretchedEle.css('background-position',bgPosition)}
var bgRepeat=ColWrapper.css('background-repeat');if(bgRepeat!=''){StretchedEle.css('background-repeat',bgRepeat)}
var bgSize=ColWrapper.css('background-size');if(bgSize!=''){StretchedEle.css('background-size',bgSize)}
cspt_stretched_col_calc()}}
if(ThisSection.hasClass('cspt-col-stretched-right')||ThisSection.hasClass('cspt-col-stretched-both')){ThisColumn=jQuery('.elementor-column.elementor-top-column',ThisSection).last();if(jQuery('.cspt-stretched-div',ThisColumn).length==0){if(ThisColumn.children('.elementor-column-wrap').length>0){ColWrapper=ThisColumn.children('.elementor-column-wrap')}else{ColWrapper=ThisColumn.children('.elementor-widget-wrap')}
ColWrapper.prepend('<div class="cspt-stretched-div"></div>');StretchedEle=ColWrapper.children('.cspt-stretched-div');StretchedEle.addClass('cspt-stretched-right');ThisColumn.addClass('cspt-col-stretched-yes cspt-col-stretched-right');if(ThisSection.hasClass('cspt-right-col-stretched-content-yes')){ThisColumn.addClass('cspt-col-stretched-content-yes')}else{ThisColumn.removeClass('cspt-col-stretched-content-yes')}
ColWrapper.removeAttr('style');var bgImage=ColWrapper.css('background-image');if(bgImage!='none'&&bgImage!=''){StretchedEle.css('background-image',bgImage);ColWrapper.css('background-image','none')}
ColWrapper.css('border-top-left-radius','');ColWrapper.css('border-top-right-radius','');ColWrapper.css('border-bottom-left-radius','');ColWrapper.css('border-bottom-right-radius','');var radius_t_left=ColWrapper.css('border-top-left-radius');var radius_t_right=ColWrapper.css('border-top-right-radius');var radius_b_left=ColWrapper.css('border-bottom-left-radius');var radius_b_right=ColWrapper.css('border-bottom-right-radius');if(radius_t_left!='0'&&radius_t_left!=''){StretchedEle.css('border-top-left-radius',radius_t_left);ColWrapper.css('border-top-left-radius','0')}
if(radius_t_right!='0'&&radius_t_right!=''){StretchedEle.css('border-top-right-radius',radius_t_right);ColWrapper.css('border-top-right-radius','0')}
if(radius_b_left!='0'&&radius_b_left!=''){StretchedEle.css('border-bottom-left-radius',radius_b_left);ColWrapper.css('border-bottom-left-radius','0')}
if(radius_b_right!='0'&&radius_b_right!=''){StretchedEle.css('border-bottom-right-radius',radius_b_right);ColWrapper.css('border-bottom-right-radius','0')}
var bgColor=ColWrapper.css('background-color');if(bgColor&&bgColor!=''){if(bgColor.indexOf('rgba')!=-1){var bgColorArray=bgColor.split(',');var colors=[];jQuery(bgColorArray).each(function(x,y){y=y.replace('rgba','');y=y.replace('(','');y=y.replace(')','');y=y.trim();colors.push(y)});bgColor='rgb(';var loopx=1;var opacity='n'
jQuery.each(colors,function(index,value){if(loopx==1){bgColor+=value}else if(loopx==2||loopx==3){bgColor+=','+value}else if(loopx==4&&(value=='0'||value==0)){opacity='y'}
loopx=loopx+1});bgColor+=')';if(opacity=='y'){bgColor='transparent'}}
StretchedEle.css('background-color',bgColor);ColWrapper.css('background-color','transparent')}
var bgPosition=ColWrapper.css('background-position');if(bgPosition!=''){StretchedEle.css('background-position',bgPosition)}
var bgRepeat=ColWrapper.css('background-repeat');if(bgRepeat!=''){StretchedEle.css('background-repeat',bgRepeat)}
var bgSize=ColWrapper.css('background-size');if(bgSize!=''){StretchedEle.css('background-size',bgSize)}
cspt_stretched_col_calc()}}})};var cspt_stretched_col_calc=function(){if(jQuery('.elementor-section.elementor-top-section > .elementor-container .elementor-column.elementor-top-column.cspt-col-stretched-yes').length>0){var window_width=jQuery(window).width();var document_width=jQuery(document).width();jQuery('.elementor-section.elementor-top-section > .elementor-container .elementor-column.elementor-top-column.cspt-col-stretched-yes').each(function(){if(jQuery(this).closest('.elementor-section.elementor-top-section').hasClass('cspt-col-stretched-both')&&(jQuery(this).hasClass('elementor-col-100')||jQuery(this).attr('data-col')=='100')){}else{var this_ele=jQuery(this);var curr_width=jQuery(this).closest('.elementor-container').width();var extra_width=((window_width-curr_width)/2);var parent_width='';if(this_ele.hasClass('cspt-skew-yes')){extra_width=extra_width+100}
var position='left';if(jQuery(this).hasClass('cspt-col-stretched-right')){position='right'}
parent_width=jQuery(this).width();if(parent_width=='100%'){jQuery(this).children('.elementor-widget-wrap').css('width','100%');jQuery(this).children('.elementor-column-wrap').css('width','100%')}else{jQuery(this).children('.elementor-widget-wrap').css('width','');jQuery(this).children('.elementor-column-wrap').css('width','')}
jQuery('.cspt-stretched-div',jQuery(this)).css('margin-'+position,'-'+extra_width+'px');if(jQuery(this).hasClass('cspt-col-stretched-content-yes')){jQuery('.cspt-stretched-div',jQuery(this)).css('margin-'+position,"");var stretched_width=jQuery('.cspt-stretched-div',jQuery(this)).width()+extra_width;if(jQuery(this).children('.elementor-column-wrap').length>0){jQuery(this).children('.elementor-column-wrap').css('margin-'+position,'-'+extra_width+'px');jQuery(this).children('.elementor-column-wrap').css('width',stretched_width+'px')}else{jQuery(this).children('.elementor-widget-wrap').css('margin-'+position,'-'+extra_width+'px');jQuery(this).children('.elementor-widget-wrap').css('width',stretched_width+'px')}}else{if(jQuery(this).children('.elementor-column-wrap').length>0){jQuery(this).children('.elementor-column-wrap').css('margin-'+position,'');jQuery(this).children('.elementor-column-wrap').css('width','')}else{jQuery(this).children('.elementor-widget-wrap').css('margin-'+position,'');jQuery(this).children('.elementor-widget-wrap').css('width','')}}}})}}
var cspt_bgimage_class=function(){jQuery('.elementor-section.elementor-top-section').each(function(){if(jQuery(this).css('background-image')!=''&&jQuery(this).css('background-image')!='none'){jQuery(this).addClass('cspt-bgimage-yes').removeClass('cspt-bgimage-no')}else{jQuery(this).addClass('cspt-bgimage-no').removeClass('cspt-bgimage-yes')}});jQuery('.elementor-column.elementor-top-column').each(function(){if(jQuery(this).children('.elementor-column-wrap').length>0){if(jQuery(this).children('.elementor-column-wrap').children('.cspt-stretched-div').length>0){if(jQuery(this).children('.elementor-column-wrap').children('.cspt-stretched-div').css('background-image')=='none'||jQuery(this).children('.elementor-column-wrap').children('.cspt-stretched-div').css('background-image')==''){jQuery(this).addClass('cspt-bgimage-no').removeClass('cspt-bgimage-yes')}else{jQuery(this).addClass('cspt-bgimage-yes').removeClass('cspt-bgimage-no')}}else{if(jQuery(this).children('.elementor-column-wrap').css('background-image')=='none'||jQuery(this).children('.elementor-column-wrap').css('background-image')==''){jQuery(this).addClass('cspt-bgimage-no').removeClass('cspt-bgimage-yes')}else{jQuery(this).addClass('cspt-bgimage-yes').removeClass('cspt-bgimage-no')}}}else{if(jQuery(this).children('.elementor-widget-wrap').children('.cspt-stretched-div').length>0){if(jQuery(this).children('.elementor-widget-wrap').children('.cspt-stretched-div').css('background-image')=='none'||jQuery(this).children('.elementor-widget-wrap').children('.cspt-stretched-div').css('background-image')==''){jQuery(this).addClass('cspt-bgimage-no').removeClass('cspt-bgimage-yes')}else{jQuery(this).addClass('cspt-bgimage-yes').removeClass('cspt-bgimage-no')}}else{if(jQuery(this).children('.elementor-widget-wrap').css('background-image')=='none'||jQuery(this).children('.elementor-widget-wrap').css('background-image')==''){jQuery(this).addClass('cspt-bgimage-no').removeClass('cspt-bgimage-yes')}else{jQuery(this).addClass('cspt-bgimage-yes').removeClass('cspt-bgimage-no')}}}})};var cspt_bgcolor_class=function(){jQuery('.elementor-section.elementor-top-section').each(function(){if(jQuery(this).css('background-color')!=''&&jQuery(this).css('background-color')!='transparent'){jQuery(this).addClass('cspt-bgcolor-yes')}});jQuery('.elementor-column.elementor-top-column').each(function(){if(jQuery(this).children('.cspt-stretched-div').length){if(jQuery(this).children('.cspt-stretched-div').css('background-color')!=''&&jQuery(this).children('.cspt-stretched-div').css('background-color')!='transparent'){jQuery(this).addClass('cspt-bgcolor-yes').removeClass('cspt-bgcolor-no')}else{jQuery(this).addClass('cspt-bgcolor-no').removeClass('cspt-bgcolor-yes')}}else{if(jQuery(this).children('.elementor-column-wrap').length>0){if(jQuery(this).children('.elementor-column-wrap').css('background-color')=='transparent'||jQuery(this).children('.elementor-column-wrap').css('background-color')==''){jQuery(this).addClass('cspt-bgcolor-no').removeClass('cspt-bgcolor-yes')}else{jQuery(this).addClass('cspt-bgcolor-yes').removeClass('cspt-bgcolor-no')}}else{if(jQuery(this).children('.elementor-widget-wrap').css('background-color')=='transparent'||jQuery(this).children('.elementor-widget-wrap').css('background-color')==''){jQuery(this).addClass('cspt-bgcolor-no').removeClass('cspt-bgcolor-yes')}else{jQuery(this).addClass('cspt-bgcolor-yes').removeClass('cspt-bgcolor-no')}}}})};jQuery(window).resize(function(){setTimeout(function(){cspt_stretched_col_calc()},100)});jQuery(document).ready(function(){cspt_stretched_col();cspt_stretched_col_calc();cspt_bgimage_class();cspt_bgcolor_class();setTimeout(function(){cspt_stretched_col_calc()},100)})