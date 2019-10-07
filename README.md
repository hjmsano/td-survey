# TD Survey (English)

## Setup
1. You must completed the installation of TD-JS-SDK.
2. Place `td-survey.js` to your website, and load the file like `<script src="td-survey.js"></script>` in your form page which you want to use for survey.
3. Add the following few lines of JavaScript into the form page. The code is adding an Event Listener to the submit button.

```html
<script>
document.getElementById('form_button').addEventListener('click', function(){
  tdSurvey.submitResult('survey', 'Simple Form', document.getElementById('simple_form'), false);
}, false);
</script>
```

### Reference
To send the field values to TD, call `tdSurvey.submitResult()` method.
There are four parameters.

```
tdSurvey.submitResult(tableName, surveyName, formElement, useExtensionStyle)
```

|parameter|example|description|
|:----|:----|:----|
|`tableName`|`survey`|A table name to store the result into. the result can be complicated structure so you should separate the survey data and access logs. it depends on your analytics strategy.|
|`surveyName`|`net promoter score`|A name of survey. You will use this value when you filter the result into the specific survey.|
|`formElement`|`document.getElementById('nps_form')`|An element which contains the survey form.|
|`useExtensionStyle`|`false`|If you are using TD-JS-SDK-Extension and want to record the result as an access log, set `ture`. With `false`, each field has a dedicated column. With `false`, the result is stored in `survey_result` column as JSON text.|

TD Survey transmit values of the form to TreasureData by calling `trackEvent` method.
This mechanism is not good at security so do not send PII or any sensitive information by this code.

## Special Thanks

This library is forked from [Atlas Quick Survey](https://github.com/Nikkei/atlas-tracking-js/blob/master/plugins/QuickSurvey/aqs.js) under [Atlas Tracking JS](https://github.com/Nikkei/atlas-tracking-js/). Thank you Nikkei for publishing the code under MIT license.


# TD Survey (日本語)

## セットアップ
1. TD-JS-SDKの導入が完了していること。
2. `td-survey.js` をウェブサイトに設置し、 `<script src="td-survey.js"></script>` のようにファイルをサーベイを実施したいフォームページで読み込む。
3. 以下の数行のJavaScriptをフォームページに追加する。このコードはイベントリスナーを送信ボタンに追加している。

```html
<script>
document.getElementById('form_button').addEventListener('click', function(){
  tdSurvey.submitResult('survey', 'Simple Form', document.getElementById('simple_form'), false);
}, false);
</script>
```

### Reference
各項目の値をTDに送信するために、 `tdSurvey.submitResult()` メソッドを呼びます。
4つの引数があります。

```
tdSurvey.submitResult(tableName, surveyName, formElement, useExtensionStyle)
```

|引数|例|説明|
|:----|:----|:----|
|`tableName`|`survey`|結果を格納するテーブル名。結果は複雑な構造になり得るので、アクセスログとサーベイのデータは分離させるべきです。分析戦略によります。|
|`surveyName`|`net promoter score`|サーベイの名前。この値は結果を特定のサーベイにフィルターする場合に利用します。|
|`formElement`|`document.getElementById('nps_form')`|サーベイのフォームを含む要素。|
|`useExtensionStyle`|`false`|もし TD-JS-SDK-Extension を利用していて、結果をアクセスログとして記録したい場合に `true` をセットします。 `false` の場合、各項目は専用のカラムを持ちます。 `false` の場合、結果は `survey_result` カラムにJSON文字列として記録されます。|

TD Survey はフォームの値を `trackEvent` メソッドを呼び出すことで送信しています。データは指定したテーブルのカラム `survey_result` で利用可能です。
この仕組みはセキュリティ的には優れていないため、個人情報やセンシティブな情報をこのコードで送信しないでください。


## 謝辞

このライブラリは [Atlas Tracking JS](https://github.com/Nikkei/atlas-tracking-js/) 下の [Atlas Quick Survey](https://github.com/Nikkei/atlas-tracking-js/blob/master/plugins/QuickSurvey/aqs.js) からフォークしました。コードをMITライセンスの基公開してくださる日経に感謝します。
