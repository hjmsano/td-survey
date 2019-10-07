var tdSurvey = {
    buildResult: function (name, elm, useExtensionStyle = false) {
        inputTags = elm.getElementsByTagName('input');
        optionTags = elm.getElementsByTagName('option');
        textAreas = elm.getElementsByTagName('textarea');
        resultObj = {};
        if (inputTags.length > 0) {
            for (var i = 0; i < inputTags.length; i++) {
                var key = inputTags[i].name;
                var val = inputTags[i].value;
                if (inputTags[i].type === 'radio' || inputTags[i].type === 'checkbox') {
                    if (inputTags[i].checked) {
                        if (!resultObj[key]) {
                            resultObj[key] = {};
                        }
                        resultObj[key][val] = true;
                    }
                } else if (inputTags[i].type === 'text' || inputTags[i].type === 'date') {
                    if (val.length > 0) {
                        resultObj[key] = val;
                    }
                }
            }
        }
        if (optionTags.length > 0) {
            for (var i = 0; i < optionTags.length; i++) {
                var key = optionTags[i].parentNode.name;
                var val = optionTags[i].value;
                if (optionTags[i].selected) {
                    resultObj[key] = val;
                }
            }
        }
        if (textAreas.length > 0) {
            for (var i = 0; i < textAreas.length; i++) {
                var key = textAreas[i].name;
                var val = textAreas[i].value;
                if (val.length > 0) {
                    resultObj[key] = val;
                }
            }
        }
        if(useExtensionStyle){
            return {
                action: 'answer',
                category: 'survey',
                survey_name: name,
                survey_result: JSON.stringify(resultObj)
            };
        }else{
            resultObj['survey_name'] = name;
            return resultObj;
        }
    },
    submitResult: function (table, name, elm, useExtensionStyle) {
        var result = this.buildResult(name, elm, useExtensionStyle);
        td.trackEvent(table, result);
    }
};
