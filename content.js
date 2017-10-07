var replace_texts = document.getElementsByClassName('checkout-welcome _text');
alert("Reminder for ShopBack users");
for (var i = 0, l = replace_texts.length; i < l; i++) {
  replace_texts[i].innerHTML = replace_texts[i].innerHTML + '<strong>AND</strong> remember to click through <span style="color:red">SHOPBACK</span> to get CashBack!';
}
