var widg={};$(document).ready(function(){widg.validate={regex:{number:/^[0-9]+$/,floating:/^[0-9]+([\.\,][0-9]+)?$/},formEvents:function(pForm){pForm.on("blur","[type=text].required, [type=radio].required, select.required",function(){var jField=$(this);if(jField.is("[type=radio]"))return void jField.closest("form").find("[name="+jField.prop("name")+"]").each(function(){var jRadio=$(this);widg.validate.checkField(jRadio)});widg.validate.checkField(jField)}),pForm.on("keyup","[type=text].required",function(){var jField=$(this);widg.validate.checkField(jField,!1,!0)}),pForm.on("change","[type=radio].required",function(){var jField=$(this);jField.closest("form").find("[name="+jField.prop("name")+"]").each(function(){widg.validate.checkField($(this))})}),pForm.on("change keyup","select.required",function(){widg.validate.checkField($(this))})},checkField:function(pField,pNoCheckForm,pNoAddTested,pNoLinked){!pNoLinked&&pField.hasClass("linked")&&pField.siblings(".linked").each(function(){var jField=$(this);jField.hasClass("is-tested")&&widg.validate.checkField(jField,pNoCheckForm,pNoAddTested,!0)});var sError=widg.validate.getFieldError(pField);pNoAddTested||pField.addClass("is-tested"),widg.validate.clearField(pField),sError?pField.hasClass("is-tested")?widg.validate.setFieldError(pField,sError):widg.validate.clearField(pField):widg.validate.setFieldValid(pField),pNoCheckForm||widg.validate.checkForm(pField.closest("form"))},checkAllFields:function(pForm){var jFields=pForm.find("[type=text].required, [type=radio].required, select.required"),bNoCheckForm=!0;jFields.each(function(i){var jField=$(this);i===jFields.length-1&&(bNoCheckForm=!1),widg.validate.checkField(jField,bNoCheckForm)})},setFieldError:function(pField,pError){if(widg.validate.clearField(pField),pField.addClass("error-field"),"no_error_message"!==pError){$('<span class="error-msg" data-rel-field="'+pField.attr("id")+'">'+pError+"</span>").appendTo(pField.parent());if(jAllSpanError=pField.siblings(".error-msg"),jAllSpanError.length>1){var aMessages=[];jAllSpanError.each(function(){var jItem=$(this).show();-1==$.inArray(jItem.text(),aMessages)?aMessages.push(jItem.text()):jItem.hide()})}}},setFieldValid:function(pField){widg.validate.clearField(pField),pField.addClass("valid-field")},clearField:function(pField){pField.removeClass("error-field valid-field").siblings(".error-msg[data-rel-field="+pField.prop("id")+"]").remove()},getFieldError:function(pField){var sValue=pField.val();if(""!=sValue&&parseFloat(pField.val().replace(",",".")),pField.hasClass("required")&&(pField.is("[type=text], select")&&""===sValue||pField.is("[type=radio]")&&!$("[type=radio][name="+pField.prop("name")+"]:checked").length))return pField.data("error-required")||pField.data("error-empty")||"no_error_message";if(pField.hasClass("number")&&!widg.validate.regex.number.test(sValue))return pField.data("error-number")||"no_error_message";if(pField.hasClass("float")&&!widg.validate.regex.floating.test(sValue))return pField.data("error-float")||"no_error_message";if(pField.hasClass("minlength")&&sValue.length<pField.data("value-minlength"))return pField.data("error-minlength")||"no_error_message";if(pField.hasClass("maxlength")&&sValue.length>pField.data("value-maxlength"))return pField.data("error-maxlength")||"no_error_message";if(pField.hasClass("minimum")&&sValue<pField.data("value-minimum"))return pField.data("error-minimum")||"no_error_message";if(pField.hasClass("maximum")&&sValue>pField.data("value-maximum"))return pField.data("error-maximum")||"no_error_message";if(pField.hasClass("linked")&&0==sValue){var bHasError=!0;if(pField.siblings(".linked").each(function(){0!==parseInt($(this).val())&&(bHasError=!1)}),bHasError)return pField.data("error-linked")||"no_error_message"}return!1},checkForm:function(pForm){var jBtnsSubmit=pForm.find("[type=submit]").addClass("disabled");return pForm.removeClass("error-form valid-form"),pForm.find(".error-field").length?void pForm.addClass("error-form"):pForm.find(".required").length==pForm.find(".valid-field").length?(pForm.addClass("valid-form"),void jBtnsSubmit.removeClass("disabled")):void 0},submitForm:function(pForm){widg.validate.checkAllFields(pForm)},btSubmitForm:function(pForm){pForm.on("click",".js-widget-submit",function(e){e.preventDefault(),widg.validate.submitForm($(this).closest("form"))})},initForm:function(pForm){widg.validate.formEvents(pForm),widg.validate.btSubmitForm(pForm)}},widg.select=function(){$(".js-widget").on("change keyup","select",function(){var jSelect=$(this);""==jSelect.val()?jSelect.addClass("empty"):jSelect.removeClass("empty")})},widg.showResult=function(pWidget){pWidget.addClass("show-result")},widg.hideResult=function(pWidget){pWidget.removeClass("show-result")},widg.estimationTemps=function(pVma,pDistance){var equivalence={3000:{max:["00","07","21"],84:["00","07","27"],83:["00","07","34"],82:["00","07","41"],81:["00","07","47"],80:["00","07","54"],79:["00","08","02"],78:["00","08","09"],77:["00","08","16"],76:["00","08","24"],75:["00","08","32"],74:["00","08","40"],73:["00","08","49"],72:["00","08","57"],71:["00","09","06"],70:["00","09","15"],69:["00","09","25"],68:["00","09","34"],67:["00","09","44"],66:["00","09","54"],65:["00","10","05"],64:["00","10","15"],63:["00","10","26"],62:["00","10","38"],61:["00","10","50"],60:["00","11","02"],59:["00","11","15"],58:["00","11","28"],57:["00","11","41"],56:["00","11","55"],55:["00","12","10"],54:["00","12","24"],53:["00","12","40"],52:["00","12","56"],51:["00","13","13"],50:["00","13","30"],49:["00","13","48"],48:["00","14","06"],47:["00","14","26"],46:["00","14","46"],45:["00","15","07"],44:["00","15","29"],43:["00","15","51"],42:["00","16","15"],41:["00","16","40"],40:["00","17","06"],39:["00","17","33"],38:["00","18","01"],37:["00","18","31"],36:["00","19","03"],35:["00","19","38"],34:["00","20","16"],33:["00","21","00"],32:["00","21","51"],31:["00","22","46"],min:["00","23","46"]},5000:{max:["00","12","39"],84:["00","12","50"],83:["00","13","02"],82:["00","13","13"],81:["00","13","25"],80:["00","13","38"],79:["00","13","50"],78:["00","14","03"],77:["00","14","17"],76:["00","14","30"],75:["00","14","44"],74:["00","14","59"],73:["00","15","13"],72:["00","15","29"],71:["00","15","44"],70:["00","16","01"],69:["00","16","17"],68:["00","16","34"],67:["00","16","52"],66:["00","17","10"],65:["00","17","29"],64:["00","17","48"],63:["00","18","08"],62:["00","18","29"],61:["00","18","50"],60:["00","19","12"],59:["00","19","35"],58:["00","19","58"],57:["00","20","22"],56:["00","20","48"],55:["00","21","14"],54:["00","21","41"],53:["00","22","09"],52:["00","22","38"],51:["00","23","09"],50:["00","23","40"],49:["24","13","00"],48:["24","47","00"],47:["25","22","00"],46:["25","59","00"],45:["26","38","00"],44:["27","18","00"],43:["28","01","00"],42:["28","45","00"],41:["29","31","00"],40:["30","19","00"],39:["31","10","00"],38:["32","03","00"],37:["33","00","00"],36:["33","59","00"],35:["00","35","02"],34:["00","36","09"],33:["00","37","20"],32:["00","38","33"],31:["00","39","50"],min:["00","41","02"]},10000:{max:["00","26","27"],84:["00","26","51"],83:["00","27","16"],82:["00","27","41"],81:["00","28","07"],80:["00","28","34"],79:["00","29","01"],78:["00","29","30"],77:["00","29","59"],76:["00","30","29"],75:["00","30","59"],74:["00","31","31"],73:["00","32","03"],72:["00","32","37"],71:["00","33","11"],70:["00","33","47"],69:["00","34","23"],68:["00","35","01"],67:["00","35","40"],66:["00","36","20"],65:["00","37","02"],64:["00","37","44"],63:["00","38","29"],62:["00","39","15"],61:["00","40","02"],60:["00","40","51"],59:["00","41","42"],58:["00","42","35"],57:["00","43","30"],56:["00","44","26"],55:["00","45","25"],54:["00","46","27"],53:["00","47","31"],52:["00","48","36"],51:["00","49","46"],50:["00","50","58"],49:["00","52","13"],48:["00","53","32"],47:["00","54","53"],46:["00","56","19"],45:["00","57","49"],44:["00","59","23"],43:["01","01","01"],42:["01","02","45"],41:["01","04","34"],40:["01","06","28"],39:["01","08","29"],38:["01","10","37"],37:["01","12","51"],36:["01","15","14"],35:["01","17","37"],34:["01","20","06"],33:["01","22","42"],32:["01","25","24"],31:["01","27","50"],min:["01","31","00"]},15000:{max:["00","40","46"],84:["00","41","23"],83:["00","42","02"],82:["00","42","43"],81:["00","43","24"],80:["00","44","06"],79:["00","44","49"],78:["00","45","34"],77:["00","46","20"],76:["00","47","07"],75:["00","47","55"],74:["00","48","45"],73:["00","49","37"],72:["00","50","30"],71:["00","51","25"],70:["00","52","21"],69:["00","53","19"],68:["00","54","19"],67:["00","55","21"],66:["00","56","25"],65:["00","57","32"],64:["00","58","41"],63:["00","59","52"],62:["01","01","05"],61:["01","02","21"],60:["01","03","40"],59:["01","05","02"],58:["01","06","27"],57:["01","07","55"],56:["01","09","27"],55:["01","11","02"],54:["01","12","42"],53:["01","14","25"],52:["01","16","13"],51:["01","18","05"],50:["01","20","03"],49:["01","22","06"],48:["01","24","14"],47:["01","26","29"],46:["01","28","50"],45:["01","31","18"],44:["01","33","54"],43:["01","36","37"],42:["01","39","29"],41:["01","42","30"],40:["01","45","42"],39:["01","49","05"],38:["01","52","39"],37:["01","56","26"],36:["02","00","28"],35:["02","04","35"],34:["02","08","52"],33:["02","13","20"],32:["02","17","59"],31:["02","22","48"],min:["02","28","00"]},20000:{max:["00","55","25"],84:["00","56","18"],83:["00","57","11"],82:["00","58","07"],81:["00","59","03"],80:["01","00","02"],79:["01","01","02"],78:["01","02","03"],77:["01","03","07"],76:["01","04","12"],75:["01","05","20"],74:["01","06","29"],73:["01","07","41"],72:["01","08","54"],71:["01","10","11"],70:["01","11","29"],69:["01","12","50"],68:["01","14","14"],67:["01","15","41"],66:["01","17","10"],65:["01","18","43"],64:["01","20","19"],63:["01","21","58"],62:["01","23","41"],61:["01","25","28"],60:["01","27","18"],59:["01","29","13"],58:["01","31","13"],57:["01","33","17"],56:["01","35","26"],55:["01","37","41"],54:["01","40","01"],53:["01","42","28"],52:["01","45","00"],51:["01","47","40"],50:["01","50","27"],49:["01","53","22"],48:["01","56","25"],47:["01","59","37"],46:["02","02","58"],45:["02","06","30"],44:["02","10","13"],43:["02","14","08"],42:["02","18","16"],41:["02","22","38"],40:["02","27","15"],39:["02","32","10"],38:["02","37","21"],37:["02","42","54"],36:["02","48","47"],35:["02","53","23"],34:["03","59","00"],33:["03","04","33"],32:["03","09","59"],31:["03","16","02"],min:["03","25","03"]},21000:{max:["00","58","41"],84:["00","59","37"],83:["01","00","34"],82:["01","01","32"],81:["01","02","33"],80:["01","03","35"],79:["01","04","38"],78:["01","05","44"],77:["01","06","52"],76:["01","08","01"],75:["01","09","12"],74:["01","10","26"],73:["01","11","42"],72:["01","13","01"],71:["01","14","22"],70:["01","15","45"],69:["01","17","11"],68:["01","18","40"],67:["01","20","13"],66:["01","21","48"],65:["01","23","26"],64:["01","25","08"],63:["01","26","54"],62:["01","28","44"],61:["01","30","37"],60:["01","32","35"],59:["01","34","38"],58:["01","36","45"],57:["01","38","58"],56:["01","41","15"],55:["01","43","39"],54:["01","46","08"],53:["01","48","45"],52:["01","51","28"],51:["01","54","18"],50:["01","57","16"],49:["02","00","23"],48:["02","03","38"],47:["02","07","04"],46:["02","10","39"],45:["02","14","25"],44:["02","18","24"],43:["02","22","45"],42:["02","27","01"],41:["02","31","30"],40:["02","36","49"],39:["02","42","00"],38:["02","47","34"],37:["02","52","41"],36:["02","57","58"],35:["03","04","01"],34:["03","10","07"],33:["03","16","15"],32:["03","22","26"],31:["03","28","42"],min:["03","35","38"]},42000:{max:["02","03","17"],84:["02","05","18"],83:["02","07","23"],82:["02","09","31"],81:["02","11","43"],80:["02","13","59"],79:["02","16","20"],78:["02","18","44"],77:["02","21","13"],76:["02","23","46"],75:["02","26","24"],74:["02","29","07"],73:["02","31","56"],72:["02","34","50"],71:["02","37","50"],70:["02","40","56"],69:["02","44","09"],68:["02","47","29"],67:["02","50","55"],66:["02","54","30"],65:["02","58","12"],64:["03","02","02"],63:["03","06","01"],62:["03","10","10"],61:["03","14","29"],60:["03","18","58"],59:["03","23","38"],58:["03","28","30"],57:["03","33","35"],56:["03","38","53"],55:["03","44","25"],54:["03","50","13"],53:["03","56","17"],52:["04","02","39"],51:["04","09","19"],50:["04","16","20"],49:["04","23","42"],48:["04","31","27"],47:["04","39","38"],46:["04","48","16"],45:["04","57","25"],44:["05","07","04"],43:["05","17","20"],42:["05","28","14"],41:["05","39","51"],40:["05","52","13"],39:["06","05","27"],38:["06","19","38"],37:["06","34","51"],36:["06","51","14"],35:["07","07","36"],34:["07","23","58"],33:["07","40","27"],32:["07","57","05"],31:["08","14","43"],min:["08","39","45"]}},nVo2max=Math.round(3.5*parseFloat(pVma));return nVo2max>=85?nVo2max="max":nVo2max<=30&&(nVo2max="min"),equivalence[pDistance+""][nVo2max+""]},widg.getResult=function(pWidget){var data={},result=[];switch($.each(pWidget.find(".js-widget-form").serializeArray(),function(){data[this.name]=this.value.replace(",",".")}),pWidget.data("type")){case"imc":switch(result.push(Math.round(parseFloat(data.weight)/Math.pow(parseInt(data.size)/100,2)*10)/10),!0){case result[0]>40:result.push('<span style="color:#d64341;">obésité morbide</span>');break;case result[0]>34:result.push('<span style="color:#d64341;">obésité sévère</span>');break;case result[0]>29:result.push('<span style="color:#d96d31;">obésité modérée</span>');break;case result[0]>24:result.push('<span style="color:#fba208;">surpoids</span>');break;case result[0]>18.4:result.push('<span style="color:#37b33a;">corpulence normale</span>');break;case result[0]>16.4:result.push('<span style="color:#fba208;">maigreur</span>');break;default:result.push('<span style="color:#d64341;">dénutrition</span>')}break;case"poids_ideal":switch(data.gender){case"woman":result.push((Math.round(10*(parseInt(data.size)-100-(parseInt(data.size)-150)/2.5))/10).toFixed(1)+'<span class="unit">kg</span>');break;case"man":result.push((Math.round(10*(parseInt(data.size)-100-(parseInt(data.size)-150)/4))/10).toFixed(1)+'<span class="unit">kg</span>')}break;case"vma_vo2max":var nValueVma,nFullTime=60*parseInt(data.hour)*60+60*parseInt(data.minute)+parseInt(data.second);switch(!0){case nFullTime<60:nValueVma=110;break;case nFullTime<240:nValueVma=105;break;case nFullTime<420:nValueVma=100;break;case nFullTime<600:nValueVma=95;break;case nFullTime<1860:nValueVma=93;break;case nFullTime<2760:nValueVma=87;break;case nFullTime<3660:nValueVma=85;break;case nFullTime<5460:nValueVma=82;break;case nFullTime<7260:nValueVma=80;break;case nFullTime<9060:nValueVma=78;break;case nFullTime<10860:nValueVma=76;break;case nFullTime<12660:nValueVma=75;break;default:nValueVma=70}var nVMA=(Math.round(parseFloat(data.distance)/(parseInt(data.hour)+parseInt(data.minute)/60+parseInt(data.second)/3600)*100/nValueVma*10)/10).toFixed(1);result.push(nVMA+'<span class="unit">km/h</span>'),result.push(Math.round(3.5*nVMA)+'<span class="unit">ml/kg/min</span>');var aDistances=["3000","5000","10000","15000","20000","21000","42000"];$.each(aDistances,function(index,value){aEstimations=widg.estimationTemps(nVMA,value),result.push(aEstimations[0]+'<span class="unit">h</span>'+aEstimations[1]+'<span class="unit">m</span>'+aEstimations[2]+'<span class="unit">s</span>')});var aShortDurations=["15","30","45","60","90","180"];$.each(aShortDurations,function(index,value){result.push(nVMA)});var aShortDistances=["100","200","300","400","500","600","800","1000"];$.each(aShortDistances,function(index,value){result.push(nVMA)});break;case"pma":result.push((Math.round((parseFloat(data.vo2max)*(parseFloat(data.weight)/1e3)-.435)/.01141*10)/10).toFixed(1)+'<span class="unit">watts</span>');break;case"depense_activite":result.push((Math.round(parseFloat(data.activity)*parseFloat(data.weight)*(parseInt(data.duration)/60)*10)/10).toFixed(1)+'<span class="unit">kcal</span>');break;case"besoins_energetiques":result.push(Math.round(parseFloat(data.gender)*Math.pow(parseFloat(data.weight),.48)*Math.pow(parseFloat(data.size)/100,.5)*Math.pow(parseFloat(data.age),-.13)*(1e3/4.1855)*parseFloat(data.activity))+'<span class="unit">kcal</span>');break;case"estimation_temps":var aRelArray=widg.estimationTemps(data.vma,data.distance);result.push(aRelArray[0]+'<span class="unit">h</span>'+aRelArray[1]+'<span class="unit">m</span>'+aRelArray[2]+'<span class="unit">s</span>');break;case"vitesse_allure":var vma=(Math.round(parseFloat(data.distance)/(parseInt(data.hour)+parseInt(data.minute)/60+parseInt(data.second)/3600)*10)/10).toFixed(1),full=(Math.round((60*parseInt(data.hour)+parseInt(data.minute)+parseInt(data.second)/60)/parseFloat(data.distance)*100)/100).toFixed(2),nMinutes=Math.floor(full),nSeconds=Math.round(full%1*60);result.push(vma+'<span class="unit">km/h</span>'),nMinutes<10&&(nMinutes="0"+nMinutes),nSeconds<10&&(nSeconds="0"+nSeconds),result.push(nMinutes+'<span class="unit">min</span>'+nSeconds+'<span class="unit">sec</span>');var aDistances=[1,2,3,4,5,6,7,8,9,10,15,20,21,25,30,35,40,42];$.each(aDistances,function(index,value){if(value<=parseFloat(data.distance)){var nCalcul=full*value,nHours=0,nMinutes=Math.floor(nCalcul),nSeconds=Math.round(nCalcul%1*60);nMinutes>59&&(nHours=Math.floor(nMinutes/60),nMinutes-=60*nHours),nHours<10&&(nHours="0"+nHours),nMinutes<10&&(nMinutes="0"+nMinutes),nSeconds<10&&(nSeconds="0"+nSeconds),result.push(nHours+'<span class="unit">h</span>'+nMinutes+'<span class="unit">m</span>'+nSeconds+'<span class="unit">s</span>')}else result.push("-")});break;case"charge":var nCharge=(Math.round((.0333*data.repetition+1)*data.charge*10)/10).toFixed(1);result.push(nCharge+'<span class="unit">kg</span>'),result.push((Math.round(96.9*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(93.1*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(89.8*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(87.4*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(85.8*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(82.9*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(80.4*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(78.6*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(76.2*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(70*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(65*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(60*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(55*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(50*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(40*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>'),result.push((Math.round(30*nCharge/100*10)/10).toFixed(1)+'<span class="unit">kg</span>');break;case"puissance_velo":result.push(Math.round(1.025*(.27*parseFloat(data.position)*Math.pow(parseFloat(data.distance)/(parseInt(data.hour)+parseInt(data.minute)/60+parseInt(data.second)/3600)/3.6,3)+parseFloat(data.type)*(parseFloat(data.weight)+parseFloat(data.weight_bike))*9.81*(parseFloat(data.distance)/(parseInt(data.hour)+parseInt(data.minute)/60+parseInt(data.second)/3600)/3.6)+parseFloat(data.distance)/(parseInt(data.hour)+parseInt(data.minute)/60+parseInt(data.second)/3600)/3.6*(parseFloat(data.weight)+parseFloat(data.weight_bike))*9.81*(parseFloat(data.pente)/100)))+'<span class="unit">watts</span>')}$.each(result,function(index,value){var jItem=pWidget.find(".js-widget-result-"+(index+1));jItem.is("select")?jItem.data("result",result[index]).trigger("change"):(jItem.html(result[index]),"-"==result[index]&&jItem.addClass("align-left"))}),widg.showResult(pWidget)},widg.selectVmaFractionneDuration=function(){$(".js-widget").on("change",".js-widget-select-fractionne-duration",function(e){var jSelect=$(this),nCalcul=Math.round(parseFloat(jSelect.data("result"))*parseInt(jSelect.val())/100*1e3*parseInt(jSelect.data("duration"))/3600);jSelect.siblings(".value").html(nCalcul+'<span class="unit">mètres</span>')})},widg.selectVmaFractionneDistance=function(){$(".js-widget").on("change",".js-widget-select-fractionne-distance",function(e){var jSelect=$(this),nCalcul=Math.round(3600*parseInt(jSelect.data("distance"))/(parseInt(jSelect.val())*parseFloat(jSelect.data("result"))/100*1e3)),nMinutes=Math.floor(nCalcul/60),nSeconds=nCalcul-60*nMinutes;nMinutes<10&&(nMinutes="0"+nMinutes),nSeconds<10&&(nSeconds="0"+nSeconds),jSelect.siblings(".value").html(nMinutes+'<span class="unit">m</span>'+nSeconds+'<span class="unit">s</span>')})},widg.btGetResult=function(){$(".js-widget").on("click",".js-widget-submit",function(e){var jBt=$(this);e.preventDefault(),jBt.closest("form").hasClass("valid-form")&&widg.getResult(jBt.closest(".js-widget"))})},widg.restart=function(pWidget){var jForm=pWidget.find("form").removeClass("error-form valid-form");jForm.find("[type=text].required, [type=radio].required, select.required").each(function(){var jItem=$(this).removeClass("error-field valid-field is-tested align-left");return jItem.siblings(".error-msg").remove(),jItem.is("[type=text]")?void jItem.val(""):jItem.is("[type=radio]")?void jItem.prop("checked",!1):jItem.is("select")?void jItem.val("").addClass("empty"):void 0}),jForm.find("[class*=js-widget-result]").not("select").each(function(){var jItem=$(this);jItem.html(jItem.data("html"))}),jForm.find("select[class*=js-widget-result]").each(function(){var jItem=$(this);jItem.find("option.orig").prop("selected",!0),jItem.siblings(".value").html(jItem.data("html"))}),jForm.find("[type=submit]").addClass("disabled"),widg.hideResult(pWidget)},widg.btRestart=function(){$(".js-widget").on("click",".js-widget-restart",function(e){$(this);e.preventDefault(),widg.restart($(this).closest(".js-widget"))})},widg.init=function(){widg.select(),widg.selectVmaFractionneDuration(),widg.selectVmaFractionneDistance(),widg.btGetResult(),widg.btRestart(),widg.validate.initForm($(".js-widget-form"))},widg.init()});
//# sourceMappingURL=widget.js.map
