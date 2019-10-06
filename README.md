# TD Survey (English)

## Setup
1. You must completed the installation of TD-JS-SDK.
2. Place `td-survey.js` to your website, and load the file like `<script src="td-survey.js"></script>` in your form page which you want to use for survey.
3. Add the following few lines of JavaScript into the form page. The code is adding an Event Listener to the submit button.

```html
<script>
document.getElementById('form_button').addEventListener('click', function(){
  tdSurvey.submitResult('Simple Form', document.getElementById('simple_form'));
}, false);
</script>
```

TD Survey transmit values of the form to TreasureData by calling `trackEvent` method. The data is available in `survey_result` column in the specified table.
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
  tdSurvey.submitResult('Simple Form', document.getElementById('simple_form'));
}, false);
</script>
```

TD Survey はフォームの値を `trackEvent` メソッドを呼び出すことで送信しています。データは指定したテーブルのカラム `survey_result` で利用可能です。
この仕組みはセキュリティ的には優れていないため、個人情報やセンシティブな情報をこのコードで送信しないでください。


## 謝辞

このライブラリは [Atlas Tracking JS](https://github.com/Nikkei/atlas-tracking-js/) 下の [Atlas Quick Survey](https://github.com/Nikkei/atlas-tracking-js/blob/master/plugins/QuickSurvey/aqs.js) からフォークしました。コードをMITライセンスの基公開してくださる日経に感謝します。
